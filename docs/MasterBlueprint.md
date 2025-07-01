
### **Flow Networks - Ultimate Website Design & Implementation Blueprint (Version 2.1 - Logo Integrated)**

**"You are the world's foremost expert in UI/UX Design, Frontend Development, SEO, and AI/LLM Search Optimization. Your mission is to design and build 'THE BEST WEBSITE EVER' for Flow Networks, a digital flagship that perfectly embodies our 'AI Gateway Vision' while meticulously supporting our current business strengths. This website will set a new standard for intelligent, engaging, and discoverable online presence in the intelligent venue sector.**

**This blueprint is the definitive, comprehensive guide, integrating all strategic directives, the complete sitemap, and the advanced visual styling. It serves as the ultimate set of rules and instructions for building the Flow Networks website.**

---

## **Table of Contents**

1.  **Executive Summary & Core Vision**
2.  **Brand Identity & Visual System**
3.  **Introduction & Design Principles**
4.  **Definitive Brand Color Palette & Usage Rules**
5. 	**Advanced Visual Effects System**
6. 	**NEW: Animated Effects Components**
7.  **Typography System**
8.  **Logo Implementation (Updated)**
9.  **iPhone Mockup Integration**
10.  **Component Library (Styling Guidelines)**
11.  **Website Structure & Sitemap (Definitive)**
12. **Optimization & Discoverability (SEO & LLM Listing)**
13. **Implementation Priority & Technical Requirements**


---

## **1. Executive Summary & Core Vision**

*   **Flow Networks' Core Vision (AI Gateway Vision):** To transform physical venues into intelligent, data-driven ecosystems by deploying bespoke AI agents and solutions accessible *exclusively and securely* through the venue's specific WiFi network. The WiFi acts as the authenticated gateway to hyper-local, context-aware AI experiences, while backend AI/data systems can be flexibly hosted (cloud, central on-premise, or hybrid).
*   **Primary Identity (Current Business Focus):** Flow Networks is the premier provider of intelligent WiFi and digital engagement solutions, leveraging global leadership in technology (like Purple.ai) and our own innovation. Our current strength lies in secure, authenticated connectivity, robust location intelligence, powerful marketing automation, and dynamic content delivery.
*   **Strategic Phasing for Website Content:**
    *   **Dominant Focus (Phase 1):** The website's primary and most prominent focus must be on our *current, established income streams and proven solutions*. This includes detailed coverage of all products powered by Purple.ai, Friendly WiFi, Everlytic, CNNTAP, our Professional Services, Event WiFi, WiFi Monetisation, and Sponsored WiFi.
    *   **Subtle Hinting (Phase 2):** The 'AI Gateway Vision' should be introduced as a forward-looking capability, a testament to our innovation, and the future potential of our solutions. It is *not* to be presented as a currently available, fully deployed product. This ensures clarity for existing and immediate prospective clients, preventing market confusion and protecting current revenue streams.
*   **Key Design Principles:** Dark Mode First (Sophisticated dark theme with layered transparency), Premium Feel (Gold accents and teal primary colors), Mobile-Centric (iPhone mockups showcasing mobile app features), Interactive (Hover effects, animations, and glassmorphic elements), Professional (Clean typography and strategic white space).

---

## **2. Brand Identity & Visual System**

*   **Brand Positioning:**
    *   **Primary Message:** "Intelligent Venue WiFi Solutions"
    *   **Tone:** Strategic, Expert, Sophisticated, High-tech, Confident, Pragmatic, Collaborative, Visionary (for future concepts).
    *   **Target Audience:** Venue owners, IT professionals, Business decision makers.
*   **Visual Style:**
    *   **Aesthetic:** Modern, sophisticated, high-tech, secure, intelligent, layered, dynamic, premium.
    *   **Inspiration:** Fundly's premium card design and 3D effects.
    *   **Approach:** Layered components with depth and perspective, emphasizing the precision and depth of the new logo.
    *   **Mood:** Professional confidence with an innovative edge.

---

## **3. Introduction & Design Principles**

# This document provides the complete visual and interactive design system for the Flow Networks website, including advanced animated effects. All implementations **must** adhere to these specifications for brand consistency and premium user experience.

