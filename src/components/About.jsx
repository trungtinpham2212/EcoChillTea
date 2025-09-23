import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLeaf, FaHeart, FaRecycle, FaFlask, FaThermometerHalf, FaClock } from 'react-icons/fa';

const About = () => {
  const benefits = [
    {
      icon: <FaHeart className="text-3xl text-coffee-600" />,
      title: "Tốt cho tim mạch",
      description: "Chứa chất chống oxy hóa giúp bảo vệ tim mạch và giảm cholesterol"
    },
    {
      icon: <FaFlask className="text-3xl text-coffee-600" />,
      title: "Giàu chất chống oxy hóa",
      description: "Hàm lượng polyphenol cao giúp chống lão hóa và tăng cường miễn dịch"
    },
    {
      icon: <FaThermometerHalf className="text-3xl text-coffee-600" />,
      title: "Hỗ trợ trao đổi chất",
      description: "Caffeine tự nhiên giúp tăng cường trao đổi chất và đốt cháy mỡ thừa"
    },
    {
      icon: <FaRecycle className="text-3xl text-coffee-600" />,
      title: "Thân thiện môi trường",
      description: "Tận dụng vỏ cà phê thải bỏ, góp phần bảo vệ môi trường"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Thu thập vỏ cà phê",
      description: "Chúng tôi thu thập vỏ cà phê từ các trang trại địa phương"
    },
    {
      step: "02", 
      title: "Làm sạch và sấy khô",
      description: "Vỏ cà phê được làm sạch và sấy khô tự nhiên"
    },
    {
      step: "03",
      title: "Chế biến thành trà",
      description: "Quy trình chế biến đặc biệt để tạo ra hương vị độc đáo"
    },
    {
      step: "04",
      title: "Đóng gói và phân phối",
      description: "Đóng gói trong bao bì thân thiện môi trường"
    }
  ];

  // Scroll-to-zoom for process background
  const processRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: processRef, offset: ["start end", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.4, 0.95]);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-coffee-800 mb-6">
            Về sản phẩm của chúng tôi
          </h2>
          <p className="text-xl text-coffee-600 max-w-3xl mx-auto leading-relaxed">
            Trà từ vỏ cà phê là một sản phẩm độc đáo, kết hợp hương vị đậm đà của cà phê 
            với lợi ích sức khỏe của trà thảo mộc.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-beige-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-coffee-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-coffee-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section + Stats with shared background */}
        <div ref={processRef} className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <motion.div className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform" style={{ backgroundImage: 'url(/images/quytrinh.png)', scale: bgScale }} />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-coffee-900/70 via-coffee-800/60 to-beige-900/70" />
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 p-8 lg:p-12"
        >
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              Quy trình sản xuất
            </h3>
            <p className="text-lg text-beige-200 drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.6)' }}>
              Từ vỏ cà phê đến tách trà thơm ngon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                  <div className="text-coffee-600 font-bold text-2xl mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-semibold text-coffee-800 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-coffee-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow Connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full transform -translate-y-1/2 z-20" style={{ marginLeft: '0.3rem' }}>
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.5))' }}>
                      <path d="M2 6H22M22 6L18 2M22 6L18 10" stroke="#F4D7B8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 mb-12 grid md:grid-cols-3 gap-8 relative z-10"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-2 drop-shadow"
            >
              100%
            </motion.div>
            <p className="text-white font-medium opacity-90">Tự nhiên</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-2 drop-shadow"
            >
              0
            </motion.div>
            <p className="text-white font-medium opacity-90">Chất bảo quản</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-2 drop-shadow"
            >
              24h
            </motion.div>
            <p className="text-white font-medium opacity-90">Thơm ngon</p>
          </div>
        </motion.div>
      </div>
      </div>
      </section>
  );
};

export default About;
