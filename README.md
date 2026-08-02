# 🅿️ ParkEasy - Car Parking Ticket Management

A complete client-side web application for managing car parking tickets, built with pure HTML + CSS + JavaScript (Tailwind CSS via CDN). No build step, no server required.

<img width="1917" height="941" alt="image" src="https://github.com/user-attachments/assets/52024c5e-f7f7-4f1c-bfe2-157de79d65e6" />

>
<img width="1910" height="938" alt="image" src="https://github.com/user-attachments/assets/8ea14fef-97f1-4e74-91de-df54c7702da8" />

>
<img width="1916" height="942" alt="image" src="https://github.com/user-attachments/assets/eb53def5-4e8d-4e8e-aaf5-31ac74125dd6" />



## ✨ Features

- **🎫 Ticket Management** – Issue, track, and close parking tickets with auto-calculated fees
- **🧾 Receipt Printing** – Beautiful print-ready receipts (entry slip + exit receipt) with vehicle number, type, time & fees
- **💵 Customizable Rates** – Manage per-vehicle-type hourly rates & daily maximums
- **🔐 User Auth** – Local accounts with hashed passwords and **3 security questions** for password recovery
- **🔑 Password Reset** – "Forgot password?" → loads user's security questions → answer all 3 → set new password
- **💾 Backup / Restore** – Download & import all data as JSON files
- **⚙️ Settings** – Currency, receipt header/footer/address + **5 themes** (Ocean, Sunset, Forest, Royal, Rose)
- **📊 Dashboard** – Live stats: active vehicles, today's revenue, total tickets
- **❓ Help & ℹ️ About** pages
- **🌗 Works offline** – Data persisted in browser `localStorage`
- **🌐 Runs from local folder – Just open `index.html`


## 🚀 Quick Start

### Run Locally
Simply double-click `index.html` (or open it in your browser). That's it!


## 💾 Data Backup
- Use the **Backup** tab to download all data as JSON.
- Use **Restore** to import a previously saved backup.
- Data is stored in `localStorage`, so clear browser data = lost data — keep regular backups!

## 🔒 Security Note
This is a client-side demo app for personal/small-business use. Passwords are hashed but the hashing used is not cryptographically secure (a SHA-256 + bcrypt approach is recommended for production deployments). For real production use, add a backend (Node.js, Firebase, etc.) for proper authentication.


## 🛠️ Technologies
HTML5 · CSS3 · JavaScript (ES6+) · Tailwind CSS · LocalStorage API · Print API
