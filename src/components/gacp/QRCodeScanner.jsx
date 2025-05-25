import React from 'react';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';
    import { QrCode, ShoppingCart } from 'lucide-react';

    const QRCodeScanner = () => {
      const { toast } = useToast();

      const handleQRScan = () => {
        toast({
          title: "Thông tin sản phẩm",
          description: (
            <div>
              <p><strong>Sản phẩm:</strong> Cát cánh</p>
              <p><strong>Tiêu chuẩn:</strong> GACP 2024</p>
              <div className="mt-4 flex space-x-2">
                <Button size="sm" onClick={() => window.open('https://shopee.vn', '_blank')} className="bg-orange-500 hover:bg-orange-600">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Mua qua Shopee
                </Button>
                <Button size="sm" onClick={() => window.open('https://momo.vn', '_blank')} className="bg-pink-500 hover:bg-pink-600">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Mua qua Momo
                </Button>
              </div>
            </div>
          ),
          duration: 10000,
        });
      };

      return (
        <Card className="bg-white/10 backdrop-blur-lg border-teal-500/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-teal-300 flex items-center">
              <QrCode className="mr-3 h-8 w-8" /> Quét Mã QR Sản Phẩm
            </CardTitle>
            <CardDescription className="text-gray-300">Truy xuất thông tin GACP và mua hàng trực tuyến.</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6 flex justify-center">
              <img  alt="Mã QR tĩnh cho sản phẩm Cát cánh GACP 2024" className="w-48 h-48 border-4 border-teal-300 p-1 rounded-lg bg-white" src="https://images.unsplash.com/photo-1665292591084-e8524e64f918" />
            </div>
            <p className="text-gray-200 mb-6">Nhấn vào mã QR (hoặc nút bên dưới) để xem thông tin sản phẩm.</p>
            <Button onClick={handleQRScan} size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              <QrCode className="mr-2 h-5 w-5" /> Hiển thị thông tin (Mô phỏng)
            </Button>
          </CardContent>
        </Card>
      );
    };
    export default QRCodeScanner;