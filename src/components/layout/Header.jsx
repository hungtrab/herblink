import React from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
    import { Home, Leaf, Shield, Trophy, MapPin, Store, Archive, Menu } from 'lucide-react';

    const navItems = [
      { path: "/", label: "Trang chủ", icon: Home },
      { path: "/herbmap", label: "HerbMap", icon: MapPin },
      { path: "/gacp", label: "GACP", icon: Leaf },
      { path: "/nft-store", label: "NFT Store", icon: Store },
      { path: "/herb-inventory", label: "Kho dược liệu", icon: Archive },
      { path: "/leaderboard", label: "Bảng Xếp Hạng", icon: Trophy },
      { path: "/safety", label: "An Toàn", icon: Shield },
    ];

    const Header = () => {
      const location = useLocation();

      return (
        <header className="p-4 bg-black/30 backdrop-blur-md shadow-lg sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
              <img  alt="HerbLink App Logo - a stylized green leaf" class="h-8 w-8" src="https://images.unsplash.com/photo-1600899049309-a1e1608bac42" />
              <span>HerbLink</span>
            </Link>
            <nav className="hidden md:flex space-x-1 lg:space-x-2">
              {navItems.map(item => (
                <Button key={item.path} variant={location.pathname === item.path ? "secondary" : "ghost"} asChild size="sm">
                  <Link to={item.path} className="flex items-center space-x-2">
                    <item.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                    <span className="text-xs lg:text-sm">{item.label}</span>
                  </Link>
                </Button>
              ))}
            </nav>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="md:hidden"><Menu className="h-5 w-5" /></Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-800 text-white border-green-500">
                <DialogHeader>
                  <DialogTitle>Điều hướng</DialogTitle>
                </DialogHeader>
                <nav className="flex flex-col space-y-2 mt-4">
                  {navItems.map(item => (
                    <Button key={item.path} variant={location.pathname === item.path ? "secondary" : "ghost"} asChild className="w-full justify-start">
                      <DialogClose asChild>
                        <Link to={item.path} className="flex items-center space-x-2">
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </Link>
                      </DialogClose>
                    </Button>
                  ))}
                </nav>
              </DialogContent>
            </Dialog>
          </div>
        </header>
      );
    };

    export default Header;