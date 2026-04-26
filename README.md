# NU Volleyball Club — Website Management Guide

Your website: **https://nuvolleyball.vercel.app**

This guide is written for non-developers. Everything you need to manage the site
yourself is here. No terminal, no coding — just the browser.

---

## 🔑 Your accounts

All three accounts use the same email: **nuvolleyball@outlook.com**

| Service | What it does | Where to log in |
|---|---|---|
| **Outlook** | Email — receives password resets, deploy notifications | https://outlook.com |
| **GitHub** | Holds the website's code. Where you edit content | https://github.com |
| **Vercel** | Hosts the website online. Auto-publishes your edits | https://vercel.com |

**Sign into Vercel with the "Continue with GitHub" button** — no separate password.

**After handover, change all three passwords immediately.** Then store them somewhere
safe (password manager, or a Notion page only the board can access).

---

## ✏️ How to edit text on the website

All text on the site lives in **one file**: `content/club.ts`
Here's how to edit it:

### Step 1 — Open the file
1. Go to https://github.com/nuvolleyballclub/nuvolleyball
2. Click the folder named **`content`**
3. Click the file **`club.ts`**

### Step 2 — Edit
1. Click the **pencil icon** in the top right (✏️ "Edit this file")
2. Find the text you want to change. Only change the text **between the quote marks**.
   Don't change the quote marks themselves, the commas, or anything outside the quotes.

### Step 3 — Save
1. Scroll to the bottom
2. In the "Commit changes" box, write a short note like `Updated leadership bios`
3. Click the green **Commit changes** button

### Step 4 — Wait
1. Go to https://vercel.com/dashboard
2. You'll see the new deployment building (usually 60–90 seconds)
3. When it says "Ready", your edit is live at nuvolleyball.vercel.app

**That's it.** No refresh needed on the user's side — they'll see the change automatically.

---

## 📝 What you can edit in `club.ts`

Here's every section of the file and what it controls:

| Section in file | What it controls on the site |
|---|---|
| `name`, `shortName`, `university` | Club name in nav, footer, hero |
| `mission`, `about` | Main paragraphs on home and About pages |
| `stats` | The 4 numbers on the homepage strip |
| `departments` | The 3 department cards (Event, PR, HR) on home + About + Contact |
| `leadership` | The 5 current board cards on Leadership page |
| `presidents` | Line of presidents on Leadership page (past + current + next) |
| `coaches` | Coach cards on Teams page + previewed on home |
| `rosters.men`, `rosters.women` | Player rosters on Teams page |
| `events` | The 3 tournament cards on home + Tournaments page |
| `sponsors` | Sponsor list on About page + Tournaments page |
| `contact` | All contact info in the footer and Contact page |
| `gallery` | Which photos show on the homepage gallery |

### Example: updating a stat

Find this line in the file:

```
{ value: "20", label: "Active members" },
```

Change `20` to whatever the new number is:

```
{ value: "24", label: "Active members" },
```

Commit. Done.

### Example: adding a player to the roster

Find the `rosters.men` (or `rosters.women`) section. It looks like this:

```
rosters: {
  men: [
    { name: "Karzhaubaev Anuar", position: "Outside Hitter", captain: true },
    { name: "Alimkhan Barzhaksy", position: "Outside Hitter" },
    ...
  ],
```

To add a new player, add a new line:

```
{ name: "New Player Name", position: "Setter" },
```

Positions: `Setter`, `Outside Hitter`, `Opposite Hitter`, `Middle Blocker`, `Libero`.
Add `captain: true` only to the team captain. Make sure the comma after the last `}`
in the list stays. Commit. Done.

### Example: adding a new event

Find the `events` section and add a new entry:

```
{
  name: "Tournament Name",
  dates: "Month DD–DD, YYYY",
  venue: "NU Sports Centre",
  description: "Short description.",
},
```

`time` is optional — include it if the event has a fixed time slot
(e.g. `time: "10:00–18:00"`).

---

## 🖼️ How to change photos

All photos are in the `public/photos/` folder.

### Swap an existing photo

1. Go to https://github.com/nuvolleyballclub/nuvolleyball/tree/main/public/photos
2. Click the photo file you want to replace (e.g. `03.jpg`)
3. Click **Delete file** (trash icon, top right) → commit
4. Go back to the `public/photos/` folder
5. Click **Add file** → **Upload files**
6. Drop your new photo (name it the same as the one you deleted, e.g. `03.jpg`)
7. Commit

### Add a new photo to the gallery

1. Upload your new photo to `public/photos/` (e.g. `13.jpg`)
2. Then edit `content/club.ts` → find the `gallery` section → add `"/photos/13.jpg",`
3. Commit

