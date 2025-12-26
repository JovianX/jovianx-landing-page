# JovianX Landing Page

A modern, responsive landing page for JovianX - a platform designed to help companies build and operate SaaS offerings and fully managed cloud services.

## Features

- 🎨 Modern, beautiful UI with gradient accents
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and React
- 🎯 Clear value proposition and CTAs
- 🚀 Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section with navigation
│   ├── Features.tsx     # Features grid
│   ├── Benefits.tsx     # Benefits section
│   ├── CTA.tsx          # Call-to-action section
│   └── Footer.tsx       # Footer
└── package.json
```

## Build for Production

```bash
npm run build
```

The static files will be exported to the `out` directory.

## Deployment to GitHub Pages

This project is configured to deploy automatically to GitHub Pages and serve from `jovianx.com`.

### Setup Instructions

1. **Repository**: This project is hosted at [JovianX/jovianx-landing-page](https://github.com/JovianX/jovianx-landing-page)
   
   To push changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on every push to `main`

3. **Configure Custom Domain**:
   - The `public/CNAME` file is already configured for `jovianx.com`
   - In your domain registrar (where you manage jovianx.com DNS), add these DNS records:
     - **Type**: `CNAME`
     - **Name**: `@` (or root domain)
     - **Value**: `JovianX.github.io` (for organization repositories)
     - **OR** use A records:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
   - Also add a CNAME for `www` subdomain pointing to `JovianX.github.io`

4. **Verify Domain**:
   - GitHub will automatically detect the CNAME file
   - It may take a few minutes to hours for DNS to propagate
   - Check domain status in repository Settings → Pages

### Manual Deployment

If you prefer to deploy manually:
```bash
npm run build
# The out/ directory contains the static site
# Upload contents of out/ to your hosting provider
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- CSS Modules
- GitHub Pages

