import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "IBM Data Engineering Professional Certificate",
    issuer: "IBM",
    icon: "🔷",
  },
  {
    name: "Snowflake Data Engineering Professional Certificate",
    issuer: "Snowflake",
    icon: "❄️",
  },
  {
    name: "DeepLearning.AI Data Engineering Professional Certificate",
    issuer: "DeepLearning.AI",
    icon: "🤖",
  },
  {
    name: "Meta Database Engineer Professional Certificate",
    issuer: "Meta",
    icon: "📊",
  },
   {
    name: "Data Engineering Foundations Professional Certificate ",
    issuer: "LinkedIn Learning ",
    icon: "🔷",
  },
     {
    name: "Complete Guide to Databricks for Data Engineering ",
    issuer: "LinkedIn Learning ",
    icon: "📊",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group h-64"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-full transition-transform duration-500 
                           group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 bg-card rounded-xl shadow-lg border border-border 
                            flex flex-col items-center justify-center p-6 text-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-5xl mb-4">{cert.icon}</div>
                  <Award className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-foreground">{cert.name}</h3>
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 bg-accent rounded-xl shadow-lg 
                            flex flex-col items-center justify-center p-6 text-center 
                            [transform:rotateY(180deg)]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-5xl mb-4">{cert.icon}</div>
                  <p className="text-accent-foreground font-bold text-xl mb-2">{cert.issuer}</p>
                  <p className="text-accent-foreground/80 text-sm mb-4">Professional Certificate</p>
                  <div
                    className="flex items-center space-x-2 text-accent-foreground 
                              hover:scale-110 transition-transform cursor-pointer"
                  >
                    <span className="text-sm font-semibold">View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