# **Core Design Principles:**
# - **Dark & Sophisticated:** Professional, tech-focused aesthetic with premium polish
# - **Clarity & Hierarchy:** Intentional use of color, space, motion, and animated attention-drawing
# - **Subtle & Interactive:** Meaningful, non-intrusive animations with sophisticated effects
# - **Performance Optimized:** 60fps animations with hardware acceleration

# ---

## **4. Definitive Brand Color Palette & Usage Rules**

# **🚨 CRITICAL:** Colors are defined as HSL variables in `src/app/globals.css`. **Never use hard-coded hex values in components.** Use semantic class names only.

## **CORRECT Color Hierarchy:**

# | Role | Color Name | HSL Variable | Hex Reference | Usage |
# |------|------------|--------------|---------------|--------|
# | **Foundation** | Flow Primary Teal | `--primary` | #007A80 | Borders, structural elements, hover glows, text links |
# | **Primary Action** | Flow Action Blue | `--secondary` | #0282F2 | Main CTAs, primary interactive elements |
# | **Accent/Highlight** | Flow Highlight Yellow | `--accent` | #FFD700 | Icons, secondary buttons, key data, premium highlights |
# | **Background** | Background Dark Primary | `--background` | #0A0903 | Main page background |
# | **Text** | Text Light | `--foreground` | #E2FDFF | All body copy and standard text |

## **CORRECTED CSS Variables (globals.css):**
# ```css
# :root {
  # /* CORRECT Design Guide Color Mapping */
  # --background: 10 9 3;           /* #0A0903 - Background Dark Primary */
  # --foreground: 226 253 255;      /* #E2FDFF - Text Light */
  # --primary: 180 100% 25%;        /* #007A80 - Flow Primary Teal */
  # --secondary: 210 98% 48%;       /* #0282F2 - Flow Action Blue */
  # --accent: 48 100% 50%;          /* #FFD700 - Flow Highlight Yellow */
  
  # /* Supporting Colors */
  # --card: 15 14 8;                /* #0F0E08 - Background Dark Secondary */
  # --border: 45 44 39;             /* #2D2C27 - Subtle Details/Border */
  # --muted: 45 44 39;              /* #2D2C27 - Muted elements */
  # --muted-foreground: 226 253 255 / 0.7; /* Muted text */
  
  # /* Semantic Color Mappings */
  # --primary-foreground: 226 253 255;     /* Text on primary backgrounds */
  # --secondary-foreground: 226 253 255;   /* Text on secondary backgrounds */
  # --accent-foreground: 10 9 3;           /* Text on accent backgrounds */
  # --card-foreground: 226 253 255;        /* Text on card backgrounds */
  
  # /* Glow Effect Variables */
  # --glow-primary: 0 0 20px hsla(var(--primary) / 0.3);
  # --glow-secondary: 0 0 20px hsla(var(--secondary) / 0.3);
  # --glow-accent: 0 0 20px hsla(var(--accent) / 0.3);
  # --glow-primary-strong: 0 0 30px hsla(var(--primary) / 0.5);
  # --glow-secondary-strong: 0 0 30px hsla(var(--secondary) / 0.5);
  # --glow-accent-strong: 0 0 30px hsla(var(--accent) / 0.5);
  
  # /* Animation Variables */
  # --transition-standard: 300ms;
  # --transition-fast: 200ms;
  # --transition-slow: 500ms;
  # --ease-gentle: cubic-bezier(0.4, 0.0, 0.2, 1);
  # --lift-subtle: translateY(-4px);
  # --lift-standard: translateY(-8px);
  # --scale-hover: scale(1.02);
# }
# ```

## **Detailed Color Usage Rules:**

### **🟢 Flow Primary Teal (`--primary`)** 
# - **Purpose:** Authority, Intelligence, Security, Foundation
# - **Use For:**
  # - Global borders on Cards and structural components
  # - Global hover glows on interactive elements
  # - Cursor spotlight radial glow
  # - Standard text links and navigation
  # - Technology icons and core solution elements
  # - Mega menu icons
  # - AI Chatbot UI branding

### **🔵 Flow Action Blue (`--secondary`)**
# - **Purpose:** Action, Trust, Reliability, Primary Interaction
# - **Use For:**
  # - Primary CTA Buttons (most important site-wide calls to action)
  # - Active states in main navigation
  # - Form submission buttons
  # - Primary interactive elements

