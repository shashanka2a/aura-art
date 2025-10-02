"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function SocialProofSimple() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Creator-First Design",
      description: "Built specifically for content creators who need professional results fast",
      icon: "👑",
      delay: 0
    },
    {
      title: "Hybrid Intelligence",
      description: "The perfect fusion of three industry-leading platforms in one tool",
      icon: "🧠",
      delay: 0.1
    },
    {
      title: "Instant Results",
      description: "From idea to published content in under 60 seconds with AI assistance",
      icon: "⚡",
      delay: 0.2
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-50 to-purple-50/30 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent hover:from-purple-900 hover:to-pink-600 transition-all duration-500"
          >
            Built for creators
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto hover:text-slate-700 transition-colors duration-300"
          >
            We didn't just build another design tool. We created the hybrid platform that combines 
            the best features from three industry giants into one seamless creative experience.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: feature.delay,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-purple-200"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
                className="text-4xl mb-6 inline-block"
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-xl md:text-2xl mb-4 text-slate-900 group-hover:text-purple-800 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Decorative element */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-6"
              />
            </motion.div>
          ))}
        </div>

        {/* Trust badges with scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 mt-20 pt-16 border-t border-slate-200"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-slate-500 text-sm"
          >
            Trusted by creators worldwide
          </motion.div>
          
          <div className="flex items-center gap-6">
            {["Instagram", "TikTok", "YouTube", "Pinterest"].map((platform, index) => (
              <motion.span
                key={platform}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-white rounded-lg shadow-sm text-slate-600 hover:text-purple-600 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {platform}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}