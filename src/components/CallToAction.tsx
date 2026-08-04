import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { GradientBadge } from './ui/GradientBadge';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const CallToAction: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 4000);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-glow-spotlight">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl border border-white/10 bg-slate-950/90 backdrop-blur-2xl p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          
          {/* Background Gradient Mesh */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-violet-600/30 to-cyan-500/20 blur-[120px] pointer-events-none -z-10 rounded-full" />

          <GradientBadge variant="violet" icon={<Sparkles className="w-3.5 h-3.5" />}>
            LIMITED ENTERPRISE EARLY ACCESS
          </GradientBadge>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-6 mb-4 leading-tight">
            Ready To Accelerate Your Infrastructure into the Future?
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg mb-8 font-normal">
            Join 2,400+ engineering teams running autonomous stream processing at scale. Get started with $500 in free compute credits.
          </p>

          {/* Email Newsletter Input Form */}
          {subscribed ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-medium text-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              Welcome aboard! Check your inbox for instant API credentials.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter work email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-72 bg-slate-900/90 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 shadow-inner"
              />
              <Button
                variant="primary"
                size="md"
                glow
                className="w-full sm:w-auto shrink-0"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Claim $500 Credit
              </Button>
            </form>
          )}

          <div className="mt-8 text-xs text-slate-500 flex items-center justify-center gap-6 font-mono">
            <span>✓ No credit card required</span>
            <span>✓ 14-day full trial</span>
            <span>✓ Instant API key provision</span>
          </div>

        </div>

      </div>
    </section>
  );
};
