import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Store, ShoppingCart } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';

    const NFTProductCard = ({ product, delay }) => {
      const { toast } = useToast();

      const handleBuy = () => {
        toast({
          title: "Thông báo",
          description: `Chức năng mua ${product.name} hiện chưa khả dụng. Sẽ sớm được cập nhật!`,
        });
      };

      return (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Card className="bg-white/10 backdrop-blur-lg border-sky-500/50 shadow-xl overflow-hidden h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-sky-300">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="aspect-square bg-black/20 rounded-lg mb-4 flex items-center justify-center">
                <img  alt={product.imageDescription} className="w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1688811363469-49a6f3bc2025" />
              </div>
              <p className="text-xl font-semibold text-yellow-300 mb-2">{product.price}</p>
              <CardDescription className="text-gray-300">{product.imageDescription}.</CardDescription>
            </CardContent>
            <CardFooter>
              <Button onClick={handleBuy} className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                <ShoppingCart className="mr-2 h-5 w-5" /> Mua
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };
    
    const NFTStorePage = ({ products }) => {
      return (
        <div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Store className="inline-block mr-3 h-10 w-10" /> Cửa Hàng NFT Dược Liệu
          </motion.h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <NFTProductCard key={product.id} product={product} delay={index * 0.1 + 0.2} />
            ))}
          </div>
        </div>
      );
    };

    export default NFTStorePage;