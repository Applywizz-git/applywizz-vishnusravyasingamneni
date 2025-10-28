import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative mx-auto rounded-[2rem] overflow-hidden shadow-2xl 
                 border-4 border-emerald-400 hover:shadow-[0_0_25px_8px_rgba(16,185,129,0.6)] 
                 transition-all duration-500 w-[280px] h-[380px] sm:w-[320px] sm:h-[420px]"
    >
      <img
        src="/assets/profile.png"
        alt="Vishnu Sravya Singamneni"
        className="w-full h-full object-cover"
      />
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-400/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-emerald-400/10 rounded-full blur-3xl"></div>
    </motion.div>
  );
};

export default ProfileImage;
