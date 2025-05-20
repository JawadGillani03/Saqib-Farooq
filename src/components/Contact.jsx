import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData);
    
    console.log('Form data:', data);
    alert(`Thanks for your message, ${data.user_name}! I'll get back to you soon.`);
    form.current.reset();
  };

  // Floating animation variants
  const floatingVariants = {
    initial: { y: 0 },
    animate: { 
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-[#222831] to-[#393E46] relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-[#FFD369]/20"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.5 }}
        className="absolute bottom-1/3 right-20 w-12 h-12 rounded-full bg-[#FFD369]/10"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-[#FFD369]/15"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD369]">
            Let's <span className="text-[#EEEEEE]">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFD369] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form - Now with floating card effect */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="lg:w-1/2 bg-[#393E46]/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-[#FFD369]/10 hover:border-[#FFD369]/30 transition-all"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#FFD369]">Send Me a Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-[#EEEEEE]">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 bg-[#222831] border border-[#393E46] rounded-lg focus:border-[#FFD369] focus:outline-none text-[#EEEEEE] transition-all placeholder-[#EEEEEE]/40"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-[#EEEEEE]">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 bg-[#222831] border border-[#393E46] rounded-lg focus:border-[#FFD369] focus:outline-none text-[#EEEEEE] transition-all placeholder-[#EEEEEE]/40"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-[#EEEEEE]">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-[#222831] border border-[#393E46] rounded-lg focus:border-[#FFD369] focus:outline-none text-[#EEEEEE] transition-all placeholder-[#EEEEEE]/40"
                  placeholder="What would you like to say?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 211, 105, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FFD369] to-[#f8c247] text-[#222831] font-semibold rounded-lg transition-all duration-300 shadow-lg w-full group"
              >
                <motion.span
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <FaPaperPlane className="group-hover:rotate-12 transition-transform" />
                  Send Message
                </motion.span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info - Now with interactive elements */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <div className="bg-[#393E46]/90 backdrop-blur-sm rounded-2xl p-8 h-full shadow-2xl border border-[#FFD369]/10 hover:border-[#FFD369]/30 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-[#FFD369]">Find Me Here</h3>
              
              <div className="space-y-8">
                {/* Email Card */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-[#222831] rounded-xl cursor-pointer"
                >
                  <div className="bg-[#FFD369] p-3 rounded-full text-[#222831] flex-shrink-0">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-[#EEEEEE]/80 text-sm">Email me at</p>
                    <a href="mailto:Saqib.playBoy@gmail.com" className="text-[#EEEEEE] hover:text-[#FFD369] transition-colors font-medium">
                     saqibfarooq2035@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Social Media */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-[#EEEEEE]">My Social Links</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: <FaGithub />, url: "https://github.com", color: "bg-[#333] hover:bg-[#4078c0]" },
                      { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/saqib-farooq-318ab3318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "bg-[#0077b5] hover:bg-[#00a0dc]" },
                      { icon: <FaTwitter />, url: "https://x.com/Saqikhan035?t=F3tI39tVlrv8aw6hQq6m5A&s=09", color: "bg-[#1da1f2] hover:bg-[#1a91da]" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full text-white text-xl ${social.color} transition-all shadow-md`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quote with animated border */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative p-6 border border-[#FFD369]/20 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 border border-[#FFD369]/10 rounded-xl animate-pulse"></div>
                  <p className="text-[#EEEEEE]/90 italic relative z-10">
                    "Great collaborations start with a simple hello. Don't hesitate to reach out!"
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}