import React from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const MessageInput = ({ value, onChange, onSubmit }: MessageInputProps) => {
  return (
    <div className="max-w-[85%] space-y-2">
      <textarea
        className="w-full bg-[#4500F9]/10 border border-[#4500F9]/30 rounded-xl px-4 py-3 text-white/90 placeholder-white/40 focus:outline-none focus:border-[#4500F9]/50 min-h-[120px] resize-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Beschreiben Sie Ihr Anliegen..."
      />
      <button
        onClick={onSubmit}
        className="flex items-center gap-2 px-4 py-2 bg-[#4500F9] rounded-xl text-white text-sm hover:bg-[#4500F9]/90 transition-colors"
      >
        <span>Absenden</span>
        <Send className="w-4 h-4" />
      </button>
    </div>
  );
};

export default MessageInput;