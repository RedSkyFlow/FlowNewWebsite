
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AnimatedHeading from '@/components/shared/AnimatedHeading'
import { Copy, Eye, Layers, Wind, Sparkles, Droplets, Orbit, Brush, Sun, Type, Zap } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import AnimatedAccentBorder from '@/components/shared/AnimatedAccentBorder';
import AnimatedBorder from '@/components/shared/AnimatedBorder';

const visualEffects = [
  // --- STATIC EFFECTS ---
  {
    category: 'Static Effects',
    name: 'Gradient Overlays',
    description: 'Smooth gradients for premium feel.',
    icon: Brush,
    cardClass: 'gradient-orange-blue bg-gradient-animated text-white',
    demoChild: <div className="h-24 w-full rounded-lg" />,
    code: '/* Uses .gradient-orange-blue */',
    hasOwnBackground: true,
  },
  {
    category: 'Static Effects',
    name: 'Glow Effect (Static)',
    description: 'Subtle glow around important elements and CTAs. Applied statically.',
    icon: Sparkles,
    motionProps: {
      style: {
        boxShadow: 'var(--glow-primary)'
      }
    },
    code: "shadow-[var(--glow-primary)]"
  },
  {
    category: 'Static Effects',
    name: 'Simple Glassmorphism',
    description: 'Translucent glass effect with backdrop blur.',
    icon: Droplets,
    cardClass: 'glass-card',
    code: '/* Uses .glass-card class */',
    hasOwnBackground: true,
  },
  {
    category: 'Static Effects',
    name: 'Animated Accent Border (Motion)',
    description: 'Rotating border using Framer Motion and conic gradients.',
    icon: Orbit,
    isComponent: true,
    Component: AnimatedAccentBorder,
    code: '<AnimatedAccentBorder />'
  },
  {
    category: 'Static Effects',
    name: 'Legacy Animated Border (CSS)',
    description: 'Rotating border using CSS conic gradients.',
    icon: Orbit, // Same icon, different implementation
    isComponent: true,
    Component: AnimatedBorder,
    code: '<AnimatedBorder />'
  },
  {
    category: 'Static Effects',
    name: 'Gradient Animated Text',
    description: 'Animated gradient applied as a background to text for a shimmer effect.',
    icon: Type,
    cardContentClass: 'flex items-center justify-center',
    demoChild: <p className="text-2xl font-bold text-gradient-animated">Flow Networks</p>,
    code: '/* Uses .text-gradient-animated */'
  },

  // --- HOVER EFFECTS ---
  {
    category: 'Hover Effects',
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
    code: "whileHover: { transform: '...' }"
  },
  {
    category: 'Hover Effects',
    name: 'Floating Animation (on Hover)',
    description: 'Subtle hover lift effects for interactive elements.',
    icon: Wind,
    motionProps: {
      whileHover: { y: -8, scale: 1.03 },
      transition: { type: 'spring', stiffness: 300 }
    },
    code: 'whileHover={{ y: -8, scale: 1.03 }}'
  },
  {
    category: 'Hover Effects',
    name: 'Glow Effect (Hover)',
    description: 'Adds a soft, colored glow around elements on hover.',
    icon: Sparkles,
    cardClass: 'hover-glow-primary',
    code: '/* Uses .hover-glow-primary */'
  },
  {
    category: 'Hover Effects',
    name: 'Floating Text (on Hover)',
    description: 'Gives text an engraved look with shadows inside a hovered group.',
    icon: Type,
    isGroup: true,
    cardContentClass: 'flex items-center justify-center',
    demoChild: <p className="text-2xl font-bold text-floating-light">Illuminated Text</p>,
    code: '/* Uses .text-floating-light */'
  },
  {
    category: 'Hover Effects',
    name: 'Illuminated Icon (on Hover)',
    description: 'Adds a focused light and drop shadow to icons inside a hovered group.',
    icon: Eye,
    isGroup: true,
    cardContentClass: 'flex items-center justify-center',
    demoChild: <Zap className="h-10 w-10 text-primary icon-illuminated-light" />,
    code: '/* Uses .icon-illuminated-light */'
  },
  {
    category: 'Hover Effects',
    name: 'Illuminated Perspex Card',
    description: 'Ultra-realistic glass with edge lighting that intensifies on hover.',
    icon: Layers,
    isGroup: true,
    cardClass: 'perspex-card',
    code: '/* Uses .perspex-card class */',
    hasOwnBackground: true,
  }
];

// Group effects by category
const groupedEffects = visualEffects.reduce((acc, effect) => {
  const category = effect.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(effect);
  return acc;
}, {} as Record<string, typeof visualEffects>);


export default function DesignExamplesPage() {
  const { toast } = useToast();

  const handleCopy = (textToCopy: string, effectName: string) => {
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: 'Info Copied!',
      description: `The usage for "${effectName}" has been copied.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Advanced Visual Effects"
        as="h1"
        className="text-4xl font-bold text-center sm:text-5xl mb-4 !font-headline"
      />
      <motion.p
        className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A showcase of the visual effects and styles available in this project, inspired by the brand blueprint.
      </motion.p>
      
      {Object.entries(groupedEffects).map(([categoryName, effects]) => (
        <div key={categoryName} className="mb-16">
          <AnimatedHeading
            text={categoryName}
            as="h2"
            className="text-2xl font-bold sm:text-3xl mb-8 !font-headline text-primary"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {effects.map((effect, index) => {
              const { isComponent, Component, ...effectProps } = effect;
              const { key, code, name, description, icon: Icon, cardClass, cardContentClass, demoChild, isGroup, motionProps, hasOwnBackground } = effectProps as any;
              
              const motionWrapperProps = {
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
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
                    {demoChild ? (
                        <div className="h-24 flex items-center justify-center bg-background/50 rounded-lg my-4 p-4">
                          {demoChild}
                        </div>
                      ) : (
                        <div className="h-24 flex items-center justify-center rounded-lg my-4">
                            {/* Placeholder for cards without specific demos */}
                        </div>
                      )}
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
                    <Comp>
                      <Card className={cn(
                        "bg-background border-none h-full flex flex-col",
                        (Comp === AnimatedAccentBorder || Comp === AnimatedBorder) && "bg-transparent"
                        )}>
                        {cardInterior}
                      </Card>
                    </Comp>
                  </motion.div>
                );
              }

              return (
                <motion.div key={name} {...motionWrapperProps}>
                  <Card className={cn(
                      "h-full flex flex-col",
                      hasOwnBackground ? cardClass : cn("bg-card/50 border border-primary/20", cardClass)
                  )}>
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
