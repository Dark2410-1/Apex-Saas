import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/mockData';
import { GradientBadge } from './ui/GradientBadge';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Security', 'Integration', 'Billing'];

  const filteredFAQs = selectedCategory === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-glow-cyan">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <GradientBadge variant="violet">FREQUENTLY ASKED QUESTIONS</GradientBadge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need To Know
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Have questions about integrations, security compliance, or throughput capacity? We have answers.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                  selectedCategory === cat
                    ? 'bg-violet-600 text-white border-violet-500 shadow-md shadow-violet-600/20'
                    : 'bg-slate-900/60 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-violet-500/30"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-white text-base sm:text-lg flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-violet-400 shrink-0" />
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-violet-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 text-slate-300 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
