import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
    import { Checkbox } from '@/components/ui/checkbox';
    import { Label } from '@/components/ui/label';
    import { Progress } from '@/components/ui/progress';
    import { BookOpen, Award } from 'lucide-react';

    const Checklist = ({ steps, toggleStep, progress, score, badges }) => {
      return (
        <Card className="bg-white/10 backdrop-blur-lg border-green-500/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-300 flex items-center">
              <BookOpen className="mr-3 h-8 w-8" /> Danh sách GACP
            </CardTitle>
            <CardDescription className="text-gray-300">Hoàn thành các bước để nhận điểm và huy hiệu.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {steps.slice(0, 2).map(step => ( // Only show first 2 steps as per request "1. Kiểm tra đất sạch, 2. Chọn giống"
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: step.id * 0.05 }}
                  className="flex items-center space-x-3 p-3 bg-black/20 rounded-lg hover:bg-black/30 transition-colors"
                >
                  <Checkbox 
                    id={`step-${step.id}`} 
                    checked={step.completed} 
                    onCheckedChange={() => toggleStep(step.id)}
                    className="border-green-400 data-[state=checked]:bg-green-500 data-[state=checked]:text-white"
                  />
                  <Label htmlFor={`step-${step.id}`} className={`text-lg ${step.completed ? 'line-through text-gray-400' : 'text-gray-100'}`}>
                    {step.text}
                  </Label>
                </motion.div>
              ))}
              {steps.length > 2 && (
                <p className="text-sm text-gray-400 italic">Và {steps.length - 2} bước khác...</p>
              )}
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center mb-2 text-gray-200">
                <span>Tiến độ hoàn thành:</span>
                <span className="font-bold text-green-300">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="w-full [&>div]:bg-gradient-to-r [&>div]:from-green-400 [&>div]:to-blue-400 h-3 rounded-md" />
            </div>
            <div className="mt-6">
              <p className="text-xl font-semibold text-gray-200">Điểm số: <span className="text-yellow-300">{score}</span></p>
            </div>
            {badges.length > 0 && (
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-gray-200 mb-2">Huy hiệu đạt được:</h4>
                <div className="flex flex-wrap gap-2">
                  {badges.map(badge => (
                    <motion.span 
                      key={badge}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md flex items-center"
                    >
                      <Award className="mr-1 h-4 w-4" /> {badge}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      );
    };

    export default Checklist;