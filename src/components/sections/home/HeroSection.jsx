import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const titleVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const glassCardVariants = {
    hidden: { x: 100, opacity: 0, backdropFilter: "blur(0px)" },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      backdropFilter: "blur(12px)",
      transition: {
        duration: 1,
        delay: 0.6 + i * 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.8 + i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const partners = ["WORLD BANK", "AfDB", "IMF", "EU", "UNDP", "USAID"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url(/src/assets/images/banner.png)" }}
    >
      <div className="relative z-10 w-full max-w-[1260px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Content */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-start gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Top Pill */}
          <motion.div
            className="hero-pill px-5 py-2.5 bg-white/5 rounded-full border border-white/20 backdrop-blur-md flex items-center gap-3"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-brand-amber rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-semibold font-jakarta uppercase tracking-widest">
              Digital Road Infrastructure Platform
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-sora leading-[1.1] text-white">
            {["Connecting", "Guinea Through", "Transparent", "Roads."].map(
              (word, index) => (
                <motion.div
                  key={index}
                  className={`hero-title-line ${
                    index >= 2 ? "text-brand-amber" : ""
                  }`}
                  custom={index}
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {word}
                </motion.div>
              )
            )}
          </h1>

          {/* Subtitle */}
          <motion.p
            className="hero-desc text-white/70 text-lg md:text-xl font-jakarta leading-relaxed max-w-[600px]"
            variants={itemVariants}
          >
            Real-time monitoring of national road development projects - from
            financing to final kilometer. Built for citizens, donors, and
            decision-makers.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="hero-actions flex flex-wrap items-center gap-4"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => navigate("/map")}
              className="px-8 py-4 bg-brand-amber text-brand-navy rounded-full font-semibold font-jakarta hover:bg-amber-500 transition-all shadow-[0_10px_20px_-5px_rgba(242,181,43,0.4)] flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Live Map
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </motion.button>
            <motion.button
              onClick={() => navigate("/projects")}
              className="px-8 py-4 bg-white/5 text-white border border-white/25 rounded-full font-semibold font-jakarta hover:bg-white/10 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.button>
          </motion.div>

          {/* Supported By Logos */}
          <div className="hero-logos mt-4 w-full flex flex-col gap-4">
            <motion.span
              className="text-white text-[10px] font-semibold font-jakarta uppercase tracking-[2.5px]"
              variants={itemVariants}
            >
              Supported By
            </motion.span>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  custom={index}
                  variants={logoVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-white/60 text-sm md:text-base font-bold font-sora hover:text-white transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Floating Stat Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:-mr-12 perspective-1000">
          {/* Card 1 */}
          <motion.div
            className="glass-card self-end w-full max-w-[320px] p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
            custom={0}
            variants={glassCardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_59_1233)">
                        <path
                          d="M14.6668 8.00016H13.0135C12.7221 7.99954 12.4386 8.09437 12.2062 8.27014C11.9739 8.44592 11.8055 8.69296 11.7268 8.9735L10.1602 14.5468C10.1501 14.5814 10.129 14.6119 10.1002 14.6335C10.0713 14.6551 10.0362 14.6668 10.0002 14.6668C9.9641 14.6668 9.92901 14.6551 9.90016 14.6335C9.87131 14.6119 9.85026 14.5814 9.84016 14.5468L6.16016 1.4535C6.15007 1.41888 6.12901 1.38847 6.10016 1.36683C6.07131 1.34519 6.03622 1.3335 6.00016 1.3335C5.9641 1.3335 5.92901 1.34519 5.90016 1.36683C5.87131 1.38847 5.85026 1.41888 5.84016 1.4535L4.2735 7.02683C4.19514 7.30627 4.02775 7.55251 3.79674 7.72817C3.56573 7.90384 3.28371 7.99933 2.9935 8.00016H1.3335"
                          stroke="white"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_59_1233">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </div>
                <span className="text-white/60 text-xs font-semibold font-jakarta uppercase tracking-widest">
                  Active Projects
                </span>
              </div>
              <div className="w-2 h-2 bg-brand-amber rounded-full" />
            </div>
            <motion.div
              className="text-5xl font-extrabold font-sora text-white mb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
            >
              +41
            </motion.div>
            <div className="text-white/60 text-sm font-jakarta">
              Across all 33 regions
            </div>
          </motion.div>

          {/* Card 2 - Offset left */}
          <motion.div
            className="glass-card self-center lg:self-start lg:ml-12 w-full max-w-[320px] p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
            custom={1}
            variants={glassCardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-brand-amber rounded-full flex items-center justify-center">
                  <span className="text-brand-navy text-xs font-bold">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 5.3335C11.3137 5.3335 14 4.43807 14 3.3335C14 2.22893 11.3137 1.3335 8 1.3335C4.68629 1.3335 2 2.22893 2 3.3335C2 4.43807 4.68629 5.3335 8 5.3335Z"
                        stroke="#071123"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 3.3335V12.6668C2 13.1973 2.63214 13.706 3.75736 14.081C4.88258 14.4561 6.4087 14.6668 8 14.6668C9.5913 14.6668 11.1174 14.4561 12.2426 14.081C13.3679 13.706 14 13.1973 14 12.6668V3.3335"
                        stroke="#071123"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 8C2 8.53043 2.63214 9.03914 3.75736 9.41421C4.88258 9.78929 6.4087 10 8 10C9.5913 10 11.1174 9.78929 12.2426 9.41421C13.3679 9.03914 14 8.53043 14 8"
                        stroke="#071123"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <span className="text-white/60 text-xs font-semibold font-jakarta uppercase tracking-widest">
                  Total Investment
                </span>
              </div>
              <div className="w-2 h-2 bg-brand-amber rounded-full" />
            </div>
            <motion.div
              className="text-5xl font-extrabold font-sora text-white mb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
            >
              $450M+
            </motion.div>
            <div className="text-white/60 text-sm font-jakarta">
              Verified disbursements
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="glass-card self-end w-full max-w-[320px] p-6 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
            custom={2}
            variants={glassCardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8315 5.17383C11.5802 5.92378 12.0007 6.94015 12.0007 7.99983C12.0007 9.05951 11.5802 10.0759 10.8315 10.8258"
                        stroke="white"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.7168 3.28857C13.9654 4.5386 14.6667 6.23313 14.6667 7.99991C14.6667 9.76669 13.9654 11.4612 12.7168 12.7112"
                        stroke="white"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.28341 12.7112C2.03482 11.4612 1.3335 9.76669 1.3335 7.99991C1.3335 6.23313 2.03482 4.5386 3.28341 3.28857"
                        stroke="white"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.16866 10.8258C4.42 10.0759 3.99951 9.05951 3.99951 7.99983C3.99951 6.94015 4.42 5.92378 5.16866 5.17383"
                        stroke="white"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99984 9.33317C8.73622 9.33317 9.33317 8.73622 9.33317 7.99984C9.33317 7.26346 8.73622 6.6665 7.99984 6.6665C7.26346 6.6665 6.6665 7.26346 6.6665 7.99984C6.6665 8.73622 7.26346 9.33317 7.99984 9.33317Z"
                        stroke="white"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <span className="text-white/60 text-xs font-semibold font-jakarta uppercase tracking-widest">
                  Avg. Completion
                </span>
              </div>
              <div className="w-2 h-2 bg-brand-amber rounded-full" />
            </div>
            <motion.div
              className="text-5xl font-extrabold font-sora text-white mb-2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            >
              75%
            </motion.div>
            <div className="text-white/60 text-sm font-jakarta">
              On-schedule index
            </div>
          </motion.div>
        </div>
      </div>
      <img
        src="/src/assets/images/Vector.png"
        alt="bottom vector"
        className="absolute bottom-0 left-0 w-full"
      />
    </section>
  );
};

export default HeroSection;