"""
Partnerio — сервер на стандартній бібліотеці Python (без зовнішніх залежностей).
Запуск: python server.py
"""
from __future__ import annotations

import json
import mimetypes
import re
import sqlite3
import sys
from datetime import datetime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

from content import get_content, get_message, normalize_lang

BASE_DIR = Path(__file__).resolve().parent
FRONTEND_DIR = BASE_DIR.parent / "frontend"
DATA_DIR = BASE_DIR / "data"
DB_PATH = DATA_DIR / "partnerio.db"

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def init_db() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS contact_requests (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT,
                service TEXT,
                message TEXT NOT NULL,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        conn.commit()


def save_contact(data: dict) -> int:
    with sqlite3.connect(DB_PATH) as conn:
        cursor = conn.execute(
            """
            INSERT INTO contact_requests (name, email, phone, service, message, created_at)
            VALUES (?, ?, ?, ?, ?, ?)
            """,
            (
                data["name"],
                data["email"],
                data.get("phone"),
                data.get("service"),
                data["message"],
                datetime.now().isoformat(),
            ),
        )
        conn.commit()
        return cursor.lastrowid


class PartnerioHandler(BaseHTTPRequestHandler):
    def log_message(self, format: str, *args) -> None:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] {args[0]}")

    def _send_json(self, data: object, status: int = 200) -> None:
        body = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def _send_error_json(self, message: str, status: int = 400) -> None:
        self._send_json({"success": False, "message": message}, status)

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        path = parsed.path
        lang = normalize_lang(parse_qs(parsed.query).get("lang", ["uk"])[0])

        api_routes = {
            "/api/services": get_content(lang, "services"),
            "/api/projects": get_content(lang, "projects"),
            "/api/team": get_content(lang, "team"),
            "/api/testimonials": get_content(lang, "testimonials"),
            "/api/stats": get_content(lang, "stats"),
            "/health": {"status": "ok", "app": "Partnerio"},
        }

        if path in api_routes:
            self._send_json(api_routes[path])
            return

        self._serve_static(path)

    def do_POST(self) -> None:
        path = urlparse(self.path).path
        if path != "/api/contact":
            self._send_error_json("Not found", 404)
            return

        length = int(self.headers.get("Content-Length", 0))
        try:
            body = self.rfile.read(length).decode("utf-8")
            data = json.loads(body) if body else {}
        except (json.JSONDecodeError, UnicodeDecodeError):
            lang = "uk"
            self._send_error_json(get_message(lang, "invalid_json"))
            return

        lang = normalize_lang(data.get("lang"))

        name = str(data.get("name", "")).strip()
        email = str(data.get("email", "")).strip()
        message = str(data.get("message", "")).strip()
        phone = str(data.get("phone", "")).strip() or None
        service = str(data.get("service", "")).strip() or None

        if len(name) < 2:
            self._send_error_json(get_message(lang, "name_short"))
            return
        if not EMAIL_RE.match(email):
            self._send_error_json(get_message(lang, "email_invalid"))
            return
        if len(message) < 10:
            self._send_error_json(get_message(lang, "message_short"))
            return

        try:
            row_id = save_contact({
                "name": name,
                "email": email,
                "phone": phone,
                "service": service,
                "message": message,
            })
            self._send_json({
                "success": True,
                "message": get_message(lang, "contact_success"),
                "id": row_id,
            })
        except sqlite3.Error:
            self._send_error_json(get_message(lang, "contact_error"), 500)

    def _serve_static(self, path: str) -> None:
        if path in ("/", ""):
            file_path = FRONTEND_DIR / "index.html"
        else:
            file_path = (FRONTEND_DIR / path.lstrip("/")).resolve()
            if not str(file_path).startswith(str(FRONTEND_DIR.resolve())):
                self.send_error(403)
                return
            if file_path.is_dir():
                file_path = file_path / "index.html"

        if not file_path.exists() or not file_path.is_file():
            file_path = FRONTEND_DIR / "index.html"
            if not file_path.exists():
                self.send_error(404)
                return

        content_type, _ = mimetypes.guess_type(str(file_path))
        content_type = content_type or "application/octet-stream"

        data = file_path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)


def main() -> None:
    init_db()
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server = ThreadingHTTPServer(("0.0.0.0", port), PartnerioHandler)
    print(f"Partnerio: http://localhost:{port}")
    print("Натисніть Ctrl+C для зупинки")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nСервер зупинено")
        server.server_close()


if __name__ == "__main__":
    main()
