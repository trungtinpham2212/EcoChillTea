import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaLeaf, FaHeart } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero.png)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-900/60 via-coffee-800/50 to-beige-900/60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center justify-center space-x-2 mb-6"
            >
              <FaLeaf className="text-coffee-600 text-3xl" />
              <span className="text-beige-200 font-semibold text-lg drop-shadow-lg" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>Sản phẩm tự nhiên</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(139, 69, 19, 0.5)' }}
            >
              Trà từ{' '}
              <span className="text-beige-300 drop-shadow-lg" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>vỏ cà phê</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-beige-100 mb-8 leading-relaxed drop-shadow-md"
              style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}
            >
              Khám phá hương vị độc đáo và lợi ích sức khỏe từ trà làm từ vỏ cà phê. 
              Tham gia workshop của chúng tôi để học cách pha chế và thưởng thức.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-coffee-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-coffee-700 transition-colors duration-300 shadow-lg"
              >
                Đăng ký Workshop
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-coffee-600 text-coffee-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-coffee-600 hover:text-white transition-colors duration-300"
              >
                Tìm hiểu thêm
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              <div className="flex items-center space-x-2">
                <FaHeart className="text-coffee-500" />
                <span className="text-beige-200 font-medium">Tốt cho sức khỏe</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaLeaf className="text-beige-300" />
                <span className="text-beige-200 font-medium">100% tự nhiên</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaHeart className="text-beige-300" />
                <span className="text-beige-200 font-medium">Thân thiện môi trường</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-beige-200"
        >
          <span className="text-sm mb-2">Cuộn xuống</span>
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
