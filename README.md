# 🌿 Vera Health — AI-Powered Health Conservatory Dashboard

> A professional, interactive health infotainment dashboard built for the modern era of personal wellness.

![Vera Health Dashboard](https://verahealth-125063589010.us-central1.run.app)

## 🚀 Live Demo

👉 **[https://verahealth-125063589010.us-central1.run.app](https://verahealth-125063589010.us-central1.run.app)**

---

## ✨ Features

- **🔐 Google OAuth Authentication** — Secure sign-in via Firebase Authentication with Google.
- **📊 Infotainment-Style Dashboard** — Emergency-panel-inspired UI with real-time biometric widgets, insights, and community modules.
- **🥗 Recipe Discovery** — Interactive recipe browser with modal detail views, ingredient lists, step-by-step instructions, and meal planning.
- **📈 Nutritional Breakdown** — Animated macro tracking with hover-activated progress bars.
- **💓 Biometrics Grid** — Live-updating health stats with glowing infotainment-style cards.
- **🌍 Multi-Language Support** — Language selection on the authentication screen.
- **🌗 Dark / Light Theme Toggle** — Seamless theme switching across the entire app.
- **📱 Fully Responsive** — Scales perfectly across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 + Vite |
| **Styling** | Tailwind CSS + Custom Design System |
| **Authentication** | Firebase Auth (Google OAuth) |
| **Routing** | React Router DOM v6 |
| **Containerization** | Docker + Nginx |
| **Deployment** | Google Cloud Run |
| **Typography** | Manrope (Google Fonts) |

---

## 🏗️ Architecture

```
moodbite-slingshot/
├── src/
│   ├── components/
│   │   ├── dashboard/          # BiometricsGrid, RecipeDiscovery, InsightsPanel, etc.
│   │   └── layout/             # MainLayout, TopAppBar, Sidebar
│   ├── pages/                  # Dashboard, Login, Profile, MacroTracker, etc.
│   ├── context/                # AppContext (global state)
│   └── firebase.js             # Firebase Auth configuration
├── Dockerfile                  # Production container (Nginx)
├── nginx.conf                  # React Router-aware Nginx config
└── .gcloudignore               # Cloud Run upload rules
```

---

## ⚙️ Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/risshiisshh/VeraHealth.git
cd VeraHealth

# 2. Install dependencies
npm install

# 3. Create your environment file
echo "VITE_FIREBASE_API_KEY=your_firebase_api_key_here" > .env

# 4. Start the development server
npm run dev
```

App runs at `http://localhost:5173`

---

## 🚢 Deploying to Google Cloud Run

```bash
# 1. Build the production bundle locally
npm run build

# 2. Deploy to Cloud Run (uses local dist folder)
gcloud run deploy verahealth \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

---

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `VITE_FIREBASE_API_KEY` | Your Firebase Web API Key |

> ⚠️ **Never commit your `.env` file.** It is already listed in `.gitignore`.

---

## 📸 Screenshots

> Dashboard • Login • Recipe Discovery • Biometrics

---

## 👨‍💻 Author

**Rishabh Shevde**  
[GitHub](https://github.com/risshiisshh) • [LinkedIn](https://linkedin.com/in/risshiisshh)

---

## 📄 License

MIT License — feel free to use this project for learning or inspiration.
