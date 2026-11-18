# Relux Electric - EV Charging Franchise Landing Page

A modern Next.js 15 website for Relux Electric's EV charging franchise program.

## Project Structure

```
app/
  ├── layout.tsx           # Root layout
  ├── globals.css          # Global Tailwind CSS & Poppins font
  ├── page.tsx             # Home page
  ├── test/
  │   └── page.tsx         # Test page
  └── business/
      └── franchise/
          ├── page.tsx                    # Main franchise page
          ├── data/
          │   └── franchiseModelsData.ts # Franchise models & FAQ data
          └── components/
              ├── HeroSection.tsx         # Hero banner
              ├── FranchiseModels.tsx     # Models grid with cards
              └── EnquiryModal.tsx        # Enquiry form modal

Configuration Files:
  ├── package.json          # Dependencies
  ├── tsconfig.json         # TypeScript configuration
  ├── next.config.ts        # Next.js configuration
  ├── tailwind.config.ts    # Tailwind CSS customization
  └── postcss.config.js     # PostCSS for Tailwind
```

## Getting Started

### Prerequisites
- Node.js 18+ (you have v22.23.4)
- npm (you have v11.6.2)

### Installation

```bash
cd "C:\Users\deepa\OneDrive\Desktop\relux landing page"
npm install
```

### Running the Development Server

**Option 1: Using npm script (Recommended)**
```bash
npm run dev
```

**Option 2: Direct npx command**
```bash
npx next dev --port 3000
```

**Option 3: Using Node directly**
```bash
node_modules\.bin\next dev --port 3000
```

The app will be available at `http://localhost:3000`

### Features

✅ **Hero Section** - Eye-catching banner with CTA buttons
✅ **Franchise Models** - 3-model grid display (60kW, 120kW, 240kW Super Hub)
✅ **Responsive Design** - Mobile, tablet, and desktop optimized
✅ **Enquiry Modal** - Contact form for interested franchise partners
✅ **Tailwind CSS** - Modern styling with custom theme
✅ **SEO Ready** - Metadata and structured data support
✅ **TypeScript** - Full type safety

### Pages Available

- **Home** - `http://localhost:3000/` - Main landing page
- **Franchise** - `http://localhost:3000/business/franchise` - Franchise details
- **Test** - `http://localhost:3000/test` - Test page for debugging

### Customization

**Update Franchise Models**
Edit `app/business/franchise/data/franchiseModelsData.ts` to add/modify models

**Change Colors**
- Primary green: `#00b14f`
- Text colors: Updated in components
- Tailwind config: `tailwind.config.ts`

**Update Content**
- Hero Section: `app/business/franchise/components/HeroSection.tsx`
- Models Cards: `app/business/franchise/components/FranchiseModels.tsx`
- Enquiry Form: `app/business/franchise/components/EnquiryModal.tsx`

### Build for Production

```bash
npm run build
npm start
```

### Technologies Used

- **Next.js 15** - React framework with App Router
- **React 18/19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Poppins Font** - Modern sans-serif font

### Browser Support

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers

### Troubleshooting

**Port 3000 Already in Use**
```powershell
# Kill all Node processes
Get-Process | Where-Object { $_.ProcessName -like "*node*" } | Stop-Process -Force
npm run dev
```

**Module Not Found Errors**
```bash
rm -Recurse -Force node_modules
rm package-lock.json
npm install
```

**TypeScript Errors**
```bash
npm run build
```

### Environment Variables

Currently, no environment variables are required. Add `.env.local` if needed:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### License

© 2026 Relux Electric. All rights reserved.

---

**Created with** ⚡ **Relux Landing Page Generator**


# franchise_landing-page-for-google-ads
