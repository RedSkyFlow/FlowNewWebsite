
# Website Handover Manifest

## 1. Project Overview

**Objective:** This website serves as the primary digital presence for Flow Networks, showcasing our products, solutions, and technological vision. It is designed to be a dynamic, engaging, and informative platform that reflects our brand's commitment to innovation and cutting-edge AI-driven solutions.

**Core Technologies:**
*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** shadcn/ui
*   **Animation:** Framer Motion
*   **Deployment:** Vercel / Google Cloud App Hosting

The site emphasizes modern design principles, incorporating numerous animations and interactive elements to create a memorable user experience.

---

## 2. Getting Started

A new developer should follow these steps to get the project running locally:

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 3. `/src` Directory File Tree

This provides a complete, recursive overview of the source code structure.

```
src
├── ai
│   ├── dev.ts
│   ├── flows
│   │   ├── ai-chatbot.ts
│   │   └── text-to-speech.ts
│   └── genkit.ts
├── app
│   ├── about
│   │   └── page.tsx
│   ├── ai-agents
│   │   └── [industry]
│   │       └── page.tsx
│   ├── ai-gateway
│   │   ├── benefits
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── technology
│   │   │   └── page.tsx
│   │   └── what-it-is
│   │       └── page.tsx
│   ├── contact
│   │   └── page.tsx
│   ├── design-examples
│   │   └── page.tsx
│   ├── error.tsx
│   ├── example-placeholder.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── industries
│   │   ├── [industry]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── page.tsx
│   ├── partners
│   │   └── page.tsx
│   ├── privacy-policy
│   │   └── page.tsx
│   ├── products
│   │   ├── ALLxs
│   │   │   └── page.tsx
│   │   ├── cnntap
│   │   │   └── page.tsx
│   │   ├── everlytic
│   │   │   └── page.tsx
│   │   ├── intelligent-wifi
│   │   │   └── page.tsx
│   │   ├── internet-connectivity
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── resources
│   │   └── page.tsx
│   ├── solutions
│   │   ├── automated-communication
│   │   │   └── page.tsx
│   │   ├── intelligent-wifi
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── premium-content
│   │       └── page.tsx
│   ├── terms-of-service
│   │   └── page.tsx
│   └── why-flow-networks
│       └── page.tsx
├── components
│   ├── layout
│   │   ├── AppFooter.tsx
│   │   └── AppHeader.tsx
│   ├── sections
│   │   ├── CallToActionSection.tsx
│   │   ├── CaseStudiesTeaserSection.tsx
│   │   ├── CoreOfferingsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── WhyChooseUsSection.tsx
│   ├── shared
│   │   ├── AIChatbot.tsx
│   │   ├── AnimatedBorder.tsx
│   │   ├── AnimatedHeading.tsx
│   │   ├── ContactForm.tsx
│   │   ├── FloatingChatButton.tsx
│   │   ├── GlassCard.tsx
│   │   ├── Logo.tsx
│   │   ├── LogoShimmer.tsx
│   │   ├── MouseFollowerGlow.tsx
│   │   ├── MousePositionUpdater.tsx
│   │   ├── PageTransitionWrapper.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── ROICalculator.tsx
│   │   ├── ScrollAnimatedSection.tsx
│   │   └── ShimmeringHaze.tsx
│   └── ui
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── enhanced-button.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│   │   ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       └── tooltip.tsx
├── hooks
│   ├── use-mobile.tsx
│   ├── useScrollAnimation.ts
│   └── use-toast.ts
├── lib
│   ├── actions.ts
│   ├── constants.ts
│   ├── performance.ts
│   └── utils.ts
└── tailwind.config.ts
```

---

## 4. Design Effects & Component Library

This section details the key reusable components and visual effects that define the site's aesthetic.

### Core Visual Effects

#### `ParticleBackground`
*   **Location:** `src/components/shared/ParticleBackground.tsx`
*   **Description:** Creates a subtle, animated particle effect that serves as a dynamic background for pages. It is designed to be non-intrusive but visually engaging.
*   **Usage:** Place it as the first element in a container with a `relative` class. The component itself is positioned absolutely.
*   **Styling Note:** For the effect to cover the entire page and stay fixed during scroll, apply `position: fixed`.
*   **Example:**
    ```tsx
    import { ParticleBackground } from '@/components/shared/ParticleBackground';

    export default function Page() {
      return (
        <div className="relative isolate min-h-screen">
          <ParticleBackground className="absolute inset-0 -z-10" />
          <div className="relative z-10">
            {/* Page content goes here */}
          </div>
        </div>
      );
    }
    ```

