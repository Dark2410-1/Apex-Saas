import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MOCK_METRICS } from '../data/mockData';
import { GradientBadge } from './ui/GradientBadge';
import { Search, RefreshCw, Layers, ShieldCheck, Cpu, Terminal } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'revenue' | 'agents' | 'security' | 'api'>('revenue');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const filteredMetrics = MOCK_METRICS.filter((m) =>
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="dashboard" className="py-24 relative overflow-hidden bg-glow-cyan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <GradientBadge variant="emerald">INTERACTIVE ENGINE CONSOLE</GradientBadge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            Live Stream Analytics & Control Plane
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Experience the real-time responsiveness of our unified command center. Try switching tabs and filtering metrics live.
          </p>
        </div>

        {/* Dashboard Glass Frame */}
        <div className="rounded-2xl border border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-2xl p-4 sm:p-8 overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-white/10">
            
            {/* View Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-900/80 p-1.5 rounded-xl border border-white/5 w-full md:w-auto">
              <button
                onClick={() => setActiveTab('revenue')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'revenue'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" /> Revenue Telemetry
              </button>
              <button
                onClick={() => setActiveTab('agents')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'agents'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Cpu className="w-4 h-4" /> Autonomous Agents
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'security'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4" /> Security Logs
              </button>
            </div>

            {/* Filter Search Input & Refresh Button */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter metric stream..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500"
                />
              </div>

              <button
                onClick={handleRefresh}
                className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-colors"
                title="Refresh Live Stream"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-violet-400' : ''}`} />
              </button>
            </div>

          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            {filteredMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="p-5 rounded-xl bg-slate-900/60 border border-white/5 hover:border-violet-500/30 transition-all group"
              >
                <div className="text-xs text-slate-400 font-medium mb-2">{metric.title}</div>
                <div className="text-2xl font-bold text-white font-mono tracking-tight mb-1 group-hover:text-violet-300 transition-colors">
                  {metric.value}
                </div>
                <div className="flex items-center justify-between text-xs mt-2">
                  <span className="text-emerald-400 font-mono font-semibold">{metric.change}</span>
                  <span className="text-slate-500">{metric.period}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Chart Canvas Simulation */}
          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-semibold text-slate-300">
                  REAL-TIME TELEMETRY STREAM (NODE_US_EAST_01)
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                ● 100% HEALTHY
              </span>
            </div>

            {/* Visual Bar Graph */}
            <div className="h-44 w-full flex items-end justify-between gap-2 pt-6">
              {[45, 65, 30, 85, 95, 70, 50, 80, 100, 60, 75, 90, 110, 85, 95, 120].map((height, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                  <div
                    className="w-full rounded-t-sm bg-gradient-to-t from-violet-600/30 via-violet-500 to-cyan-400 group-hover:from-violet-500 group-hover:to-cyan-300 transition-all duration-300 relative"
                    style={{ height: `${(height / 120) * 100}%` }}
                  >
                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-mono px-2 py-0.5 rounded border border-white/20 pointer-events-none whitespace-nowrap transition-opacity">
                      {height * 142} req/s
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-4 border-t border-white/5 pt-3">
              <span>00:00:00 UTC</span>
              <span>06:00:00 UTC</span>
              <span>12:00:00 UTC</span>
              <span>18:00:00 UTC</span>
              <span>LIVE NOW</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
