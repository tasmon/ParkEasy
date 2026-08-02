# ParkEasy - Car Parking Ticket Management

A complete client-side web application for managing car parking tickets. Built with pure HTML + CSS + JavaScript (Tailwind CSS via CDN).
**No build step, no server, no installation needed.**

<img width="1918" height="942" alt="image" src="https://github.com/user-attachments/assets/c4f29be6-8710-4648-baf6-c9163ad87d5a" />

>
<img width="1919" height="943" alt="image" src="https://github.com/user-attachments/assets/fdbaa2cd-21c1-437a-8983-7291191a153d" />

>
<img width="1917" height="939" alt="image" src="https://github.com/user-attachments/assets/95eaef11-9407-44aa-9ca2-a178ef27a216" />

>
<img width="1895" height="921" alt="image" src="https://github.com/user-attachments/assets/eee39897-edcd-4a12-a3e1-525927165756" />

>
<img width="1919" height="942" alt="image" src="https://github.com/user-attachments/assets/c3635423-0efc-4672-84c2-dfe67692db30" />

>
<img width="1919" height="944" alt="image" src="https://github.com/user-attachments/assets/b3ac4c40-0d4b-4885-8ae3-4e5cd0d16d4d" />

>
<img width="1916" height="942" alt="image" src="https://github.com/user-attachments/assets/7c06d7d5-9b4e-446f-9e3a-0ba5d91b6abe" />


## Features

- **Ticket Management** — Issue, track, and close parking tickets with auto-calculated fees
- **Receipt Printing** — Beautiful print-ready receipts (entry slip + exit receipt) with vehicle number, type, entry/exit times and fees
- **Customizable Rates** — Manage per-vehicle-type hourly rates & daily maximums
- **User Accounts** — Local accounts with hashed passwords
- **Password Recovery** — Reset password by answering 3 security questions set during signup
- **Backup / Restore** — Download & import all data as JSON files
- **Six Themes** — Ocean, Sunset, Forest, Royal, Rose, Midnight (dark mode)
- **21+ Currencies** — Quick presets for all major world currencies, plus a custom symbol option
- **Seven Languages** — English, Hindi, Spanish, French, Arabic (RTL), Chinese, Bengali
- **Time-aware Greeting** — "Good morning / afternoon / evening" based on time of day
- **Dashboard** — Live stats: active vehicles, today's revenue, total tickets
- **Works fully offline** — Data is stored in your browser's `localStorage`

---

## Getting Started

### Option 1 — Run Locally (Easiest, Recommended for Personal Use)

1. **Download** `ParkEasy-App.zip`
2. **Extract** the ZIP to any folder on your computer (e.g. Desktop, Documents).
3. **Open** the extracted folder.
4. **Double-click** `index.html` — it opens in your default web browser.

That's it! The app loads and works immediately. No installation, no admin rights, no internet required (after the first load).

### Option 2 — Host It on a Web Server (For Multiple Users / Network Access)

If you want coworkers, branch offices, or multiple devices to access ParkEasy from the same dataset, you need to host it on a **proper web server** (not just opening the HTML file). A web server is required because browsers block certain features when files are opened directly via `file://`.


> **Important note about GitHub Pages and data:**
> Since each device has its own `localStorage`, data does **not** sync between devices automatically. For multi-device sync, see "Backend Sync" at the bottom.

#### B. Any Other Web Host

You can also host ParkEasy on **any static web host** (Netlify, Vercel, Cloudflare Pages, your own cPanel hosting, an office NAS, etc.):

1. Upload the four files to the web root of your host (usually `public_html/`, `www/`, or similar)
2. Make sure `index.html` is accessible at the root URL
3. Visit your domain — done!

#### C. Local Office Server (Windows / Linux / Raspberry Pi)

If you want ParkEasy running on your office's local network with no internet:

- **Windows:** Install [IIS](https://learn.microsoft.com/en-us/iis/install/installing-iis-90/installing-iis-90) or use [XAMPP](https://www.apachefriends.org/) → drop the four files into `htdocs/ParkEasy/` → access at `http://your-server-ip/ParkEasy/`
- **Linux / Raspberry Pi:** Install nginx/apache → drop files into `/var/www/html/ParkEasy/` → access at `http://server-ip/ParkEasy/`
- **macOS:** Enable **Web Sharing** in System Settings → drop files into `~/Sites/ParkEasy/`

---

## Data & Backup

All data (users, tickets, rates, settings) is stored in your browser's `localStorage`. **This means:**

- ✅ Data persists across browser restarts
- ✅ Fully offline capable
- ⚠️ Data is **per-browser, per-device** — not synced automatically
- ⚠️ Clearing browser data = losing all records — **keep regular backups!**

### Backing Up

1. Open ParkEasy and log in
2. Click **Backup** in the top navigation
3. Click **Download Backup** — a `.json` file is saved to your Downloads folder
4. Store this file safely (cloud drive, USB, etc.)

### Restoring

1. Click **Backup** → **Restore Data**
2. Choose your previously saved `.json` file
3. Confirm the restore — all current data is replaced

**Best practice:** Download a backup weekly (or daily in busy operations).

---

## First-Time Setup

After first opening the app:

1. Click **"Create one"** on the login screen
2. Fill in **Username**, **Password**, **Full Name**
3. Choose **3 security questions** and provide answers (you'll need these to reset your password later — memorize them!)
4. Once logged in, open **Rates** to adjust pricing for your region
5. Open **Settings** to set your **currency**, **receipt header/footer**, **address**, and **theme**
6. Now go to **New Ticket** and start issuing tickets!

---

## Customization

- **Logo / Icon:** Replace `icon.png` in the folder with your own (square shape, ideally 64×64 or 128×128 PNG). It appears in the browser tab, the header, and the About page.
- **Currency / Header / Footer / Address:** All editable from the Settings page inside the app.
- **Themes:** Switch between 6 themes anytime from Settings.
- **Vehicles & Rates:** Default vehicles (Motorcycle, Car, SUV, Truck, Bus) can be edited, deleted, or extended with custom types.

---

## Multi-Language & Multi-Currency

- **Languages:** 7 built-in, switch from the dropdown in the top-right corner. Arabic automatically switches to right-to-left layout.
- **Currencies:** 21 presets (USD, EUR, GBP, INR, JPY, CNY, KRW, RUB, BRL, AUD, CAD, CHF, SEK, TRY, AED, SAR, MYR, SGD, IDR, PHP, BDT, PKR). Or pick **"Custom Symbol..."** to enter any text (e.g. `kr`, `د.ج`, `R`).

---

## 🔒 Security Note

This is a **client-side** application for personal or small-business use:

- Passwords are hashed (using a non-cryptographic string-mixing algorithm).
- All data lives in the user's browser — there is no central server.
- For **production / multi-user** deployment, consider adding a backend (Firebase, Supabase, Node.js + PostgreSQL) for proper authentication, shared data, and audit logs.