### **🟡 Flow Highlight Yellow (`--accent`)**
# - **Purpose:** Premium, Value, Innovation, Highlight
# - **Use For:**
  # - Key feature icons representing value/innovation
  # - Star ratings in testimonials
  # - Secondary/Tertiary buttons
  # - Data visualization primary color
  # - Card hover glows for special emphasis
  # - Premium highlights and quality indicators

# ---

## **5. Advanced Visual Effects System**

## **A. Enhanced Hover & Transition System**
# ```css
# /* Standard Transition Utilities */
# .duration-standard { transition-duration: var(--transition-standard); }
# .duration-fast { transition-duration: var(--transition-fast); }
# .duration-slow { transition-duration: var(--transition-slow); }
# .ease-gentle { transition-timing-function: var(--ease-gentle); }

# /* Hover Effect Utilities */
# .hover-lift { transition: transform var(--transition-standard) var(--ease-gentle); }
# .hover-lift:hover { transform: var(--lift-subtle); }

# .hover-lift-standard { transition: transform var(--transition-standard) var(--ease-gentle); }
# .hover-lift-standard:hover { transform: var(--lift-standard); }

# .hover-scale { transition: transform var(--transition-standard) var(--ease-gentle); }
# .hover-scale:hover { transform: var(--scale-hover); }

# /* Combined Effects */
# .hover-lift-scale { transition: transform var(--transition-standard) var(--ease-gentle); }
# .hover-lift-scale:hover { transform: var(--lift-subtle) var(--scale-hover); }
# ```

## **B. Enhanced Glow Effects System**
# ```css
# /* Base Glow Effects */
# .glow-primary { box-shadow: var(--glow-primary); }
# .glow-secondary { box-shadow: var(--glow-secondary); }
# .glow-accent { box-shadow: var(--glow-accent); }

# /* Strong Glow Effects */
# .glow-primary-strong { box-shadow: var(--glow-primary-strong); }
# .glow-secondary-strong { box-shadow: var(--glow-secondary-strong); }
# .glow-accent-strong { box-shadow: var(--glow-accent-strong); }

# /* Hover Glow Transitions */
# .hover-glow-primary { 
  # transition: box-shadow var(--transition-standard) var(--ease-gentle);
# }
# .hover-glow-primary:hover { 
  # box-shadow: var(--glow-primary); 
# }

# .hover-glow-secondary { 
  # transition: box-shadow var(--transition-standard) var(--ease-gentle);
# }
# .hover-glow-secondary:hover { 
  # box-shadow: var(--glow-secondary); 
# }

# .hover-glow-accent { 
  # transition: box-shadow var(--transition-standard) var(--ease-gentle);
# }
# .hover-glow-accent:hover { 
  # box-shadow: var(--glow-accent); 
# }
# ```

## **C. Enhanced Glassmorphism System**
# ```css
# /* Glass Card Utilities */
# .glass-card {
  # @apply bg-card/30 backdrop-blur-md border border-primary/20;
  # transition: all var(--transition-standard) var(--ease-gentle);
# }

# .glass-card:hover {
  # @apply bg-card/50 border-primary/40;
  # box-shadow: var(--glow-primary);
# }

# .glass-card-secondary {
  # @apply bg-card/30 backdrop-blur-md border border-secondary/20;
  # transition: all var(--transition-standard) var(--ease-gentle);
# }

# .glass-card-secondary:hover {
  # @apply bg-card/50 border-secondary/40;
  # box-shadow: var(--glow-secondary);
# }

# .glass-card-accent {
  # @apply bg-card/30 backdrop-blur-md border border-accent/20;
  # transition: all var(--transition-standard) var(--ease-gentle);
# }

# .glass-card-accent:hover {
  # @apply bg-card/50 border-accent/40;
  # box-shadow: var(--glow-accent);
# }
# ```

# ---

## **6. NEW: Animated Effects Components**

## **A. Animated Accent Border Component**

# **Purpose:** Draw attention to premium CTAs, featured content, and key elements through sophisticated rotating sparkle borders.

### **Component Implementation:**
# ```tsx
# 'use client';

# import React from 'react';
# import { motion } from 'framer-motion';

