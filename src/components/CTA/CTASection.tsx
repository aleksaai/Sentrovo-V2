import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import CTAButton from '../shared/CTAButton';

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#4500F9]/10 via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-b from-black/40 to-[#4500F9]/10 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4500F9]/20 to-transparent animate-[shine_4s_ease-in-out_infinite]" />

          {/* Content container */}
          <div className="relative p-16 flex flex-col items-center text-center">
            {/* Sparkles icon with glow */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[#4500F9] blur-xl opacity-40 scale-150" />
              <div className="relative bg-gradient-to-b from-[#4500F9] to-[#6E3FFE] p-4 rounded-2xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Main heading */}
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#CCAFFF] to-[#4500F9] bg-clip-text text-transparent mb-4">
              Bereit für die KI-Revolution?
            </h2>

            {/* Description */}
            <p className="text-xl text-[#CCAFFF] max-w-2xl mb-12">
              Lassen Sie uns gemeinsam Ihre Geschäftsprozesse optimieren und in die Zukunft führen.
            </p>

            {/* CTA Button */}
            <div className="relative">
              <CTAButton text="KI Audit Buchen" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-[#CCAFFF]/80">
                100% Kostenlos
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;