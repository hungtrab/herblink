import React, { useState, useEffect } from 'react';
    import { BrowserRouter as Router } from 'react-router-dom';
    import MainLayout from '@/components/layout/MainLayout';
    import { useToast } from '@/components/ui/use-toast';
    import { initialGACPSteps, initialLeaderboardData, nftProductsData } from '@/data/initialData';

    const App = () => {
      const [gacpSteps, setGacpSteps] = useState(() => {
        const savedSteps = localStorage.getItem('gacpSteps');
        return savedSteps ? JSON.parse(savedSteps) : initialGACPSteps;
      });
      const [score, setScore] = useState(() => {
        const savedScore = localStorage.getItem('score');
        return savedScore ? parseInt(savedScore, 10) : 0;
      });
      const [leaderboard, setLeaderboard] = useState(() => {
        const savedLeaderboard = localStorage.getItem('leaderboard');
        return savedLeaderboard ? JSON.parse(savedLeaderboard) : initialLeaderboardData;
      });
      const [userName, setUserName] = useState(() => localStorage.getItem('userName') || "Nông dân Lào Cai");
      const [hasPlayedGame, setHasPlayedGame] = useState(() => localStorage.getItem('hasPlayedGame') === 'true');
      const [hasCompletedSafetyQuiz, setHasCompletedSafetyQuiz] = useState(() => localStorage.getItem('hasCompletedSafetyQuiz') === 'true');
      const { toast } = useToast();

      useEffect(() => {
        localStorage.setItem('gacpSteps', JSON.stringify(gacpSteps));
        localStorage.setItem('score', score.toString());
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        localStorage.setItem('userName', userName);
        localStorage.setItem('hasPlayedGame', hasPlayedGame.toString());
        localStorage.setItem('hasCompletedSafetyQuiz', hasCompletedSafetyQuiz.toString());
      }, [gacpSteps, score, leaderboard, userName, hasPlayedGame, hasCompletedSafetyQuiz]);

      const toggleStep = (id) => {
        const stepIndex = gacpSteps.findIndex(s => s.id === id);
        if (stepIndex === -1) return;

        const isCompleting = !gacpSteps[stepIndex].completed;
        
        setGacpSteps(prevSteps =>
          prevSteps.map(step =>
            step.id === id ? { ...step, completed: !step.completed } : step
          )
        );
        
        setScore(prevScore => {
            const pointsChange = isCompleting ? 10 : -10;
            const newScore = Math.max(0, prevScore + pointsChange);
            updateLeaderboard(userName, newScore);
            return newScore;
        });
      };

      const progress = gacpSteps.length > 0 ? (gacpSteps.filter(step => step.completed).length / gacpSteps.length) * 100 : 0;
      
      const badges = [];
      if (progress >= 100) badges.push("Nông dân GACP Vàng");
      else if (progress >= 50) badges.push("Nông dân GACP Bạc");
      
      if (hasPlayedGame && !badges.includes("Chuyên gia Giống")) badges.push("Chuyên gia Giống");
      if (hasCompletedSafetyQuiz && !badges.includes("An Toàn Lao Động")) badges.push("An Toàn Lao Động");


      const updateLeaderboard = (name, newScore) => {
        setLeaderboard(prevLeaderboard => {
          const existingUserIndex = prevLeaderboard.findIndex(user => user.name === name);
          let updatedLeaderboard;
          if (existingUserIndex !== -1) {
            updatedLeaderboard = prevLeaderboard.map((user, index) => 
              index === existingUserIndex ? { ...user, score: newScore } : user
            );
          } else {
            updatedLeaderboard = [...prevLeaderboard, { name, score: newScore }];
          }
          return updatedLeaderboard.sort((a, b) => b.score - a.score).slice(0, 10);
        });
      };
      
      const handleGameComplete = (gameScore) => {
        if (!hasPlayedGame) {
          setScore(prevScore => {
            const newTotalScore = prevScore + gameScore;
            updateLeaderboard(userName, newTotalScore);
            return newTotalScore;
          });
          setHasPlayedGame(true);
          toast({ title: "Chúc mừng!", description: `Bạn đã hoàn thành mini-game và nhận được ${gameScore} điểm.` });
        } else {
          toast({ title: "Thông báo", description: "Bạn đã chơi mini-game này rồi.", variant: "destructive" });
        }
      };

      const handleSafetyQuizComplete = () => {
        if (!hasCompletedSafetyQuiz) {
          setHasCompletedSafetyQuiz(true);
          toast({ title: "Chúc mừng!", description: "Bạn đã hoàn thành bài kiểm tra an toàn và nhận NFT Hồn Nhiên!" });
        } else {
          toast({ title: "Thông báo", description: "Bạn đã hoàn thành bài kiểm tra an toàn rồi.", variant: "destructive" });
        }
      };

      return (
        <Router>
          <MainLayout 
            gacpSteps={gacpSteps}
            toggleStep={toggleStep}
            progress={progress}
            score={score}
            badges={badges}
            onGameComplete={handleGameComplete}
            hasPlayedGame={hasPlayedGame}
            leaderboard={leaderboard}
            userName={userName}
            onSafetyQuizComplete={handleSafetyQuizComplete}
            hasCompletedSafetyQuiz={hasCompletedSafetyQuiz}
            nftProducts={nftProductsData}
          />
        </Router>
      );
    };

    export default App;