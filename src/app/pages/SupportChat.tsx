import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, Headphones, User, ArrowLeft } from "lucide-react";
import { messages as initialMessages, conversations as initialConversations } from "../data/messages";
import type { Message } from "../data/messages";

export function SupportChat() {
  const [messages, setMessages] = useState<Message[]>(
    initialMessages.filter(m => m.senderType === 'user' || m.senderType === 'support')
  );
  const [newMessage, setNewMessage] = useState('');
  const [showChat, setShowChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      senderId: 'user-1',
      senderName: 'John Doe',
      senderType: 'user',
      recipientId: 'support',
      recipientName: 'VenueX Support',
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: false,
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');

    // Simulate support response after 2 seconds
    setTimeout(() => {
      const supportMsg: Message = {
        id: `msg-${Date.now()}-support`,
        senderId: 'support',
        senderName: 'VenueX Support',
        senderType: 'support',
        recipientId: 'user-1',
        recipientName: 'John Doe',
        content: 'Thanks for reaching out! A support agent will assist you shortly.',
        timestamp: new Date().toISOString(),
        read: false,
      };
      setMessages(prev => [...prev, supportMsg]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 24) {
      return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    }
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Support Chat
          </span>
        </h1>
        <p className="text-gray-400">Get help from our support team</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl bg-[#13131a] border border-purple-500/20 overflow-hidden flex flex-col h-[700px]">
          {/* Chat Header */}
          <div className="p-6 border-b border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl text-white">VenueX Support</h3>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Online • Typical response time: 2 minutes
                </p>
              </div>
            </div>
          </div>

          {/* Welcome Message */}
          {messages.length === 0 && (
            <div className="p-6 border-b border-purple-500/10">
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  👋 Welcome to VenueX Support! We're here to help you with:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Ticket purchases and refunds
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Account and billing questions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Concert information and updates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Technical support
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => {
              const isUser = msg.senderType === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[75%] ${isUser ? 'items-end' : 'items-start'} flex flex-col gap-2`}>
                    <div className="flex items-center gap-2 px-2">
                      {!isUser && <Headphones className="w-4 h-4 text-purple-400" />}
                      {isUser && <User className="w-4 h-4 text-blue-400" />}
                      <span className="text-xs text-gray-500">{isUser ? 'You' : 'Support Agent'}</span>
                    </div>
                    <div
                      className={`px-5 py-3 rounded-2xl ${
                        isUser
                          ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-tr-sm'
                          : 'bg-[#0a0a0f] border border-purple-500/20 text-gray-200 rounded-tl-sm'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                    <span className="text-xs text-gray-600 px-2">{formatTime(msg.timestamp)}</span>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="p-6 border-t border-purple-500/20 bg-[#0a0a0f]">
            <div className="flex gap-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question or issue..."
                className="flex-1 px-5 py-3 rounded-xl bg-[#13131a] border border-purple-500/20 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-purple-500/50"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-3 text-center">
              Press Enter to send • Shift + Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
