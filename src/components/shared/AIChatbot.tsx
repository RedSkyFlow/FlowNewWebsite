'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Bot, Send, User, X, CornerDownLeft, Volume2, Loader2, Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { aiChatbot, type AIChatbotInput, type AIChatbotOutput } from '@/ai/flows/ai-chatbot';
import { textToSpeech } from '@/ai/flows/text-to-speech';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

// Augment the window type for SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
};

export default function AIChatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial-ai', text: "Hello! I'm FlowAI Gateway's assistant. How can I help you today? You can type or use the microphone to talk.", sender: 'ai' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any | null>(null);
  const [audioLoadingId, setAudioLoadingId] = useState<string | null>(null);
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join('');
        setInput(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        toast({
          title: 'Voice Error',
          description: `Sorry, there was a speech recognition error: ${event.error}`,
          variant: 'destructive',
        });
        setIsListening(false);
      };
      recognitionRef.current = recognition;
    } else {
      console.warn('Web Speech API is not supported in this browser.');
    }
  }, [toast]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handlePlayAudio = async (messageId: string, text: string) => {
    if (audioLoadingId) return;

    setAudioLoadingId(messageId);
    try {
      const response = await textToSpeech(text);
      if (audioPlayerRef.current) {
        audioPlayerRef.current.src = response.media;
        audioPlayerRef.current.play();
      }
    } catch (error) {
      console.error('Error generating speech:', error);
      toast({
        title: "Audio Error",
        description: "Sorry, I couldn't generate the audio for that message.",
        variant: "destructive",
      });
    } finally {
      setAudioLoadingId(null);
    }
  };

  const handleToggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsListening(true);
    } else {
      toast({
        title: 'Voice Not Supported',
        description: 'Sorry, voice input is not supported in your browser.',
        variant: 'destructive',
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }

    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await aiChatbot({ query: input });
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
              {messages.map((message) =>
                  message.sender === 'user' ? (
                    <div key={message.id} className="flex items-end gap-2 justify-end">
                      <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm shadow rounded-br-none max-w-[75%]">
                        {message.text}
                      </div>
                      <Avatar className="h-6 w-6">
                        <AvatarFallback><User size={16}/></AvatarFallback>
                      </Avatar>
                    </div>
                  ) : (
                    <div key={message.id} className="flex items-end gap-2 justify-start">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback><Bot size={16} className="text-primary"/></AvatarFallback>
                      </Avatar>
                      <div className="bg-muted text-foreground rounded-lg px-3 py-2 text-sm shadow rounded-bl-none max-w-[75%]">
                        {message.text}
                      </div>
                      {message.id !== 'initial-ai' && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 shrink-0"
                          onClick={() => handlePlayAudio(message.id, message.text)}
                          disabled={!!audioLoadingId}
                          aria-label="Play message audio"
                        >
                          {audioLoadingId === message.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Volume2 className="h-4 w-4" />
                          )}
                        </Button>
                      )}
                    </div>
                  )
                )}
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
              placeholder={isListening ? "Listening..." : "Type your message..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1"
              disabled={isLoading}
              aria-label="Chat input"
            />
            <Button type="button" size="icon" onClick={handleToggleListening} disabled={isLoading} aria-label="Use microphone" variant={isListening ? 'destructive' : 'ghost'}>
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()} aria-label="Send message">
              {isLoading ? <CornerDownLeft className="h-4 w-4 animate-ping" /> : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </CardFooter>
      </Card>
      <audio ref={audioPlayerRef} className="hidden" />
    </motion.div>
  );
}
