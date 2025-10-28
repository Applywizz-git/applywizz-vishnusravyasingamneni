import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.S. Advanced Data Analytics",
    institution: "University of North Texas",
    period: "Jan 2024 - May 2025",
    logo: "🎓",
  },
  {
    degree: "M.S. Data Science and Analytics",
    institution: "University of Hertfordshire",
    period: "Jan 2021 - Jan 2023",
    logo: "🎓",
  },
  {
    degree: "B.Tech Electronics & Computer Science",
    institution: "K L University",
    period: "Jun 2014 - May 2018",
    logo: "🎓",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-card p-8 rounded-xl shadow-lg border border-border 
                       hover:shadow-2xl hover:border-accent transition-all group"
            >
              <div
                className="w-20 h-20 bg-accent/10 rounded-full flex items-center 
                          justify-center mb-6 mx-auto group-hover:bg-accent/20 
                          group-hover:scale-110 transition-all"
              >
                <span className="text-4xl">{edu.logo}</span>
              </div>

              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground font-medium">{edu.institution}</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-accent">
                  <GraduationCap className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
