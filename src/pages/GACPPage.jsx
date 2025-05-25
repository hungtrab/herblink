import React, { useState } from 'react';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
    import { Check, PlayCircle, QrCode, Bot } from 'lucide-react';
    import Checklist from '@/components/gacp/Checklist';
    import SeedGame from '@/components/gacp/SeedGame';
    import QRCodeScanner from '@/components/gacp/QRCodeScanner';
    import ChatBot from '@/components/gacp/ChatBot';

    const GACPPage = ({ steps, toggleStep, progress, score, badges, onGameComplete, hasPlayedGame }) => {
      const [activeTab, setActiveTab] = useState("checklist");

      return (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-black/20 p-2 rounded-lg">
            <TabsTrigger value="checklist" className="data-[state=active]:bg-green-500 data-[state=active]:text-white">
              <Check className="mr-2 h-4 w-4" /> Checklist
            </TabsTrigger>
            <TabsTrigger value="game" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              <PlayCircle className="mr-2 h-4 w-4" /> Mini-Game
            </TabsTrigger>
            <TabsTrigger value="qr" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
              <QrCode className="mr-2 h-4 w-4" /> Mã QR
            </TabsTrigger>
            <TabsTrigger value="chatbot" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Bot className="mr-2 h-4 w-4" /> ChatBot
            </TabsTrigger>
          </TabsList>

          <TabsContent value="checklist" className="mt-6">
            <Checklist 
              steps={steps} 
              toggleStep={toggleStep} 
              progress={progress} 
              score={score} 
              badges={badges} 
            />
          </TabsContent>

          <TabsContent value="game" className="mt-6">
            <SeedGame onGameComplete={onGameComplete} hasPlayedGame={hasPlayedGame} />
          </TabsContent>

          <TabsContent value="qr" className="mt-6">
            <QRCodeScanner />
          </TabsContent>
          
          <TabsContent value="chatbot" className="mt-6">
            <ChatBot steps={steps} />
          </TabsContent>
        </Tabs>
      );
    };

    export default GACPPage;