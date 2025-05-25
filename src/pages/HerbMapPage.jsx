import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
    import { MapPin } from 'lucide-react';

    const HerbMapPage = () => {
      return (
        <div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-green-400 to-teal-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MapPin className="inline-block mr-3 h-10 w-10" /> HerbMap - Bản Đồ Dược Liệu Lào Cai
          </motion.h1>
          <Card className="bg-white/10 backdrop-blur-lg border-lime-500/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-lime-300">Bản đồ vùng trồng dược liệu</CardTitle>
              <CardDescription className="text-gray-300">Khám phá các khu vực trồng dược liệu chính tại Lào Cai.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-black/20 rounded-lg mb-6 flex items-center justify-center">
                <img  alt="Bản đồ Lào Cai với các vùng dược liệu được đánh dấu" className="w-full h-full object-contain p-4" src="https://images.unsplash.com/photo-1560959394-da415281f433" />
              </div>
              <p className="text-gray-200 mb-4">
                Bản đồ này (mô phỏng) hiển thị các vùng trồng dược liệu trọng điểm tại Lào Cai. Trong phiên bản đầy đủ, bạn có thể tương tác với bản đồ để xem thông tin chi tiết về từng vùng, loại cây trồng, và các hợp tác xã liên kết.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-white/10 backdrop-blur-lg border-purple-500/50 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-300">NFT Dược Liệu Nổi Bật</CardTitle>
              <CardDescription className="text-gray-300">Một số NFT dược liệu đặc trưng từ các vùng trồng.</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto bg-black/20 rounded-lg p-4">
                <img  alt="Hình ảnh NFT tĩnh của một loại dược liệu quý hiếm" className="w-full h-auto object-contain rounded-md" src="https://images.unsplash.com/photo-1599997842142-fa1b1b3f926c" />
              </div>
              <p className="text-gray-200 mt-4">
                Đây là ví dụ về một NFT dược liệu (mô phỏng) có thể được liên kết với một vùng trồng cụ thể trên bản đồ, đảm bảo tính minh bạch và truy xuất nguồn gốc.
              </p>
            </CardContent>
          </Card>
        </div>
      );
    };

    export default HerbMapPage;