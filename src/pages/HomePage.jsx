import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Check, Trophy, Shield, PlayCircle, QrCode, Bot, ChevronRight, MapPin, Store, Archive } from 'lucide-react';

    const FeatureCard = ({ icon, title, description, linkTo, delay }) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
        className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all flex flex-col"
      >
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        <Button variant="secondary" asChild className="w-full bg-green-500 hover:bg-green-600 text-white mt-auto">
          <Link to={linkTo}>
            Xem chi tiết <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    );
    
    const HomePage = () => (
      <div className="text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Chào mừng đến với HerbLink
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-12 text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Khám phá các tính năng hỗ trợ canh tác và kết nối dược liệu.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <FeatureCard
            icon={<MapPin className="h-12 w-12 text-lime-400" />}
            title="HerbMap"
            description="Khám phá bản đồ dược liệu và các vùng trồng trọng điểm tại Lào Cai."
            linkTo="/herbmap"
            delay={0.3}
          />
          <FeatureCard
            icon={<Check className="h-12 w-12 text-green-400" />}
            title="Checklist GACP"
            description="Theo dõi tiến độ thực hành nông nghiệp tốt theo tiêu chuẩn GACP."
            linkTo="/gacp"
            delay={0.4}
          />
          <FeatureCard
            icon={<Store className="h-12 w-12 text-sky-400" />}
            title="NFT Store"
            description="Mua bán và sở hữu các NFT dược liệu độc đáo, có giá trị."
            linkTo="/nft-store"
            delay={0.5}
          />
          <FeatureCard
            icon={<Archive className="h-12 w-12 text-amber-400" />}
            title="Kho Dược Liệu"
            description="Quản lý và theo dõi thông tin về kho dược liệu của bạn (sắp ra mắt)."
            linkTo="/herb-inventory"
            delay={0.6}
          />
          <FeatureCard
            icon={<Trophy className="h-12 w-12 text-yellow-400" />}
            title="Bảng Xếp Hạng"
            description="Xem thứ hạng nông dân xuất sắc theo điểm GACP."
            linkTo="/leaderboard"
            delay={0.7}
          />
          <FeatureCard
            icon={<Shield className="h-12 w-12 text-blue-400" />}
            title="An Toàn Lao Động"
            description="Học về an toàn nông nghiệp và nhận chứng nhận NFT."
            linkTo="/safety"
            delay={0.8}
          />
          <FeatureCard
            icon={<PlayCircle className="h-12 w-12 text-purple-400" />}
            title="Mini-Game Vui Nhộn"
            description="Kiểm tra kiến thức và nhận điểm thưởng."
            linkTo="/gacp" 
            delay={0.9}
          />
           <FeatureCard
            icon={<QrCode className="h-12 w-12 text-teal-400" />}
            title="Truy Xuất Nguồn Gốc"
            description="Quét mã QR sản phẩm để xem thông tin chi tiết."
            linkTo="/gacp"
            delay={1.0}
          />
          <FeatureCard
            icon={<Bot className="h-12 w-12 text-orange-400" />}
            title="ChatBot Hỗ Trợ"
            description="Nhận tư vấn và giải đáp thắc mắc nhanh chóng."
            linkTo="/gacp"
            delay={1.1}
          />
        </div>
      </div>
    );

    export default HomePage;