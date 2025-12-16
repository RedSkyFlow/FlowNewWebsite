'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Message {
    id: string;
    role: 'user' | 'bot' | 'system';
    content: string;
    delay?: number;
}

interface ChatSimulationProps {
    messages: Message[];
    className?: string;
}

const ChatSimulation: React.FC<ChatSimulationProps> = ({ messages, className }) => {
    return (
        <div className={cn("flex flex-col space-y-4 p-4", className)}>
            {messages.map((msg, index) => (
                <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        delay: msg.delay || index * 1.5, // Staggered delay for "typing" feel
                        type: 'spring',
                        stiffness: 200
                    }}
                    className={cn(
                        "flex w-full items-end gap-2",
                        msg.role === 'user' ? "justify-end" : "justify-start"
                    )}
                >
                    {msg.role === 'bot' && (
                        <Avatar className="w-8 h-8 border border-primary/30 shadow-glow-primary">
                            <AvatarImage src="/bot-avatar.png" />
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">AI</AvatarFallback>
                        </Avatar>
                    )}

                    <div
                        className={cn(
                            "max-w-[80%] rounded-2xl px-4 py-3 text-sm font-medium shadow-sm backdrop-blur-sm",
                            msg.role === 'user'
                                ? "bg-primary text-primary-foreground rounded-br-none"
                                : "bg-surface/80 border border-white/10 text-foreground rounded-bl-none glass-card-border"
                        )}
                    >
                        {msg.content}
                    </div>

                    {msg.role === 'user' && (
                        <Avatar className="w-8 h-8 border border-white/10">
                            <AvatarFallback className="bg-muted text-muted-foreground text-xs">ME</AvatarFallback>
                        </Avatar>
                    )}
                </motion.div>
            ))}

            {/* Typing Indicator Simulation */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: messages.length * 1.5 + 1, duration: 0.5 }}
                className="flex gap-1 pl-12 pt-2"
            >
                <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </motion.div>
        </div>
    );
};

export default ChatSimulation;
