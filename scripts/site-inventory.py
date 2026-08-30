from pathlib import Path
import re
import html

ROOT = Path(__file__).resolve().parent.parent


def clean_text(value):
    value = re.sub(r"<[^>]+>", " ", value)
    value = html.unescape(value)
    return " ".join(value.split())


def extract(pattern, text):
    match = re.search(pattern, text, re.IGNORECASE | re.DOTALL)
    if match:
        return clean_text(match.group(1))
    return ""


def analyze_file(path):
    try:
        text = path.read_text(encoding="cp1252", errors="replace")
    except PermissionError:
        print(f"SKIPPED — permission denied: {path.name}")
        return None

    title = extract(r"<title[^>]*>(.*?)</title>", text)

    description = extract(
        r'<meta[^>]+name=["\']description["\'][^>]+content=["\'](.*?)["\']',
        text
    )

    if not description:
        description = extract(
            r'<meta[^>]+content=["\'](.*?)["\'][^>]+name=["\']description["\']',
            text
        )

    h1s = re.findall(
        r"<h1[^>]*>(.*?)</h1>",
        text,
        re.IGNORECASE | re.DOTALL
    )

    h2s = re.findall(
        r"<h2[^>]*>(.*?)</h2>",
        text,
        re.IGNORECASE | re.DOTALL
    )

    canonical = extract(
        r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\'](.*?)["\']',
        text
    )

    if not canonical:
        canonical = extract(
            r'<link[^>]+href=["\'](.*?)["\'][^>]+rel=["\']canonical["\']',
            text
        )

    body = extract(r"<body[^>]*>(.*?)</body>", text)

    words = re.findall(r"\b[\w'-]+\b", clean_text(body))

    internal_links = re.findall(
        r'<a[^>]+href=["\']([^"\']+)["\']',
        text,
        re.IGNORECASE
    )

    internal_links = [
        link for link in internal_links
        if not link.startswith(("http://", "https://", "mailto:", "#"))
    ]

    schema_count = len(
        re.findall(
            r'<script[^>]+type=["\']application/ld\+json["\']',
            text,
            re.IGNORECASE
        )
    )

    return {
        "file": path.name,
        "title": title,
        "description": description,
        "h1": " | ".join(clean_text(x) for x in h1s),
        "h1_count": len(h1s),
        "h2_count": len(h2s),
        "word_count": len(words),
        "canonical": canonical,
        "internal_links": len(internal_links),
        "schema": schema_count
    }


def main():
    pages = sorted(
        ROOT.glob("*.html"),
        key=lambda p: p.name.lower()
    )

    print()
    print("=" * 110)
    print("UMBRELLA SITE INVENTORY")
    print("=" * 110)
    print()

    print(
        f"{'FILE':40} "
        f"{'WORDS':>7} "
        f"{'H1':>3} "
        f"{'H2':>3} "
        f"{'LINKS':>6} "
        f"{'SCHEMA':>6} "
        f"{'CANONICAL':>10}"
    )

    print("-" * 110)

    results = []

    for page in pages:
        result = analyze_file(page)

        if result is None:
            continue

        results.append(result)

        canonical_status = "YES" if result["canonical"] else "NO"

        print(
            f"{result['file'][:40]:40} "
            f"{result['word_count']:7} "
            f"{result['h1_count']:3} "
            f"{result['h2_count']:3} "
            f"{result['internal_links']:6} "
            f"{result['schema']:6} "
            f"{canonical_status:>10}"
        )

    print()
    print("=" * 110)
    print(f"HTML FILES FOUND: {len(results)}")
    print("=" * 110)

    print()
    print("PAGES WITH NO CANONICAL:")
    for result in results:
        if not result["canonical"]:
            print(f"  - {result['file']}")

    print()
    print("PAGES WITH NO H1:")
    for result in results:
        if result["h1_count"] == 0:
            print(f"  - {result['file']}")

    print()
    print("PAGES WITH MULTIPLE H1s:")
    for result in results:
        if result["h1_count"] > 1:
            print(f"  - {result['file']} ({result['h1_count']})")

    print()
    print("LOW-CONTENT PAGES (<500 WORDS):")
    for result in results:
        if result["word_count"] < 500:
            print(f"  - {result['file']} ({result['word_count']} words)")

    print()
    print("PAGES WITH NO STRUCTURED DATA:")
    for result in results:
        if result["schema"] == 0:
            print(f"  - {result['file']}")

    print()


if __name__ == "__main__":
    main()