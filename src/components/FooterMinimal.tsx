"use client";

import { motion } from "framer-motion";

export function FooterMinimal() {
  const links = [
    { label: "Product", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Templates", href: "#" },
    { label: "Support", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ];

  return (
    <footer className="bg-slate-900 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            {/* Logo and description */}
            <div className="mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 hover:from-purple-300 hover:to-pink-300 transition-all duration-300">
                  Aura Art
                </h3>
                <p className="text-slate-400 max-w-md leading-relaxed hover:text-slate-300 transition-colors duration-300">
                  The perfect hybrid of templates, AI, and formatting that makes 
                  stunning art creation effortless for everyone.
                </p>
              </motion.div>
            </div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-8"
            >
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start gap-6 mb-12"
          >
            {[
              { name: "Twitter", icon: "🐦" },
              { name: "Instagram", icon: "📸" },
              { name: "LinkedIn", icon: "💼" },
              { name: "YouTube", icon: "📺" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors duration-200 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-slate-400 text-sm hover:text-slate-300 transition-colors duration-300">
              © 2024 Aura Art. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4 text-slate-400 text-sm">
              <span>Made with</span>
              <span className="text-red-400 animate-pulse">♥</span>
              <span>for creators</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}