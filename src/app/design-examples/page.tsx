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
    name: 'Illuminated Perspex Card',
    description: 'High-fidelity glass effect with lit edges and contained corner glows. Applied to the card wrapper.',
    code: '/* Uses .perspex-card class from globals.css */',
    icon: Layers,
    isWrapper: true,
    wrapperClass: 'perspex-card p-6',
  },
  {
    name: 'Animated Accent Border',
    description: 'A component that wraps content with a rotating, sparkling border.',
    code: '/* Uses <AnimatedAccentBorder /> component */',
    icon: Sun,
    isComponent: true,
  },
  {
    name: 'Legacy Animated Border',
    description: 'The original rotating border using a conic gradient and requestAnimationFrame.',
    code: '/* Uses <AnimatedBorder /> component */',
    icon: Orbit,
    isLegacyBorderComponent: true,
  },
  {
    name: '3D Card Perspective',
    description: 'Tilts the card in 3D space. Effect is enhanced on hover.',
    code: "transform: perspective(1000px) rotateX(5deg) rotateY(-5deg);",
    icon: Orbit,
    demoClass: '[transform:perspective(1000px)_rotateX(5deg)_rotateY(-5deg)] hover:[transform:perspective(1000px)] transition-transform duration-500',
  },
   {
    name: 'Floating Text (on Hover)',
    description: 'Gives text an engraved look with shadows inside a hovered group.',
    code: '/* Uses .text-floating-light class */',
    icon: Type,
    demoChild: <p className="text-xl font-bold text-floating-light">Illuminated Text</p>,
  },
  {
    name: 'Illuminated Icon (on Hover)',
    description: 'Adds a focused light and drop shadow to icons inside a hovered group.',
    code: '/* Uses .icon-illuminated-light class */',
    icon: Eye,
    demoChild: <Zap className="h-10 w-10 text-primary icon-illuminated-light" />,
  },
  {
    name: 'Gradient Animated Text',
    description: 'Animated gradient applied as a background to text for a shimmer effect.',
    code: '/* Uses .text-gradient-animated from globals.css */',
    icon: Brush,
    demoChild: <p className="text-2xl font-bold text-gradient-animated">Flow Networks</p>
  },
  {
    name: 'Floating Animation (Hover)',
    description: 'Subtle lift effect for interactive elements on hover.',
    code: 'transform: translateY(-8px);',
    icon: Wind,
    demoClass: 'hover:-translate-y-2 transition-transform duration-300',
  },
  {
    name: 'Glow Effect (Hover)',
    description: 'Adds a soft, colored glow around elements on hover.',
    code: '/* Uses .hover-glow-primary class */',
    icon: Sparkles,
    demoClass: 'hover-glow-primary',
  },
  {
    name: 'Simple Glassmorphism',
    description: 'The original basic glass effect with a simple background blur.',
    code: 'backdrop-filter: blur(10px); background: hsla(var(--card) / 0.1);',
    icon: Droplets,
    demoClass: 'bg-card/10 backdrop-blur-md',
  },
];


export default function DesignExamplesPage() {
  const { toast } = useToast();

  const handleCopy = (textToCopy: string, effectName: string) => {
    if (textToCopy.startsWith('/*')) {
        toast({
            title: 'Info',
            description: `This effect is handled by a component or a global CSS class.`,
        });
        return;
    }
    navigator.clipboard.writeText(textToCopy);
    toast({
      title: 'CSS Copied!',
      description: `The CSS for "${effectName}" has been copied to your clipboard.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Visual Effects Catalog"
        as="h1"
        className="text-4xl font-bold text-center sm:text-5xl mb-4 !font-headline"
      />
      <motion.p
        className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        A showcase of the visual effects and styles available in this project. Use this page as a reference for styling decisions.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visualEffects.map((effect, index) => {
          
          const cardInterior = (
            <>
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  <effect.icon className="w-5 h-5 mr-3 text-primary" />
                  {effect.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground pt-1">{effect.description}</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between mt-auto">
                 {effect.demoChild ? (
                    <div className="h-24 flex items-center justify-center bg-background/50 rounded-lg my-4">
                      {effect.demoChild}
                    </div>
                  ) : (
                    <div className="bg-background/70 p-4 rounded-md border border-border">
                      <pre><code className="font-mono text-xs text-accent whitespace-pre-wrap">{effect.code}</code></pre>
                    </div>
                  )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-muted-foreground hover:text-foreground mt-4"
                  onClick={() => handleCopy(effect.code, effect.name)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Info
                </Button>
              </CardContent>
            </>
          );

          const motionWrapper = (content: React.ReactNode, wrapperClass?: string, isGroup: boolean = false) => (
             <motion.div
                key={effect.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className={cn(wrapperClass, isGroup && 'group')}
              >
              {content}
            </motion.div>
          )

          if (effect.isLegacyBorderComponent) {
            return motionWrapper(
              <AnimatedBorder containerClassName="h-full">
                <Card className="bg-background border-none h-full flex flex-col">
                  {cardInterior}
                </Card>
              </AnimatedBorder>
            );
          }

          if(effect.isComponent) {
            return motionWrapper(
               <AnimatedAccentBorder color="primary" className="h-full">
                  <Card className="bg-transparent border-none h-full flex flex-col">
                    {cardInterior}
                  </Card>
               </AnimatedAccentBorder>
            , '', true);
          }

          if (effect.isWrapper) {
            return motionWrapper(
              <div className={cn("h-full flex flex-col rounded-lg", effect.wrapperClass)}>
                 {cardInterior}
              </div>
            , '', true)
          }

          return motionWrapper(
            <Card className={cn("h-full flex flex-col bg-card/50 border border-primary/20", effect.demoClass)}>
              {cardInterior}
            </Card>
          , '', true);

        })}
      </div>
    </div>
  );
}
