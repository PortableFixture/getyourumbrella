import json
import html
import re
from pathlib import Path


# ============================================================
# UMBRELLA SITE GENERATOR
# ============================================================

ROOT = Path(__file__).resolve().parent.parent

DATA = ROOT / "content" / "pages.json"

# THE ACTUAL UMBRELLA HOMEPAGE IS THE MASTER TEMPLATE.
TEMPLATE = ROOT / "index.html"

SITE_URL = "https://getyourumbrella.com"


# ============================================================
# HELPERS
# ============================================================

def esc(value):
    """Safely escape text inserted into HTML."""
    return html.escape(str(value or ""), quote=True)


def build_page_content(page):
    """
    Builds the page-specific content while preserving the
    actual Umbrella site's existing design, header, CSS,
    JavaScript, footer, and navigation.
    """

    content = []

    # The page-specific H1 and introduction already live in the hero.
    # Do not repeat them here: every generated page must have exactly one H1.

    # --------------------------------------------------------
    # PAGE SECTIONS
    # --------------------------------------------------------

    for section in page.get("sections", []):

        content.append(f"""
<section class="section">
    <div class="container">

        <h2>{esc(section["heading"])}</h2>

        <p>
            {esc(section["text"])}
        </p>

    </div>
</section>
""")

    # --------------------------------------------------------
    # FAQ
    # --------------------------------------------------------

    questions = page.get("questions", [])

    if questions:

        faq_html = """
<section class="section">
    <div class="container">

        <h2>Frequently Asked Questions</h2>

        <div class="services">
"""

        for question in questions:

            faq_html += f"""
            <article>
                <h3>{esc(question["question"])}</h3>
                <p>{esc(question["answer"])}</p>
            </article>
"""

        faq_html += """
        </div>

    </div>
</section>
"""

        content.append(faq_html)

    # --------------------------------------------------------
    # RELATED SERVICES
    # --------------------------------------------------------

    related = page.get("related_pages", [])

    if related:

        related_html = """
<section class="section dark">
    <div class="container">

        <h2>Related Umbrella Services</h2>

        <div class="services">
"""

        for link in related:

            related_html += f"""
            <article>
                <h3>
                    <a href="{esc(link["url"])}">
                        {esc(link["title"])}
                    </a>
                </h3>
            </article>
"""

        related_html += """
        </div>

    </div>
</section>
"""

        content.append(related_html)

    return "\n".join(content)


# ============================================================
# SCHEMA
# ============================================================

def build_schema(page):

    slug = page["slug"]
    title = page["title"]
    description = page["description"]

    url = f"{SITE_URL}/{slug}.html"

    schemas = []

    # --------------------------------------------------------
    # LOCAL BUSINESS
    # --------------------------------------------------------

    local_business = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Umbrella Roofing & Construction",
        "url": SITE_URL,
        "telephone": "+1-901-300-0975",
        "email": "info@getyourumbrella.com",
        "description": description,
        "areaServed": [
            {"@type": "City", "name": "Memphis, Tennessee"},
            {"@type": "City", "name": "Bartlett, Tennessee"},
            {"@type": "Place", "name": "Cordova, Tennessee"},
            {"@type": "City", "name": "Arlington, Tennessee"},
            {"@type": "City", "name": "Southaven, Mississippi"},
            {"@type": "City", "name": "Olive Branch, Mississippi"},
            {"@type": "City", "name": "Horn Lake, Mississippi"}
        ]
    }

    schemas.append(local_business)

    # --------------------------------------------------------
    # BREADCRUMB
    # --------------------------------------------------------

    breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Umbrella Roofing & Construction",
                "item": SITE_URL
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": title,
                "item": url
            }
        ]
    }

    schemas.append(breadcrumb)

    # --------------------------------------------------------
    # FAQ
    # --------------------------------------------------------

    questions = page.get("questions", [])

    if questions:

        faq_schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": []
        }

        for question in questions:

            faq_schema["mainEntity"].append({
                "@type": "Question",
                "name": question["question"],
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": question["answer"]
                }
            })

        schemas.append(faq_schema)

    return "\n".join(
        '<script type="application/ld+json">'
        + json.dumps(schema, ensure_ascii=False)
        + "</script>"
        for schema in schemas
    )


# ============================================================
# META
# ============================================================

