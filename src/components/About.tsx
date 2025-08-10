'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const About = () => {
  const education = [
    {
      degree: "Master of Science in Big Data Analytics",
      school: "Trent University",
      location: "Peterborough, Canada",
      period: "Jan 2024 - Apr 2025",
      icon: GraduationCap
    },
    {
      degree: "Bachelor of Technology in Electronics and Communications",
      school: "VTU University",
      location: "India",
      period: "Jul 2017 - Aug 2021",
      icon: GraduationCap
    }
  ]

  const achievements = [
        "Databricks Certified Data Engineer - Associate",
        "Microsoft Certified: Azure Security Engineer Associate",
        "Bright Beginner Award - Accenture"
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
      <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          About <span className="section-heading-accent">Me</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
        
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate Data Engineer with expertise in building scalable data solutions 
            and transforming raw data into actionable insights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Background</h3>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                I'm a Data Engineer based in Toronto, Canada, with a strong foundation in 
                data engineering and analytics. My journey in the tech world has been driven 
                by a passion for solving complex data challenges and creating efficient, 
                scalable solutions.
              </p>
              <p className="leading-relaxed">
                With experience at Accenture and other organizations, I've developed expertise 
                in Azure cloud services, Databricks, Power BI, and various ETL/ELT technologies. 
                I specialize in building robust data pipelines, implementing data quality checks, 
                and creating interactive dashboards that drive business decisions. Related to Big data, I'm a multi cloud person with experience in Azure and GCP. 
              </p>
              <p className="leading-relaxed">
                I graduated from Trent University in Master's in Big Data Analytics.
                I'm very enthusiastic towards learning ltest technnologies and currently upskilling my tehnical knowledge in GENAI
              </p>
            </div>
          </motion.div>

          {/* Education & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-lg card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <edu.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{edu.degree}</h4>
                        <p className="text-gray-600 mb-2">{edu.school}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Achievements & Certifications</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 