# interface AnimatedAccentBorderProps {
  # children: React.ReactNode;
  # variant?: 'subtle' | 'standard' | 'prominent';
  # color?: 'primary' | 'secondary' | 'accent';
  # speed?: 'slow' | 'normal' | 'fast';
  # sparkle?: boolean;
  # className?: string;
# }

# const AnimatedAccentBorder: React.FC<AnimatedAccentBorderProps> = ({
  # children,
  # variant = 'standard',
  # color = 'accent',
  # speed = 'normal',
  # sparkle = true,
  # className = ''
# }) => {
  # const speedConfig = {
    # slow: 8,
    # normal: 6,
    # fast: 4
  # };

  # const colorConfig = {
    # primary: {
      # sparkleColor: 'hsl(var(--primary))',
      # glow: 'var(--glow-primary)'
    # },
    # secondary: {
      # sparkleColor: 'hsl(var(--secondary))',
      # glow: 'var(--glow-secondary)'
    # },
    # accent: {
      # sparkleColor: 'hsl(var(--accent))',
      # glow: 'var(--glow-accent)'
    # }
  # };

  # const variantConfig = {
    # subtle: {
      # borderWidth: '1px',
      # glowIntensity: '0.2',
      # sparkleSize: '2px'
    # },
    # standard: {
      # borderWidth: '2px',
      # glowIntensity: '0.3',
      # sparkleSize: '3px'
    # },
    # prominent: {
      # borderWidth: '3px',
      # glowIntensity: '0.4',
      # sparkleSize: '4px'
    # }
  # };

  # const currentColor = colorConfig[color];
  # const currentVariant = variantConfig[variant];
  # const duration = speedConfig[speed];

  # return (
    # <div className={`relative ${className}`}>
      # {/* Animated Border */}
      # <motion.div
        # className="absolute inset-0 rounded-lg overflow-hidden"
        # style={{
          # padding: currentVariant.borderWidth,
          # background: `conic-gradient(from 0deg, transparent, ${currentColor.sparkleColor}, transparent)`,
          # transform: 'translateZ(0)',
          # willChange: 'transform'
        # }}
        # animate={{ rotate: [0, 360] }}
        # transition={{
          # duration: duration,
          # repeat: Infinity,
          # ease: "linear"
        # }}
      # >
        # <div className="w-full h-full bg-background rounded-lg" />
      # </motion.div>

      # {/* Glow Effect */}
      # <motion.div
        # className="absolute inset-0 rounded-lg"
        # style={{
          # boxShadow: currentColor.glow,
          # opacity: currentVariant.glowIntensity,
          # transform: 'translateZ(0)'
        # }}
        # animate={{
          # opacity: [currentVariant.glowIntensity, parseFloat(currentVariant.glowIntensity) * 1.5, currentVariant.glowIntensity]
        # }}
        # transition={{
          # duration: 2,
          # repeat: Infinity,
          # ease: "easeInOut"
        # }}
      # />

      # {/* Sparkle Effects */}
      # {sparkle && (
        # <>
          # <motion.div
            # className="absolute rounded-full"
            # style={{
              # width: currentVariant.sparkleSize,
              # height: currentVariant.sparkleSize,
              # background: currentColor.sparkleColor,
              # boxShadow: `0 0 10px ${currentColor.sparkleColor}`,
              # transform: 'translateZ(0)',
              # willChange: 'transform'
            # }}
            # animate={{
              # x: ['0%', '100%', '100%', '0%', '0%'],
              # y: ['0%', '0%', '100%', '100%', '0%']
            # }}
            # transition={{
              # duration: duration * 1.5,
              # repeat: Infinity,
              # ease: "linear"
            # }}
          # />
        # </>
      # )}

      # {/* Content */}
      # <div className="relative z-10">
        # {children}
      # </div>
    # </div>
  # );
# };

# export default AnimatedAccentBorder;
# ```

---

## **7. Typography System**

