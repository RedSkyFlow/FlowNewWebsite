# Animated Border & Shimmer Effects Implementation

**Version:** 1.0  
**Date:** December 27, 2024  
**Purpose:** Add sophisticated animated borders and shimmer effects for enhanced visual hierarchy

---

## 🎨 1. Animated Accent Border Component

### **Design Philosophy**
- **Subtle attention-drawing** without being distracting
- **Accent color compliance** with Design Guide color hierarchy
- **Performance optimized** with hardware acceleration
- **Configurable intensity** for different use cases

### **Component Implementation**

#### **AnimatedAccentBorder.tsx**
```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedAccentBorderProps {
  children: React.ReactNode;
  variant?: 'subtle' | 'standard' | 'prominent';
  color?: 'primary' | 'secondary' | 'accent';
  speed?: 'slow' | 'normal' | 'fast';
  sparkle?: boolean;
  className?: string;
}

const AnimatedAccentBorder: React.FC<AnimatedAccentBorderProps> = ({
  children,
  variant = 'standard',
  color = 'accent',
  speed = 'normal',
  sparkle = true,
  className = ''
}) => {
  // Speed configurations
  const speedConfig = {
    slow: 8,
    normal: 6,
    fast: 4
  };

  // Color configurations (Design Guide compliant)
  const colorConfig = {
    primary: {
      gradient: 'from-primary/60 via-primary to-primary/60',
      glow: 'var(--glow-primary)',
      sparkleColor: 'hsl(var(--primary))'
    },
    secondary: {
      gradient: 'from-secondary/60 via-secondary to-secondary/60',
      glow: 'var(--glow-secondary)',
      sparkleColor: 'hsl(var(--secondary))'
    },
    accent: {
      gradient: 'from-accent/60 via-accent to-accent/60',
      glow: 'var(--glow-accent)',
      sparkleColor: 'hsl(var(--accent))'
    }
  };

  // Variant configurations
  const variantConfig = {
    subtle: {
      borderWidth: '1px',
      glowIntensity: '0.2',
      sparkleSize: '2px'
    },
    standard: {
      borderWidth: '2px',
      glowIntensity: '0.3',
      sparkleSize: '3px'
    },
    prominent: {
      borderWidth: '3px',
      glowIntensity: '0.4',
      sparkleSize: '4px'
    }
  };

  const currentColor = colorConfig[color];
  const currentVariant = variantConfig[variant];
  const duration = speedConfig[speed];

  return (
    <div className={`relative ${className}`}>
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-lg overflow-hidden"
        style={{
          padding: currentVariant.borderWidth,
          background: `conic-gradient(from 0deg, transparent, ${currentColor.sparkleColor}, transparent)`,
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full bg-background rounded-lg" />
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: currentColor.glow,
          opacity: currentVariant.glowIntensity,
          transform: 'translateZ(0)'
        }}
        animate={{
          opacity: [currentVariant.glowIntensity, parseFloat(currentVariant.glowIntensity) * 1.5, currentVariant.glowIntensity]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Sparkle Effects */}
      {sparkle && (
        <>
          <motion.div
            className="absolute rounded-full"
            style={{
              width: currentVariant.sparkleSize,
              height: currentVariant.sparkleSize,
              background: currentColor.sparkleColor,
              boxShadow: `0 0 10px ${currentColor.sparkleColor}`,
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
            animate={{
              x: ['0%', '100%', '100%', '0%', '0%'],
              y: ['0%', '0%', '100%', '100%', '0%']
            }}
            transition={{
              duration: duration * 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute rounded-full"
            style={{
              width: currentVariant.sparkleSize,
              height: currentVariant.sparkleSize,
              background: currentColor.sparkleColor,
              boxShadow: `0 0 8px ${currentColor.sparkleColor}`,
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
            animate={{
              x: ['100%', '0%', '0%', '100%', '100%'],
              y: ['100%', '100%', '0%', '0%', '100%']
            }}
            transition={{
              duration: duration * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: duration * 0.75
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedAccentBorder;
```

