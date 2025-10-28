import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, Cloud, Database, TrendingUp } from "lucide-react";

const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <div ref={ref}>{count}+</div>;
};

const SkillBar = ({
  name,
  percentage,
  delay,
}: {
  name: string;
  percentage: number;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-2"
    >
      <div className="flex justify-between text-sm font-medium">
        <span className="text-foreground">{name}</span>
        <span className="text-accent">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
          className="h-full bg-accent"
        />
      </div>
    </motion.div>
  );
};

const About = () => {
  const stats = [
    { icon: Code2, label: "Years Experience", value: 6 },
    { icon: Cloud, label: "Cloud Platforms", value: 3 },
    { icon: Database, label: "Data Projects", value: 50 },
    { icon: TrendingUp, label: "Success Rate", value: 99 },
  ];

  const skills = [
    { name: "ETL/ELT Pipeline Development", percentage: 95 },
    { name: "Cloud Architecture (AWS, Azure, GCP)", percentage: 92 },
    { name: "Data Warehousing (Snowflake, BigQuery)", percentage: 90 },
    { name: "Python & PySpark Programming", percentage: 93 },
    { name: "Business Intelligence & Analytics", percentage: 88 },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl text-center shadow-lg hover:shadow-xl 
                         transition-shadow border border-border"
              >
                <Icon className="w-10 h-10 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  <Counter end={stat.value} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-xl shadow-lg mb-12 border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Professional Summary</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Data Engineer with 6+ years of experience architecting, developing, and optimizing
            ETL/ELT pipelines and cloud-based analytics solutions across AWS, Azure, and GCP.
            Proficient in Snowflake, Databricks, BigQuery, Spark, Python, SQL, Airflow, Kafka, dbt,
            and Delta Lake. Skilled in CI/CD automation, data quality frameworks, real-time and
            batch processing, and BI dashboard development to deliver scalable and reliable data
            solutions.
          </p>
        </motion.div>

        {/* Skills Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-xl shadow-lg border border-border"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Core Competencies</h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
