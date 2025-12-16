'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';

const GooseWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        // Context-aware greetings based on Content Manifest
        if (pathname === '/guest-wifi') {
            setGreeting("Looking for the world's best WiFi platform? I can help you with Purple pricing.");
        } else if (pathname === '/flow-connect') {
            setGreeting("Ready to turn that WiFi into an AI Gateway? Let's talk Flow Connect.");
        } else {
            setGreeting("Hello! I'm Goose. I help businesses turn their WiFi into a revenue engine. Are you interested in Purple WiFi Plans or our AI Gateway?");
        }
    }, [pathname]);

    return (
        <div className="fixed bottom-8 right-8 z-[9999] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-[#111428] rounded-2xl border border-[#14D8CC]/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="p-5 bg-gradient-to-r from-[#14D8CC] to-[#0496FF] text-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Sparkles size={18} />
                                <span className="font-bold">Chat with Goose</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 p-5 overflow-y-auto custom-scrollbar">
                            <div className="flex gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-bold border border-teal-500/50 flex-shrink-0">
                                    G
                                </div>
                                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 leading-relaxed">
                                    <span dangerouslySetInnerHTML={{ __html: greeting.replace(/\n/g, '<br/>') }} />
                                </div>
                            </div>
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-[#111428]">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ask me anything..."
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-full pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-[#14D8CC] transition-colors placeholder:text-gray-600"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-r from-[#14D8CC] to-[#0496FF] rounded-full text-white hover:opacity-90 transition-opacity shadow-lg">
                                    <Send size={14} />
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
                className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#14D8CC] to-[#0496FF] flex items-center justify-center shadow-[0_0_20px_rgba(20,216,204,0.4)] hover:shadow-[0_0_30px_rgba(20,216,204,0.6)] transition-shadow border-2 border-white/10"
            >
                {isOpen ? <X color="white" size={28} /> : <MessageSquare color="white" size={28} />}
            </motion.button>
        </div>
    );
};

export default GooseWidget;