### **CSS Additions for globals.css**
```css
/* Animated Border Utilities */
@layer utilities {
  .animated-border-accent {
    position: relative;
    background: conic-gradient(from 0deg, transparent, hsl(var(--accent)), transparent);
    animation: rotate-border 6s linear infinite;
  }
  
  .animated-border-primary {
    position: relative;
    background: conic-gradient(from 0deg, transparent, hsl(var(--primary)), transparent);
    animation: rotate-border 6s linear infinite;
  }
  
  .animated-border-secondary {
    position: relative;
    background: conic-gradient(from 0deg, transparent, hsl(var(--secondary)), transparent);
    animation: rotate-border 6s linear infinite;
  }
}

@keyframes rotate-border {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes sparkle-travel {
  0% { 
    transform: translate(0, 0); 
    opacity: 0; 
  }
  25% { 
    transform: translate(100%, 0); 
    opacity: 1; 
  }
  50% { 
    transform: translate(100%, 100%); 
    opacity: 1; 
  }
  75% { 
    transform: translate(0, 100%); 
    opacity: 1; 
  }
  100% { 
    transform: translate(0, 0); 
    opacity: 0; 
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .animated-border-accent,
  .animated-border-primary,
  .animated-border-secondary {
    animation: none;
  }
  
  .animated-border-accent::before,
  .animated-border-primary::before,
  .animated-border-secondary::before {
    animation: none;
  }
}
```

---

## ✨ 2. Logo Shimmer Animation

### **Design Philosophy**
- **Premium brand enhancement** for the 3D logo
- **Subtle light reflection** effect
- **Performance optimized** with CSS animations
- **Brand compliant** using Design Guide colors

### **Component Implementation**

#### **LogoShimmer.tsx**
```tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LogoShimmerProps {
  children: React.ReactNode;
  intensity?: 'subtle' | 'standard' | 'prominent';
  speed?: 'slow' | 'normal' | 'fast';
  color?: 'white' | 'accent' | 'primary';
  trigger?: 'hover' | 'always' | 'interval';
  className?: string;
}

const LogoShimmer: React.FC<LogoShimmerProps> = ({
  children,
  intensity = 'standard',
  speed = 'normal',
  color = 'white',
  trigger = 'interval',
  className = ''
}) => {
  // Speed configurations
  const speedConfig = {
    slow: 3,
    normal: 2,
    fast: 1.5
  };

  // Intensity configurations
  const intensityConfig = {
    subtle: {
      opacity: '0.3',
      width: '20%',
      blur: '1px'
    },
    standard: {
      opacity: '0.5',
      width: '30%',
      blur: '2px'
    },
    prominent: {
      opacity: '0.7',
      width: '40%',
      blur: '3px'
    }
  };

  // Color configurations
  const colorConfig = {
    white: 'rgba(255, 255, 255, 0.8)',
    accent: 'hsla(var(--accent) / 0.8)',
    primary: 'hsla(var(--primary) / 0.8)'
  };

  const currentIntensity = intensityConfig[intensity];
  const currentColor = colorConfig[color];
  const duration = speedConfig[speed];

  const shimmerVariants = {
    initial: {
      x: '-100%',
      opacity: 0
    },
    animate: {
      x: '200%',
      opacity: [0, 1, 1, 0]
    }
  };

  const getAnimationProps = () => {
    switch (trigger) {
      case 'hover':
        return {
          whileHover: "animate",
          initial: "initial",
          variants: shimmerVariants,
          transition: { duration, ease: "easeInOut" }
        };
      case 'always':
        return {
          animate: "animate",
          initial: "initial",
          variants: shimmerVariants,
          transition: { 
            duration, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
          }
        };
      case 'interval':
        return {
          animate: "animate",
          initial: "initial",
          variants: shimmerVariants,
          transition: { 
            duration, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4
          }
        };
      default:
        return {};
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Logo Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            ${currentColor} 50%, 
            transparent 100%)`,
          width: currentIntensity.width,
          filter: `blur(${currentIntensity.blur})`,
          transform: 'translateZ(0)',
          willChange: 'transform, opacity'
        }}
        {...getAnimationProps()}
      />

      {/* Additional Highlight Effect */}
      <motion.div
        className="absolute inset-0 z-15 pointer-events-none"
        style={{
          background: `linear-gradient(45deg, 
            transparent 30%, 
            ${currentColor} 50%, 
            transparent 70%)`,
          width: '15%',
          height: '100%',
          filter: 'blur(1px)',
          transform: 'translateZ(0)',
          willChange: 'transform, opacity'
        }}
        {...getAnimationProps()}
        transition={{ 
          ...getAnimationProps().transition, 
          delay: 0.2 
        }}
      />
    </div>
  );
};

export default LogoShimmer;
```

### **CSS Additions for Shimmer Effects**
```css
/* Shimmer Animation Utilities */
@layer utilities {
  .shimmer-effect {
    position: relative;
    overflow: hidden;
  }
  
  .shimmer-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%
    );
    animation: shimmer-sweep 3s ease-in-out infinite;
    transform: translateZ(0);
    will-change: transform;
  }
  
  .shimmer-accent::before {
    background: linear-gradient(
      90deg,
      transparent 0%,
      hsla(var(--accent) / 0.6) 50%,
      transparent 100%
    );
  }
  
  .shimmer-primary::before {
    background: linear-gradient(
      90deg,
      transparent 0%,
      hsla(var(--primary) / 0.6) 50%,
      transparent 100%
    );
  }
}

