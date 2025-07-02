
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import AnimatedHeading from '@/components/shared/AnimatedHeading'
import { Copy, Eye, Layers, Wind, Sparkles, Droplets, Orbit } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const visualEffects = [
  {
    name: '3D Card Perspective',
    description: 'Layered cards with depth and perspective using CSS transforms.',
    code: 'transform: perspective(1000px) rotateX(5deg) rotateY(-5deg);',
    icon: Orbit,
    demoClass: '[transform:perspective(1000px)_rotateX(5deg)_rotateY(-5deg)] hover:[transform:perspective(1000px)] transition-transform duration-500',
  },
  {
    name: 'Gradient Overlays',
    description: 'Smooth gradients for premium feel. Applied to a demo element below.',
    code: 'background: linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--primary)) 100%);',
    icon: Layers,
    demoClass: '',
  },
  {
    name: 'Glow Effects',
    description: 'Subtle glows around important elements and CTAs.',
    code: 'box-shadow: 0 0 20px hsla(var(--primary) / 0.3);',
    icon: Sparkles,
    demoClass: 'hover:shadow-[0_0_20px_hsla(var(--primary)/0.4)] transition-shadow',
  },
  {
    name: 'Floating Animation',
    description: 'Subtle hover lift effects for interactive elements.',
    code: 'transform: translateY(-4px); transition: all 0.3s ease;',
    icon: Wind,
    demoClass: 'hover:-translate-y-1 transition-transform duration-300',
  },
  {
    name: 'Glassmorphism',
    description: 'Translucent glass effect with backdrop blur.',
    code: 'backdrop-filter: blur(10px); background: hsla(var(--card) / 0.3);',
    icon: Droplets,
    demoClass: 'bg-card/30 backdrop-blur-md',
  },
  {
    name: 'Particle Effects',
    description: 'Animated background particles for dynamic feel. (Effect is site-wide)',
    code: '/* See src/components/shared/ParticleBackground.tsx */',
    icon: Eye,
    demoClass: '',
  },
];


export default function DesignExamplesPage() {
  const { toast } = useToast();

  const handleCopy = (textToCopy: string, effectName: string) => {
    if (textToCopy.startsWith('/*')) {
        toast({
            title: 'Info',
            description: `This effect is handled by a component, not simple CSS.`,
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
        {visualEffects.map((effect, index) => (
          <motion.div
            key={effect.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <Card className={cn("group h-full flex flex-col bg-card/50 border border-primary/20", effect.demoClass)}>
              <CardHeader>
                <CardTitle className="flex items-center text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  <effect.icon className="w-5 h-5 mr-3 text-primary" />
                  {effect.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground pt-1">{effect.description}</p>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between mt-auto">
                {effect.name === 'Gradient Overlays' ? (
                   <div className="h-16 w-full rounded-lg mb-4 gradient-orange-blue bg-gradient-animated"></div>
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
                  Copy CSS
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
