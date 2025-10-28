import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import confetti from "canvas-confetti";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#C59B5F", "#DAD2C7", "#1A1A1A"],
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Show success message (you can replace this with a toast)
    alert("Message sent successfully! I'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how I can help with your data engineering needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:ssingamnei97@gmail.com"
                      className="text-foreground font-medium hover:text-accent transition-colors"
                    >
                      ssingamnei97@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a
                      href="tel:+17372935837"
                      className="text-foreground font-medium hover:text-accent transition-colors"
                    >
                      +1 (737) 293-5837
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="text-foreground font-medium">Denton, TX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h4 className="text-xl font-bold text-foreground mb-4">Available For</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <span className="text-accent">✓</span>
                  <span>Full-time Positions</span>
                </li>
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <span className="text-accent">✓</span>
                  <span>Contract Work</span>
                </li>
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <span className="text-accent">✓</span>
                  <span>Consulting Projects</span>
                </li>
                <li className="flex items-center space-x-2 text-muted-foreground">
                  <span className="text-accent">✓</span>
                  <span>Technical Mentorship</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg 
                             text-foreground focus:outline-none focus:ring-2 focus:ring-accent 
                             peer placeholder-transparent"
                    placeholder="Your Name"
                  />
                  <label
                    className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground 
                             transition-all peer-placeholder-shown:text-base 
                             peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground 
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-accent"
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg 
                             text-foreground focus:outline-none focus:ring-2 focus:ring-accent 
                             peer placeholder-transparent"
                    placeholder="Your Email"
                  />
                  <label
                    className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground 
                             transition-all peer-placeholder-shown:text-base 
                             peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground 
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-accent"
                  >
                    Your Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg 
                             text-foreground focus:outline-none focus:ring-2 focus:ring-accent 
                             peer placeholder-transparent"
                    placeholder="Subject"
                  />
                  <label
                    className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground 
                             transition-all peer-placeholder-shown:text-base 
                             peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground 
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-accent"
                  >
                    Subject
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg 
                             text-foreground focus:outline-none focus:ring-2 focus:ring-accent 
                             peer placeholder-transparent resize-none"
                    placeholder="Your Message"
                  />
                  <label
                    className="absolute left-4 -top-2.5 bg-card px-2 text-sm text-muted-foreground 
                             transition-all peer-placeholder-shown:text-base 
                             peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground 
                             peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-accent"
                  >
                    Your Message
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-accent text-accent-foreground font-semibold 
                           rounded-lg hover:bg-accent/90 transition-all shadow-lg 
                           flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
