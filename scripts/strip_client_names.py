"""Remove client/company names from site JSON data."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIRS = [ROOT / "docs" / "data", ROOT / "data", ROOT / "frontend" / "data"]

UK_REPLACEMENTS = [
    (r"FinTech Ukraine обробляла", "Клієнт обробляв"),
    (r"Retail Group масштабувала", "Клієнт масштабував"),
    (r"NovaBank випускала", "Банк випускав"),
    (r"IndustrialTech контролювала", "Виробник контролював"),
    (r"LogiTrans EU —", "У логістичному кол-центрі —"),
    (r"SecureInsurance —", "У страховій компанії —"),
    (r"GeoInsight EU аналізувала", "Клієнт аналізував"),
    (r"MediCore —", "У медзакладі —"),
    (r"FreshMarket —", "У retail-мережі —"),
    (r"EduSmart —", "В онлайн-школі —"),
    (r"ClearPay —", "На payment-платформі —"),
    (r"LegalTech Pro —", "У legal-tech продукті —"),
]

EN_REPLACEMENTS = [
    (r"FinTech Ukraine handled", "The client handled"),
    (r"Retail Group scaled", "The client scaled"),
    (r"NovaBank released", "The bank released"),
    (r"IndustrialTech relied", "The manufacturer relied"),
    (r"LogiTrans EU —", "In the logistics call center —"),
    (r"SecureInsurance —", "At the insurance company —"),
    (r"GeoInsight EU analyzed", "The client analyzed"),
    (r"MediCore —", "At the healthcare provider —"),
    (r"FreshMarket —", "In the retail chain —"),
    (r"EduSmart —", "In the online school —"),
    (r"ClearPay —", "On the payment platform —"),
    (r"LegalTech Pro —", "In the legal-tech product —"),
]

CLIENT_NAMES = re.compile(
    r"\b(?:FinTech Ukraine|Retail Group|NovaBank|IndustrialTech|LogiTrans EU|"
    r"SecureInsurance|GeoInsight EU|MediCore|FreshMarket|EduSmart|ClearPay|LegalTech Pro|PayStream)\b",
    re.I,
)


def scrub_text(text: str, lang: str) -> str:
    if not text:
        return text
    reps = UK_REPLACEMENTS if lang == "uk" else EN_REPLACEMENTS
    for pattern, repl in reps:
        text = re.sub(pattern, repl, text)
    return CLIENT_NAMES.sub("", text).replace("  ", " ").strip()


def process_file(path: Path) -> None:
    lang = path.stem
    data = json.loads(path.read_text(encoding="utf-8"))

    for project in data.get("projects", []):
        project["client"] = ""
        for field in ("description", "details"):
            if field in project:
                project[field] = scrub_text(project[field], lang)

    for item in data.get("testimonials", []):
        item["company"] = ""
        if "text" in item:
            item["text"] = scrub_text(item["text"], lang)

    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"OK {path.relative_to(ROOT)}")


def main() -> None:
    for data_dir in DATA_DIRS:
        if not data_dir.exists():
            continue
        for name in ("uk.json", "en.json"):
            process_file(data_dir / name)


if __name__ == "__main__":
    main()
