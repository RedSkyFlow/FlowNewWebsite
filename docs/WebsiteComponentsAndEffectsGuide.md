
# Flow Networks: Website Components & Effects Guide (v1.0)

**Purpose:** This guide is the definitive, practical reference for the Chief Website Designer, UX/UI specialists, and Content Creators. It details the **actual, implemented design components and visual effects** available for building the Flow Networks website. Use this document to plan page layouts, specify component usage, and create content with a clear understanding of the available tools.

---

## 1. Core Visual Effects (CSS Utility Classes)

These are utility classes that can be applied to standard elements and components to add visual flair. They are defined in `src/app/globals.css`.

### 1.1. Glassmorphism Card (`glass-card`)

A subtle, translucent card effect that glows on hover.

-   **Class:** `glass-card`
-   **Effect:** Creates a card with a semi-transparent background.
-   **Hover Effect:** The background becomes slightly more opaque, and the card's backdrop blurs.
-   **Usage:**
    ```html
    <div class="glass-card">
      <!-- Card content -->
    </div>
    ```
-   **Glow on Hover:** To add a colored glow on hover, combine this class with a `hover-glow-*` utility.
    ```html
    <div class="glass-card hover-glow-primary">
      <!-- This card will have a teal glow on hover -->
    </div>
    ```

### 1.2. High-Fidelity Perspex Card (`perspex-card`)

An ultra-realistic glass effect with layered edge lighting and corner glows that intensify on hover. This is a premium effect for feature cards.

-   **Class:** `perspex-card`
-   **Effect:** Creates a multi-layered glass look with colored edge lighting (Blue & Gold).
-   **Hover Effect:** The edge lighting and corner glows become more intense and vibrant.
-   **Usage:** Must be applied to a `Card` component that is a direct child of an element with the `group` class.
    ```html
    <div class="group">
      <Card class="perspex-card border-none">
        <!-- Card content -->
      </Card>
    </div>
    ```

### 1.3. Hover Glow Effects (`hover-glow-*`)

Adds a soft, colored shadow to elements on hover.

-   **Classes:**
    -   `hover-glow-primary` (Teal)
    -   `hover-glow-secondary` (Blue)
    -   `hover-glow-accent` (Yellow)
-   **Effect:** Smoothly transitions in a colored `box-shadow` when the user hovers over the element.
-   **Usage:**
    ```html
    <div class="hover-glow-accent">
      <!-- This element will have a yellow glow on hover -->
    </div>
    ```

### 1.4. Animated Gradient Text (`text-gradient-animated`)

Applies a dynamic, shimmering gradient to text.

-   **Class:** `text-gradient-animated`
-   **Effect:** The text is filled with a gradient of the brand colors that continuously pans from left to right, creating a subtle shine effect.
-   **Usage:**
    ```html
    <h1 class="text-gradient-animated">
      Headline Text
    </h1>
    ```

---

## 2. Core Interactive Components

These are the primary, reusable React components for building pages. They are located in `src/components/shared/`.

### 2.1. Animated Heading (`AnimatedHeading`)

A component for displaying headlines with a staggered, animated entrance.

-   **Component:** `AnimatedHeading`
-   **Props:**
    -   `text: string`: The text to display.
    -   `as?: 'h1' | 'h2' ...`: The HTML tag to use (default: `h2`).
    -   `className?: string`: Additional Tailwind classes.
    -   `wordAnimation?: boolean`: If `true`, each word animates in individually. If `false` (default), the entire heading animates as one block.
-   **Usage:**
    ```jsx
    <AnimatedHeading
      text="A Comprehensive Suite of Solutions"
      as="h2"
      className="text-4xl text-center"
      wordAnimation={true}
    />
    ```

### 2.2. Enhanced Button (`EnhancedButton`)

The primary button component for all Calls to Action (CTAs), featuring built-in glassmorphism, animations, and loading states.

