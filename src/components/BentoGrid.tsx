import React from 'react';
import { Cpu, ShieldCheck, GitMerge, TrendingUp, Globe, Zap, ArrowUpRight } from 'lucide-react';
import { BENTO_FEATURES } from '../data/mockData';
import { GlassCard } from './ui/GlassCard';
import { GradientBadge } from './ui/GradientBadge';

export const BentoGrid: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-violet-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'GitMerge':
        return <GitMerge className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-purple-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-cyan-400" />;
      default:
        return <Cpu className="w-6 h-6 text-violet-400" />;
    }
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-glow-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <GradientBadge variant="cyan">ENGINEERING ARCHITECTURE</GradientBadge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            Built For Uncompromising Scale & Precision
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Six architectural pillars engineered to replace fragmented API integrations with one unified, autonomous engine.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {BENTO_FEATURES.map((feature) => (
            <GlassCard
              key={feature.id}
              className={`p-6 sm:p-8 flex flex-col justify-between group ${feature.colSpan}`}
              glowColor={feature.category === 'Security' ? 'cyan' : feature.category === 'Intelligence' ? 'emerald' : 'violet'}
            >
              <div>
                {/* Header row with Icon + Metric badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(feature.iconName)}
                  </div>

                  {feature.badgeText && (
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {feature.badgeText}
                    </span>
                  )}
                </div>

                {/* Subtitle & Title */}
                <div className="space-y-1 mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-violet-400">
                    {feature.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Metric Bar */}
              {feature.metric && (
                <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-2xl font-extrabold text-white font-mono">{feature.metric}</span>
                    <span className="text-xs text-slate-400 ml-2">{feature.metricLabel}</span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-violet-600 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              )}
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};