### Replace the logo

- Upload your new logo to `public/` (not `public/photos/`) as `logo.jpg`
- Or add a transparent PNG as `logo.png` and update `components/Nav.tsx`

### Add leadership photos (optional)

The current Leadership page lists names and roles only. If you want to add
portrait photos in the future:

1. Upload portraits to `public/photos/` (e.g. `leader-altynay.jpg`)
2. Add a `photo: "/photos/leader-altynay.jpg"` line to the matching entry in
   the `leadership` array
3. Update `app/leadership/page.tsx` to render the photo (ask a developer)

---

## 📌 Common tasks — quick reference

| I want to… | Where to edit |
|---|---|
| Change the club mission | `content/club.ts` → `mission` |
| Update a stat number | `content/club.ts` → `stats` |
| Add or rename a department head | `content/club.ts` → `departments` |
| Add a new leadership member | `content/club.ts` → `leadership` |
| Record the next president | `content/club.ts` → `presidents` |
| Update a coach | `content/club.ts` → `coaches` |
| Add or remove a player | `content/club.ts` → `rosters.men` / `rosters.women` |
| Add a new tournament / event | `content/club.ts` → `events` |
| Add or remove a sponsor | `content/club.ts` → `sponsors` |
| Change Telegram, Instagram, or email | `content/club.ts` → `contact` |
| Replace a photo | Upload to `public/photos/` with same name |
| Add more photos to homepage | Upload + add to `gallery` list |

---

## 📊 How to see if your edits went live

1. Go to https://vercel.com/dashboard
2. Click on the `nuvolleyball` project
3. The **Deployments** tab shows every update
4. Green check = live. Red X = there's a typo in the file (see below)

You can also just visit https://nuvolleyball.vercel.app and refresh.

---

## ❌ What to do if the site breaks

If you save a file and the site goes offline (all white or error message), you likely
added or removed a quote mark, comma, or bracket by accident. Fix:

### Option 1 — Undo the last change (easiest)
1. Go to https://github.com/nuvolleyballclub/nuvolleyball/commits/main
2. Find your broken commit (most recent)
3. Click the commit → click **Revert**
4. Commit the revert
5. Site auto-heals within 60 seconds

### Option 2 — Look at the previous version
1. On your bad file (e.g. `club.ts`), click **History** (top right)
2. Click the previous working commit
3. Click **...** → **Copy raw file** → paste the content into the broken file
4. Commit

### Option 3 — Ask for help
Message the developer who built the site (contact info below).

---

## 🎥 Adding the promo video to the homepage

The promo video should be uploaded to the **NU Volleyball Club YouTube channel**,
then embedded on the site.

Steps (we'll help with this during handover):
1. Upload the promo video to the club's YouTube channel
2. Copy the video's link
3. Edit `content/club.ts` → add `videoUrl: "https://youtu.be/XXXXX"` under the top section
4. The homepage will automatically embed it

---

## 🔒 Security — read this once

- **Never commit passwords or API tokens** to the GitHub repo
- **Never share the Outlook password** in public channels (Telegram group, etc.)
- **Rotate passwords once a year**, and immediately if a board member leaves
- **Enable two-factor authentication** on GitHub: https://github.com/settings/security

---

## 🛠️ Advanced — for developers only

If a future club member is a developer and wants to run the site locally:

```bash
git clone https://github.com/nuvolleyballclub/nuvolleyball
cd nuvolleyball
npm install
npm run dev
# site runs at http://localhost:3000
```

Stack:
- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **React 19**
- Deployed on Vercel, source on GitHub, static site (no database)

Main folders:
- `app/` — the pages (home, about, teams, leadership, tournaments, contact)
- `components/` — shared pieces (Nav, Footer)
- `content/club.ts` — **all text content**
- `public/` — images, logo

---

## 📞 Support

The website was built by a WCS 240 group for NU Volleyball Club (Spring 2026).
If something breaks and you can't fix it with this guide, contact the original dev team:

- **Primary contact:** [Your name] — [Your Telegram]
- **Backup:** [Teammate] — [Teammate Telegram]

---

## 📋 Handover checklist (for the first board meeting)

- [ ] New board members have access to nuvolleyball@outlook.com
- [ ] New board members have GitHub access (invited as collaborators if needed)
- [ ] New board members have read this guide
- [ ] Someone on the board knows how to edit `content/club.ts`
- [ ] Someone on the board knows how to replace a photo
- [ ] Passwords have been rotated since the previous board
- [ ] Outlook inbox is being checked for GitHub/Vercel notifications

---

_Built with care. Own it, update it, make it yours._
