<div align="center">
  <h1>Mark's Portfolio Site</h1>
  <p>
    A robust, production-ready full-stack template built with Next.js 15, React 19, Tailwind CSS 4, Prisma, and Supabase. Features internationalization, Markdown blogs via Contentlayer, and payments via Stripe.
  </p>
</div>

---

## ✨ Features

- **Framework**: Next.js 15 (App Router ready)
- **UI & Styling**: Tailwind CSS 4, Radix UI primitives, Framer Motion, and `lucide-react` icons.
- **Database & ORM**: PostgreSQL via Supabase, managed by Prisma with Accelerate.
- **Authentication**: NextAuth.js v5 (Beta)
- **Content & Blog**: Markdown/MDX powered by Contentlayer2
- **Internationalization (i18n)**: Multi-language support out-of-the-box (`next-intl` & `next-i18next`).
- **Payments**: Integrated with Stripe.
- **Emails**: Built with React Email.
- **Forms & Validation**: React Hook Form coupled with Zod.
- **Analytics & SEO**: Vercel Analytics, `@vercel/og` for dynamic Open Graph images.

<br />

## 🛠️ Tech Stack

- **Core**: React 19, Next.js 15, TypeScript
- **Styling**: Tailwind CSS 4, PostCSS
- **Components**: Radix UI, Framer Motion
- **State & Data Fetching**: TanStack React Query v5
- **Database Backend**: Supabase, Prisma ORM
- **Content Management**: Contentlayer2

<br />

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v18+) and npm/yarn/pnpm installed.

### 1. Clone & Install dependencies

```bash
# Clone the repository (if you haven't already)
git clone <repository-url>
cd portifolio

# Install dependencies (using npm in this example)
npm install
```

### 2. Environment Variables

Create a `.env` or `.env.local` file in the root of the project and provide the necessary variables. Refer to `env.mjs` to see the required environment schemas.

```env
# Example environment variables needed:
DATABASE_URL="your-supabase-db-url"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="..."
STRIPE_SECRET_KEY="..."
# Add your other NextAuth, Stripe, and App variables here
```

### 3. Database Setup

To generate the Prisma client based on your schema:

```bash
npx prisma generate
```

To format and push your schema to the database (if applicable):
```bash
npx prisma db push
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br />

## 📂 Project Structure

```text
├── src/                # Source code (pages, components, libs, hooks)
├── public/             # Static assets (images, fonts, etc.)
├── prisma/             # Prisma schema and migrations
├── locales/            # i18n translation files
├── components.json     # shadcn/ui configuration
├── contentlayer.config.ts # Contentlayer settings for MDX blog
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS customizing rules
└── package.json        # Dependencies & Scripts
```

<br />

## 📜 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Compiles and builds the Next.js application for production.
- `npm run start`: Starts the application in production mode (after building).
- `npm run lint`: Lints the code using ESLint.
- `npm run lint:fix`: Automatically fixes linting errors.
- `npm run format`: Formats code throughout the project using Prettier.
- `npm run preview`: Builds and then starts the app locally for preview.

---

<div align="center">
  Generated with ❤️ for modern web development.
</div>
