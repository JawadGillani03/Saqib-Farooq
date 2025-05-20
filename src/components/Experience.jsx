import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  const timelineData = [
    {
      type: 'education',
      title: 'Matriculation',
      institution: 'Govt High School Nasri wala ,Mianwali,Punjab ',
      period: '2017 - 2019',
      description: 'Science',
      icon: <FaGraduationCap />
    },
    {
      type: 'experience',
      title: 'Frontend Developer',
      institution: 'NIC KUST',
      period: '2022 - 2023',
      description: 'Developing responsive web applications using React and modern JavaScript frameworks.',
      icon: <FaBriefcase />
    },
    {
      type: 'education',
      title: 'Intermediate in Computer Science',
      institution: 'Ravian College Kamar Mushani ,Mianwali,Punjab',
      period: '2019 - 2021',
      description: 'Computer Science',
      icon: <FaGraduationCap />
    },
    {
      type: 'experience',
      title: 'Web Development Intern',
      institution: 'Future in Technology,Rawaipindi,Pakistan',
      period: '2020 - 2021',
      description: 'Worked on client projects implementing responsive designs and frontend functionality.',
      icon: <FaBriefcase />
    },
     {
      type: 'education',
      title: 'Software Engineering',
      institution: 'Kohat University of Science and Technology',
      period: '2021 - 2025',
      description: 'Software Engineering',
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-[#222831] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD369]">Experience & Education</h2>
          <div className="w-20 h-1 bg-[#FFD369] mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#FFD369]/20"></div>
          
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center
                ${item.type === 'education' ? 'bg-[#FFD369] text-[#222831]' : 'bg-[#393E46] text-[#FFD369] border-2 border-[#FFD369]'}`}>
                {item.icon}
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(255, 211, 105, 0.2)'
                }}
                className={`w-5/12 p-6 rounded-xl ${item.type === 'education' ? 'bg-[#393E46]' : 'bg-[#393E46]/90'} border border-[#FFD369]/10 hover:border-[#FFD369]/30 transition-all`}
              >
                <div className={`flex items-center gap-2 mb-2 ${item.type === 'education' ? 'text-[#FFD369]' : 'text-[#EEEEEE]'}`}>
                  {item.icon}
                  <span className="font-semibold">{item.type === 'education' ? 'Education' : 'Experience'}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-[#EEEEEE]">{item.title}</h3>
                <p className="text-[#FFD369] mb-2">{item.institution}</p>
                <p className="text-sm text-[#EEEEEE]/80 mb-3">{item.period}</p>
                <p className="text-[#EEEEEE]/90">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD369] to-transparent mt-16"
          style={{ originX: 0.5 }}
        />
      </div>
    </section>
  );
}