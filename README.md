# HFCH Clinical Protocols

Installable web app (PWA) for doctors at Holy Family Catholic Hospital, Berekum to read clinical protocols.
Admins (Medical Director) write, verify and publish protocols; staff (doctors) read them, even offline.

**Stack:** React + TypeScript + Vite · Firebase (Auth, Firestore, Storage) · Vercel · vite-plugin-pwa

## Local development

```bash
npm install
cp .env.example .env   # then fill in the Firebase web config values
npm run dev
```

## One-time Firebase setup

1. **Deploy the security rules** (they enforce the admin/staff roles):
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase deploy --only firestore:rules,storage
   ```
   The first Storage deploy asks to let Storage rules read Firestore (needed for role checks); answer **Yes**.
2. **Authorized domains:** Firebase Console → Authentication → Settings → Authorized domains → add your Vercel domain
   (e.g. `protocols-hfch.vercel.app`).
3. **First admin:** the Medical Director signs up in the app (they will see "Awaiting approval"). Then in
   Firebase Console → Firestore → `users` → their document → change `role` from `pending` to `admin`.
   After that, admins approve everyone else from the **Users** screen.

## Vercel

Import the GitHub repo in Vercel (framework preset: Vite) and add the six `VITE_FIREBASE_*` variables under
Project → Settings → Environment Variables. `vercel.json` handles SPA routing.

## How protocols work

- Protocols are **structured content** (sections → blocks: steps, drugs, decisions, warnings, tables, links,
  contacts, flows). The contents bar and jump links are generated from the sections.
- Every protocol is a **draft** until a clinician uses **Verify & publish** and confirms a line-by-line check
  against the source. Staff only ever see published protocols (enforced by `firestore.rules`).
- Publishing an update archives the previous version (`protocols/{id}/versions`) and marks changed sections
  "Updated".
- Starter protocols (ACS, Bradycardia, Cardiac Arrest, Cardiogenic Shock) live in
  `src/data/starterProtocols.ts`. An admin imports them from the home screen as drafts.

### Rich-text markers

`**bold**` and `!!red emphasis!!` work in any text field.