def replace_or_add_meta(template, pattern, replacement):

    if re.search(pattern, template, re.IGNORECASE):

        return re.sub(
            pattern,
            replacement,
            template,
            count=1,
            flags=re.IGNORECASE
        )

    return template.replace(
        "</head>",
        replacement + "\n</head>",
        1
    )


# ============================================================
# BUILD PAGE
# ============================================================

def build_page(page):

    # --------------------------------------------------------
    # USE THE ACTUAL INDEX.HTML
    # --------------------------------------------------------

    template = TEMPLATE.read_text(
        encoding="utf-8"
    )

    slug = page["slug"]
    title = page["title"]
    description = page["description"]

    url = f"{SITE_URL}/{slug}.html"

    # --------------------------------------------------------
    # TITLE
    # --------------------------------------------------------

    template = re.sub(
        r"<title>.*?</title>",
        f"<title>{esc(title)}</title>",
        template,
        count=1,
        flags=re.DOTALL | re.IGNORECASE
    )

    # --------------------------------------------------------
    # META DESCRIPTION
    # --------------------------------------------------------

    template = replace_or_add_meta(
        template,
        r'<meta\s+name=["\']description["\'][^>]*>',
        f'<meta name="description" content="{esc(description)}">'
    )

    # --------------------------------------------------------
    # CANONICAL
    # --------------------------------------------------------

    template = replace_or_add_meta(
        template,
        r'<link\s+rel=["\']canonical["\'][^>]*>',
        f'<link rel="canonical" href="{esc(url)}">'
    )

    # --------------------------------------------------------
    # OPEN GRAPH
    # --------------------------------------------------------

    template = replace_or_add_meta(
        template,
        r'<meta\s+property=["\']og:title["\'][^>]*>',
        f'<meta property="og:title" content="{esc(title)}">'
    )

    template = replace_or_add_meta(
        template,
        r'<meta\s+property=["\']og:description["\'][^>]*>',
        f'<meta property="og:description" content="{esc(description)}">'
    )

    template = replace_or_add_meta(
        template,
        r'<meta\s+property=["\']og:url["\'][^>]*>',
        f'<meta property="og:url" content="{esc(url)}">'
    )

    # --------------------------------------------------------
    # TWITTER
    # --------------------------------------------------------

    template = replace_or_add_meta(
        template,
        r'<meta\s+name=["\']twitter:title["\'][^>]*>',
        f'<meta name="twitter:title" content="{esc(title)}">'
    )

    template = replace_or_add_meta(
        template,
        r'<meta\s+name=["\']twitter:description["\'][^>]*>',
        f'<meta name="twitter:description" content="{esc(description)}">'
    )

    # --------------------------------------------------------
    # BUILD PAGE CONTENT
    # --------------------------------------------------------

    page_content = build_page_content(page)

    # --------------------------------------------------------
    # REPLACE THE HOMEPAGE BODY CONTENT BETWEEN HERO
    # AND CONTACT.
    #
    # We preserve:
    #
    # HEADER
    # CSS
    # GOOGLE TAG
    # CLARITY
    # COOKIEYES
    # HERO
    # FOOTER
    # JAVASCRIPT
    #
    # But replace the homepage-specific content with
    # the SEO page content.
    # --------------------------------------------------------

    hero_pattern = (
        r'<section\s+class=["\']hero["\'].*?</section>'
    )

    hero_match = re.search(
        hero_pattern,
        template,
        flags=re.DOTALL | re.IGNORECASE
    )

    if hero_match:

        hero = hero_match.group(0)

        # Replace only the hero title and description.
        hero = re.sub(
            r"<h1>.*?</h1>",
            f"<h1>{esc(page['h1'])}</h1>",
            hero,
            count=1,
            flags=re.DOTALL | re.IGNORECASE
        )

        hero = re.sub(
            r"<h2>.*?</h2>",
            "<h2>Protection Built Into Every Project.</h2>",
            hero,
            count=1,
            flags=re.DOTALL | re.IGNORECASE
        )

        hero = re.sub(
            r"<p>.*?</p>",
            f"<p>{esc(page['intro'])}</p>",
            hero,
            count=1,
            flags=re.DOTALL | re.IGNORECASE
        )

        template = (
            template[:hero_match.start()]
            + hero
            + template[hero_match.end():]
        )

    # --------------------------------------------------------
    # REPLACE HOMEPAGE CONTENT BETWEEN HERO AND CONTACT
    # --------------------------------------------------------

    contact_pattern = (
        r'<section\s+id=["\']contact["\'].*?</section>'
    )

    contact_match = re.search(
        contact_pattern,
        template,
        flags=re.DOTALL | re.IGNORECASE
    )

    # Re-find the hero because its contents were replaced above.
    hero_match = re.search(
        hero_pattern,
        template,
        flags=re.DOTALL | re.IGNORECASE
    )

    if hero_match and contact_match and hero_match.end() < contact_match.start():

        # Keep the complete known-good shell: head, header, hero,
        # contact section, footer, and JavaScript. Replace only the
        # homepage-specific sections between the hero and contact.

        template = (
            template[:hero_match.end()]
            + "\n"
            + page_content
            + "\n"
            + template[contact_match.start():]
        )

    else:

        raise ValueError(
            "Could not locate an ordered hero/contact content boundary "
            f"while building {slug}.html"
        )

    # --------------------------------------------------------
    # SCHEMA
    # --------------------------------------------------------

    schema = build_schema(page)

    # Remove any schema generated by an earlier build,
    # then add the current schema.

    template = re.sub(
        r'<script\s+type=["\']application/ld\+json["\'].*?</script>',
        "",
        template,
        flags=re.DOTALL | re.IGNORECASE
    )

    template = template.replace(
        "</head>",
        schema + "\n</head>",
        1
    )

    # --------------------------------------------------------
    # OUTPUT
    # --------------------------------------------------------

    output = ROOT / f"{slug}.html"

    output.write_text(
        template,
        encoding="utf-8",
        newline="\n"
    )

    print(f"Built: {output.name}")

    return slug


