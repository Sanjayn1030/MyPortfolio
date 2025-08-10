'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, BarChart3, Settings } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      icon: Code,
      skills: ["Python", "SQL", "PySpark", "DBT", "Airflow", "REST APIs", "DAX"]
    },
    {
      title: "Cloud & Platforms",
      icon: Cloud,
      skills: ["Azure Synapse", "Azure Data Factory", "Databricks", "Azure Data Lake", "Snowflake", "LakeHouse"]
    },
    {
      title: "Databases & Formats",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Snowflake", "JSON", "Parquet"]
    },
   
    {
      title: "DevOps / CI-CD",
      icon: Settings,
      skills: ["Git", "Docker", "Jenkins", "Agile", "JIRA", "Confluence"]
    },
    {
      title: "Visualization",
      icon: BarChart3,
      skills: ["Power BI", "Looker", "Tableau"]
    },
    {
      title: "Other",
      icon: Settings,
      skills: ["Data Modeling", "Data Governance", "Data Quality", "Dashboard Design"]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Technical <span className="section-heading-accent">Skills</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            My expertise spans across various technologies and tools in the data engineering ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Additional Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Experience working with incident/change management tools like Jira</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Strong understanding of SDLC, InfoSec, and audit processes</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Proficient in Agile and Scrum methodologies; experience working in cross-functional teams</span>
              </div>
              
            </div>
            <div className="space-y-3">
            <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Skilled in documenting data flows, pipeline logic, and architecture using Confluence and Lucidchart</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Excellent communication and team collaboration skills with experience mentoring junior staff</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">Experience working with large, high-volume datasets and real-time data processing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 