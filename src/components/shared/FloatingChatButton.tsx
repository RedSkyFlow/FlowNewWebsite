// src/components/shared/FloatingChatButton.tsx
'use client';

import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button'; // CORRECTED: Use EnhancedButton
import AIChatbot from '@/components/shared/AIChatbot';
import { AnimatePresence, motion } from 'framer-motion';

export default function FloatingChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isChatOpen && <AIChatbot onClose={() => setIsChatOpen(false)} />}
      </AnimatePresence>
      
      <motion.div
        className="fixed bottom-6 right-6 z-50" // Adjusted position slightly
        initial={false}
        animate={isChatOpen ? "open" : "closed"}
      >
        <EnhancedButton
          size="icon"
          variant="secondary" // CORRECTED: Use secondary variant for primary CTA feel
          className="rounded-full w-16 h-16 shadow-l3" // CORRECTED: Use system shadow and increase size
          onClick={() => setIsChatOpen(!isChatOpen)}
          aria-label={isChatOpen ? "Close chat" : "Open chat"}
          glow // Add the glow effect for prominence
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isChatOpen ? 'x' : 'message'}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {isChatOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
            </motion.div>
          </AnimatePresence>
        </EnhancedButton>
      </motion.div>
    </>
  );
}