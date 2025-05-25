import React from 'react';

    const Footer = () => {
      return (
        <footer className="p-4 bg-black/30 backdrop-blur-md text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Nông Nghiệp Thông Minh Lào Cai. Phát triển bởi Hostinger Horizons.</p>
        </footer>
      );
    };

    export default Footer;