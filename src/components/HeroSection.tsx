import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Zap, Shield, Sparkles, Activity, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { GradientBadge } from './ui/GradientBadge';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'latency' | 'throughput' | 'security'>('latency');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-glow-spotlight">
      {/* Background Mesh Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-violet-600/20 via-purple-600/10 to-cyan-500/20 blur-[140px] pointer-events-none -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Top Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GradientBadge variant="violet" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Introducing NEXUS v4.2 • Autonomous Neural Core Released
            </GradientBadge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1]"
          >
            Transform Complexity Into{' '}
            <span className="text-gradient-violet relative">
              Pure Intelligence
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-violet-500/40 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed"
          >
            The world's first autonomous multi-model engine engineered for sub-12ms global latency, 
            zero-trust payload encryption, and real-time enterprise stream processing.
          </motion.p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              glow
              className="w-full sm:w-auto group"
              icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Deploy Autonomous Agent
            </Button>

            <Button
              variant="glass"
              size="lg"
              className="w-full sm:w-auto"
              icon={<Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />}
              onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Watch Interactive Demo
            </Button>
          </motion.div>

          {/* Social Proof Rating Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4 text-sm text-slate-400"
          >
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Client Avatar" />
              <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Client Avatar" />
              <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="Client Avatar" />
              <img className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100" alt="Client Avatar" />
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="font-medium text-slate-200">
              <strong className="text-white">4.9/5</strong> score across 2,400+ Enterprise deployments
            </span>
          </motion.div>

          {/* Interactive 3D/Glassmorphic Product Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl mt-12 relative group perspective-1000"
          >
            {/* Outer Ambient Glow Rim */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-cyan-500 to-purple-600 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition duration-1000 -z-10" />

            <div className="relative rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-2xl p-4 sm:p-6 overflow-hidden">
              
              {/* Window Titlebar Control */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-4 text-xs font-mono text-slate-400 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    https://console.nexus-ai.internal/stream-dashboard
                  </span>
                </div>

                {/* Tab switcher */}
                <div className="flex items-center gap-2 bg-slate-900/80 p-1 rounded-lg border border-white/5">
                  {(['latency', 'throughput', 'security'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-xs font-medium rounded-md capitalize transition-all ${
                        activeTab === tab
                          ? 'bg-violet-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Live Graph Preview Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-left">
                <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Global Inference Speed</span>
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">8.42 ms</div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> 24.1% faster than SLA
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Active Stream DAG Nodes</span>
                    <Activity className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">184 PoPs</div>
                  <div className="text-[11px] text-cyan-400 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> All regions synced
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Zero-Trust Vault Shield</span>
                    <Shield className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white font-mono">AES-256 GCM</div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1">
                    <CheckCircle2 className="w-3 h-3" /> HSM Hardware Lock Active
                  </div>
                </div>
              </div>

              {/* Simulated Visual Waves SVG Chart */}
              <div className="relative h-48 sm:h-64 w-full bg-slate-900/40 rounded-xl border border-white/5 p-4 flex items-end overflow-hidden">
                <svg className="w-full h-full text-violet-500/30 overflow-visible" viewBox="0 0 500 150">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,100 Q 75,40 150,80 T 300,30 T 450,70 T 500,20 L 500,150 L 0,150 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M 0,100 Q 75,40 150,80 T 300,30 T 450,70 T 500,20"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                  />
                  {/* Glowing Data Dots */}
                  <circle cx="150" cy="80" r="5" fill="#06b6d4" className="animate-pulse" />
                  <circle cx="300" cy="30" r="5" fill="#8b5cf6" className="animate-pulse" />
                  <circle cx="450" cy="70" r="5" fill="#10b981" className="animate-pulse" />
                </svg>

                <div className="absolute bottom-4 left-4 text-xs font-mono text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  Live Stream Rate: 1.42 GB/sec • Zero Packet Loss
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
