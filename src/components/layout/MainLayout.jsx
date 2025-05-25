import React from 'react';
    import { Routes, Route, useLocation } from 'react-router-dom';
    import { motion, AnimatePresence } from 'framer-motion';
    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import HomePage from '@/pages/HomePage';
    import GACPPage from '@/pages/GACPPage';
    import LeaderboardPage from '@/pages/LeaderboardPage';
    import SafetyPage from '@/pages/SafetyPage';
    import NFTStorePage from '@/pages/NFTStorePage';
    import HerbMapPage from '@/pages/HerbMapPage';
    import HerbInventoryPage from '@/pages/HerbInventoryPage';
    import { Toaster } from '@/components/ui/toaster';

    const MainLayout = ({ gacpSteps, toggleStep, progress, score, badges, onGameComplete, hasPlayedGame, leaderboard, userName, onSafetyQuizComplete, hasCompletedSafetyQuiz, nftProducts }) => {
      const location = useLocation();

      return (
        <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto p-4 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/gacp" element={
                    <GACPPage 
                      steps={gacpSteps} 
                      toggleStep={toggleStep} 
                      progress={progress} 
                      score={score} 
                      badges={badges} 
                      onGameComplete={onGameComplete}
                      hasPlayedGame={hasPlayedGame}
                    />
                  } />
                  <Route path="/leaderboard" element={<LeaderboardPage leaderboard={leaderboard} currentUser={userName} currentScore={score} />} />
                  <Route path="/safety" element={<SafetyPage onQuizComplete={onSafetyQuizComplete} hasCompletedQuiz={hasCompletedSafetyQuiz} />} />
                  <Route path="/nft-store" element={<NFTStorePage products={nftProducts} />} />
                  <Route path="/herbmap" element={<HerbMapPage />} />
                  <Route path="/herb-inventory" element={<HerbInventoryPage />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
          <Toaster />
        </div>
      );
    };

    export default MainLayout;