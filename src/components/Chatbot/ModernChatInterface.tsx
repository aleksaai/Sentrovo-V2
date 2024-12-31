import React from 'react';
import { useChat } from './hooks/useChat';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ModernChatInterface = () => {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-b from-[#4500F9]/20 via-[#4500F9]/10 to-transparent blur-xl" />
      
      {/* Chat container with fixed height */}
      <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 h-[600px] flex flex-col overflow-hidden">
        {/* Header - Added rounded corners */}
        <div className="bg-gradient-to-r from-[#4500F9] to-[#6E3FFE] p-4 flex-shrink-0 rounded-t-3xl">
          <img 
            src="https://i.postimg.cc/BbSdBndC/67214d0664d9afbe71ca25b0-sentorov-2.png" 
            alt="Sentrovo" 
            className="h-6"
          />
        </div>

        {/* Messages with fixed height and scrollable container */}
        <div className="flex-1 overflow-hidden">
          <ChatMessages messages={messages} />
        </div>

        {/* Input area */}
        <div className="flex-shrink-0">
          <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default ModernChatInterface;