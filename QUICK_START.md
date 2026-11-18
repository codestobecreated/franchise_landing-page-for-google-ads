# ⚡ Relux Electric - Quick Start Guide

## 🚀 Run the Project

### Step 1: Open Terminal
Open PowerShell in the project folder

### Step 2: Run One of These Commands

**Option A - Using npm script (RECOMMENDED):**
```powershell
npm run dev
```

**Option B - Using startup script:**
```powershell
.\start-dev.ps1
```

**Option C - Clean restart (if port issues):**
```powershell
Get-Process | Where-Object { $_.ProcessName -like "*node*" } | Stop-Process -Force -ErrorAction SilentlyContinue
npm run dev
```

## 📱 Access the Website

Once running, visit:
- **Home**: http://localhost:3000
- **Franchise**: http://localhost:3000/business/franchise
- **Test Page**: http://localhost:3000/test

## 🛠️ Project Structure

```
app/
├── page.tsx                 # Home page
├── layout.tsx              # Root layout
├── globals.css             # Global styles
├── test/page.tsx           # Test page
└── business/franchise/
    ├── page.tsx
    ├── data/
    │   └── franchiseModelsData.ts
    └── components/
        ├── HeroSection.tsx
        ├── FranchiseModels.tsx
        └── EnquiryModal.tsx
```

## 📦 Dependencies

All necessary packages:
- Next.js 15+
- React 18/19
- Tailwind CSS v4
- TypeScript

Auto-installed with: `npm install`

## 🎨 Customization

### Change Colors
Edit `app/globals.css` or update Tailwind colors

### Add Franchise Models
Edit `app/business/franchise/data/franchiseModelsData.ts`

### Update Text
Edit component files directly

## 🐛 If Port 3000 is Already in Use

**PowerShell:**
```powershell
Get-Process | Where-Object { $_.ProcessName -like "*node*" } | Stop-Process -Force
npm run dev
```

**CMD:**
```cmd
taskkill /F /IM node.exe /T
npm run dev
```

## 📝 npm Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm start         # Run production build
npm run lint      # Run linter
```

## ✅ All Set!

Your Relux EV Charging Franchise website is ready!

**Run:** `npm run dev`
**Visit:** http://localhost:3000

---

*Questions?* Check README.md or PROJECT_SUMMARY.md
