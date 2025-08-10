'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: "Accenture",
      position: "Data Engineer",
      period: "Jan 2022 – Dec 2023",
      location: "Bengaluru, India",
      achievements: [
        "Designed and deployed data pipelines using Azure Data Factory (ADF) and Azure Data Lake Gen2 to automate data ingestion from SFTP, APIs, and cloud sources.",
        "Built batch data pipelines using PySpark in Azure Synapse Analytics, supporting real-time and near real-time data processing.",
        "Integrated monitoring and alerting scripts for pipeline health and system uptime, supporting large-scale enterprise data operations.",
        "Created Power BI and Looker dashboards; implemented star/snowflake schema models for performance reporting and forecasting.",
        "Partnered with stakeholders to identify reporting gaps and implement data pipeline automation, reducing manual processes by 40%.",
        "Participated in data architecture discussions, ensuring scalable and compliant workflows across distributed data environments.",
        "Developed containerized data workflows using Docker; collaborated with DevOps for orchestration",
        "Worked with Git for CI/CD deployments, supporting version control and release automation for data pipelines.",
        "Collaborated with infrastructure and DevOps teams for environment patching, deployment planning, and production issue resolution.",
        "Assisted in migration of legacy SSIS packages to Azure Data Factory and performed debugging of SSIS workflows during transition."
      ]
    },
    {
      company: "Mphasis",
      position: "Data Engineer",
      period: "Sep 2021 – Dec 2021",
      location: "Bengaluru, India",
      achievements: [
        "Built interactive dashboards in Power BI and Looker to visualize performance and pricing trends across product lines.",
        "Automated recurring performance reports using Python scripts and SQL, reducing manual effort by 40%.",
        "Executed ad-hoc queries on SQL databases for product and campaign performance analysis.",
        "Collaborated with marketing and pricing teams to support decision-making through data insights."
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Work <span className="section-heading-accent">Experience</span>
        </motion.h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            My professional journey in data engineering and analytics
          </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-800">{exp.company}</h3>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-700 mb-2">{exp.position}</h4>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-gray-800 text-lg">Key Achievements:</h5>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: achievementIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700 leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 