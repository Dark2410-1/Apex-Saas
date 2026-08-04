import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PRICING_TIERS } from '../data/mockData';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';
import { GradientBadge } from './ui/GradientBadge';
import { Check, Sparkles } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  const handleCheckout = (tierName: string) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    alert(`Thank you for selecting the ${tierName} plan! Navigating to secure checkout...`);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-glow-spotlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <GradientBadge variant="amber">TRANSPARENT VALUE ARCHITECTURE</GradientBadge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            Predictable Pricing Built For Every Stage of Growth
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            No hidden execution penalties. Upgrade or scale your tier seamlessly as your traffic expands.
          </p>

          {/* Monthly / Annual Toggle Switch */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-slate-400'}`}>
              Monthly Billing
            </span>
            
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 rounded-full bg-slate-900 border border-white/10 p-1 transition-colors duration-300 focus:outline-none"
            >
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-md transform transition-transform duration-300 ${
                  isYearly ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>

            <span className={`text-sm font-medium flex items-center gap-2 ${isYearly ? 'text-white' : 'text-slate-400'}`}>
              Annual Billing
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                SAVE 20% + 2 MONTHS FREE
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice;

            return (
              <GlassCard
                key={tier.id}
                className={`p-8 flex flex-col justify-between relative ${
                  tier.popular
                    ? 'border-violet-500/50 shadow-2xl shadow-violet-600/20 bg-slate-900/90 ring-1 ring-violet-500/30 lg:-translate-y-2'
                    : ''
                }`}
                glowColor={tier.popular ? 'violet' : 'cyan'}
              >
                {/* Popular Pill Header */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-extrabold text-xs px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> Most Popular Enterprise Choice
                    </span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Description */}
                  <div className="mb-6">
                    <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">
                      {tier.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">{tier.name}</h3>
                    <p className="text-slate-400 text-xs mt-2 leading-relaxed">{tier.description}</p>
                  </div>

                  {/* Price Banner */}
                  <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/5 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs text-slate-400">/ month {isYearly && '(billed annually)'}</span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                        <div className="p-0.5 rounded-full bg-violet-500/20 text-violet-400 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Button */}
                <div className="pt-4 border-t border-white/5">
                  <Button
                    variant={tier.popular ? 'primary' : 'glass'}
                    size="md"
                    glow={tier.popular}
                    className="w-full"
                    onClick={() => handleCheckout(tier.name)}
                  >
                    {tier.ctaText}
                  </Button>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
