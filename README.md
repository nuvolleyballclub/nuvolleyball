# NU Volleyball Club — Website

The club's public website, built with Next.js and deployed on Vercel.
Everything lives under the club's GitHub + Vercel accounts.

## For club members — how to edit content

**All website text and data lives in one file: `content/club.ts`.**

To change any text (leadership bios, achievements, tournament descriptions, contact info, etc.):

1. Open the repo on GitHub: `https://github.com/<club-account>/nuvolleyball`
2. Click on `content/club.ts`
3. Click the pencil icon (top right) to edit
4. Change the text between the quotes
5. Scroll down, click **Commit changes**
6. Wait 1–2 minutes — Vercel will automatically publish the update

To change photos:

1. Replace files in `public/photos/` with same filenames (01.jpg, 03.jpg, etc.)
2. Leader photos: `public/photos/leader-president.jpg` and `public/photos/leader-vp.jpg`
3. Logo: `public/logo.jpg`

## Running locally (only for developers)

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Stack

- Next.js 16 App Router
- Tailwind CSS v4
- Static site, no database
- Deployed on Vercel

## Contact

Built by the WCS 240 group for NU Volleyball Club (Spring 2026).
