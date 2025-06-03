'use client';

import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
        className="fixed bottom-4 right-4 z-50"
        initial={false}
        animate={isChatOpen ? "open" : "closed"}
      >
        <Button
          size="icon"
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl"
          onClick={() => setIsChatOpen(!isChatOpen)}
          aria-label={isChatOpen ? "Close chat" : "Open chat"}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isChatOpen ? 'x' : 'message'}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              {isChatOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
            </motion.div>
          </AnimatePresence>
        </Button>
      </motion.div>
    </>
  );
}
