"""Download AI/tech site images into docs/images."""
import shutil
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS_IMG = ROOT / "docs" / "images"
FRONTEND_IMG = ROOT / "frontend" / "images"

# Each URL used once across the site (hero, sections, projects, team, reviews).
FILES = {
    # Hero & section visuals (static HTML only)
    "ai/hero.jpg": "https://images.unsplash.com/photo-1769839271832-cfd7a1f6854f?w=1400&q=85&auto=format&fit=crop",
    "ai/hero-accent.jpg": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=85&auto=format&fit=crop",
    "ai/about-hero.jpg": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85&auto=format&fit=crop",
    "ai/about-ai.jpg": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=85&auto=format&fit=crop",
    "ai/about-main.jpg": "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=900&q=85&auto=format&fit=crop",
    "ai/about-data.jpg": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=85&auto=format&fit=crop",
    "ai/about-team.jpg": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85&auto=format&fit=crop",
    "ai/gallery-llm.jpg": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=85&auto=format&fit=crop",
    "ai/gallery-cv.jpg": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85&auto=format&fit=crop",
    "ai/gallery-voice.jpg": "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=85&auto=format&fit=crop",
    "ai/gallery-mlops.jpg": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=85&auto=format&fit=crop",
    # Project cards — unique per project
    "projects/p1.jpg": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=85&auto=format&fit=crop",
    "projects/p2.jpg": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=85&auto=format&fit=crop",
    "projects/p3.jpg": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=85&auto=format&fit=crop",
    "projects/p4.jpg": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=85&auto=format&fit=crop",
    "projects/p5.jpg": "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=85&auto=format&fit=crop",
    "projects/p6.jpg": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=85&auto=format&fit=crop",
    "projects/p7.jpg": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=85&auto=format&fit=crop",
    "projects/p8.jpg": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=85&auto=format&fit=crop",
    "projects/p9.jpg": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&auto=format&fit=crop",
    "projects/p11.jpg": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=85&auto=format&fit=crop",
    "projects/p12.jpg": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=85&auto=format&fit=crop",
    "projects/p13.jpg": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=85&auto=format&fit=crop",
    # Team & reviews — unique portraits
    # Team — uniform business portraits (3:4)
    "team/anton-fil.jpg": "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=667&fit=crop&crop=faces,center&q=85",
    "team/olga-kornieva.jpg": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=667&fit=crop&crop=faces,center&q=85",
    "team/sergiy-mazur.jpg": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=667&fit=crop&crop=faces,center&q=85",
    "team/kateryna-levchenko.jpg": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=667&fit=crop&crop=faces,center&q=85",
    "reviews/ihor-petrenko.jpg": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop",
    "reviews/olena-sydorenko.jpg": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
    "reviews/marina-kovalenko.jpg": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80&auto=format&fit=crop",
}

# Never overwrite generated team business portraits
SKIP_OVERWRITE = {
    "anton-fil.jpg",
    "olga-kornieva.jpg",
    "sergiy-mazur.jpg",
    "kateryna-levchenko.jpg",
    "anton-fil.png",
    "olga-kornieva.png",
    "olga-korneva.png",
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
        if dest.name in SKIP_OVERWRITE and dest.exists():
            print(f"  SKIP {rel} (protected)")
            continue
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
    print("AI/tech images synced")


if __name__ == "__main__":
    main()
