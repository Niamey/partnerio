"""Sync docs/ site bundle to root, frontend/, and data/."""
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

PAIRS = [
    ("index.html", "index.html"),
    ("index.html", "frontend/index.html"),
    ("js/i18n.js", "js/i18n.js"),
    ("js/i18n.js", "frontend/js/i18n.js"),
    ("js/main.js", "js/main.js"),
    ("js/main.js", "frontend/js/main.js"),
    ("css/style.css", "css/style.css"),
    ("css/style.css", "frontend/css/style.css"),
    ("data/uk.json", "data/uk.json"),
    ("data/uk.json", "frontend/data/uk.json"),
    ("data/en.json", "data/en.json"),
    ("data/en.json", "frontend/data/en.json"),
    ("robots.txt", "robots.txt"),
    ("robots.txt", "frontend/robots.txt"),
    ("sitemap.xml", "sitemap.xml"),
    ("sitemap.xml", "frontend/sitemap.xml"),
]


def sync_tree(src: Path, dest: Path) -> None:
    if src.is_dir():
        shutil.copytree(src, dest, dirs_exist_ok=True)
    elif src.is_file():
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dest)


def main() -> None:
    for src_rel, dest_rel in PAIRS:
        sync_tree(DOCS / src_rel, ROOT / dest_rel)
    if (DOCS / "images").exists():
        sync_tree(DOCS / "images", ROOT / "images")
        sync_tree(DOCS / "images", ROOT / "frontend" / "images")
    print("Synced docs -> root, frontend, data")


if __name__ == "__main__":
    main()