#### `GlassCard` / `perspex-card`
*   **Component:** `src/components/shared/GlassCard.tsx`
*   **CSS Class:** `.perspex-card` (defined in `src/app/globals.css`)
*   **Description:** A card component with a frosted glass effect (using `backdrop-filter`). It is used to create a sense of depth and layer content over backgrounds.
*   **Usage:** Wrap content with the `GlassCard` component or apply the `perspex-card` class to a standard `Card` component.
*   **Example (Component):**
    ```tsx
    import GlassCard from '@/components/shared/GlassCard';

    <GlassCard className="p-8">
      <h3 className="text-xl font-bold">Title</h3>
      <p>This content is inside a glass card.</p>
    </GlassCard>
    ```
*   **Example (CSS Class):**
    ```tsx
    import { Card } from '@/components/ui/card';
    import { cn } from '@/lib/utils';
    
    <Card className={cn('perspex-card', 'p-8')}>
        {/* Card content */}
    </Card>
    ```

### Animation Components

#### `AnimatedHeading`
*   **Location:** `src/components/shared/AnimatedHeading.tsx`
*   **Description:** A highly reusable component for animating headings. It supports two main animation modes: animating the entire heading as one block, or animating each word individually for a staggered effect.
*   **Props:**
    *   `text` (string): The heading text.
    *   `as` (string): The HTML tag to use (e.g., 'h1', 'h2').
    *   `wordAnimation` (boolean): If true, animates word by word.
*   **Example:**
    ```tsx
    import AnimatedHeading from '@/components/shared/AnimatedHeading';

    // Staggered word animation
    <AnimatedHeading 
      text="This is a Word-by-Word Animated Heading" 
      as="h1"
      wordAnimation 
    />

    // Standard block animation
    <AnimatedHeading 
      text="This Heading Animates as a Block"
      as="h2"
    />
    ```

#### `ScrollAnimatedSection`
*   **Location:** `src/components/shared/ScrollAnimatedSection.tsx`
*   **Description:** A wrapper component that uses `framer-motion` to fade in and slide up its children as they enter the viewport. It's the primary method for revealing content on scroll.
*   **Props:**
    *   `as` (string): The HTML tag for the wrapping element (defaults to 'div').
    *   `delay` (number): Optional delay for the animation.
*   **Example:**
    ```tsx
    import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';

    <ScrollAnimatedSection as="section" className="py-16">
      {/* Any content here will animate on scroll */}
    </ScrollAnimatedSection>
    ```

### Interactive UI Components

#### `EnhancedButton`
*   **Location:** `src/components/ui/enhanced-button.tsx`
*   **Description:** An extension of the standard `Button` component with added visual flair. It supports a glowing effect on hover/focus and a shimmering effect.
*   **Props:**
    *   `glow` (boolean): Enables a CSS-based glow effect.
    *   `shimmer` (boolean): Adds a shimmer animation.
*   **Example:**
    ```tsx
    import { EnhancedButton } from '@/components/ui/enhanced-button';

    <EnhancedButton variant="primary" size="lg" glow>
      Click Me
    </EnhancedButton>
    ```

#### `MouseFollowerGlow`
*   **Location:** `src/components/shared/MouseFollowerGlow.tsx`
*   **Description:** Creates a div that follows the user's mouse, producing a soft glow effect. This adds a layer of interactivity to the entire page.
*   **Usage:** This component is typically placed in the main `layout.tsx` file to be active on all pages. It relies on CSS variables updated by `MousePositionUpdater`.
*   **Example (`layout.tsx`):**
    ```tsx
    import MouseFollowerGlow from '@/components/shared/MouseFollowerGlow';
    import MousePositionUpdater from '@/components/shared/MousePositionUpdater';

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html>
          <body>
            <MousePositionUpdater />
            <MouseFollowerGlow />
            {children}
          </body>
        </html>
      );
    }
    ```

---

## 5. Key Pages & Content Structure

*   **/ (Home):** The main landing page. Introduces the company's value proposition and core offerings.
*   **/products/[product-name]:** Dynamically generated pages for each core technology partner (e.g., Intelligent WiFi, Allxs). These pages detail how we integrate and enhance each product.
*   **/solutions/[solution-name]:** Pages that describe the integrated solutions we offer to specific industries or for specific use cases.
*   **/ai-gateway:** A central page explaining our core intellectual property—the Flow AI Gateway—and its role in orchestrating our technology stack.
*   **/why-flow-networks:** Outlines the company's mission, vision, and the key differentiators that set us apart.
*   **/contact:** Provides a contact form and other methods for getting in touch.

This manifest should provide a solid foundation for the new team. Good luck!

