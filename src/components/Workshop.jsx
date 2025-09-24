import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaCheck, FaGift, FaUtensils, FaLeaf } from 'react-icons/fa';

const Workshop = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const workshopDetails = {
    title: "Workshop: Nghệ thuật pha trà từ vỏ cà phê",
    date: "04/10/2024",
    time: "12:30 - 14:45",
    location: "Nhà Văn hóa Sinh Viên TP.HCM",
    maxParticipants: 40,
    price: "Miễn phí"
  };

  const agenda = [
    {
      time: "12:30 - 12:45",
      activity: "Giới thiệu về trà vỏ cà phê",
      description: "Tìm hiểu nguồn gốc và lợi ích sức khỏe"
    },
    {
      time: "12:45 - 13:45", 
      activity: "Thực hành pha trà",
      description: "Học các kỹ thuật pha trà cơ bản và nâng cao"
    },
    {
      time: "13:45 - 14:00",
      activity: "Nghỉ giải lao",
      description: "Thưởng thức trà và bánh ngọt"
    },
    {
      time: "14:00 - 14:45",
      activity: "Chia sẻ kinh nghiệm",
      description: "Q&A và Custom túi trà của bạn"
    }
  ];

  const includes = [
    { icon: <FaUtensils />, text: "Dụng cụ pha trà chuyên nghiệp" },
    { icon: <FaLeaf />, text: "Trà vỏ cà phê cao cấp" },
    { icon: <FaGift />, text: "Quà tặng bộ trà về nhà" },
    { icon: <FaCheck />, text: "Chứng chỉ hoàn thành workshop" }
  ];

  const handleRegister = () => {
    setIsRegistering(true);
    // Simulate registration process
    setTimeout(() => {
      setIsRegistering(false);
      alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    }, 2000);
  };

  return (
    <section id="workshop" className="py-20 bg-gradient-to-br from-coffee-50 to-beige-50">
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
            Workshop đặc biệt
          </h2>
          <p className="text-xl text-coffee-600 max-w-3xl mx-auto leading-relaxed">
            Tham gia workshop độc đáo của chúng tôi để học cách pha chế và thưởng thức 
            trà từ vỏ cà phê cùng các hương hoa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Workshop Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold text-coffee-800 mb-6">
              {workshopDetails.title}
            </h3>

            {/* Workshop Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-coffee-600 text-xl" />
                <span className="text-coffee-700 font-medium">{workshopDetails.date}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaClock className="text-coffee-600 text-xl" />
                <span className="text-coffee-700 font-medium">{workshopDetails.time}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-coffee-600 text-xl" />
                <span className="text-coffee-700 font-medium">{workshopDetails.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaUsers className="text-coffee-600 text-xl" />
                <span className="text-coffee-700 font-medium">
                  Tối đa {workshopDetails.maxParticipants} người tham gia
                </span>
              </div>
            </div>

            {/* Spacer to push price + button to bottom together */}
            <div className="flex-1" />

            {/* Price */}
            <div className="w-full bg-coffee-100 p-5 rounded-2xl mb-2">
              <div className="text-center">
                <div
                  className="text-4xl md:text-5xl font-extrabold text-coffee-800 mb-2 tracking-wide drop-shadow antialiased"
                  style={{ textShadow: '0 0 10px rgba(80, 170, 140, 0.55), 0 0 18px rgba(53, 212, 133, 0.3)' }}
                >
                  <span className="animate-pulse drop-shadow" style={{ color: 'rgba(32, 143, 106, 0.95)' }}>{workshopDetails.price}</span>
                </div>
                <p className="text-coffee-600">Bao gồm tất cả dụng cụ và nguyên liệu</p>
              </div>
            </div>

            {/* Register Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isRegistering}
              href="#contact"
              className="mt-2 w-full text-center bg-coffee-600 text-white py-4 rounded-2xl text-lg font-semibold hover:bg-coffee-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isRegistering ? 'Đang đăng ký...' : 'Đăng ký tham gia'}
            </motion.a>
          </motion.div>

          {/* Agenda */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-coffee-800 mb-6">
              Chương trình workshop
            </h3>

            {agenda.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-coffee-100 text-coffee-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-coffee-800 mb-2">
                      {item.activity}
                    </h4>
                    <p className="text-coffee-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Workshop;
