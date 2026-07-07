"""Assign unique image paths in docs/data JSON (no duplicates across site)."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "docs" / "data"

PROJECT_IMAGES = {
    "p1": "images/projects/p1.jpg",
    "p2": "images/projects/p2.jpg",
    "p3": "images/projects/p3.jpg",
    "p4": "images/projects/p4.jpg",
    "p5": "images/projects/p5.jpg",
    "p6": "images/projects/p6.jpg",
    "p7": "images/projects/p7.jpg",
    "p8": "images/projects/p8.jpg",
    "p9": "images/projects/p9.jpg",
    "p11": "images/projects/p11.jpg",
    "p12": "images/projects/p12.jpg",
    "p13": "images/projects/p13.jpg",
}

TEAM_IMAGES = {
    "t3": "images/team/sergiy-mazur.jpg",
    "t4": "images/team/kateryna-levchenko.jpg",
}

TESTIMONIAL_IMAGES = {
    "r4": "images/reviews/marina-kovalenko.jpg",
}


def patch_file(path: Path) -> None:
    data = json.loads(path.read_text(encoding="utf-8"))
    for project in data.get("projects", []):
        pid = project.get("id")
        if pid in PROJECT_IMAGES:
            project["image"] = PROJECT_IMAGES[pid]
    for member in data.get("team", []):
        tid = member.get("id")
        if tid in TEAM_IMAGES:
            member["image"] = TEAM_IMAGES[tid]
    for item in data.get("testimonials", []):
        rid = item.get("id")
        if rid in TESTIMONIAL_IMAGES:
            item["image"] = TESTIMONIAL_IMAGES[rid]
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Patched {path.name}")


def main() -> None:
    for name in ("uk.json", "en.json"):
        patch_file(DATA / name)


if __name__ == "__main__":
    main()
