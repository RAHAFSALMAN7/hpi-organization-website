import React, { useState } from 'react';
import { MessageCircle, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const VirtualAssistant: React.FC<{ preview?: boolean }> = ({ preview = false }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      content: "Hello! I'm your HPI Virtual Assistant. Ask me anything about company policies, benefits, or procedures.",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const quickQuestions = [
    "How do I request time off?",
    "What are the company benefits?",
    "Where can I find HR policies?",
    "How to access my pay stub?",
    "What's the dress code policy?",
    "How to report technical issues?"
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();
      const assistantText = data?.choices?.[0]?.message?.content || "No response";

      const assistantMessage: Message = {
        id: messages.length + 2,
        type: 'assistant',
        content: assistantText,
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      const errorMessage: Message = {
        id: messages.length + 2,
        type: 'assistant',
        content: "Sorry, I couldn't process your request.",
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-[#F4F1F1] rounded-xl shadow-xl overflow-hidden">
        <div className="h-96 overflow-y-auto p-4 bg-[#F4F1F1]">
          {messages.map((message) => (
            <div key={message.id} className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start space-x-2 max-w-xs ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'bg-[#FFBD59]' : 'bg-[#737373]'}`}>
                  {message.type === 'user' ? <User className="w-4 h-4 text-[#737373]" /> : <Bot className="w-4 h-4 text-[#FFBD59]" />}
                </div>
                <div className={`p-3 rounded-lg ${message.type === 'user' ? 'bg-[#FFBD59] text-[#737373]' : 'bg-[#F4F1F1] text-[#737373] shadow-md'}`}>
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs mt-1 block text-[#737373]/70">{message.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
          {loading && <p className="text-sm text-[#737373] italic">Assistant is typing...</p>}
        </div>

        <div className="p-4 border-t bg-[#F4F1F1]">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {quickQuestions.map((q, i) => (
              <button key={i} onClick={() => setInputValue(q)} className="text-left text-sm text-[#737373] hover:text-[#FFBD59] hover:bg-[#F4F1F1] p-2 rounded-lg border border-[#737373]">{q}</button>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me anything about HPI..."
              className="flex-1 border border-[#737373] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFBD59]"
            />
            <button onClick={handleSendMessage} className="bg-[#FFBD59] text-[#737373] px-4 py-2 rounded-lg hover:bg-[#737373] hover:text-[#FFBD59]">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;