@keyframes shimmer-sweep {
  0% {
    left: -100%;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

/* 3D Logo Shimmer Enhancement */
.logo-3d-shimmer {
  position: relative;
  overflow: hidden;
}

.logo-3d-shimmer::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    rgba(255, 255, 255, 0.1) 45deg,
    rgba(255, 255, 255, 0.3) 90deg,
    rgba(255, 255, 255, 0.1) 135deg,
    transparent 180deg,
    transparent 360deg
  );
  animation: logo-shimmer-rotate 6s linear infinite;
  pointer-events: none;
  transform: translateZ(0);
  will-change: transform;
}

@keyframes logo-shimmer-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .shimmer-effect::before,
  .logo-3d-shimmer::after {
    animation: none;
  }
}
```


---

## 🎯 3. Usage Examples & Implementation

### **Animated Border Usage Examples**

#### **Premium CTA Button**
```tsx
// Prominent accent border for main CTA
<AnimatedAccentBorder 
  variant="prominent" 
  color="accent" 
  speed="normal"
  sparkle={true}
>
  <EnhancedButton variant="secondary" size="lg">
    Get Started Today
  </EnhancedButton>
</AnimatedAccentBorder>
```

#### **Featured Card Highlight**
```tsx
// Subtle primary border for featured content
<AnimatedAccentBorder 
  variant="subtle" 
  color="primary" 
  speed="slow"
  sparkle={false}
>
  <Card className="glass-card">
    <CardContent>
      <h3>Featured Solution</h3>
      <p>Our most popular network solution...</p>
    </CardContent>
  </Card>
</AnimatedAccentBorder>
```

#### **Testimonial Card Enhancement**
```tsx
// Standard accent border for testimonials
<AnimatedAccentBorder 
  variant="standard" 
  color="accent" 
  speed="normal"
  sparkle={true}
  className="mb-6"
>
  <Card className="glass-card">
    <CardContent>
      <div className="flex items-center mb-4">
        <Star className="text-accent" />
        <span className="ml-2 text-accent">5.0</span>
      </div>
      <p>"Flow Networks transformed our infrastructure..."</p>
    </CardContent>
  </Card>
</AnimatedAccentBorder>
```

### **Logo Shimmer Usage Examples**

#### **Hero Section 3D Logo**
```tsx
// Interval shimmer for hero logo
<LogoShimmer 
  intensity="standard" 
  speed="normal" 
  color="white"
  trigger="interval"
  className="mb-8"
>
  <img 
    src="/images/FlowAINew3DLogo.png" 
    alt="Flow Networks 3D Logo"
    className="w-32 h-32 mx-auto"
  />
</LogoShimmer>
```

#### **Header Logo with Hover Effect**
```tsx
// Hover-triggered shimmer for header
<LogoShimmer 
  intensity="subtle" 
  speed="fast" 
  color="accent"
  trigger="hover"
>
  <img 
    src="/images/FlowAINew2DLogo.png" 
    alt="Flow Networks Logo"
    className="w-24 h-8"
  />
</LogoShimmer>
```

#### **Always-Active Brand Logo**
```tsx
// Continuous subtle shimmer for brand presence
<LogoShimmer 
  intensity="subtle" 
  speed="slow" 
  color="primary"
  trigger="always"
>
  <div className="flex items-center">
    <img 
      src="/images/FlowAINew2DLogo.png" 
      alt="Flow Networks"
      className="w-8 h-8 mr-2"
    />
    <span className="font-headline text-foreground">Flow Networks</span>
  </div>
</LogoShimmer>
```

---

## 🎨 4. Strategic Implementation Guidelines

### **When to Use Animated Borders**

#### **✅ RECOMMENDED FOR:**
- **Primary CTAs** - Draw attention to main conversion buttons
- **Featured content** - Highlight premium services or testimonials
- **Special offers** - Limited-time promotions or announcements
- **Key differentiators** - Unique value propositions
- **Premium tiers** - Highlight advanced service packages

#### **❌ AVOID FOR:**
- **Navigation elements** - Can be distracting
- **Body text containers** - Reduces readability
- **Multiple elements simultaneously** - Creates visual chaos
- **Form inputs** - Interferes with user focus

### **Color Strategy by Use Case**

#### **Accent Color (Yellow) - Premium Attention**
```tsx
// Use for highest priority elements
<AnimatedAccentBorder color="accent" variant="prominent">
  <Button>Start Free Trial</Button>
