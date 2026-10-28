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
   After that, admins approve, decline, block and restore everyone else from the **Users** screen.
   Admin rights are only ever granted or removed this way, in the Firebase Console: the app cannot make or
   unmake admins, so a compromised admin account cannot create more admins or lock the real ones out.

### Limits on admins

The rules are written so that a compromised admin account can do as little lasting damage as possible:

- No one can delete user accounts, protocols or uploaded files. Users are blocked; protocols are unpublished.
- Admins cannot change another admin's role, or make anyone an admin (see step 3).
- A published protocol can only be changed (republished or unpublished) together with an exact copy of its
  current content in `protocols/{id}/versions`, so every version that was ever live can be restored.
- `updatedBy`, `updatedAt`, `verifiedAt`, `archivedBy` and `archivedAt` must be the signed-in user and the
  server time.

### App Check

App Check makes Firestore and Storage accept requests only from this app, so a stolen password can't be used
from a script. It is off until `VITE_RECAPTCHA_SITE_KEY` is set.

1. Google Cloud Console (project `protocols-hfch`) → Security → reCAPTCHA → **Create key**: type **Website**,
   add the app's domains (e.g. `protocols-hfch.vercel.app`). Copy the key id.
2. Firebase Console → App Check → Apps → the web app → **reCAPTCHA Enterprise** → paste the key → Save.
3. Add `VITE_RECAPTCHA_SITE_KEY` (the key id) in Vercel's environment variables and redeploy.
4. Local development: Firebase Console → App Check → the web app → ⋮ → **Manage debug tokens** → add one, and
   put it in `.env` as `VITE_APPCHECK_DEBUG_TOKEN`.
5. Watch Firebase Console → App Check → APIs → Cloud Firestore / Cloud Storage for a few days. When almost all
   requests are **verified**, click **Enforce** on each. Until then nothing is blocked.

Devices still on an old version of the app get no token; they pick up the new version on their next online
visit. Enforce only after that has happened.

## Vercel

Import the GitHub repo in Vercel (framework preset: Vite) and add the six `VITE_FIREBASE_*` variables under
Project → Settings → Environment Variables. `vercel.json` handles SPA routing.

## How protocols work

- Protocols are **structured content** (sections → blocks: steps, drugs, decisions, warnings, tables, links,
  contacts, flows). The contents bar and jump links are generated from the sections.
- Every protocol is a **draft** until a clinician uses **Verify & publish** and confirms a line-by-line check
  against the source. Staff only ever see published protocols (enforced by `firestore.rules`).
- Publishing an update archives the previous version (`protocols/{id}/versions`) and marks changed sections
  "Updated". Unpublishing archives the live version too.
- Starter protocols (ACS, Bradycardia, Cardiac Arrest, Cardiogenic Shock) live in
  `src/data/starterProtocols.ts`. An admin imports them from the home screen as drafts.

### Rich-text markers

`**bold**` and `!!red emphasis!!` work in any text field.