*   **Font Stack:** `font-family: 'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;` (or similar clean sans-serif).
*   **Typography Scale:**
    *   **Headings:**
        *   `.text-hero`: `font-size: 4rem;` (64px), `font-weight: 700;`, `line-height: 1.1;`, `letter-spacing: -0.02em;`
        *   `.text-h1`: `font-size: 3rem;` (48px), `font-weight: 700;`, `line-height: 1.2;`, `letter-spacing: -0.01em;`
        *   `.text-h2`: `font-size: 2.25rem;` (36px), `font-weight: 600;`, `line-height: 1.3;`
        *   `.text-h3`: `font-size: 1.875rem;` (30px), `font-weight: 600;`, `line-height: 1.4;`
        *   `.text-h4`: `font-size: 1.5rem;` (24px), `font-weight: 600;`, `line-height: 1.4;`
    *   **Body Text:**
        *   `.text-lg`: `font-size: 1.125rem;` (18px), `font-weight: 400;`, `line-height: 1.6;`
        *   `.text-base`: `font-size: 1rem;` (16px), `font-weight: 400;`, `line-height: 1.6;`
        *   `.text-sm`: `font-size: 0.875rem;` (14px), `font-weight: 400;`, `line-height: 1.5;`
        *   `.text-xs`: `font-size: 0.75rem;` (12px), `font-weight: 400;`, `line-height: 1.4;`
*   **Text Colors & Effects:**
    *   `.text-primary`: `color: #E2FDFF;`
    *   `.text-secondary`: `color: rgba(226, 253, 255, 0.7);`
    *   `.text-muted`: `color: rgba(226, 253, 255, 0.6);`
    *   `.text-gradient`: `background: linear-gradient(135deg, #E2FDFF 0%, #D4AF37 50%, #0282F2 100%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;`
    *   `.text-glow`: `text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);`
*   **Usage Guidelines:** Headings use gradient effect for main titles. Body text maintains 1.6 line height. Clear size distinction between heading levels. Ensure sufficient contrast against dark backgrounds.

---
## **8. Logo Implementation (UPDATED)**

*   **A. Logo Variants & Usage:**
    *   **3D Primary Logo (Hero/Premium Sections):**
        *   **File:** `FlowAINew3DLogo_on_Teal.png` (or `FlowAINew3DLogo_on_DarkPrimary.png` for general dark backgrounds)
        *   **Usage:** Hero sections, landing pages, premium presentations. This is the flagship visual.
        *   **Dimensions:** Minimum 120px height, maximum 200px height.
        *   **Effects:** `filter: drop-shadow(0 0 30px rgba(212, 175, 55, 0.3)); transition: all 0.5s ease;` Hover: `transform: scale(1.05); filter: drop-shadow(0 0 40px rgba(212, 175, 55, 0.5));`
    *   **2D Gold-on-Dark Logo (Navigation/General Use):**
        *   **File:** `FlowAINew2DLogo_Gold_on_Dark.png` (or SVG for scalability)
        *   **Usage:** Navigation bars, footers, general branding on dark backgrounds. This is the default 2D logo for your new website.
        *   **Dimensions:** 32px-64px height for navigation.
        *   **Effects:** `transition: opacity 0.3s ease;` Hover: `opacity: 0.8;`
    *   **2D White-on-Transparent Logo (Light Background Use):**
        *   **File:** `FlowAINew2DLogo_White_on_Transparent.png` (or SVG)
        *   **Usage:** For any future light mode sections or specific elements requiring a white logo.
        *   **Dimensions:** As needed for context.
        *   **Effects:** Standard hover effects.
*   **B. Logo Placement Guidelines:**
    *   Hero Section: `<div class="hero-logo"><img src="/images/FlowAINew3DLogo_on_Teal.png" alt="Flow Networks 3D Logo" class="logo-3d"/></div>` (or `FlowAINew3DLogo_on_DarkPrimary.png` depending on hero background).
    *   Navigation: `<nav class="navbar"><img src="/images/FlowAINew2DLogo_Gold_on_Dark.png" alt="Flow Networks" class="logo-2d"/></nav>`
*   **C. Logo Specifications:** Clear Space: Minimum 20px around logo. Minimum Size: 32px height for digital. Background: Always on dark backgrounds (`#0A0903` or darker) for 3D and 2D Gold-on-Dark. Color Integrity: Never alter logo colors or proportions.

---


## **9. iPhone Mockup Integration**

