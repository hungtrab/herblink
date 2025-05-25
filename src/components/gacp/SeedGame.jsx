import React, { useState } from 'react';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';
    import { PlayCircle } from 'lucide-react';
    import { seedGameQuestionsData } from '@/data/initialData';

    const SeedGame = ({ onGameComplete, hasPlayedGame }) => {
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [gameScore, setGameScore] = useState(0);
      const [showResult, setShowResult] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const { toast } = useToast();

      const handleAnswer = (option, points) => {
        setSelectedAnswer(option);
        let currentPoints = 0;
        if (option === seedGameQuestionsData[currentQuestionIndex].correctAnswer) {
          currentPoints = points;
          setGameScore(prev => prev + points);
          toast({ title: "Chính xác!", description: `Bạn nhận được ${points} điểm.`, className: "bg-green-500 text-white" });
        } else {
          toast({ title: "Không chính xác!", description: `Đáp án đúng là: ${seedGameQuestionsData[currentQuestionIndex].correctAnswer}`, variant: "destructive" });
        }

        setTimeout(() => {
          setSelectedAnswer(null);
          if (currentQuestionIndex < seedGameQuestionsData.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
          } else {
            setShowResult(true);
            onGameComplete(gameScore + currentPoints); 
          }
        }, 1500);
      };

      if (hasPlayedGame && !showResult) {
        return (
          <Card className="bg-white/10 backdrop-blur-lg border-purple-500/50 shadow-xl text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-purple-300 flex items-center justify-center">
                <PlayCircle className="mr-3 h-8 w-8" /> Mini-Game: Chọn Đúng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-gray-200">Bạn đã hoàn thành mini-game này rồi.</p>
              <img  alt="Completed game illustration - a trophy" class="mx-auto my-4 h-48 w-48" src="https://images.unsplash.com/photo-1638739641967-bc833d955385" />
            </CardContent>
          </Card>
        );
      }
      
      if (showResult) {
        return (
          <Card className="bg-white/10 backdrop-blur-lg border-purple-500/50 shadow-xl text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-purple-300">Kết quả Mini-Game</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-gray-100 mb-4">Bạn đã hoàn thành game!</p>
              <p className="text-4xl font-bold text-yellow-300 mb-6">Tổng điểm: {gameScore}</p>
              <img  alt="Game result illustration - fireworks" class="mx-auto my-4 h-48 w-48" src="https://images.unsplash.com/photo-1594012903064-65902faca0d6" />
              <Button onClick={() => { setCurrentQuestionIndex(0); setGameScore(0); setShowResult(false); }} className="bg-purple-500 hover:bg-purple-600">
                Chơi lại (Không tính điểm)
              </Button>
            </CardContent>
          </Card>
        );
      }

      const currentQuestion = seedGameQuestionsData[currentQuestionIndex];

      return (
        <Card className="bg-white/10 backdrop-blur-lg border-purple-500/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-purple-300 flex items-center">
              <PlayCircle className="mr-3 h-8 w-8" /> Mini-Game: Chọn Đúng
            </CardTitle>
            <CardDescription className="text-gray-300">Trả lời các câu hỏi để nhận điểm thưởng. (Chỉ tính điểm lần chơi đầu)</CardDescription>
          </CardHeader>
          <CardContent>
            {currentQuestion.image && (
              <div className="mb-4 flex justify-center">
                <img  alt="Hình ảnh câu hỏi về phân bón" className="rounded-lg shadow-md max-h-48" src="https://images.unsplash.com/photo-1661783936151-9f0b1800ef3d" />
              </div>
            )}
            <p className="text-xl font-semibold text-gray-100 mb-4">Câu hỏi {currentQuestionIndex + 1}/{seedGameQuestionsData.length}:</p>
            <p className="text-2xl text-gray-200 mb-6">{currentQuestion.question}</p>
            <div className="space-y-3">
              {currentQuestion.options.map(option => (
                <Button 
                  key={option} 
                  onClick={() => handleAnswer(option, currentQuestion.points)}
                  variant={selectedAnswer === option ? (option === currentQuestion.correctAnswer ? "default" : "destructive") : "outline"}
                  className={`w-full text-left justify-start p-4 text-lg 
                    ${selectedAnswer === option ? 
                      (option === currentQuestion.correctAnswer ? 'bg-green-600 border-green-500 hover:bg-green-700' : 'bg-red-600 border-red-500 hover:bg-red-700') 
                      : 'border-purple-400 hover:bg-purple-700/50 text-gray-100'
                    } 
                    disabled:opacity-100`}
                  disabled={selectedAnswer !== null}
                >
                  {option}
                </Button>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
                 <Button 
                    onClick={() => handleAnswer(selectedAnswer || currentQuestion.options[0] , currentQuestion.points)} 
                    disabled={selectedAnswer === null}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 text-lg"
                  >
                    Trả lời
                  </Button>
            </div>
            <p className="mt-6 text-xl font-semibold text-gray-200">Điểm hiện tại: <span className="text-yellow-300">{gameScore}</span></p>
          </CardContent>
        </Card>
      );
    };

    export default SeedGame;