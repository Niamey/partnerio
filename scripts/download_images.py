"""Download robot/AI themed site images into docs/images."""
import shutil
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS_IMG = ROOT / "docs" / "images"
FRONTEND_IMG = ROOT / "frontend" / "images"

# Robot & high-tech themed (Unsplash)
FILES = {
    "ai/hero.jpg": "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&q=85&auto=format&fit=crop",
    "ai/robot-hero-accent.jpg": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=85&auto=format&fit=crop",
    "ai/about-ai.jpg": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=85&auto=format&fit=crop",
    "ai/about-main.jpg": "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=900&q=85&auto=format&fit=crop",
    "ai/about-data.jpg": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=85&auto=format&fit=crop",
    "ai/gallery-llm.jpg": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=85&auto=format&fit=crop",
    "ai/gallery-cv.jpg": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=85&auto=format&fit=crop",
    "ai/gallery-voice.jpg": "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=85&auto=format&fit=crop",
    "ai/gallery-mlops.jpg": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=85&auto=format&fit=crop",
    "anton-fil.png": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80&auto=format&fit=crop",
    "olga-kornieva.png": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80&auto=format&fit=crop",
    "reviews/ihor-petrenko.jpg": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
    "reviews/olena-sydorenko.jpg": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
    "reviews/viktor-lysenko.jpg": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
    "projects/p5.png": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop",
    "projects/p6.png": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop",
}


def download(url: str, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    req = urllib.request.Request(url, headers={"User-Agent": "PartnerioSiteSetup/1.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        dest.write_bytes(resp.read())
    print(f"  OK {dest.relative_to(ROOT)}")


def main() -> None:
    for rel, url in FILES.items():
        dest = DOCS_IMG / rel
        try:
            download(url, dest)
        except Exception as exc:
            print(f"  FAIL {rel}: {exc}")

    ROOT_IMG = ROOT / "images"
    FRONTEND_IMG.mkdir(parents=True, exist_ok=True)
    ROOT_IMG.mkdir(parents=True, exist_ok=True)
    if DOCS_IMG.exists():
        shutil.copytree(DOCS_IMG, FRONTEND_IMG, dirs_exist_ok=True)
        shutil.copytree(DOCS_IMG, ROOT_IMG, dirs_exist_ok=True)
    print("Robot/AI images synced")


if __name__ == "__main__":
    main()