# ============================================================
# SITEMAP
# ============================================================

def build_sitemap(_pages):

    urls = []

    # Always include the real homepage.
    urls.append(
        f"""    <url>
        <loc>{SITE_URL}/</loc>
    </url>"""
    )

    # Discover every real root-level HTML page so the sitemap represents
    # the complete site, not only pages managed by pages.json. Ignore
    # backups and directories that happen to end in ".html".
    site_pages = sorted(
        (
            path for path in ROOT.glob("*.html")
            if path.is_file()
            and path.name.lower() != "index.html"
            and ".backup." not in path.name.lower()
        ),
        key=lambda path: path.name.lower()
    )

    for path in site_pages:

        urls.append(
            f"""    <url>
        <loc>{SITE_URL}/{path.name}</loc>
    </url>"""
        )

    sitemap = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>
"""

    (ROOT / "sitemap.xml").write_text(
        sitemap,
        encoding="utf-8",
        newline="\n"
    )

    print("Built: sitemap.xml")


# ============================================================
# ROBOTS
# ============================================================

def build_robots():

    robots = f"""User-agent: *
Allow: /

Sitemap: {SITE_URL}/sitemap.xml
"""

    (ROOT / "robots.txt").write_text(
        robots,
        encoding="utf-8",
        newline="\n"
    )

    print("Built: robots.txt")


# ============================================================
# MAIN
# ============================================================

def main():

    print()
    print("=" * 70)
    print("UMBRELLA SITE GENERATOR")
    print("=" * 70)
    print()

    # --------------------------------------------------------
    # VERIFY MASTER TEMPLATE
    # --------------------------------------------------------

    if not TEMPLATE.exists():

        raise FileNotFoundError(
            f"Master template not found: {TEMPLATE}"
        )

    print(f"Master template: {TEMPLATE.name}")

    # --------------------------------------------------------
    # LOAD CONTENT DATABASE
    # --------------------------------------------------------

    pages = json.loads(
        DATA.read_text(
            encoding="utf-8"
        )
    )

    print(
        f"Pages in content database: {len(pages)}"
    )

    print()

    # --------------------------------------------------------
    # BUILD PAGES
    # --------------------------------------------------------

    for page in pages:

        build_page(page)

    # --------------------------------------------------------
    # SITEMAP / ROBOTS
    # --------------------------------------------------------

    build_sitemap(pages)

    build_robots()

    print()
    print("=" * 70)
    print(
        f"Built {len(pages)} page(s)."
    )
    print("Built sitemap.xml.")
    print("Built robots.txt.")
    print("=" * 70)
    print()


if __name__ == "__main__":
    main()
