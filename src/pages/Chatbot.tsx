import React, { useState, useRef, useEffect } from 'react';
import { FaMicrophone, FaVolumeUp, FaVolumeMute, FaUserSecret, FaPaperPlane } from 'react-icons/fa';
import ChatBubble from '../components/ChatBubble';
import Button from '../components/Button';
import Icon from '../components/Icon';
import BottomNavBar from '../components/BottomNavBar';
import { mockChatMessages } from '../data/mockData';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const [isReadAloud, setIsReadAloud] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickShortcuts = [
    { id: '1', text: 'Fee Details', message: 'Can you tell me about the fee structure?' },
    { id: '2', text: 'Exam Timetable', message: 'When are the exams scheduled?' },
    { id: '3', text: 'Scholarships', message: 'What scholarships are available?' },
    { id: '4', text: 'Library Hours', message: 'What are the library timings?' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: inputMessage,
        isUser: true,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: "I understand your query. Let me help you with that information. This is a demo response - in a real implementation, this would connect to an AI service.",
          isUser: false,
          timestamp: new Date().toISOString()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleQuickShortcut = (message: string) => {
    setInputMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 flex flex-col">
      {/* Header */}
      <div className="bg-primary text-white px-6 py-4 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-montserrat font-bold">CampusMitra AI</h1>
            <p className="text-blue-100 text-sm font-roboto">Your virtual assistant</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsAnonymous(!isAnonymous)}
              className={`p-2 rounded-full transition-colors ${
                isAnonymous ? 'bg-white bg-opacity-20' : 'bg-white bg-opacity-10'
              }`}
            >
              <Icon icon={FaUserSecret} className={`text-sm ${isAnonymous ? 'text-white' : 'text-blue-200'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Settings Bar */}
      <div className="px-6 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
              className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-roboto transition-colors ${
                isVoiceEnabled 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <Icon icon={FaMicrophone} className="text-sm" />
              <span>Voice</span>
            </button>
            <button
              onClick={() => setIsReadAloud(!isReadAloud)}
              className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-roboto transition-colors ${
                isReadAloud 
                  ? 'bg-accent text-white' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {isReadAloud ? <Icon icon={FaVolumeUp} className="text-sm" /> : <Icon icon={FaVolumeMute} className="text-sm" />}
              <span>Read Aloud</span>
            </button>
          </div>
          {isAnonymous && (
            <span className="text-xs text-gray-500 font-roboto">Anonymous Mode</span>
          )}
        </div>
      </div>

      {/* Quick Shortcuts */}
      <div className="px-6 py-4">
        <h3 className="text-sm font-montserrat font-semibold text-gray-700 mb-3">Quick Shortcuts</h3>
        <div className="flex flex-wrap gap-2">
          {quickShortcuts.map((shortcut) => (
            <Button
              key={shortcut.id}
              variant="secondary"
              size="sm"
              onClick={() => handleQuickShortcut(shortcut.message)}
              className="text-xs"
            >
              {shortcut.text}
            </Button>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 px-6 py-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="px-6 py-4 bg-white border-t border-gray-200">
        <div className="flex items-end space-x-3">
          <div className="flex-1">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-roboto"
              rows={1}
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="p-3 bg-primary text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Icon icon={FaPaperPlane} className="text-sm" />
            </button>
            {isVoiceEnabled && (
              <button className="p-3 bg-accent text-white rounded-lg hover:bg-yellow-500 transition-colors">
                <Icon icon={FaMicrophone} className="text-sm" />
              </button>
            )}
          </div>
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
};

export default Chatbot;