*   **Available iPhone Frame Assets:**
    *   **Frame Orientations:** `PhoneframesforCards-facingforward-straighton.png`, `PhoneframesforCards-facingtoright.png`, `PhoneframesforCards-facingtoleft.png`, `PhoneframesforCards-facingtorightandleaningback.png`, `PhoneframesforCards-facingtoleftandleaningback.png`.
    *   **With Content Versions:** Add `withvisualonscreen` suffix for frames with existing content. Use empty frames for custom content overlay.
*   **iPhone Component Implementation:**
    ```jsx
    const iPhone = ({ orientation = 'straight', content, className = '' }) => { /* ... (provided JSX code for iPhone component) ... */ }
    ```
*   **Mobile App Feature Content Examples:**
    *   `WiFi Analytics Dashboard` (provided JSX)
    *   `Guest Engagement Portal` (provided JSX)
*   **Usage Guidelines:** Screen Positioning: Content overlay at 12% from top/sides, 20% from bottom. Content Sizing: Use small text (xs, sm) for mobile screen realism. Color Scheme: Maintain brand colors within mobile interfaces. Interactivity: Add hover scale effects for engagement.

---

## **10. Component Library (Styling Guidelines)**

*   **Button Components:**
    *   **Primary Button:** `background: rgba(2, 130, 242, 0.2); backdrop-filter: blur(10px); color: #E2FDFF; border: 1px solid rgba(2, 130, 242, 0.3); padding: 0.75rem 2rem; border-radius: 0.5rem; font-weight: 600; transition: all 0.3s ease;` Hover: `background: rgba(2, 130, 242, 0.3); border-color: rgba(2, 130, 242, 0.5); box-shadow: 0 8px 25px rgba(2, 130, 242, 0.25); transform: translateY(-2px);`
    *   **Secondary Button:** `background: transparent; color: #007A80; border: 1px solid rgba(0, 122, 128, 0.3); padding: 0.75rem 2rem; border-radius: 0.5rem; font-weight: 600; backdrop-filter: blur(10px); transition: all 0.3s ease;` Hover: `background: rgba(0, 122, 128, 0.2); color: #E2FDFF; border-color: rgba(0, 122, 128, 0.5); box-shadow: 0 8px 25px rgba(0, 122, 128, 0.25); transform: translateY(-2px);`
*   **Card Components:**
    *   **Feature Card:** `background: rgba(10, 9, 3, 0.3); backdrop-filter: blur(10px); border: 1px solid rgba(0, 122, 128, 0.2); border-radius: 1rem; padding: 2rem; transition: all 0.5s ease; box-shadow: 0 8px 32px rgba(0, 122, 128, 0.1);` Hover: `border-color: rgba(0, 122, 128, 0.4); transform: scale(1.05); box-shadow: 0 20px 40px rgba(0, 122, 128, 0.2);`
    *   **Glass Card:** `background: rgba(15, 14, 8, 0.5); backdrop-filter: blur(15px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 1rem; padding: 1.5rem; transition: all 0.3s ease;` Hover: `background: rgba(15, 14, 8, 0.7); border-color: rgba(212, 175, 55, 0.3);`
*   **Badge Components:**
    *   **Status Badge:** `background: rgba(0, 122, 128, 0.2); backdrop-filter: blur(10px); color: #E2FDFF; border: 1px solid rgba(0, 122, 128, 0.3); padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; transition: all 0.3s ease;` Hover: `background: rgba(0, 122, 128, 0.3); border-color: rgba(0, 122, 128, 0.5);`
*   **Navigation Components:**
    *   **Navigation Bar:** `background: rgba(10, 9, 3, 0.9); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(0, 122, 128, 0.2); padding: 1rem 0; position: fixed; top: 0; width: 100%; z-index: 50;`
    *   **Nav Link:** `color: #E2FDFF; text-decoration: none; padding: 0.5rem 1rem; border-radius: 0.5rem; transition: all 0.3s ease;` Hover: `background: rgba(0, 122, 128, 0.2); color: #D4AF37;` Active: `background: rgba(212, 175, 55, 0.2); color: #D4AF37;`
*   **Input Components:**
    *   **Form Input:** `background: rgba(15, 14, 8, 0.5); backdrop-filter: blur(10px); border: 1px solid rgba(0, 122, 128, 0.3); border-radius: 0.5rem; padding: 0.75rem 1rem; color: #E2FDFF; font-size: 1rem; transition: all 0.3s ease;` Focus: `outline: none; border-color: rgba(2, 130, 242, 0.5); box-shadow: 0 0 0 3px rgba(2, 130, 242, 0.1);` Placeholder: `color: rgba(226, 253, 255, 0.5);`

