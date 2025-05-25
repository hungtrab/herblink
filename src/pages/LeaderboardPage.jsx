import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
    import { Trophy, Star, Users } from 'lucide-react';
    import { staticLeaderboardData } from '@/data/initialData';

    const LeaderboardPage = ({ currentUser, currentScore }) => (
      <Card className="bg-white/10 backdrop-blur-lg border-yellow-500/50 shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-yellow-300 flex items-center">
            <Trophy className="mr-3 h-8 w-8" /> Bảng Xếp Hạng Nông Dân Lào Cai
          </CardTitle>
          <CardDescription className="text-gray-300">Top nông dân có điểm GACP cao nhất (dữ liệu tĩnh).</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-max text-left text-gray-200">
              <thead className="border-b border-yellow-500/50">
                <tr>
                  <th className="p-3 text-lg font-semibold">Hạng</th>
                  <th className="p-3 text-lg font-semibold">Tên Nông Dân</th>
                  <th className="p-3 text-lg font-semibold">Điểm</th>
                </tr>
              </thead>
              <tbody>
                {staticLeaderboardData.map((user, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`border-b border-yellow-500/20 hover:bg-black/20 
                      ${user.name === currentUser && user.score === currentScore ? 'ring-2 ring-green-400 bg-green-500/20' : ''}
                      ${index === 0 ? 'bg-gradient-to-r from-yellow-600/30 to-amber-500/30' : ''}
                    `}
                  >
                    <td className="p-4 font-bold text-xl">
                      {user.rank}
                      {user.rank === 1 && <Star className="inline ml-1 h-5 w-5 text-yellow-400" />}
                    </td>
                    <td className="p-4 text-lg flex items-center">
                      <Users className="mr-2 h-5 w-5 text-green-400" /> {user.name}
                    </td>
                    <td className="p-4 text-lg font-semibold text-yellow-300">{user.score} điểm</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {staticLeaderboardData.length === 0 && (
            <p className="text-center text-gray-400 mt-4">Chưa có dữ liệu bảng xếp hạng.</p>
          )}
        </CardContent>
      </Card>
    );

    export default LeaderboardPage;