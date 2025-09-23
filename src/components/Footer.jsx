import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showToast, setShowToast] = React.useState(false);

  const handleSubscribeClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const footerLinks = {
    company: [
      { name: 'Về chúng tôi', href: '#about' },
      { name: 'Sản phẩm', href: '#about' },
      { name: 'Workshop', href: '#workshop' },
      { name: 'Liên hệ', href: '#contact' }
    ],
    social: [
      { icon: <FaFacebook />, href: 'https://facebook.com/ecochilltea', label: 'Facebook' },
      { icon: <FaInstagram />, href: 'https://instagram.com/ecochilltea', label: 'Instagram' },
      { icon: <FaYoutube />, href: 'https://youtube.com/ecochilltea', label: 'YouTube' }
    ]
  };

  const contactInfo = [
    { icon: <FaPhone />, text: '+84 899452877' },
    { icon: <FaEnvelope />, text: 'tinptse183485@fpt.edu.vn' },
    { icon: <FaMapMarkerAlt />, text: 'Đại học FPT TP.HCM' }
  ];

  return (
    <footer className="bg-coffee-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/images/logo.png" 
                alt="EcoChillTea Logo" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold">EcoChillTea</span>
            </div>
            <p className="text-beige-200 mb-6 leading-relaxed">
              Chuyên cung cấp trà từ vỏ cà phê tự nhiên, mang đến hương vị độc đáo 
              và lợi ích sức khỏe tuyệt vời cho người tiêu dùng.
            </p>
            {/* Social moved to third column for balanced layout */}
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Công ty</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-beige-200 hover:text-beige-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links removed per request */}

          {/* Contact + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Liên hệ</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="text-beige-400">
                    {contact.icon}
                  </div>
                  <span className="text-beige-200">{contact.text}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Kết nối</h3>
            <div className="flex space-x-4">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-beige-600 text-white p-2 rounded-full hover:bg-beige-500 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-coffee-700"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Đăng ký nhận tin tức
            </h3>
            <p className="text-beige-200 mb-6">
              Nhận thông tin về sản phẩm mới và workshop sắp tới
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 rounded-xl text-coffee-800 focus:outline-none focus:ring-2 focus:ring-beige-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubscribeClick}
                className="bg-beige-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-beige-500 transition-colors duration-300"
              >
                Đăng ký
              </motion.button>
            </div>
          </div>
          {showToast && (
            <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
              <div className="bg-white text-coffee-800 shadow-2xl rounded-2xl px-5 py-3 border border-beige-300 flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">Cảm ơn bạn!</span>
                <span className="text-coffee-600">Chúng tôi sẽ thông báo cho bạn sớm.</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-coffee-700 text-center"
        >
          <p className="text-beige-200">
            © {currentYear} EcoChillTea. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-beige-300 text-sm mt-2">
            Được phát triển với ❤️ cho cộng đồng yêu trà
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
