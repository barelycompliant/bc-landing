# Barely ⊅ Compliant

Static studio website. No dependencies, build step, tracking scripts or external fonts.

## Files

- index.html — homepage
- projects.html — project directory
- about.html — studio and founder
- ai.html — AI policy
- contact.html — contact options
- 404.html — error page
- css/style.css — shared styles and brand variables
- js/main.js — responsive navigation and footer year
- assets/favicon.svg — favicon
- CNAME and .nojekyll — GitHub Pages configuration

## Local preview

Run `python -m http.server 8000` from this directory and open http://localhost:8000.

## Deploy

Copy the contents of this directory to the root of the GitHub repository. In Settings > Pages, choose Deploy from a branch, main, / (root). Configure the custom domain barelycompliant.dev and its DNS records according to GitHub Pages instructions. Enable HTTPS when available.

## Before publishing

- Confirm the project URLs and GitHub organization link.
- Replace the email section on contact.html with a verified studio email address when available. No email address was supplied, so none is fabricated.
- Confirm the founder name and AI policy reflect actual practices.
- Project illustrations are stylized CSS mockups, not actual screenshots.
- Review on your target browsers and devices. No live deployment or external link verification was performed.

All six brand colors are defined in :root in css/style.css. Edit the shared header and footer in each HTML page if navigation changes. The site works without JavaScript; the navigation remains visible in that case.
