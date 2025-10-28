// import { motion } from "framer-motion";
// import { Briefcase } from "lucide-react";

// const experiences = [
//   {
//     title: "Senior Data Engineer",
//     company: "Tech Solutions Inc.",
//     period: "2022 - Present",
//     description:
//       "Led architecture and implementation of enterprise-scale data pipelines processing 5TB+ daily across AWS, Snowflake, and Databricks. Reduced processing time by 40% through optimization.",
//     achievements: [
//       "Architected data lakehouse on Azure Databricks with Delta Lake",
//       "Implemented CI/CD pipelines with 99.5% uptime for data workflows",
//       "Developed real-time streaming solutions using Kafka and Spark",
//       "Mentored team of 5 junior engineers on best practices",
//     ],
//   },
//   {
//     title: "Data Engineer",
//     company: "Cloud Analytics Corp",
//     period: "2020 - 2022",
//     description:
//       "Designed and maintained ETL pipelines on GCP BigQuery and AWS Redshift. Built automated data quality frameworks that improved data accuracy by 35%.",
//     achievements: [
//       "Migrated legacy data warehouse to Snowflake, improving query performance 3x",
//       "Created 20+ Power BI dashboards for executive decision-making",
//       "Implemented dbt for data transformation and testing",
//       "Established data governance policies and lineage tracking",
//     ],
//   },
//   {
//     title: "Junior Data Engineer",
//     company: "Data Innovations Ltd",
//     period: "2019 - 2020",
//     description:
//       "Developed Python-based ETL scripts for data ingestion from multiple sources. Contributed to building scalable data infrastructure on AWS.",
//     achievements: [
//       "Built automated data validation scripts using Great Expectations",
//       "Optimized SQL queries reducing execution time by 50%",
//       "Created documentation for data pipeline workflows",
//       "Collaborated with analysts to deliver business insights",
//     ],
//   },
// ];

// const Experience = () => {
//   return (
//     <section id="experience" className="py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//             Professional Experience
//           </h2>
//           <div className="w-20 h-1 bg-accent mx-auto"></div>
//         </motion.div>

//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30"></div>

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className={`relative mb-12 md:mb-20 ${
//                 index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2"
//               }`}
//             >
//               {/* Timeline Dot */}
//               <div
//                 className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 
//                            bg-accent rounded-full items-center justify-center shadow-lg z-10 
//                            border-4 border-background"
//               >
//                 <Briefcase className="w-6 h-6 text-primary" />
//               </div>

//               {/* Content Card */}
//               <div
//                 className={`bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border 
//                             hover:shadow-xl transition-shadow ${
//                               index % 2 === 0 ? "md:mr-8" : "md:ml-8"
//                             }`}
//               >
//                 <div className="flex items-start space-x-4 md:hidden mb-4">
//                   <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
//                     <Briefcase className="w-5 h-5 text-primary" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
//                     <p className="text-accent font-semibold">{exp.company}</p>
//                     <p className="text-sm text-muted-foreground">{exp.period}</p>
//                   </div>
//                 </div>

//                 <div className="hidden md:block mb-4">
//                   <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
//                   <p className="text-accent font-semibold text-lg">{exp.company}</p>
//                   <p className="text-muted-foreground">{exp.period}</p>
//                 </div>

//                 <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

//                 <ul className="space-y-2">
//                   {exp.achievements.map((achievement, i) => (
//                     <li key={i} className="flex items-start space-x-2 text-muted-foreground">
//                       <span className="text-accent mt-1 flex-shrink-0">▸</span>
//                       <span>{achievement}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;