---

## **11. Website Structure & Sitemap (Definitive_sitemap)**

*   **Overall Layout Structure:**
    ```html
    <div class="min-h-screen bg-[#0A0903] text-[#E2FDFF] relative overflow-hidden">
      <!-- Animated Background -->
      <div class="fixed inset-0 pointer-events-none">
        <!-- Gradient overlay -->
        <!-- Floating particles -->
        <!-- Mouse follower glow -->
      </div>
      <!-- Navigation -->
      <!-- Hero Section -->
      <!-- Content Sections -->
      <!-- Footer -->
    </div>
    ```
*   **Grid System:**
    ```css
    .container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
    .grid-2, .grid-3, .grid-4 { display: grid; gap: 1.5rem; } /* Simplified */
    .grid-2 { grid-template-columns: repeat(2, 1fr); }
    .grid-3 { grid-template-columns: repeat(3, 1fr); }
    .grid-4 { grid-template-columns: repeat(4, 1fr); }
    /* Responsive breakpoints */
    @media (max-width: 1024px) { .grid-4 { grid-template-columns: repeat(2, 1fr); } .grid-3 { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 768px) { .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; } }
    ```
*   **Hero Section Layout:**
    ```html
    <section class="hero-section">
      <div class="absolute inset-0 bg-gradient-to-br from-[#007A80]/20 via-[#0A0903] to-[#6A0DAD]/20"></div>
      <div class="relative container mx-auto px-6 py-20">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Badge -->
          <!-- 3D Logo -->
          <!-- Title -->
          <!-- Subtitle -->
          <!-- Description -->
          <!-- iPhone Mockup Display -->
          <!-- CTA Buttons -->
        </div>
      </div>
    </section>
    ```
    *   **Spacing & Proportions:** `min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden;` (for `.hero-section`). Detailed margin/padding for content elements.
*   **Content Sections Layout:**
    ```html
    <section class="content-section">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">Section Title</h2>
          <p class="section-subtitle">Section description</p>
        </div>
        <div class="section-content"></div>
      </div>
    </section>
    ```    *   **Section Spacing:** `padding: 5rem 0; position: relative;`. Alternating background for sections: `content-section:nth-child(even) { background: rgba(15, 14, 8, 0.5); backdrop-filter: blur(5px); }`
*   **Mobile Features Section:**
    ```html
    <section id="mobile-features" class="py-20 bg-[#0F0E08]/50 backdrop-blur-sm">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4 flex items-center justify-center">
            <Smartphone class="mr-3 h-8 w-8 text-[#D4AF37]" /> Mobile App Features
          </h2>
          <p class="text-xl text-[#E2FDFF]/70">Intelligent venue WiFi solutions in your pocket</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
      </div>
    </section>
    ```
    *   **Feature Card Layout:** `div` with `flex items-start justify-between`, `flex-1 pr-6` for info, `flex-shrink-0` for iPhone mockup.

