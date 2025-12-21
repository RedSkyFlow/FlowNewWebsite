'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface ChatMessage {
    sender: 'user' | 'bot';
    text: string;
}

interface ChatSimulationProps {
    messages: ChatMessage[];
}

const ChatSimulation: React.FC<ChatSimulationProps> = ({ messages }) => {
    return (
        <div className="w-full h-full flex flex-col justify-end p-4 space-y-3 bg-gradient-to-b from-transparent to-black/20">
            {messages.map((msg, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.5 + 0.2, duration: 0.4 }}
                    className={`max-w-[90%] p-3 rounded-2xl text-xs leading-relaxed shadow-lg backdrop-blur-sm ${msg.sender === 'bot'
                        ? 'bg-gradient-to-br from-brand-primary/20 to-brand-accent2/20 border border-brand-primary/30 text-white self-start rounded-tl-none'
                        : 'bg-white/10 border border-white/10 text-brand-text/90 self-end rounded-tr-none'
                        }`}
                >
                    {msg.sender === 'bot' && (
                        <div className="text-[10px] font-bold text-brand-primary mb-1 uppercase tracking-wider flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" /> AI Concierge
                        </div>
                    )}
                    {msg.text}
                </motion.div>
            ))}
        </div>
    );
};

export default ChatSimulation;
