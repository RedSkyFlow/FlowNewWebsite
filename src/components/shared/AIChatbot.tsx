'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Bot, Send, User, X, CornerDownLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { aiChatbot, type AIChatbotInput, type AIChatbotOutput } from '@/ai/flows/ai-chatbot';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
};

export default function AIChatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial-ai', text: "Hello! I'm FlowAI Gateway's assistant. How can I help you today?", sender: 'ai' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiInput: AIChatbotInput = { query: input };
      const aiResponse: AIChatbotOutput = await aiChatbot(aiInput);
      const aiMessage: Message = { id: (Date.now() + 1).toString(), text: aiResponse.answer, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error calling AI chatbot:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        sender: 'ai',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-20 right-4 z-50"
    >
      <Card className="w-full max-w-md shadow-2xl rounded-lg overflow-hidden bg-card">
        <CardHeader className="flex flex-row items-center justify-between p-4 border-b bg-muted/50">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8 border-2 border-primary">
              <AvatarFallback><Bot className="text-primary"/></AvatarFallback>
            </Avatar>
            <CardTitle className="text-lg font-headline">FlowAI Assistant</CardTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close chat">
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-[300px] w-full p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'flex items-end gap-2',
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {message.sender === 'ai' && (
                    <Avatar className="h-6 w-6">
                      <AvatarFallback><Bot size={16} className="text-primary"/></AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      'max-w-[75%] rounded-lg px-3 py-2 text-sm shadow',
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-none'
                        : 'bg-muted text-foreground rounded-bl-none'
                    )}
                  >
                    {message.text}
                  </div>
                  {message.sender === 'user' && (
                    <Avatar className="h-6 w-6">
                       <AvatarFallback><User size={16}/></AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                   <Avatar className="h-6 w-6">
                       <AvatarFallback><Bot size={16} className="text-primary"/></AvatarFallback>
                    </Avatar>
                  <div className="max-w-[75%] rounded-lg px-3 py-2 text-sm shadow bg-muted text-foreground rounded-bl-none">
                    <div className="flex space-x-1">
                        <span className="animate-pulse delay-0 inline-block w-1.5 h-1.5 bg-muted-foreground rounded-full"></span>
                        <span className="animate-pulse delay-150 inline-block w-1.5 h-1.5 bg-muted-foreground rounded-full"></span>
                        <span className="animate-pulse delay-300 inline-block w-1.5 h-1.5 bg-muted-foreground rounded-full"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="p-2 border-t">
          <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
              disabled={isLoading}
              aria-label="Chat input"
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()} aria-label="Send message">
              {isLoading ? <CornerDownLeft className="h-4 w-4 animate-ping" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
