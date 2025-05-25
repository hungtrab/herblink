import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Bot, MessageCircle } from 'lucide-react';

    const ChatBot = ({ steps }) => {
      const [chatInput, setChatInput] = useState("");
      const [chatMessages, setChatMessages] = useState([{ sender: "bot", text: "Chào bạn, tôi có thể giúp gì cho bạn về GACP?" }]);

      const handleChatSubmit = () => {
        if (!chatInput.trim()) return;
        const newMessages = [...chatMessages, { sender: "user", text: chatInput }];
        
        let botResponse = "Xin lỗi, tôi chưa hiểu câu hỏi của bạn. Bạn có thể hỏi về các bước GACP, quét mã QR, hoặc các vấn đề chung.";
        const lowerInput = chatInput.toLowerCase();

        if (lowerInput.includes("kiểm tra đất")) {
          const step = steps.find(s => s.text.toLowerCase().includes("kiểm tra đất"));
          botResponse = step ? (step.completed ? "Bạn đã hoàn thành bước kiểm tra đất rồi." : "Bạn chưa hoàn thành bước kiểm tra đất.") : "Không tìm thấy bước kiểm tra đất.";
        } else if (lowerInput.includes("quét mã qr")) {
          botResponse = "Thông tin sản phẩm: Cát cánh, GACP 2024. Bạn có thể xem chi tiết hơn ở tab Mã QR.";
        } else if (lowerInput.includes("ung thư")) {
          botResponse = "CẢNH BÁO: Không tự ý trị ung thư bằng các phương pháp chưa được kiểm chứng! Hãy tham khảo ý kiến bác sĩ chuyên khoa.";
        }
        
        setChatMessages([...newMessages, { sender: "bot", text: botResponse }]);
        setChatInput("");
      };

      return (
        <Card className="bg-white/10 backdrop-blur-lg border-orange-500/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-orange-300 flex items-center">
              <Bot className="mr-3 h-8 w-8" /> ChatBot GACP
            </CardTitle>
            <CardDescription className="text-gray-300">Hỏi đáp về quy trình GACP và các vấn đề liên quan.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 overflow-y-auto p-4 bg-black/20 rounded-lg mb-4 space-y-3">
              {chatMessages.map((msg, index) => (
                <motion.div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-xl ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-600 text-gray-100'}`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={chatInput} 
                onChange={(e) => setChatInput(e.target.value)} 
                onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                placeholder="Nhập câu hỏi của bạn..." 
                className="flex-grow p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-orange-500 focus:border-orange-500"
              />
              <Button onClick={handleChatSubmit} className="bg-orange-500 hover:bg-orange-600 text-white">
                <MessageCircle className="mr-2 h-5 w-5" /> Gửi
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    };

    export default ChatBot;