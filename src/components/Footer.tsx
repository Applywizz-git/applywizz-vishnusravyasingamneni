import { motion } from "framer-motion";
import {  Linkedin, Mail, ArrowUp } from "lucide-react";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: true });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/sravya-singamneni-390223105",
      label: "LinkedIn",
    },
    // {
    //   icon: Github,
    //   url: "https://github.com/vishnusravya",
    //   label: "GitHub",
    // },
    {
      icon: Mail,
      url: "mailto:ssingamnei97@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">Vishnu Sravya</h3>
            <p className="text-secondary leading-relaxed">
              Data Engineer passionate about building scalable data solutions and driving business
              value through analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-secondary hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-secondary hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-secondary hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-secondary/20 rounded-full flex items-center 
                             justify-center hover:bg-accent transition-all duration-300 
                             shadow-lg hover:shadow-accent/50"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Vishnu Sravya Singamneni. All rights reserved.
          </p>
          <p className="text-secondary text-sm">
            Built with passion and precision
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-accent rounded-full 
                 flex items-center justify-center shadow-lg hover:shadow-accent/50 
                 transition-all duration-300 z-30 animate-float"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-accent-foreground" />
      </motion.button>
    </footer>
  );
};

export default Footer;