-   **Component:** `EnhancedButton`
-   **Props:**
    -   `variant?: 'primary' | 'secondary' | 'tertiary' | 'outline'`:
        -   `primary`: Blue base, for primary actions.
        -   `secondary`: Yellow base, for secondary actions.
        -   `tertiary` or `outline`: Teal base, for less prominent actions.
    -   `size?: 'sm' | 'md' | 'lg'`: Controls the padding and text size.
    -   `glow?: boolean`: Adds the corresponding glow effect on hover.
    -   `loading?: boolean`: Displays a spinner and disables the button.
    -   `asChild?: boolean`: Allows wrapping a `<Link>` component.
-   **Usage:**
    ```jsx
    // Standard button
    <EnhancedButton variant="primary" size="lg" glow>
      Explore Solutions
    </EnhancedButton>

    // Button as a link
    <EnhancedButton asChild variant="secondary" size="lg" glow>
      <Link href="/contact">Contact Sales</Link>
    </EnhancedButton>
    ```

### 2.3. Animated Border (`AnimatedBorder`)

A wrapper component that creates a decorative, animated border around its content. Ideal for highlighting featured cards or CTAs.

-   **Component:** `AnimatedBorder`
-   **Props:**
    -   `variant?: 'beam' | 'highlight'`:
        -   `beam` (default): A beam of light continuously rotates around the border.
        -   `highlight`: A solid border where a brighter "sparkle" periodically fades in, rotates around, and fades out.
    -   `color?: 'primary' | 'secondary' | 'accent'`: Sets the color of the border and animation (Teal, Blue, or Yellow).
    -   `speed?: 'slow' | 'normal' | 'fast'`: Controls the rotation speed. Default is `normal` (16 seconds per lap).
-   **Usage:** Wrap any content, typically a `Card`, inside this component.
    ```jsx
    <AnimatedBorder variant="highlight" color="accent">
      <Card>
        <CardHeader>...</CardHeader>
        <CardContent>This card has a periodic yellow sparkle.</CardContent>
      </Card>
    </AnimatedBorder>
    ```

### 2.4. Scroll Animated Section (`ScrollAnimatedSection`)

A simple wrapper that makes its content smoothly fade and slide into view as the user scrolls down the page.

-   **Component:** `ScrollAnimatedSection`
-   **Props:**
    -   `delay?: number`: An optional delay (in seconds) before the animation starts. Useful for staggering animations in a list or grid.
-   **Usage:** Wrap any section or component you want to animate on scroll.
    ```jsx
    <ScrollAnimatedSection delay={0.2}>
      <div>
        <!-- This content will fade in as it enters the viewport -->
      </div>
    </ScrollAnimatedSection>
    ```

### 2.5. Logo Shimmer (`LogoShimmer`)

A wrapper for the Logo component that adds a subtle, elegant shimmer effect.

-   **Component:** `LogoShimmer`
-   **Props:**
    -   `trigger?: 'hover' | 'interval'`:
        -   `hover` (default): Shimmer animates on mouse hover.
        -   `interval`: Shimmer animates periodically every few seconds.
    -   `color?: 'white' | 'accent' | 'primary'`: Sets the color of the shimmer.
    -   `speed?: 'slow' | 'normal' | 'fast'`: Controls how fast the shimmer crosses the logo.
-   **Usage:**
    ```jsx
    <LogoShimmer trigger="interval" color="accent" speed="slow">
      <Logo />
    </LogoShimmer>
    ```

---

## 3. Full Page-Section Components

These are larger, pre-built components that make up entire sections of a page, primarily used on the Homepage. They are located in `src/components/sections/`.

-   **`CoreOfferingsSection.tsx`**: Displays a grid of the main services. Uses the `glass-card` and `hover-glow` effects.
-   **`WhyChooseUsSection.tsx`**: Showcases the key company advantages. Uses the premium `perspex-card` effect.
-   **`TestimonialsSection.tsx`**: An infinitely scrolling marquee of testimonial cards. Animation pauses on hover.
-   **`CaseStudiesTeaserSection.tsx`**: A simple grid teasing a couple of case studies.
-   **`CallToActionSection.tsx`**: A full-width section with a bold gradient background for driving user action.

By combining these effects and components, you can design visually rich and consistent pages that adhere to the Flow Networks brand identity.
