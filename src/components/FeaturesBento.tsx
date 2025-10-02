"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedTemplate, AnimatedPalette, AnimatedAIBrain, AnimatedLightning, AnimatedAIBot } from "./AnimatedIcons";

export function FeaturesBento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainPlatforms = [
    {
      title: "Templates",
      subtitle: "Magazine-Quality Layouts",
      description: "Stunning story templates and professional layouts that make every post look magazine-worthy. Create scroll-stopping content in seconds.",
      iconComponent: <AnimatedTemplate />,
      gradient: "from-purple-600/80 to-pink-600/80",
      accent: "from-purple-400 to-pink-400",
      badge: "Design Ready"
    },
    {
      title: "Editing Tools", 
      subtitle: "Professional-Grade Power",
      description: "Advanced photo editing with magic eraser, background removal, and smart filters. Studio-quality results without the learning curve.",
      iconComponent: <AnimatedPalette />,
      gradient: "from-emerald-600/80 to-teal-600/80",
      accent: "from-emerald-400 to-teal-400",
      badge: "Edit Magic"
    },
    {
      title: "AI Magic",
      subtitle: "Intelligent Creativity", 
      description: "Smart content suggestions, auto-formatting, and intelligent design decisions. Your creative co-pilot that understands your vision.",
      iconComponent: <AnimatedAIBrain />,
      gradient: "from-blue-600/80 to-indigo-600/80",
      accent: "from-blue-400 to-indigo-400",
      badge: "AI Powered"
    }
  ];

  const additionalFeatures = [
    {
      title: "Instant Formatting",
      description: "Perfect ratios for every platform automatically",
      iconComponent: <AnimatedLightning />,
      gradient: "from-orange-500/60 to-amber-500/60"
    },
    {
      title: "Creator Tools",
      description: "Batch exports, brand kits, workflow automation",
      iconComponent: <AnimatedAIBot />,
      gradient: "from-violet-500/60 to-purple-500/60"
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-30" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Floating CTA */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl px-8 py-4 shadow-lg shadow-purple-500/10 mb-8"
          >
            <span className="text-2xl">⚡</span>
            <span className="text-lg text-slate-700">Templates. Editing. AI Magic.</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Try Aura Art Free
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            whileHover={{ scale: 1.01 }}
            className="text-5xl md:text-7xl tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent"
          >
            The Perfect
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Creative Fusion
            </span>
          </motion.h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We've united the industry's most powerful creative tools into one seamless platform. 
            Experience professional templates, advanced editing, and AI intelligence working together.
          </p>
        </motion.div>

        {/* Main Bento Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Three Main Platform Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {mainPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`
                  relative h-96 lg:h-[500px] rounded-3xl p-8 
                  bg-gradient-to-br ${platform.gradient}
                  backdrop-blur-sm border border-white/30
                  overflow-hidden group cursor-pointer
                  shadow-xl hover:shadow-2xl
                  transition-all duration-500
                `}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />
                <div className="absolute top-0 right-0 w-40 h-40 opacity-20 transform translate-x-8 -translate-y-8">
                  <div className="w-full h-full text-8xl text-white flex items-center justify-center">
                    {platform.iconComponent}
                  </div>
                </div>

                {/* Badge */}
                <div className="relative z-10 mb-6">
                  <span className={`inline-flex items-center px-4 py-2 rounded-xl text-sm bg-gradient-to-r ${platform.accent} text-white shadow-lg`}>
                    {platform.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 mb-6 text-white"
                    >
                      {platform.iconComponent}
                    </motion.div>
                    
                    <h3 className="text-4xl lg:text-5xl text-white mb-2 tracking-tight">
                      {platform.title}
                    </h3>
                    <h4 className="text-xl text-white/90 mb-6">
                      {platform.subtitle}
                    </h4>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {platform.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="flex items-center text-white/90 text-sm"
                  >
                    <span>Explore</span>
                    <motion.svg
                      whileHover={{ x: 4 }}
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                />
              </motion.div>
            ))}
          </div>

          {/* Additional Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1
                }}
                whileHover={{ 
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`
                  relative h-48 rounded-2xl p-6
                  bg-gradient-to-br ${feature.gradient}
                  backdrop-blur-sm border border-white/30
                  overflow-hidden group cursor-pointer
                  hover:shadow-xl transition-all duration-300
                `}
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />
                
                <div className="relative z-10 h-full flex items-center justify-between">
                  <div>
                    <h4 className="text-2xl text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 text-white/90"
                  >
                    {feature.iconComponent}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Ready to experience the future of content creation? Join thousands of creators who've made the switch.
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-2xl text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
            >
              <span className="flex items-center">
                🚀 Start with Aura Art
                <motion.svg 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="text-slate-600 hover:text-slate-800 px-6 py-2 transition-colors duration-200"
            >
              Watch demo →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}