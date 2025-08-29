
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AnimatedHeading from '@/components/shared/AnimatedHeading'
import { Copy, Eye, Layers, Wind, Sparkles, Droplets, Orbit, Brush, Sun, Type, Zap, Component as ComponentIcon, MousePointerClick, Puzzle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import AnimatedBorder from '@/components/shared/AnimatedBorder';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import Logo from '@/components/shared/Logo';
import LogoShimmer from '@/components/shared/LogoShimmer';

const visualElements = [
  // --- CORE COMPONENTS ---
  {
    category: 'Core Components',
    name: 'EnhancedButton',
    description: 'The primary CTA component with variants, glow, and loading states.',
    icon: MousePointerClick,
    demoChild: (
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <EnhancedButton variant="primary" glow>Primary</EnhancedButton>
        <EnhancedButton variant="secondary" glow>Secondary</EnhancedButton>
        <EnhancedButton variant="outline" glow>Outline</EnhancedButton>
        <EnhancedButton variant="destructive">Destructive</EnhancedButton>
        <EnhancedButton variant="primary" loading>Loading...</EnhancedButton>
      </div>
    ),
    code: `<EnhancedButton variant="primary" glow>Click</EnhancedButton>`
  },
  {
    category: 'Core Components',
    name: 'LogoShimmer',
    description: 'Adds an elegant shimmer effect to the site logo, triggerable on hover or at intervals.',
    icon: Sparkles,
    demoChild: (
      <div className="scale-150">
        <LogoShimmer trigger="hover" color="accent">
          <Logo />
        </LogoShimmer>
      </div>
    ),
    code: `<LogoShimmer trigger="hover"><Logo /></LogoShimmer>`
  },
  {
    category: 'Core Components',
    name: 'AnimatedHeading',
    description: 'Animates headings word-by-word or as a block when they scroll into view.',
    icon: Type,
    demoChild: <AnimatedHeading text="Animated Heading" as="h3" wordAnimation />,
    code: `<AnimatedHeading text="..." wordAnimation />`
  },

  // --- SURFACES & LAYOUT ---
  {
    category: 'Surfaces & Layout',
    name: 'GlassCard',
    description: 'A translucent card with a frosted glass effect and a subtle glow on hover.',
    icon: Droplets,
    isComponent: true,
    Component: GlassCard,
    componentProps: { glowColor: 'primary', className: 'flex items-center justify-center' },
    demoChild: <p className="font-bold">Content inside GlassCard</p>,
    code: '<GlassCard glowColor="primary">...</GlassCard>'
  },
  {
    category: 'Surfaces & Layout',
    name: 'PerspexCard (on hover)',
    description: 'Ultra-realistic glass with layered edge lighting that intensifies on hover.',
    icon: Layers,
    isGroup: true,
    cardClass: 'perspex-card flex items-center justify-center',
    demoChild: <p className="font-bold text-floating-light">Illuminated Content</p>,
    code: '<div class="group"><Card class="perspex-card">...</Card></div>'
  },
  {
    category: 'Surfaces & Layout',
    name: 'AnimatedBorder',
    description: 'A wrapper that adds a decorative, rotating beam effect around its content.',
    icon: Orbit,
    isComponent: true,
    Component: AnimatedBorder,
    componentProps: { color: 'primary', variant: 'beam' },
    demoChild: <p className="font-bold p-4">Content with Animated Border</p>,
    code: '<AnimatedBorder variant="beam">...</AnimatedBorder>'
  },
  {
    category: 'Surfaces & Layout',
    name: 'AnimatedBorder (Highlight)',
    description: 'A variation with a periodic rotating highlight sparkle. Set with `variant="highlight"`.',
    icon: Orbit,
    isComponent: true,
    Component: AnimatedBorder,
    componentProps: { color: 'accent', variant: 'highlight' },
    demoChild: <p className="font-bold p-4">Content with Highlight Border</p>,
    code: '<AnimatedBorder variant="highlight">...</AnimatedBorder>'
  },
  
  // --- HOVER & ANIMATION EFFECTS ---
  {
    category: 'Hover & Animation Effects',
    name: '3D Card Perspective',
    description: 'Layered cards with depth using CSS transforms on hover.',
    icon: Orbit,
    isGroup: true,
    motionProps: {
      initial: { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' },
      whileHover: { transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1.05) translateY(-5px)' },
      transition: { type: 'spring', stiffness: 200, damping: 25 },
      style: { transformStyle: 'preserve-3d' },
    },
    demoChild: <p className="font-bold">Hover for 3D Tilt</p>,
    code: "whileHover: { transform: '...' }"
  },
  {
    category: 'Hover & Animation Effects',
    name: 'Floating Animation (on Hover)',
    description: 'Subtle hover lift effects for interactive elements.',
    icon: Wind,
    motionProps: {
      whileHover: { y: -8, scale: 1.03 },
      transition: { type: 'spring', stiffness: 300 }
    },
    demoChild: <p className="font-bold">Hover to Float</p>,
    code: 'whileHover={{ y: -8, scale: 1.03 }}'
  },
  {
    category: 'Hover & Animation Effects',
    name: 'Glow Effect (on Hover)',
    description: 'Adds a soft, colored glow around elements on hover.',
    icon: Sparkles,
    cardClass: 'hover-glow-primary',
    demoChild: <p className="font-bold">Hover for Primary Glow</p>,
    code: 'className="hover-glow-primary"'
  },
  {
    category: 'Hover & Animation Effects',
    name: 'Gradient Animated Text',
    description: 'Animated gradient applied as a background to text for a shimmer effect.',
    icon: Type,
    demoChild: <p className="text-2xl font-bold text-gradient-animated">Flow Networks</p>,
    code: 'className="text-gradient-animated"'
  },
];

// Group elements by category
const groupedElements = visualElements.reduce((acc, el) => {
  const category = el.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(el);
  return acc;
}, {} as Record<string, typeof visualElements>);

export default function DesignExamplesPage() {
  const { toast } = useToast();

  const handleCopy = (textToCopy: string, elementName: string) => {
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: 'Info Copied!',
      description: `The usage for "${elementName}" has been copied.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Visual & Effects Sandbox"
        as="h1"
        className="text-4xl font-bold text-center sm:text-5xl mb-4 !font-headline"
      />
      <motion.p
        className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A comprehensive showcase of the visual components, effects, and styles available in this project, aligned with our brand blueprint.
      </motion.p>
      
      {Object.entries(groupedElements).map(([categoryName, elements]) => (
        <div key={categoryName} className="mb-16">
          <AnimatedHeading
            text={categoryName}
            as="h2"
            className="text-2xl font-bold sm:text-3xl mb-8 !font-headline text-primary"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elements.map((el, index) => {
              const { isComponent, Component, demoChild, ...elProps } = el as any;
              const { key, code, name, description, icon: Icon, cardClass, cardContentClass, isGroup, motionProps, componentProps } = elProps;
              
              const motionWrapperProps = {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.2 },
                transition: { duration: 0.5, delay: 0.1 + index * 0.05 },
                className: cn(isGroup && 'group', 'rounded-lg h-full'),
                ...motionProps,
              };

              const cardInterior = (
                <>
                  <CardHeader className="group-hover:text-primary transition-colors">
                    <CardTitle className="flex items-center text-lg font-semibold text-foreground group-hover:text-inherit">
                      <Icon className="w-5 h-5 mr-3 text-primary group-hover:text-inherit" />
                      {name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground pt-1">{description}</p>
                  </CardHeader>
                  <CardContent className={cn("flex-grow flex flex-col justify-between mt-auto", cardContentClass)}>
                    <div className="h-24 flex items-center justify-center bg-background/50 rounded-lg my-4 p-4">
                      {demoChild || <div className="h-full w-full" />}
                    </div>
                    <div className="bg-background/70 p-2 rounded-md border border-border mt-4">
                      <pre><code className="font-mono text-xs text-accent whitespace-pre-wrap">{code}</code></pre>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-muted-foreground hover:text-foreground mt-2"
                      onClick={() => handleCopy(code, name)}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Info
                    </Button>
                  </CardContent>
                </>
              );

              if (isComponent && Component) {
                const Comp = Component;
                return (
                  <motion.div key={name} {...motionWrapperProps}>
                    <Comp {...(componentProps || {})}>
                       <div className="h-full flex flex-col">
                        {cardInterior}
                       </div>
                    </Comp>
                  </motion.div>
                );
              }

              return (
                <motion.div key={name} {...motionWrapperProps}>
                  <Card className={cn("h-full flex flex-col bg-card/50", cardClass)}>
                    {cardInterior}
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