import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Engineer",
    company: "Doublene | Austin, TX",
    period: "Jan 2025 - Present",
    description:
      "Designing and automating cloud-native ETL workflows and data infrastructure across AWS, Azure, and GCP, improving reliability, governance, and analytics delivery for enterprise-scale systems.",
    achievements: [
      "Built end-to-end ETL workflows with Python, PySpark, and Airflow to unify data from APIs, SQL, and NoSQL sources, reducing manual preparation time by 40%.",
      "Optimized Snowflake and Databricks data models through clustering, caching, and indexing, boosting query performance by 45% and reducing compute cost.",
      "Implemented data quality frameworks using dbt tests and Great Expectations, achieving 99.9% reliability for business-critical metrics.",
      "Developed Power BI and Tableau dashboards visualizing live KPIs, improving resource allocation efficiency by 15%.",
      "Orchestrated ingestion and transformation using AWS Glue, Azure Data Factory, and GCP Dataflow, maintaining 99.5% pipeline uptime.",
      "Automated infrastructure with Terraform and Jenkins CI/CD, increasing release frequency by 35% and rollback safety.",
      "Collaborated with data-science teams to curate feature datasets, reducing preparation time by 30%.",
      "Established observability with Prometheus, Grafana, and CloudWatch, cutting incident rates by 25%.",
    ],
  },
  {
    title: "Data Engineer",
    company: "Rayan Infotech | England, UK",
    period: "May 2021 - Dec 2023",
    description:
      "Led data-lakehouse and pipeline modernization using Spark, Hive, BigQuery, and Airflow, enabling near-real-time analytics and ML model readiness across multi-terabyte datasets.",
    achievements: [
      "Designed distributed ETL pipelines with Spark, Hive, and BigQuery, cutting processing time by 40%.",
      "Implemented data-lakehouse unifying ERP, CRM, and IoT data, improving discovery and accessibility by 60%.",
      "Automated PySpark ingestion workflows in Airflow, reducing manual maintenance by 35%.",
      "Delivered interactive Power BI and Domo dashboards for faster KPI tracking and executive insights.",
      "Adopted Jenkins CI/CD pipelines with code-quality gates, lowering rollout failures by 25%.",
      "Partnered with ML teams to create feature-ready datasets in Databricks and BigQuery, accelerating experimentation.",
      "Established data-observability scripts in Prometheus and Cloud Logging, reducing incident response time by 20%.",
      "Optimized BigQuery and S3 partition strategies, decreasing compute costs by 25%.",
    ],
  },
  {
    title: "System Engineer",
    company: "Infosys | Hyderabad, India",
    period: "Mar 2019 - Dec 2020",
    description:
      "Developed and maintained enterprise ETL pipelines, data warehouses, and reporting systems ensuring high availability and compliance across global operations.",
    achievements: [
      "Built scalable ETL pipelines using Informatica, Python, and SQL with 99.9% uptime.",
      "Optimized ETL workflows and SQL logic, reducing processing time by 35%.",
      "Secured data with robust backup and access control on Oracle and SQL Server.",
      "Automated provisioning and migration via shell scripts and Jenkins, cutting manual effort by 40%.",
      "Created Tableau and SSRS dashboards improving report accuracy by 30%.",
      "Validated and cleansed multi-source datasets to ensure reliability for analytics.",
      "Redesigned warehouse schemas (star/snowflake), boosting query efficiency and reducing storage costs.",
      "Monitored systems with Nagios and custom scripts, maintaining high availability of critical pipelines.",
    ],
  },
  {
    title: "Data Engineer",
    company: "Techecy | Gujarat, India",
    period: "Jan 2018 - Feb 2019",
    description:
      "Engineered ETL pipelines and BI dashboards to consolidate enterprise data and improve analytics accuracy, accessibility, and decision-making efficiency.",
    achievements: [
      "Developed ETL pipelines with Python, SQL, and Spark, increasing processing efficiency by 40%.",
      "Transformed raw datasets into interactive Tableau and Power BI dashboards, enhancing accessibility by 35%.",
      "Collaborated with data architects and Agile teams to deploy scalable solutions, reducing integration errors by 30%.",
      "Improved data quality via validation and cleansing, raising accuracy from 90% to 99%.",
      "Maintained metadata and lineage documentation for governance and audit readiness.",
      "Optimized SQL and Spark workloads for performance and cost reduction.",
      "Automated pipeline monitoring and error handling, improving operational efficiency by 25%.",
      "Contributed to code reviews and standardization across the data-engineering team.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent/30"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-20 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2"
              }`}
            >
              <div
                className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 
                           bg-accent rounded-full items-center justify-center shadow-lg z-10 
                           border-4 border-background"
              >
                <Briefcase className="w-6 h-6 text-primary" />
              </div>

              <div
                className={`bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border 
                            hover:shadow-xl transition-shadow ${
                              index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                            }`}
              >
                <div className="flex items-start space-x-4 md:hidden mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-accent font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>
                </div>

                <div className="hidden md:block mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-accent font-semibold text-lg">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.period}</p>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-2 text-muted-foreground">
                      <span className="text-accent mt-1 flex-shrink-0">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
