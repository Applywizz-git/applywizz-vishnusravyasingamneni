import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  BarChart3,
  Settings,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming & Scripting",
    skills: ["Python", "SQL", "PySpark", "Scala", "Shell Scripting"],
  },
  {
    icon: Settings,
    title: "Data Engineering & ETL",
    skills: [
      "Apache Airflow",
      "dbt",
      "Kafka",
      "Spark",
      "Data Ingestion",
      "Workflow Orchestration",
    ],
  },
  {
    icon: Database,
    title: "Data Warehousing & Big Data",
    skills: [
      "Snowflake",
      "Databricks",
      "BigQuery",
      "Redshift",
      "Azure Synapse",
      "Delta Lake",
    ],
  },
   {
    icon: Database,
    title: "Databases & Storage",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB",
      "Cassandra",
      "AWS S3",
    ],
  },
    {
    icon: Database,
    title: "Data Quality & Governance",
    skills: [
      "Great Expectations",
      "Data Validation",
      "Profiling",
      "Cleansing",
      "Lineage Tracking",
      "Metadata Management",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      "AWS (Glue, Lambda, S3, EMR)",
      "Azure (Data Factory, Synapse)",
      "GCP (BigQuery, Dataflow)",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    skills: ["Power BI", "Tableau", "Looker", "KPI Dashboards", "Data Visualization"],
  },
  {
    icon: GitBranch,
    title: "Methodologies",
    skills: [
      "Agile/Scrum",
      "DataOps",
      "Git",
      "Data Quality",
      "Data Governance",
      "CI/CD",
    ],
  },
];

const CircularProgress = ({ percentage, delay }: { percentage: number; delay: number }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="w-24 h-24"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="hsl(var(--secondary))"
        strokeWidth="8"
      />
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        animate={{ strokeDashoffset: offset }}
        transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
        transform="rotate(-90 50 50)"
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dy="7"
        className="text-sm font-bold"
        fill="hsl(var(--foreground))"
      >
        {percentage}%
      </text>
    </motion.svg>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all 
                         border border-border group hover:border-accent"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center 
                              group-hover:bg-accent/20 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full 
                               text-sm font-medium hover:bg-accent hover:text-accent-foreground 
                               transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-xl shadow-lg border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center space-y-3">
              <CircularProgress percentage={95} delay={0.2} />
              <p className="text-sm font-medium text-foreground text-center">
                ETL/ELT Development
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <CircularProgress percentage={92} delay={0.3} />
              <p className="text-sm font-medium text-foreground text-center">
                Cloud Architecture
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <CircularProgress percentage={90} delay={0.4} />
              <p className="text-sm font-medium text-foreground text-center">
                Data Warehousing
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <CircularProgress percentage={88} delay={0.5} />
              <p className="text-sm font-medium text-foreground text-center">
                Business Intelligence
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
