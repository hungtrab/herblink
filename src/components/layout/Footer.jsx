import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-black/30 backdrop-blur-md text-center text-sm">
      <p>&copy; {new Date().getFullYear()} HerbLink - Di sản Dược liệu Việt: Kết nối số, phát triển xanh.</p>
    </footer>
  );
};

export default Footer;