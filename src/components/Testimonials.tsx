import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { GlassCard } from './ui/GlassCard';
import { GradientBadge } from './ui/GradientBadge';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-glow-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <GradientBadge variant="violet">ENTERPRISE SOCIAL PROOF</GradientBadge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            Validated By High-Growth Engineering Leaders
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Here is how technical executives and founders describe their performance gains with NEXUS AI.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <GlassCard
              key={testimonial.id}
              className="p-8 flex flex-col justify-between group"
              glowColor="violet"
            >
              <div>
                {/* Rating + Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-violet-500/20 group-hover:text-violet-500/40 transition-colors" />
                </div>

                {/* Testimonial text */}
                <p className="text-slate-200 text-base leading-relaxed mb-6 font-normal italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author & Result Metric Footer */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-violet-500/40"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm flex items-center gap-1.5">
                      {testimonial.author}
                      {testimonial.verified && (
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      )}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {testimonial.role} • <span className="text-violet-300">{testimonial.company}</span>
                    </p>
                  </div>
                </div>

                {testimonial.metricsResult && (
                  <span className="inline-flex items-center text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ⚡ {testimonial.metricsResult}
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
