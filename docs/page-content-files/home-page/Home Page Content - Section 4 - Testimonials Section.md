### **Home Page Content - Section 4: Testimonials Section**


**"Okay, Gemini. We are now building the 'Testimonials' section for the homepage. This section must be visually dynamic and premium to build social proof effectively.**

**Your task is to create a new file at `src/components/sections/TestimonialsSection.tsx` and provide the complete, production-ready code for it.**

**The component must meet these exact specifications, adhering to the 'Flow Networks - Ultimate Website Design & Implementation Blueprint':**

**1.  Section Structure:**
    *   The root element should be a `<section>` with a `bg-[#0A0903]` background and standard vertical padding (e.g., `py-20 md:py-28`).
    *   Wrap the entire section content in the `<ScrollAnimatedSection>` component for a smooth fade-in entrance.
    *   Include a centered Section Header with an `<AnimatedHeading>` component. The text should be `"Trusted by Visionaries"` and styled as `h2` with the `text-glow` effect.
    *   Include a subtitle: `"<p>We partner with world-class organizations to deliver exceptional results. Discover the core features that make it possible.</p>"` styled with `text-lg text-secondary`.

**2.  Infinite Scroller Functionality (CRITICAL):**
    *   Create a container `<div>` that will act as the scroller. This container must have a `mask-image` with a linear gradient to create soft, faded edges on the left and right, making the cards appear to scroll in from and out to nothing.
    *   Inside this container, map over a `testimonials` data array. **To create the infinite loop effect, render the array of testimonials TWICE, one after the other, inside the same flex container.**
    *   This flex container should be animated with a **continuous, linear CSS keyframe animation** that scrolls it horizontally from left to right. The animation duration should be calculated based on the number of cards to ensure a consistent speed (e.g., 40-60 seconds for a full loop).
    *   **On hover of the main scroller container, the CSS animation's `play-state` should be set to `paused`**. When the mouse leaves, the `play-state` should return to `running`. This will be managed with a simple `group-hover:paused` utility in Tailwind CSS.

**3.  Testimonial Card Styling:**
    *   Each testimonial should be a card with the following styling:
        *   `bg-[#0F0E08]` (Background Dark Secondary)
        *   `rounded-xl`
        *   `border border-[#2D2C27]` (Detail Dark)
        *   A soft, expansive shadow: `shadow-[0_8px_24px_rgba(0,0,0,0.2)]`
        *   A subtle hover effect (e.g., `hover:border-primary` to use the Teal color).
    *   Each card should contain:
        *   A quote (e.g., "Flow Networks transformed our guest experience...") in `text-base text-foreground`.
        *   The author's name (e.g., "John Doe, CTO") in `text-sm font-semibold text-accent` (Flow Highlight Yellow).
        *   The company name (e.g., "Global Tech Inc.") in `text-sm text-muted-foreground`.
        *   (Optional) A placeholder for the company logo.

**Please provide the complete, production-ready code for `src/components/sections/TestimonialsSection.tsx`. Define the CSS keyframes for the scrolling animation directly within `src/app/globals.css` if necessary, and note that this change is required. Use Tailwind CSS for all styling and Framer Motion for any entrance animations.**"
