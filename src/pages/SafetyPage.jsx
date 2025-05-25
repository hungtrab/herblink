import React, { useState } from 'react';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
    import { Shield, PlayCircle, Video, AlertTriangle, CheckCircle, UserCheck, Languages } from 'lucide-react';
    import SafetyQuiz from '@/components/safety/SafetyQuiz';

    const SafetyPage = ({ onQuizComplete, hasCompletedQuiz }) => {
      const [showQuiz, setShowQuiz] = useState(false);
      const [videoLanguage, setVideoLanguage] = useState("Vietnamese");

      if (showQuiz || hasCompletedQuiz) {
        return <SafetyQuiz onQuizComplete={onQuizComplete} hasCompletedQuiz={hasCompletedQuiz} />;
      }

      const videoContent = {
        title: "Video An Toàn Sử Dụng Dược Liệu",
        description: "Tìm hiểu về cách sử dụng dược liệu an toàn và hiệu quả, phòng tránh các rủi ro tiềm ẩn.",
        warnings: [
          { icon: <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />, text: "Nguy cơ ngộ độc Cát cánh nếu dùng sai liều lượng hoặc sai cách." },
          { icon: <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />, text: "Nhiễm trùng có thể xảy ra khi dùng Lá lốt đắp ngoài không đảm bảo vệ sinh." },
          { icon: <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />, text: "Không tự ý kết hợp nhiều loại dược liệu mà không có chỉ dẫn." },
        ],
        guidelines: [
          { icon: <CheckCircle className="h-5 w-5 text-green-400 mr-2" />, text: "Luôn tuân thủ hướng dẫn GACP để đảm bảo dược liệu sạch và an toàn." },
          { icon: <CheckCircle className="h-5 w-5 text-green-400 mr-2" />, text: "Rửa sạch dược liệu trước khi sử dụng, đặc biệt là các loại dùng tươi." },
          { icon: <CheckCircle className="h-5 w-5 text-green-400 mr-2" />, text: "Bảo quản dược liệu ở nơi khô ráo, thoáng mát, tránh ẩm mốc." },
        ],
        doctorConsultation: {
          icon: <UserCheck className="h-5 w-5 text-blue-400 mr-2" />,
          text: "QUAN TRỌNG: Luôn tham khảo ý kiến bác sĩ hoặc chuyên gia y tế trước khi sử dụng bất kỳ loại dược liệu nào để điều trị bệnh, đặc biệt là các bệnh mãn tính hoặc nghiêm trọng."
        }
      };

      return (
        <Card className="bg-white/10 backdrop-blur-lg border-blue-500/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-300 flex items-center">
              <Shield className="mr-3 h-8 w-8" /> {videoContent.title}
            </CardTitle>
            <CardDescription className="text-gray-300">{videoContent.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 p-4 bg-black/20 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-300 mb-3 flex items-center"><Languages className="mr-2 h-6 w-6" /> Chọn ngôn ngữ video (mô phỏng):</h3>
              <Select value={videoLanguage} onValueChange={setVideoLanguage}>
                <SelectTrigger className="w-[200px] bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Chọn ngôn ngữ" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 text-white border-gray-600">
                  <SelectItem value="Vietnamese">Tiếng Việt</SelectItem>
                  <SelectItem value="Thai">Tiếng Thái</SelectItem>
                  <SelectItem value="Hmong">Tiếng H'Mông</SelectItem>
                </SelectContent>
              </Select>
              <p className="mt-2 text-sm text-gray-400">Video sẽ được hiển thị bằng: {videoLanguage}</p>
            </div>

            <div className="aspect-video bg-black/30 rounded-lg mb-8 flex items-center justify-center relative">
              <Video className="h-24 w-24 text-gray-500" />
              <p className="absolute bottom-4 left-4 text-gray-300 bg-black/50 px-2 py-1 rounded text-sm">Video mô phỏng ({videoLanguage}) - 1 phút</p>
            </div>

            <div className="mb-6 p-4 bg-red-900/30 rounded-lg">
              <h3 className="text-xl font-semibold text-red-300 mb-3">Cảnh báo rủi ro quan trọng:</h3>
              <ul className="space-y-2">
                {videoContent.warnings.map((item, index) => (
                  <li key={index} className="flex items-start text-red-200">
                    {item.icon} <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 p-4 bg-green-900/30 rounded-lg">
              <h3 className="text-xl font-semibold text-green-300 mb-3">Hướng dẫn sử dụng an toàn theo GACP:</h3>
              <ul className="space-y-2">
                {videoContent.guidelines.map((item, index) => (
                  <li key={index} className="flex items-start text-green-200">
                    {item.icon} <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 bg-blue-900/30 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-300 mb-3 flex items-start">
                {videoContent.doctorConsultation.icon}
                <span>{videoContent.doctorConsultation.text}</span>
              </h3>
            </div>
            
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => setShowQuiz(true)} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <PlayCircle className="mr-2 h-5 w-5" /> Học an toàn & Làm Quiz (Nhận NFT)
            </Button>
          </CardFooter>
        </Card>
      );
    };

    export default SafetyPage;