'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Sparkles, Send } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { BorderBeam } from '../ui/border-beam';
import { useInView } from 'react-intersection-observer';

const GooseWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [greeting, setGreeting] = useState('');
    const [shouldSparkle, setShouldSparkle] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    useEffect(() => {
        // Context-aware greetings based on Content Manifest
        if (pathname === '/guest-wifi') {
            setGreeting("Looking for the world's best WiFi platform? I can help you with <b class='text-brand-primary'>Purple pricing</b>.");
        } else if (pathname === '/flow-connect') {
            setGreeting("Ready to turn that WiFi into an AI Gateway? Let's talk <b class='text-brand-accent2'>Flow Connect</b>.");
        } else {
            setGreeting("Hello! I'm Goose. I help businesses turn their WiFi into a revenue engine. <br/><br/>Are you interested in <b class='text-brand-primary'>Purple WiFi Plans</b> or our <b class='text-brand-accent2'>AI Gateway</b>?");
        }
    }, [pathname]);

    useEffect(() => {
        // Activate star border after 10 seconds on page
        const timer = setTimeout(() => {
            setShouldSparkle(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    // Also sparkle if in view
    const isActuallySparkling = shouldSparkle || inView;

    return (
        <div ref={ref} className="fixed bottom-8 right-8 z-[9999] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-brand-base rounded-2xl border border-brand-primary/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="p-5 bg-gradient-to-r from-brand-primary to-brand-accent2 text-white flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-2">
                                <Sparkles size={18} className="animate-pulse" />
                                <span className="font-bold tracking-wide">Chat with Goose</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-white/20 rounded-full p-1 transition-colors"
                                title="Close chat"
                                aria-label="Close chat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-brand-primary/20 hover:scrollbar-thumb-brand-primary/40">
                            <div className="flex gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary text-xs font-bold border border-brand-primary/50 shrink-0">
                                    G
                                </div>
                                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-brand-text/90 leading-relaxed shadow-sm backdrop-blur-sm border border-white/5">
                                    <span dangerouslySetInnerHTML={{ __html: greeting }} />
                                </div>
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 shrink-0 bg-brand-base/50">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ask me anything..."
                                    className="w-full bg-brand-base/50 border border-white/10 rounded-full pl-5 pr-12 py-3 text-sm text-white focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all placeholder:text-gray-500"
                                />
                                <button
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-primary rounded-full text-brand-base hover:bg-white hover:text-brand-primary transition-all shadow-lg hover:shadow-brand-primary/50"
                                    title="Send message"
                                    aria-label="Send message"
                                >
                                    <Send size={14} className="ml-0.5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                title={isOpen ? "Close chat" : "Open chat"}
                aria-label={isOpen ? "Close chat" : "Open chat"}
                className="relative rounded-full shadow-[0_0_20px_rgba(20,216,204,0.4)]"
            >
                {/* Two Border Beams - opposite directions, gold color */}
                <BorderBeam
                    size={60}
                    duration={8}
                    delay={0}
                    colorFrom="#FFC145"
                    colorTo="#FFD700"
                    borderWidth={3}
                />
                <BorderBeam
                    size={60}
                    duration={8}
                    delay={4}
                    colorFrom="#FFC145"
                    colorTo="#FFD700"
                    borderWidth={3}
                    reverse
                />
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-accent2 rounded-full border border-white/20">
                    {isOpen ? <X color="white" size={24} /> : <MessageSquare color="white" size={24} />}
                </div>
            </motion.button>
        </div>
    );
};

export default GooseWidget;
