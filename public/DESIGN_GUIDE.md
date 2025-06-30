
# Flow Networks: Brand & Visual Implementation Guide

**Version:** 3.0
**Last Updated:** 2025-06-30

## 1. Introduction

This document provides a comprehensive guide for the visual and interactive design of the Flow Networks website. Its purpose is to ensure brand consistency, development efficiency, and a premium, cohesive user experience. All new components and pages **must** adhere to these guidelines.

**Core Design Principles:**
*   **Dark & Sophisticated:** Utilize a dark theme to create a professional, tech-focused aesthetic.
*   **Clarity & Hierarchy:** Guide the user's eye through intentional use of color, space, and motion.
*   **Subtle & Interactive:** Enhance user experience with meaningful, non-intrusive animations and feedback.

---

## 2. Color Palette & Usage Rules

Colors are defined as HSL variables in `src/app/globals.css` and consumed by Tailwind CSS. **Never use hard-coded hex values in components.** Use semantic class names (`bg-primary`, `text-accent`, etc.).

### Color Hierarchy:

| Role                | Color Name             | HSL Variable      | Usage                                                  |
| ------------------- | ---------------------- | ----------------- | ------------------------------------------------------ |
| **Foundation**      | Flow Primary Teal      | `--primary`       | Borders, structural elements, hover glows, text links  |
| **Primary Action**  | Flow Action Blue       | `--secondary`     | Main CTAs, primary interactive elements                |
| **Accent/Highlight**| Flow Highlight Yellow  | `--accent`        | Icons, secondary buttons, key data, premium highlights |
| **Background**      | Background Dark Primary| `--background`    | Main page background                                   |
| **Text**            | Text Light             | `--foreground`    | All body copy and standard text                        |


### Detailed Color Rules:

#### 🔵 Flow Action Blue (`--secondary`)
*   **Purpose:** Action, Trust, Reliability, Primary Interaction.
*   **Use For:**
    *   **Primary CTA Buttons:** Reserved for the most important, site-wide calls to action (e.g., "Contact Sales" in Header, "Request a Consultation" in CTA sections). Use the `.btn-secondary-glow` class.
    *   **Active States:** Highlighting the current page in the main navigation.
    *   **Form Submission Buttons:** The main "submit" action on forms.

#### 🟡 Flow Highlight Yellow (`--accent`)
*   **Purpose:** Premium, Value, Innovation, Highlight.
*   **Use For:**
    *   **Key Feature Icons:** Icons that represent value or innovation (e.g., `WhyChooseUsSection`, `HomepageKeyPointsSection`).
    *   **Highlighting Quality:** Star ratings in testimonials.
    *   **Secondary/Tertiary Buttons:** Buttons that are important but not the primary site-wide CTA. Use the `.btn-accent-glow` class for gold buttons, or the `variant="outline"` button which uses the accent color for its text and border.
    *   **Data Visualization:** A primary color for charts and graphs.
    *   **Card Hover Glows:** For cards needing special emphasis (e.g., testimonials).

#### 🟢 Flow Primary Teal (`--primary`)
*   **Purpose:** Authority, Intelligence, Security, Foundation. This is the dominant brand color.
*   **Use For:**
    *   **Global Borders:** The default border color for all Cards and structural components.
    *   **Global Hover Glows:** The default hover glow effect on interactive elements like Cards.
    *   **Cursor Spotlight:** The radial glow that follows the mouse cursor.
    *   **Standard Text Links:** All in-text hyperlinks.
    *   **Technology Icons:** Icons representing core technology and solutions (e.g., AI Gateway, Solutions pages).
    *   **Mega Menu Icons:** All icons within the main header's dropdown navigation.
    *   **AI Chatbot UI:** Key elements of the chatbot interface to brand it as a core feature.

---

## 3. Advanced Visual Design Elements

These effects are defined in `src/app/globals.css` and should be applied using the provided utility classes.

### A. Hover & Transition System
*   **Goal:** Create smooth, consistent animations for all interactive elements.
*   **Implementation:** Use Tailwind utility classes that map to predefined CSS variables.
    *   `duration-standard` (300ms) for most transitions.
    *   `ease-gentle` for smooth, professional easing.
    *   `.hover-lift`: Applies a standard `translateY(-4px)` on hover.
    *   `.hover-scale`: Applies a standard `scale(1.05)` on hover.

### B. Glow Effects
*   **Goal:** Add depth and visual feedback on hover.
*   **Implementation:**
    *   **Component Glows:** Achieved with `box-shadow` using HSL variables (e.g., `var(--glow-teal)`). The base `Card` component has a default Teal glow on hover.
    *   **Cursor Spotlight:** A radial gradient is fixed to the `body` and positioned using `--mouse-x` and `--mouse-y` variables, which are updated via a `mousemove` event listener in `ParticleBackground.tsx`. This effect is global.

### C. Glassmorphism
*   **Goal:** Create a semi-transparent, layered UI for elements like the header and cards.
*   **Implementation:** Use the `.glass-card` utility class. This class applies a semi-transparent `background-color`, a `backdrop-filter: blur(10px)`, and a subtle border.

---

## 4. Component-Specific Implementation

### A. Hero Section (`page.tsx`)
*   **Background:** A dark, full-width image with a gradient overlay to ensure text readability.
*   **Headline:** The primary headline uses the `AnimatedHeading` component with `wordAnimation` for a staggered, impactful entrance. Font size is large and uses the `font-headline`.
*   **Buttons:** A clear hierarchy is used:
    *   **Primary CTA:** Uses the `EnhancedButton` component with `variant="secondary"` (Flow Action Blue).
    *   **Secondary CTA:** Uses the `EnhancedButton` component with `variant="tertiary"` (Flow Accent Gold outline).
*   **Visual Flair:** An `AnimatedBorder` component wraps the hero image to provide a constantly moving, subtle gradient border.

### B. Mega Menu (`AppHeader.tsx`)
*   **Background:** The entire header uses a glassmorphism effect that becomes more pronounced on scroll.
*   **Layout:** The dropdown is a multi-column layout driven by the `subLinks` array in `src/lib/constants.ts`.
*   **Styling:**
    *   Icons are styled with the `primary` color (Teal).
    *   The background of the dropdown menu is a `glass-card`.
    *   Active parent navigation links are highlighted with a `primary/10` background color and subtle text shadow.

### C. Footer (`AppFooter.tsx`)
*   **Layout:** A multi-column grid that dynamically pulls links from `src/lib/constants.ts`.
*   **Styling:**
    *   Section headers are uppercase and use the `font-headline`.
    *   Links are `muted-foreground` by default and change to `primary` (Teal) on hover.
    *   The bottom bar contains legal links, copyright info (with a dynamically updated year), and social media icons.

---

## 5. Typography
*   **Font:** `Inter` is used for both headlines and body text, loaded in `src/app/layout.tsx`.
*   **Headings (`h1`, `h2`, etc.):** Use the `font-headline`. Color is `foreground` by default, but can be set to `text-primary` or `text-accent` for emphasis. The `AnimatedHeading` component should be used for all major page titles.
*   **Body Text:** Defaults to `text-foreground`.
*   **Links:** Default to `text-primary` (Teal).
