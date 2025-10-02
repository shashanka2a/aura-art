"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      followers: "125K followers",
      content: "This tool completely changed my content game. My engagement went up 300% in just two months!",
      avatar: "👩‍💼",
      platform: "Instagram"
    },
    {
      name: "Marcus Rodriguez",
      role: "Small Business Owner",
      followers: "Local bakery",
      content: "Finally, professional-looking posts without hiring a designer. Our sales have increased significantly.",
      avatar: "👨‍🍳",
      platform: "Multiple"
    },
    {
      name: "Emma Thompson",
      role: "Marketing Manager",
      followers: "Tech startup",
      content: "Our team creates 50+ posts per week effortlessly. This tool is a game-changer for content teams.",
      avatar: "👩‍💻",
      platform: "LinkedIn"
    }
  ];

  const stats = [
    { value: "95%", label: "Time saved" },
    { value: "3x", label: "Higher engagement" },
    { value: "50K+", label: "Happy creators" },
    { value: "2M+", label: "Posts created" }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6 bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Loved by creators
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of creators who've transformed their content workflow.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="text-slate-900 mb-1">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                  <div className="text-xs text-purple-600">{testimonial.followers}</div>
                </div>
              </div>
              
              <blockquote className="text-slate-700 leading-relaxed mb-4">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {"★★★★★"}
                </div>
                <span className="text-sm text-slate-500">{testimonial.platform}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-16 border-t border-slate-200"
        >
          <div className="text-slate-400 text-sm">Trusted by creators on</div>
          <div className="flex items-center gap-6 text-slate-600">
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm">Instagram</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm">TikTok</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm">LinkedIn</span>
            <span className="px-4 py-2 bg-white rounded-lg shadow-sm">YouTube</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}