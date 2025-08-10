'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Database, BarChart3, Shield, Truck } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Banking – Credit Card Transaction Data Pipeline",
      description: "Built a high-throughput ETL pipeline to process ~10 million daily credit card transactions using PySpark and Delta Lake on Databricks.",
      tools: ["Azure Databricks", "Delta Lake", "PySpark", "Power BI", "Databricks SQL"],
      icon: Shield,
      highlights: [
        "Implemented data masking and tokenization for PCI-DSS compliance, protecting sensitive cardholder information",
        "Integrated fraud detection logic into the pipeline using Databricks SQL, enabling near real-time flagging of suspicious activities",
        "Delivered interactive Power BI dashboards for downstream teams to monitor fraud trends and transaction volumes"
      ]
    },
    {
      title: "Toronto Crime Data Airflow Pipeline",
      description: "Developed an automated ETL pipeline to extract, transform, and load crime data from Toronto's open data portal into a PostgreSQL database.",
      tools: ["Python", "Apache Airflow", "PostgreSQL", "Docker"],
      icon: Database,
      highlights: [
        "Designed workflow orchestration using Apache Airflow, enabling efficient data ingestion and processing",
        "Automated data extraction from Toronto's open data portal",
        "Implemented data transformation and loading into PostgreSQL database"
      ]
    },
    {
      title: "Canadian Hospital Bed Capacity Analysis",
      description: "Developed an automated ETL pipeline to extract, transform, and load crime data from Toronto's open data portal into a PostgreSQL database.",
      tools: ["Python", "PowerBI", "Azure Data Lake"],
      icon: Database,
      highlights: [
        "Developed a health analytics platform with Azure Databricks & Data Lake, improving data processing by 30% while ensuring secure storage and compliance with Azure Synapse.",
        "Designed an interactive Power BI dashboard to analyze and monitor hospital bed availability across Canadian provinces and hospitals.",
        "Developed slicers for province and hospital name to enable dynamic drill-downs, helping stakeholders identify bed shortages and capacity trends at both regional and facility levels."
      ]
    },
    {
      title: "Patient Readmission Analytics – Healthcare Sector ",
      description: "Developed a health analytics platform with Azure Databricks & Data Lake, improving data processing by 30% while ensuring secure storage and compliance with Azure Synapse.",
      tools: ["PySpark", "Delta live tables", "Azure Databricks"],
      icon: BarChart3,
      highlights: [
        "Built ingestion pipelines for unifying multi-source hospital data including admissions, discharges, and patient histories.",
        "Applied Delta Live Tables for schema enforcement and deduplication, ensuring consistent longitudinal views.",
        "Collaborated with data analyst teams to explore readmission trends and improve reporting frameworks.",
        "Coordinated with infrastructure teams for DLT deployments, schema validations, and patch management in Azure environment."
      ]
    },
    {
      title: "Delivery Performance & SLA Monitoring Dashboard – Logistics",
      description: "Designed and developed an interactive Power BI dashboard to analyze key logistics metrics including shipment tracking, driver performance, delivery accuracy, and return trends for a Logistics Company.",
      tools: ["Power BI", "DAX", "Power Query", "Excel"],
      icon: Truck,
      highlights: [
        "Applied data cleaning techniques in Power Query and developed custom DAX measures to calculate average kilometers per stop, SLA adherence rates, and return frequencies",
        "Enabled dynamic filtering with slicers by region, delivery hub, and driver to facilitate root-cause analysis",
        "Created comprehensive logistics analytics dashboard for performance monitoring"
      ]
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          Featured <span className="section-heading-accent">Projects</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my key projects and technical achievements in data engineering
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 card-hover"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <project.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                </div>
              </div>

              {/* Tools */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's connect and explore how we can work together to solve complex data challenges.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 