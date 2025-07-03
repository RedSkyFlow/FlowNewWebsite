
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AnimatedHeading from '@/components/shared/AnimatedHeading'
import { Copy, Eye, Layers, Wind, Sparkles, Droplets, Orbit, Brush, Sun, Type, Zap } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import AnimatedAccentBorder from '@/components/shared/AnimatedAccentBorder'
import AnimatedBorder from '@/components/shared/AnimatedBorder'

const visualEffects = [
  {
    name: '3D Card Perspective',
    description: 'Layered cards with depth and perspective using CSS transforms.',
    icon: Orbit,
    isMotion: true,
    motionProps: {
      initial: { transform: 'perspective(1000px) rotateX(10deg) rotateY(-10deg) scale(0.95)' },
      whileHover: { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)' },
      transition: { type: 'spring', stiffness: 200, damping: 25 }
    },
    code: 'whileHover={{ transform: "..." }}'
  },
  {
    name: 'Gradient Overlays',
    description: 'Smooth gradients for premium feel. Applied to a demo element below.',
    icon: Brush,
    demoChild: <div className="h-24 w-full rounded-lg gradient-orange-blue bg-gradient-animated" />,
    code: '/* .gradient-orange-blue */'
  },
  {
    name: 'Glow Effect (Static)',
    description: 'Subtle glow around important elements. Applied statically.',
    icon: Sparkles,
    cardClass: 'shadow-[var(--glow-primary)]',
    code: 'shadow-[var(--glow-primary)]'
  },
  {
    name: 'Floating Animation (Hover)',
    description: 'Subtle hover lift effects for interactive elements.',
    icon: Wind,
    isMotion: true,
    motionProps: {
      whileHover: { y: -8 },
      transition: { type: 'spring', stiffness: 300 }
    },
    code: 'whileHover={{ y: -8 }}'
  },
  {
    name: 'Simple Glassmorphism',
    description: 'Translucent glass effect with backdrop blur. This is the default card style.',
    icon: Droplets,
    cardClass: 'glass-card',
    code: '/* .glass-card */'
  },
  {
    name: 'Illuminated Perspex Card',
    description: 'High-fidelity glass effect with lit edges and contained corner glows.',
    icon: Layers,
    cardClass: 'perspex-card p-0',
    cardContentClass: 'p-6',
    code: '/* .perspex-card */'
  },
  {
    name: 'Animated Accent Border',
    description: 'A component wrapping content with a rotating, sparkling border.',
    icon: Sun,
    isComponent: true,
    Component: AnimatedAccentBorder,
    code: '<AnimatedAccentBorder />'
  },
  {
    name: 'Legacy Animated Border',
    description: 'The original rotating border using a conic gradient.',
    icon: Orbit,
    isComponent: true,
    Component: AnimatedBorder,
    code: '<AnimatedBorder />'
  },
  {
    name: 'Floating Text (on Hover)',
    description: 'Gives text an engraved look with shadows inside a hovered group.',
    icon: Type,
    isGroup: true,
    demoChild: <p className="text-xl font-bold text-floating-light">Illuminated Text</p>,
    code: '/* .text-floating-light */'
  },
  {
    name: 'Illuminated Icon (on Hover)',
    description: 'Adds a focused light and drop shadow to icons inside a hovered group.',
    icon: Eye,
    isGroup: true,
    demoChild: <Zap className="h-10 w-10 text-primary icon-illuminated-light" />,
    code: '/* .icon-illuminated-light */'
  },
  {
    name: 'Gradient Animated Text',
    description: 'Animated gradient applied as a background to text for a shimmer effect.',
    icon: Brush,
    demoChild: <p className="text-2xl font-bold text-gradient-animated">Flow Networks</p>,
    code: '/* .text-gradient-animated */'
  },
  {
    name: 'Glow Effect (Hover)',
    description: 'Adds a soft, colored glow around elements on hover.',
    icon: Sparkles,
    isGroup: true,
    cardClass: 'group-hover:shadow-[var(--glow-primary)] transition-shadow duration-300',
    code: 'group-hover:shadow-[var(--glow-primary)]'
  },
];


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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visualEffects.map((effect, index) => {
          
          const cardInterior = (
            <>
              <CardHeader className="group-hover:text-primary transition-colors">
                <CardTitle className="flex items-center text-lg font-semibold text-foreground group-hover:text-inherit">
                  <effect.icon className="w-5 h-5 mr-3 text-primary group-hover:text-inherit" />
                  {effect.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground pt-1">{effect.description}</p>
              </CardHeader>
              <CardContent className={cn("flex-grow flex flex-col justify-between mt-auto", effect.cardContentClass)}>
                 {effect.demoChild ? (
                    <div className="h-24 flex items-center justify-center bg-background/50 rounded-lg my-4 p-4">
                      {effect.demoChild}
                    </div>
                  ) : (
                    <div className="h-24 flex items-center justify-center rounded-lg my-4">
                        {/* Placeholder for cards without specific demos */}
                    </div>
                  )}
                 <div className="bg-background/70 p-2 rounded-md border border-border mt-4">
                    <pre><code className="font-mono text-xs text-accent whitespace-pre-wrap">{effect.code}</code></pre>
                  </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-muted-foreground hover:text-foreground mt-2"
                  onClick={() => handleCopy(effect.code, effect.name)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Info
                </Button>
              </CardContent>
            </>
          );

          const motionWrapperProps = {
            key: effect.name,
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.1 + index * 0.05 },
            className: cn(effect.isGroup && 'group'),
            ...effect.motionProps
          };

          if (effect.isComponent && effect.Component) {
            const Comp = effect.Component;
            return (
              <motion.div {...motionWrapperProps}>
                <Comp containerClassName="h-full">
                  <Card className={cn(
                    "bg-background border-none h-full flex flex-col",
                    Comp === AnimatedAccentBorder && "bg-transparent" // Special case for accent border
                    )}>
                    {cardInterior}
                  </Card>
                </Comp>
              </motion.div>
            );
          }

          return (
             <motion.div {...motionWrapperProps}>
              <Card className={cn("h-full flex flex-col", effect.cardClass)}>
                {cardInterior}
              </Card>
            </motion.div>
          )

        })}
      </div>
    </div>
  );
}
