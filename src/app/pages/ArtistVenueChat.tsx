import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, Building2, Music2, ArrowLeft } from "lucide-react";
import { messages as initialMessages, conversations as initialConversations } from "../data/messages";
import type { Message, Conversation } from "../data/messages";

export function ArtistVenueChat() {
  const [conversations] = useState<Conversation[]>(
    initialConversations.filter(c => c.type === 'artist-venue')
  );
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(
    conversations[0] || null
  );
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, selectedConversation]);

  const conversationMessages = selectedConversation
    ? messages.filter(
        m =>
          (m.senderId === selectedConversation.artistId && m.recipientId === selectedConversation.venueId) ||
          (m.senderId === selectedConversation.venueId && m.recipientId === selectedConversation.artistId)
      )
    : [];

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;

    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      senderId: selectedConversation.artistId!,
      senderName: selectedConversation.artistName!,
      senderType: 'artist',
      recipientId: selectedConversation.venueId!,
      recipientName: selectedConversation.venueName!,
      content: newMessage,
      timestamp: new Date().toISOString(),
      read: false,
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
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
      return date.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: '2-digit' });
    }

    return date.toLocaleDateString('ru-RU', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Артист - площадка чат
          </span>
        </h1>
        <p className="text-gray-400">Общайтесь с площадками о бронировании и деталях шоу</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <div className="lg:col-span-1 rounded-xl bg-[#13131a] border border-purple-500/20 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-purple-500/20">
            <h3 className="text-lg text-white flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-purple-400" />
              Мои беседы
            </h3>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv)}
                className={`w-full p-4 border-b border-purple-500/10 hover:bg-purple-500/5 transition-all text-left ${
                  selectedConversation?.id === conv.id ? 'bg-purple-500/10' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-white truncate">{conv.venueName}</h4>
                      {conv.unreadCount > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-purple-500 text-white text-xs flex-shrink-0">
                          {conv.unreadCount}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-1">С {conv.artistName}</p>
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                    <p className="text-xs text-gray-700 mt-1">{formatTime(conv.lastMessageTime)}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-2 rounded-xl bg-[#13131a] border border-purple-500/20 overflow-hidden flex flex-col">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-purple-500/20 flex items-center gap-3">
                <button 
                  onClick={() => setSelectedConversation(null)}
                  className="lg:hidden p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-400" />
                </button>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white">{selectedConversation.venueName}</h3>
                  <p className="text-sm text-gray-500">Площадка</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {conversationMessages.map((msg) => {
                  const isArtist = msg.senderType === 'artist';
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isArtist ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[70%] ${isArtist ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                        <div className="flex items-center gap-2 px-2">
                          {!isArtist && <Music2 className="w-3 h-3 text-blue-400" />}
                          <span className="text-xs text-gray-500">{msg.senderName}</span>
                        </div>
                        <div
                          className={`px-4 py-3 rounded-2xl ${
                            isArtist
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
              <div className="p-4 border-t border-purple-500/20">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Напишите сообщение..."
                    className="flex-1 px-4 py-3 rounded-xl bg-[#0a0a0f] border border-purple-500/20 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Отправить
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl text-gray-400 mb-2">Не выбрано ни одной беседы</h3>
                <p className="text-gray-600">Выберите беседу, чтобы начать общение</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
