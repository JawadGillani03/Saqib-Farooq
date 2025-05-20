import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiHtml5, SiCss3 } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";
const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-4xl" />, level: 95 },
  { name: "CSS", icon: <SiCss3 className="text-4xl" />, level: 90 },
  { name: "Tailwind", icon: <SiTailwindcss className="text-4xl" />, level: 85 },
  { name: "JavaScript", icon: <SiJavascript className="text-4xl" />, level: 80 },
  { name: "React", icon: <FaReact className="text-4xl" />, level: 75 },
  { name: "Git", icon: <FaGitAlt className="text-4xl" />, level: 70 },
  { name: "Next js", icon: <RiNextjsFill className="text-4xl" />, level: 65 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-[#393E46]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#FFD369]">My Skills</h2>
          <div className="w-20 h-1 bg-[#FFD369] mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#222831] rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-[#FFD369] mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#EEEEEE]">{skill.name}</h3>
              
              {/* Animated Progress Bar */}
              <div className="w-full bg-[#393E46] rounded-full h-2.5 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="bg-[#FFD369] h-2.5 rounded-full"
                />
              </div>
              <span className="text-sm text-[#EEEEEE]/80">{skill.level}%</span>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#222831] rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#FFD369]">Also Familiar With</h3>
          <div className="flex flex-wrap gap-3">
            {['TypeScript', 'Next.js', 'Redux', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Vite'].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-[#393E46] text-[#EEEEEE] rounded-full text-sm font-medium hover:bg-[#FFD369] hover:text-[#222831] transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}