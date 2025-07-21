'use client';

import { motion } from 'framer-motion';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface ColorSwatchProps {
  name: string;
  variable: string;
  hex: string;
  className?: string;
}

export const ColorSwatch = ({ name, variable, hex, className }: ColorSwatchProps) => {
  const { toast } = useToast();
  
  const copyToClipboard = (text: string) => {
    // This function will only run in a browser environment
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      toast({ title: "Copied to clipboard!", description: text });
    } else {
      toast({ title: "Failed to copy", description: "Clipboard API not available.", variant: "destructive" });
    }
  };

  return (
    <motion.div
      className={cn("glass-card p-4 flex flex-col justify-between h-48", className)}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="flex-grow rounded-md" style={{ backgroundColor: `hsl(var(${variable}))` }} />
      <div className="pt-3 text-center">
        <p className="font-semibold text-sm">{name}</p>
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span>{hex}</span>
          <button 
            onClick={() => copyToClipboard(hex)} 
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label={`Copy hex code ${hex}`}
          >
            <Copy className="h-3 w-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};