import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
    import { Archive, Construction } from 'lucide-react';

    const HerbInventoryPage = () => {
      return (
        <div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Archive className="inline-block mr-3 h-10 w-10" /> Kho Dược Liệu
          </motion.h1>
          <Card className="bg-white/10 backdrop-blur-lg border-amber-500/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-amber-300">Quản lý Kho Dược Liệu</CardTitle>
              <CardDescription className="text-gray-300">Theo dõi số lượng, chất lượng và nguồn gốc dược liệu của bạn.</CardDescription>
            </CardHeader>
            <CardContent className="text-center py-12">
              <Construction className="h-24 w-24 text-amber-400 mx-auto mb-6" />
              <p className="text-2xl text-gray-200 mb-4">Tính năng đang được phát triển!</p>
              <p className="text-gray-300">
                Chúng tôi đang làm việc chăm chỉ để mang đến cho bạn công cụ quản lý kho dược liệu hiệu quả nhất.
                Tính năng này sẽ sớm ra mắt, giúp bạn dễ dàng kiểm soát tồn kho, theo dõi lô hàng, và đảm bảo chất lượng sản phẩm.
              </p>
            </CardContent>
          </Card>
        </div>
      );
    };

    export default HerbInventoryPage;