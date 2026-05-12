# K360 Automation Website

Oklahoma industrial instrumentation, automation, valve, and process control representation for oil and gas applications.

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14.2.30
- **UI Library**: [React](https://react.dev/) 18.3.1
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4.10
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.5.4

## Deployment to Vercel

### Connect to Vercel

1. Push this repository to GitHub (already done)
2. Go to [https://vercel.com](https://vercel.com)
3. Click "New Project"
4. Import the `k360-automation-site-v2` repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click "Deploy"

### Environment Variables

If you need environment variables in production:

1. In Vercel dashboard, go to Project Settings → Environment Variables
2. Add variables matching those in `.env.example`
3. Redeploy if needed

## Project Structure

```
.
├── app/
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles with Tailwind
├── public/               # Static files
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## Key Features

- Responsive design optimized for mobile and desktop
- Tailwind CSS for utility-first styling
- TypeScript for type safety
- SEO-optimized metadata
- Smooth scrolling behavior
- Professional component layout

## Support

For inquiries about K360 Automation:
- Email: [sales@k360automation.com](mailto:sales@k360automation.com)
- Phone: 405-000-0000

## License

Private project - K360 Automation
