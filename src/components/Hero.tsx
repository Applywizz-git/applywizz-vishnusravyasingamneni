import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import ProfileImage from "./ProfileImage";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Vishnu Sravya <span className="text-accent">Singamneni</span>
            </motion.h1>

            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground h-16">
              <TypeAnimation
                sequence={[
                  "Data Engineering",
                  2000,
                  "Cloud Architecture",
                  2000,
                  "ETL/ELT Pipelines",
                  2000,
                  "Business Intelligence",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Data Engineer with 6+ years of experience architecting, developing, and optimizing
              ETL/ELT pipelines and cloud-based analytics solutions across AWS, Azure, and GCP.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <a
                href="https://linkedin.com/in/sravya-singamneni-390223105"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-accent text-primary-foreground font-semibold rounded-lg 
                         hover:bg-accent/90 transition-all hover:scale-105 shadow-lg 
                         focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label="View LinkedIn profile"
              >
                View LinkedIn
              </a>
              <a
                href="/assets/resume.pdf"
                download
                className="px-8 py-3 bg-secondary text-secondary-foreground font-semibold 
                         rounded-lg hover:bg-secondary/80 transition-all hover:scale-105 
                         focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                aria-label="Download resume"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <ProfileImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
