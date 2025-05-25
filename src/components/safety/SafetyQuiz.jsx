import React, { useState } from 'react';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';
    import { HelpCircle } from 'lucide-react';
    import { safetyQuizQuestionsData } from '@/data/initialData';

    const SafetyQuiz = ({ onQuizComplete, hasCompletedQuiz }) => {
      const [currentQuizQuestionIndex, setCurrentQuizQuestionIndex] = useState(0);
      const [quizAnswers, setQuizAnswers] = useState({});
      const [quizResult, setQuizResult] = useState(null);
      const { toast } = useToast();

      const handleAnswerSelect = (questionIndex, answer) => {
        setQuizAnswers(prev => ({ ...prev, [questionIndex]: answer }));
      };

      const handleSubmitQuiz = () => {
        let correctAnswers = 0;
        safetyQuizQuestionsData.forEach((q, index) => {
          if (quizAnswers[index] === q.correctAnswer) {
            correctAnswers++;
          }
        });
        const score = (correctAnswers / safetyQuizQuestionsData.length) * 100;
        setQuizResult({ score, correctAnswers });
        if (score >= (1 / safetyQuizQuestionsData.length * 100) ) { // Pass if at least one correct for demo
          onQuizComplete();
        } else {
          toast({ title: "Chưa đạt!", description: `Bạn cần trả lời đúng ít nhất 1 câu để hoàn thành. Hãy thử lại!`, variant: "destructive" });
        }
      };
      
      if (hasCompletedQuiz && quizResult === null) {
        return (
          <Card className="bg-white/10 backdrop-blur-lg border-blue-500/50 shadow-xl text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-blue-300 flex items-center justify-center">
                <HelpCircle className="mr-3 h-8 w-8" /> Bài Kiểm Tra An Toàn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-gray-200 mb-4">Bạn đã hoàn thành bài kiểm tra an toàn và nhận NFT Hồn Nhiên!</p>
              <img  alt="NFT Badge for safety quiz completion" class="mx-auto my-4 h-48 w-48" src="https://images.unsplash.com/photo-1644143379190-08a5f055de1d" />
            </CardContent>
          </Card>
        );
      }

      if (quizResult) {
        return (
          <Card className="bg-white/10 backdrop-blur-lg border-blue-500/50 shadow-xl text-center">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-blue-300">Kết quả Kiểm tra An Toàn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-gray-100 mb-2">Bạn đã trả lời đúng {quizResult.correctAnswers}/{safetyQuizQuestionsData.length} câu.</p>
              <p className="text-4xl font-bold text-yellow-300 mb-6">Điểm: {quizResult.score.toFixed(0)}%</p>
              {quizResult.score >= (1 / safetyQuizQuestionsData.length * 100) ? (
                <>
                  <p className="text-green-300 text-xl mb-4">Chúc mừng! Bạn đã hoàn thành bài kiểm tra và nhận NFT Hồn Nhiên!</p>
                  <img  alt="NFT Badge for safety quiz completion" class="mx-auto my-4 h-48 w-48" src="https://images.unsplash.com/photo-1695392158511-e293ed316d2c" />
                </>
              ) : (
                <p className="text-red-300 text-xl mb-4">Rất tiếc, bạn chưa đạt. Hãy xem lại video và thử lại nhé!</p>
              )}
              <Button onClick={() => { setCurrentQuizQuestionIndex(0); setQuizAnswers({}); setQuizResult(null); }} className="bg-blue-500 hover:bg-blue-600 mt-4">
                {quizResult.score >= (1 / safetyQuizQuestionsData.length * 100) ? "Xem lại kiến thức" : "Làm lại bài kiểm tra"}
              </Button>
            </CardContent>
          </Card>
        );
      }

      const currentQuestion = safetyQuizQuestionsData[currentQuizQuestionIndex];

      return (
        <Card className="bg-white/10 backdrop-blur-lg border-blue-500/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-300 flex items-center">
              <HelpCircle className="mr-3 h-8 w-8" /> Bài Kiểm Tra An Toàn
            </CardTitle>
            <CardDescription className="text-gray-300">Trả lời các câu hỏi sau khi xem video.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold text-gray-100 mb-4">Câu hỏi {currentQuizQuestionIndex + 1}/{safetyQuizQuestionsData.length}:</p>
            <p className="text-2xl text-gray-200 mb-6">{currentQuestion.question}</p>
            <div className="space-y-3">
              {currentQuestion.options.map(option => (
                <Button 
                  key={option} 
                  onClick={() => handleAnswerSelect(currentQuizQuestionIndex, option)}
                  variant={quizAnswers[currentQuizQuestionIndex] === option ? "secondary" : "outline"}
                  className={`w-full text-left justify-start p-4 text-lg ${quizAnswers[currentQuizQuestionIndex] === option ? 'bg-blue-600 border-blue-500' : 'border-blue-400 hover:bg-blue-700/50 text-gray-100'}`}
                >
                  {option}
                </Button>
              ))}
            </div>
            <div className="mt-8 flex justify-between">
              <Button 
                onClick={() => setCurrentQuizQuestionIndex(prev => Math.max(0, prev - 1))} 
                disabled={currentQuizQuestionIndex === 0}
                variant="outline"
                className="border-gray-500 text-gray-300 hover:bg-gray-700"
              >
                Câu trước
              </Button>
              {currentQuizQuestionIndex < safetyQuizQuestionsData.length - 1 ? (
                <Button 
                  onClick={() => setCurrentQuizQuestionIndex(prev => Math.min(safetyQuizQuestionsData.length - 1, prev + 1))}
                  disabled={quizAnswers[currentQuizQuestionIndex] === undefined}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  Câu tiếp theo
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(quizAnswers).length !== safetyQuizQuestionsData.length}
                  className="bg-green-500 hover:bg-green-600"
                >
                  Nộp bài
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      );
    };

    export default SafetyQuiz;