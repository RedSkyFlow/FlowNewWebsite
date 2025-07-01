### **Home Page Content - Section 2: Core Offerings Overview**

**Overall Goal of Section:** To present a clear, visually appealing overview of Flow Networks' main product categories, encouraging users to click through and learn more about each specific solution. This section should immediately communicate the comprehensive nature of your services.

**I. Section Wrapper & Background Styling (Conceptual Code - for a new `CoreOfferingsSection` component in `src/app/page.tsx`)**

*   **Purpose:** To create a distinct visual separation from the hero section while maintaining the dark, layered, and sophisticated aesthetic.
*   **Visuals:** Use `bg-[#0F0E08]` (Background Dark Secondary) to create a subtle contrast with the primary dark background of the hero. This reinforces the layered design.
*   **CSS/Tailwind Directives (to be applied within your `CoreOfferingsSection` component):**
    ```css
    /* Section Wrapper */
    .core-offerings-section {
      @apply py-20 md:py-28; /* Consistent vertical spacing */
      background-color: #0F0E08; /* Background Dark Secondary */
    }
    ```

**II. Core Offerings Content Elements (within the `CoreOfferingsSection` container)**

1.  **Section Header (Title & Subtitle):**
    *   **Element:** `<h2>` (Title) and `<p>` (Subtitle)
    *   **Placement:** Centered, above the offering cards.
    *   **Title Copy:** "A Comprehensive Suite of Intelligent Venue Solutions"
        *   *Justification:* Uses keywords "Comprehensive," "Intelligent Venue Solutions" to establish authority and breadth.
    *   **Subtitle Copy:** "We don't just provide connectivity; we deliver a complete ecosystem of tools designed to help you understand your space, engage your audience, and drive business growth."
        *   *Justification:* Directly contrasts the commodity "connectivity" with Flow's value-added "ecosystem." Reinforces key benefits (understand, engage, grow).
    *   **Styling:**
        *   Title (`h2`): Apply `text-h2` and `text-glow` classes.
        *   Subtitle (`p`): Apply `text-lg text-secondary` classes.

2.  **Offerings Grid:**
    *   **Element:** A `<div>` with a responsive grid layout.
    *   **Grid Structure:** A 3-column grid on desktop, 2-column on tablet, and 1-column on mobile.
        *   `className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"`
    *   **Content:** The grid will contain "Feature Cards," each representing a primary product category.

3.  **Feature Cards (Individual Offerings):**
    *   **Purpose:** To provide a visually appealing, clickable summary of each core offering.
    *   **Styling:** Use the `.glass-strong` or `.feature-card` class from our blueprint. The card should have a `bg-[#0A0903]/30` (or similar dark, transparent color), `backdrop-filter: blur(15px)`, a subtle border of `border-[#007A80]/20` (Flow Primary Teal), and a soft, expansive shadow with a teal glow on hover (`hover:shadow-teal-strong`). It should also have a subtle "lift" effect on hover (`hover:transform -translate-y-2`).
    *   **Card Structure:** Each card will contain an icon, a title, a short description, and a "Learn More" link.

    ---
    **Card 1: Intelligent WiFi Infrastructure**
    *   **Icon:** `Wifi` (from Lucide, styled with `Flow Accent Gold: #D4AF37`)
    *   **Title (h3):** "Intelligent WiFi Infrastructure"
    *   **Description (p):** "The secure, high-performance foundation. Our enterprise-grade WiFi, powered by Purple, is the gateway to all your venue's intelligent capabilities."
    *   **CTA Link:** "Learn More" -> `/solutions/intelligent-wifi-infrastructure`

    **Card 2: Location Intelligence**
    *   **Icon:** `Map` (from Lucide, styled with `Flow Accent Gold: #D4AF37`)
    *   **Title (h3):** "Location Intelligence"
    *   **Description (p):** "Understand your space like never before. Turn real-time visitor movement into actionable insights for operational excellence and enhanced experiences."
    *   **CTA Link:** "Learn More" -> `/solutions/location-intelligence`

    **Card 3: Digital Engagement Suite**
    *   **Icon:** `Megaphone` (from Lucide, styled with `Flow Accent Gold: #D4AF37`)
    *   **Title (h3):** "Digital Engagement Suite"
    *   **Description (p):** "Connect with your audience through powerful WiFi Marketing, dynamic Digital Signage, and targeted Email & SMS campaigns from Everlytic."
    *   **CTA Link:** "Learn More" -> `/solutions` (leads to the main solutions overview page)

    **Card 4: WiFi Monetisation**
    *   **Icon:** `DollarSign` (from Lucide, styled with `Flow Accent Gold: #D4AF37`)
    *   **Title (h3):** "WiFi Monetisation"
    *   **Description (p):** "Transform your network into a revenue-generating asset through premium access tiers, sponsored WiFi, and targeted advertising opportunities."
    *   **CTA Link:** "Learn More" -> `/solutions/wifi-monetisation`

    **Card 5: Professional Services**
    *   **Icon:** `Handshake` (from Lucide, styled with `Flow Accent Gold: #D4AF37`)
    *   **Title (h3):** "Professional Services"
    *   **Description (p):** "From strategic AI readiness consulting to full implementation and support, our expert team ensures you maximize the value of your intelligent venue."
    *   **CTA Link:** "Learn More" -> `/solutions/professional-services`

    **Card 6: The Innovation Hub (Subtle AI Gateway Hint)**
    *   **Icon:** `Sparkles` or `Brain` (from Lucide, styled with `Flow Accent Gold: #D4AF37`)
    *   **Title (h3):** "The Future, Today"
    *   **Description (p):** "Explore our innovation roadmap and discover how we're pioneering the next generation of AI-driven venue services."
    *   **Styling Note:** This card could have a slightly different border or glow color (e.g., `Flow Digital Purple: #6A0DAD`) to subtly distinguish it.
    *   **CTA Link:** "See Our Vision" -> `/platform-integrations/innovation-roadmap` (or a dedicated "Vision" page)

---