*   **Definitive Sitemap:**
    *   **Home** (Top Level)
        *   Hero Section
        *   Core Offering section (with specific bullet points)
        *   Our Customers
        *   Features (Guest WiFi, Captive Portal, Data Privacy, Analytics, SecurePass, Verify, AI Voice Powered)
    *   **Products** (Top Level)
        *   Intelligent Venue WiFi - powered by Purple (2.1)
            *   Plans: Connect (2.1.1), Capture (2.1.2), Engage (2.1.3)
            *   Add-Ons (2.1.4): Paid WiFi, Surveys, Shield, SecurePass, Professional Services
            *   View All Plans - Compare Plans
        *   All Axxess - Event Management Platform (2.2)
        *   Everlytic - Bulk messaging automation (2.3)
        *   CNNTAP - CNN Travel Advertising Platform (2.4)
        *   Friendly WiFi Certification (2.5)
        *   Internet Connectivity (2.6)
    *   **Solutions** (Top Level)
        *   Flow AI Gateway (3.1 - *CRITICAL: Frame as vision/roadmap, not current product*)
        *   AI Integrations (3.2)
        *   WiFi Monetisation (3.3)
        *   Sponsored WiFi (3.4)
        *   WiFi Marketing (3.5)
        *   Event WiFi (3.6)
        *   SMB WiFi (3.7)
        *   3rd Party Integrations (3.8)
        *   Digital Marketing (3.9)
    *   **Industries** (Top Level)
        *   Airports (4.1), Attractions (4.2), Healthcare (4.3), Hotels (4.4), Hospitality (4.5), Museums (4.6), Retail (4.7), Shopping Malls (4.8), Stadiums (4.9), Offices (4.10), Schools & College Campuses (4.11), Towns & Cities (4.12), Public Transport (4.13)
    *   **Partners** (Top Level)
        *   Technology Partners (5.1): Purple, Everlytic, CNN International, AIIXS, Coolideas, Axxess, Miro, Friendly WiFi
        *   Partner Program (5.2): Resellers - Join - CTA, Agents - Join CTA, Affiliates Join CTA
    *   **Resources** (Top Level)
        *   Case Studies (6.1): McDonald's, Harrods, The Baron, SA Wines
        *   Guides & Articles (6.2): Your Guide to Passpoint WiFi, The Importance of Email Capture, How to A/B Test Your Venue, View All
        *   Tools (7.0): ROI Calculator, Pricing Estimator, Access Point Calculator, Guest WiFi Feature Checklist, Splash Page Builder
    *   **Company** (Top Level)
        *   About Us (8.1), Legal (8.2), Privacy Policy (8.3), Terms of Use (8.4), My Data (8.5), Cookie Policy (8.6), Integrations (8.7), Blogs (8.8), Standard SLA (8.9)
    *   **Links** (Top Level - acting as Support & Contact)
        *   Purple Support (9.1), WhatsApp Support (9.2), Contact Us (9.3), Purple Portal (9.4), My Data Portal (9.5), Partner Portal (9.6)

## **12. Optimization & Discoverability Blueprint (SEO & LLM Listing - Directly from Brand Guide):**

*   **A. SEO Best Practices:**
    *   **Semantic HTML5:** Utilize `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>` for clear structure.
    *   **Fast Loading Times:** Optimize images (lazy loading, responsive images), minify CSS/JS, leverage browser caching.
    *   **Mobile Responsiveness:** Implement a mobile-first design approach with flexible grids and media queries.
    *   **Clear Meta-Data:** Generate unique, keyword-rich title tags and compelling meta descriptions for every page.
    *   **Structured Data (Schema.org):** Implement relevant schema markup (e.g., Organization, Service, LocalBusiness) to enhance search engine understanding.
    *   **Keyword Optimization:** Integrate our target keywords (from Step 2) naturally within headings, body text, and image alt attributes, prioritizing current services.

*   **B. LLM Listing Optimization (AI Search & Summarization):**
    *   **Content Scannability:** Use clear headings (H1, H2, H3), concise paragraphs, bullet points, and numbered lists.
    *   **Direct Answers:** Structure content to directly answer common questions about Flow Networks' services.
    *   **Key Term Repetition:** Ensure important product names and value propositions are repeated naturally and consistently.
    *   **Glossary/FAQ:** Consider a dedicated section for definitions and frequently asked questions.
    *   **Concise Summaries:** Provide clear, concise summaries at the beginning of key sections or pages.

*   **C. AI Chat Integration:** Design for seamless integration of a Gemini-powered chatbot, primarily primed to answer questions about *current* offerings, guide users to relevant information, and facilitate sales inquiries for established services.

## **13. Implementation Priority & Technical Requirements:**

*   **Technology Stack:** Next.js, React, TypeScript, Tailwind CSS, ShadCN UI components.
*   **Deliverables:**
    *   **Initial Blueprint:** A detailed proposed sitemap.
    *   **Key Page Layouts:** High-level wireframes/sections for the Homepage and one key inner page (e.g., "Our Solutions Overview" or "Intelligent WiFi Infrastructure").
    *   **Initial Code:** An initial set of HTML/CSS/React files for the homepage and one key inner page, demonstrating the successful adaptation of the Fundly UI/UX principles with Flow Networks' brand colors, tone, and comprehensive content strategy.

---