</AnimatedAccentBorder>
```

#### **Primary Color (Teal) - Brand Authority**
```tsx
// Use for brand-related highlights
<AnimatedAccentBorder color="primary" variant="standard">
  <Card>Core Technology Features</Card>
</AnimatedAccentBorder>
```

#### **Secondary Color (Blue) - Action Items**
```tsx
// Use for secondary CTAs
<AnimatedAccentBorder color="secondary" variant="subtle">
  <Button>Learn More</Button>
</AnimatedAccentBorder>
```

### **Performance Considerations**

#### **Optimization Techniques:**
```tsx
// Limit simultaneous animations
const MAX_ANIMATED_BORDERS = 3;

// Use intersection observer for performance
const [isVisible, setIsVisible] = useState(false);

<AnimatedAccentBorder 
  variant={isVisible ? "standard" : "subtle"}
  speed={isVisible ? "normal" : "slow"}
>
  {children}
</AnimatedAccentBorder>
```

#### **Reduced Motion Support:**
```tsx
// Respect user preferences
const prefersReducedMotion = useReducedMotion();

<AnimatedAccentBorder 
  sparkle={!prefersReducedMotion}
  speed={prefersReducedMotion ? "slow" : "normal"}
>
  {children}
</AnimatedAccentBorder>
```

---

## 🔧 5. Advanced Customization Options

### **Custom Border Patterns**

#### **Dashed Sparkle Border**
```css
.animated-border-dashed {
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    hsl(var(--accent)) 10deg,
    transparent 20deg,
    hsl(var(--accent)) 30deg,
    transparent 40deg,
    hsl(var(--accent)) 50deg,
    transparent 60deg
  );
  animation: rotate-border 4s linear infinite;
}
```

#### **Pulse Border Effect**
```css
.animated-border-pulse {
  background: radial-gradient(
    circle at 50% 50%,
    hsl(var(--accent)) 0%,
    transparent 70%
  );
  animation: pulse-border 2s ease-in-out infinite;
}

@keyframes pulse-border {
  0%, 100% { 
    transform: scale(1); 
    opacity: 0.5; 
  }
  50% { 
    transform: scale(1.05); 
    opacity: 1; 
  }
}
```

### **Multi-Layer Shimmer Effects**

#### **Complex Logo Shimmer**
```tsx
const ComplexLogoShimmer = ({ children }) => (
  <div className="relative">
    {/* Base shimmer */}
    <LogoShimmer intensity="subtle" speed="slow" color="white" trigger="always">
      {/* Accent shimmer overlay */}
      <LogoShimmer intensity="standard" speed="normal" color="accent" trigger="interval">
        {children}
      </LogoShimmer>
    </LogoShimmer>
  </div>
);
```

### **Conditional Animation Triggers**

#### **Scroll-Based Activation**
```tsx
const ScrollTriggeredBorder = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.5 }
    );
    
    // Observer logic here
  }, []);

  return (
    <AnimatedAccentBorder 
      variant={isActive ? "prominent" : "subtle"}
      sparkle={isActive}
    >
      {children}
    </AnimatedAccentBorder>
  );
};
```

---

## 📊 6. Implementation Checklist

### **Phase 1: Basic Implementation**
- [ ] Add AnimatedAccentBorder component
- [ ] Add LogoShimmer component  
- [ ] Update globals.css with animation keyframes
- [ ] Test basic functionality

### **Phase 2: Strategic Placement**
- [ ] Apply to primary CTA buttons
- [ ] Add to featured testimonials
- [ ] Implement on hero 3D logo
- [ ] Test visual hierarchy

### **Phase 3: Performance Optimization**
- [ ] Add intersection observer
- [ ] Implement reduced motion support
- [ ] Limit simultaneous animations
- [ ] Monitor performance metrics

### **Phase 4: Advanced Features**
- [ ] Add custom border patterns
- [ ] Implement multi-layer effects
- [ ] Add scroll-based triggers
- [ ] Create usage documentation

---

## 🎯 Expected Visual Impact

### **Before Implementation:**
- Static cards and buttons
- Basic hover effects only
- Logo appears static
- Limited visual hierarchy

### **After Implementation:**
- **Premium attention-drawing** for key elements
- **Sophisticated brand presence** with logo shimmer
- **Clear visual hierarchy** through selective animation
- **Professional polish** matching enterprise expectations

### **Brand Perception Enhancement:**
- **Innovation** - Cutting-edge visual effects
- **Premium Quality** - Sophisticated animations
- **Attention to Detail** - Thoughtful implementation
- **Technical Excellence** - Smooth performance

These effects will significantly enhance the perceived value and professionalism of the Flow Networks brand while maintaining the Design Guide's philosophy of subtle, meaningful interactions.

