import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube, FaLeaf } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.email) throw new Error('EMPTY_USER_EMAIL');

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: formData.email,
          to_name: formData.name || 'Bạn',
          from_name: 'EcoChillTea',
          subject: 'EcoChillTea - Xác nhận đăng ký tham gia',
          message: `Xin chào ${formData.name || ''},\n\nCảm ơn bạn đã đăng ký tham gia workshop của EcoChillTea!\nChúng tôi sẽ liên hệ qua số điện thoại ${formData.phone || 'đã cung cấp'} để xác nhận chi tiết.\n\nHẹn gặp bạn tại sự kiện!\nEcoChillTea`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      const msg = error?.message === 'EMPTY_USER_EMAIL'
        ? 'Vui lòng nhập email để nhận xác nhận.'
        : 'Xin lỗi, hệ thống gửi email đang gặp vấn đề. Vui lòng thử lại sau.';
      alert(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl text-coffee-600" />,
      title: "Điện thoại",
      details: ["+84 899452877" ],
      action: "tel:+84899452877"
    },
    {
      icon: <FaEnvelope className="text-2xl text-coffee-600" />,
      title: "Email",
      details: ["tinptse183485@fpt.edu.vn", "danttkss171227@fpt.edu.vn", "quynhntdss171246@fpt.edu.vn"
      ],

      action: "mailto:tinptse183485@fpt.edu.vn, danttkss171227@fpt.edu.vn, quynhntdss171246@fpt.edu.vn",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-coffee-600" />,
      title: "Địa chỉ",
      details: ["Đại học FPT TP.HCM", "Nhà Văn Hóa Sinh Viên TP.HCM"],
      action: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=61580836040465", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com/ecochilltea", label: "Instagram" },
    { icon: <FaYoutube />, url: "https://youtube.com/ecochilltea", label: "YouTube" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
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
            Liên hệ với chúng tôi
          </h2>
          <p className="text-xl text-coffee-600 max-w-3xl mx-auto leading-relaxed">
            Có câu hỏi về sản phẩm hoặc muốn đăng ký workshop? 
            Chúng tôi luôn sẵn sàng hỗ trợ bạn!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-coffee-50 to-beige-50 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-coffee-800 mb-6">
              Đăng ký tham gia / Liên hệ nhanh
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-coffee-700 font-medium mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-coffee-200 focus:border-coffee-500 focus:outline-none transition-colors duration-300"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label className="block text-coffee-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-coffee-200 focus:border-coffee-500 focus:outline-none transition-colors duration-300"
                    placeholder="Nhập email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-coffee-700 font-medium mb-2">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-coffee-200 focus:border-coffee-500 focus:outline-none transition-colors duration-300"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-coffee-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-coffee-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi xác nhận tham gia'}
              </motion.button>
            </form>
            {showToast && (
              <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
                <div className="bg-white text-coffee-800 shadow-2xl rounded-2xl px-5 py-3 border border-beige-300 flex items-center gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold">Đã gửi!</span>
                  <span className="text-coffee-600">Chúng tôi đã gửi email xác nhận đến bạn.</span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-coffee-800 mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, idx) => (
                      <a
                        key={idx}
                        href={info.action}
                        className="block text-coffee-600 hover:text-coffee-500 transition-colors duration-300"
                      >
                        {detail}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-coffee-50 to-beige-50 rounded-2xl p-6"
            >
              <h4 className="text-xl font-semibold text-coffee-800 mb-4">
                Theo dõi chúng tôi
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-coffee-600 text-white p-3 rounded-full hover:bg-coffee-700 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder removed per request */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
