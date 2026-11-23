# Niranjan Raut — Portfolio Website

A responsive, single-page personal portfolio built with vanilla HTML, CSS and JavaScript. No build step, package manager or framework is required.

## Files

```text
niranjan-raut-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── favicon.svg
    └── og-preview.svg
```

## Run locally

Open `index.html` directly in a browser, or serve this folder with any static web server.

## Deploy to GitHub Pages

1. Create a GitHub repository named **`nirranjanraut.github.io`** (this matches the portfolio URL provided).
2. Extract this ZIP file.
3. Upload the contents of the extracted folder to the **repository root**. Confirm that `index.html` is at the root, not inside another nested folder.
4. Commit the files to the `main` branch.
5. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/(root)**, then save.
6. Wait for the Pages deployment to finish. Visit `https://nirranjanraut.github.io/`.

For a project repository with a different name, the site URL will normally be `https://<username>.github.io/<repository>/`.

## Customise before publishing

- Update the professional summary, role details and experience bullets in `index.html` to reflect your exact responsibilities.
- Add earlier employers and dates to the Experience section if you want the full 13-year career timeline represented.
- Add verified certification details to the Certifications section. It is currently a clearly marked placeholder because no certifications were supplied.
- The Projects section uses high-level representative project themes from the supplied experience. Replace or supplement these with approved public project descriptions and real URLs; do not publish confidential employer or client information.
- The “Download resume” control opens the browser print dialog. Choose **Save as PDF** to create a PDF copy.
- The contact form uses a `mailto:` link and opens the visitor's default email application. It does not store or submit form data to a server.
- Replace `assets/og-preview.svg` with a hosted social preview image if desired. Update the Open Graph URL in `index.html` if the public site URL changes.

## Features

- Mobile-first responsive layout and accessible navigation
- Light/dark theme toggle (preference stored in the browser)
- Scroll reveal animations using `IntersectionObserver`
- Reduced-motion support and keyboard focus styles
- Print stylesheet for PDF/resume output
- SEO description, Open Graph and Twitter Card metadata
