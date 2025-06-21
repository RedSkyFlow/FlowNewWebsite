# Flow Networks Website: Technical Overview & Build Structure

This document provides a technical summary of the Flow Networks website project, intended for project managers and technical leads.

## 1. High-Level Project Summary

**Purpose:** This project is a corporate marketing and informational website for "Flow Networks". It serves as a digital flagship to embody the company's "AI Gateway Vision" while supporting its current business strengths.

**Core Concepts:**
*   **AI Gateway Vision:** The future-facing goal is to transform physical venues into intelligent ecosystems. The core concept involves deploying bespoke AI agents accessible exclusively through the venue's secure WiFi network.
*   **Current Business Focus:** The immediate priority is to market established solutions, including intelligent WiFi (powered by Purple.ai), location intelligence, marketing automation, and professional services.

## 2. Technology Stack

*   **Framework:** **Next.js 15+** (utilizing the App Router).
*   **Language:** **TypeScript**.
*   **UI Library:** **React** (with a focus on Server Components to minimize client-side JavaScript).
*   **Styling:** **Tailwind CSS** for utility-first styling. The global theme (colors, fonts, radius) is centrally managed in `src/app/globals.css` using HSL CSS variables.
*   **Component Library:** **ShadCN UI** provides the foundational, unstyled components (e.g., Button, Card, Input) which are then styled by Tailwind. These are located in `src/components/ui`.
*   **Generative AI:** **Google's Gemini models** are used for AI functionality, orchestrated via **Genkit**.
*   **Forms:** **React Hook Form** with **Zod** for validation.
*   **Animations:** **Framer Motion** for UI animations and page transitions.
*   **Deployment Target:** **Firebase App Hosting** (configured in `apphosting.yaml`).

## 3. Directory Structure

The project follows a standard Next.js App Router structure.

```
/
├── .next/              # (build output)
├── public/             # Static assets (images like logo.png, fonts)
├── src/
│   ├── ai/             # Genkit AI functionality
│   │   ├── flows/      # Genkit flows (e.g., ai-chatbot.ts)
│   │   └── genkit.ts   # Genkit initialization
│   │
│   ├── app/            # Next.js App Router: all pages and layouts
│   │   ├── (route-groups)/ # Page routes (e.g., /about, /solutions)
│   │   ├── layout.tsx  # Root layout of the entire application
│   │   ├── page.tsx    # Homepage component
│   │   └── globals.css # Global styles & Tailwind/ShadCN theme variables
│   │
│   ├── components/     # Reusable React components
│   │   ├── layout/     # Major layout components (AppHeader.tsx, AppFooter.tsx)
│   │   ├── sections/   # Large, single-use page sections (HeroSection.tsx)
│   │   ├── shared/     # Small, reusable components (Logo.tsx, ContactForm.tsx)
│   │   └── ui/         # ShadCN UI components (Button.tsx, Card.tsx)
│   │
│   ├── hooks/          # Custom React hooks (use-toast.ts)
│   │
│   └── lib/            # Core logic, utilities, and constants
│       ├── actions.ts  # Next.js Server Actions (e.g., for form submissions)
│       ├── constants.ts# Central source of truth for site data (nav links, industry info)
│       └── utils.ts    # Utility functions (e.g., cn for classnames)
│
├── package.json        # Project dependencies and scripts
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 4. Key Architectural Concepts

*   **Data-Driven Content:** The navigation structure, solution descriptions, and industry pages are dynamically generated from the data in `src/lib/constants.ts`. This makes content updates and site restructuring highly efficient and centralized.
*   **Server-Centric:** The architecture heavily favors Next.js Server Components and Server Actions. This improves performance by doing work on the server and sending minimal JavaScript to the client.
*   **Component-Based Design:** The UI is broken down into small, reusable components, promoting consistency and maintainability.
*   **Centralized Styling:** Brand consistency is maintained by defining all colors and major style properties as CSS variables in `globals.css`, which are then consumed by Tailwind and ShadCN components.

## 5. Build & Development

*   **To run the development server:** `npm run dev`
*   **To create a production build:** `npm run build`
*   **To run the production server:** `npm run start`
*   **To run linting and type checking:** `npm run lint` and `npm run typecheck`
