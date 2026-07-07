"""Report duplicate image paths used across static HTML + JSON content."""
import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "docs"
html = (ROOT / "index.html").read_text(encoding="utf-8")
data = json.loads((ROOT / "data" / "uk.json").read_text(encoding="utf-8"))

paths: list[str] = []
for match in re.findall(r'src="([^"]+)"', html):
    if "images/" in match:
        paths.append(match.split("?")[0])

for project in data["projects"]:
    paths.append(project["image"])
for member in data["team"]:
    paths.append(member["image"])
for item in data["testimonials"]:
    paths.append(item["image"])

norm = [p.split("?")[0] for p in paths]
counts = Counter(norm)
dups = {k: v for k, v in counts.items() if v > 1}
print(f"Total refs: {len(norm)}, unique: {len(counts)}")
if dups:
    print("DUPLICATES:")
    for path, count in sorted(dups.items()):
        print(f"  {count}x {path}")
    raise SystemExit(1)
print("OK — no duplicate image paths")
