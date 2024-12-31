import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-white/5">
      <div className="flex items-center gap-2 bg-white/5 rounded-xl p-2">
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Schreiben Sie hier..."
          className="flex-1 bg-transparent border-none outline-none text-white/90 placeholder-white/40 text-sm px-2"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`p-2 rounded-lg ${
            isLoading || !message.trim() 
              ? 'bg-[#4500F9]/50 cursor-not-allowed' 
              : 'bg-[#4500F9] hover:bg-[#4500F9]/90'
          } text-white transition-colors`}
        >
          <Send className={`w-4 h-4 ${isLoading ? 'animate-pulse' : ''}`} />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;