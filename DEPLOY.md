# Burke Road Compounding Pharmacy — VentraIP cPanel Deployment Guide

## Architecture

This is a **fully static** React/TypeScript/Vite single-page application (SPA). It requires:

- **No Node.js server** running on the host
- **No database** (all content is bundled as TypeScript data modules)
- **No environment variables** for core functionality
- **One optional secret**: `VITE_WEB3FORMS_KEY` — your Web3Forms access key for contact/prescriber forms (already baked into the build)

Forms submit directly to [Web3Forms](https://web3forms.com) from the browser. You will receive email notifications for every contact enquiry and prescription submission.

---

## Build

```bash
# Install dependencies
pnpm install

# Build for production (outputs to dist/)
pnpm build
```

The `dist/` folder will contain:
```
dist/
  index.html          ← SPA entry point
  .htaccess           ← Apache rewrite rules for SPA routing
  assets/
    index-*.js        ← Bundled React app
    index-*.css       ← Compiled Tailwind CSS
```

---

## Deploy to VentraIP cPanel

### Option A — File Manager (simplest)

1. Log in to your VentraIP cPanel
2. Open **File Manager** → navigate to `public_html/`
3. Delete or back up any existing files in `public_html/`
4. Upload all files from your local `dist/` folder into `public_html/`
   - Make sure `.htaccess` is included (it may be hidden — enable "Show Hidden Files" in File Manager)
5. Visit your domain — the site should load immediately

### Option B — FTP/SFTP

1. Connect to your VentraIP hosting via FTP/SFTP (credentials in cPanel → FTP Accounts)
2. Upload all contents of `dist/` to `public_html/`
3. Ensure `.htaccess` is uploaded (some FTP clients hide dotfiles by default)

---

## SPA Routing (.htaccess)

The `.htaccess` file in `dist/` handles React Router navigation. Without it, direct URL access (e.g. `yoursite.com.au/conditions`) will return a 404.

The file is automatically copied to `dist/` during `pnpm build`. Its contents:

```apache
Options -MultiViews
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^ index.html [L]
```

If your host requires `AllowOverride All` to be set for `.htaccess` to work, contact VentraIP support and ask them to enable it for your domain's directory.

---

## Updating Content

All site content lives in `client/src/data/`:

| File | Content |
|---|---|
| `conditions.ts` | 12 compounding conditions (title, summary, icon, slug) |
| `services.ts` | 8 pharmacy services |
| `articles.ts` | Knowledge Centre articles |
| `testimonials.ts` | Patient testimonials |
| `faqs.ts` | Frequently asked questions |

To update content:
1. Edit the relevant `.ts` file
2. Run `pnpm build`
3. Re-upload `dist/` to `public_html/`

---

## Forms

Both forms use [Web3Forms](https://web3forms.com) to send email notifications:

- **Contact form** → `/contact` — sends to your registered Web3Forms email
- **Prescribers portal** → `/prescribers` — sends full prescription details to your email

The access key `7e651b0b-c7be-4b62-ab27-f712a658cccb` is already baked into the build via `VITE_WEB3FORMS_KEY`.

To change the notification email, log in to [web3forms.com](https://web3forms.com) and update your account settings.

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Page refresh returns 404 | `.htaccess` not uploaded or `AllowOverride` not enabled — contact VentraIP support |
| Forms not sending | Check Web3Forms dashboard at [web3forms.com](https://web3forms.com) for submission logs |
| Styles not loading | Check that `dist/assets/` was uploaded correctly |
| Images not showing | Images are served from CDN — ensure the site has internet access (always true on shared hosting) |
