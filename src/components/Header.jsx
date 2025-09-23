import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Trang chủ', href: '#home' },
    { name: 'Về sản phẩm', href: '#about' },
    { name: 'Workshop', href: '#workshop' },
    { name: 'Liên hệ', href: '#contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img 
              src="/images/logo.png" 
              alt="EcoChillTea Logo" 
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-coffee-800">EcoChillTea</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-coffee-700 hover:text-coffee-500 font-medium transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-coffee-600 text-white px-6 py-2 rounded-full hover:bg-coffee-700 transition-colors duration-300"
            >
              Đăng ký Workshop
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-coffee-700"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-coffee-700 hover:text-coffee-500 font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="bg-coffee-600 text-white px-6 py-2 rounded-full hover:bg-coffee-700 transition-colors duration-300 w-fit">
                Đăng ký Workshop
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
