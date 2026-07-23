# VYTAL House — React Native / Expo Web

An original, mobile-first VYTAL House experience built with Expo Router and React Native for iOS, Android, and statically exported web hosting.

## Brand and project guardrails

- Brand line: **Recharge. Recover. Evolve.**
- Positioning: premium Howard County wellness and recovery house
- Planning reference: 6785 Business Parkway, Units 1 and 2, Howard County, Maryland
- Status language: in development; site, services, pricing, providers, construction, licensing, and opening timing remain subject to final approval
- Public contact: `Info@VYTALHouse.com`
- No fake testimonials, unsupported health claims, invented opening dates, or unapproved pricing
- VYTAL House remains publicly and visually independent from ACool brands

## What is included

- Responsive public website implemented with React Native components
- Expo Router static routes for Home, Services, Memberships, The House, Contact, and Legal
- Working Essential / Elite / Executive membership architecture without unapproved pricing
- Mail-based founding-interest form with a sensitive-information warning
- GitHub Pages workflow triggered by `vytalhousebranch`
- Reference-audit script for studying public site structure without copying protected code, assets, branding, testimonials, or full page copy
- Four project-owner-supplied Drive images with provenance notes

## Local development

```bash
npm install
npm run web
```

Then open the Expo web URL shown in the terminal.

## Validate the build

```bash
npm run typecheck
npm run build:web
npx serve dist
```

Expo writes the static production site to `dist/`. The post-export step adds `.nojekyll` and a GitHub Pages 404 fallback.

## Run the reference audit

```bash
npm run audit:reference -- https://reecess.com/ 8
```

The script checks `robots.txt`, crawls a limited number of same-origin public pages with a delay, and records only structural/design metadata in `reference-audit/`. It does **not** save full HTML, image binaries, source code, testimonials, or complete page copy.

## GitHub Pages

The workflow at `.github/workflows/pages.yml` deploys pushes to `vytalhousebranch`.

Repository settings must use **Pages → Source: GitHub Actions** one time. The expected project URL is:

`https://acoolnerd.github.io/vytalhouserecess/`

The Expo `experiments.baseUrl` value is already set to `/vytalhouserecess` for subpath hosting.

## Custom domain later

Before connecting `vytalhouse.com`, verify the existing DNS and production hosting plan. Then update the Expo base URL from `/vytalhouserecess` to an empty string, configure the custom domain in GitHub Pages, add the verified DNS records, and rebuild.

## Production gates

1. Verify rights and model releases for every image.
2. Replace planning copy with approved legal, clinical, membership, and location language.
3. Add a secure CRM/form backend; do not use public email for medical intake.
4. Complete accessibility, privacy, terms, security, analytics-consent, and performance reviews.
5. Confirm Department of Zoning, occupancy, construction, provider, device, insurance, and entity approvals before publishing service availability.
