import React from 'react';
import { Cpu, Globe, Share2, MessageSquare, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                NEXUS <span className="text-gradient-violet">AI</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The high-performance autonomous intelligence & real-time telemetry engine for next-generation enterprise software.
            </p>

            {/* Live Operational Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational (99.999% SLA)
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Neural Core Engine</a></li>
              <li><a href="#dashboard" className="hover:text-white transition-colors">Telemetry Console</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Zero-Trust Vault</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Enterprise Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog v4.2</a></li>
            </ul>
          </div>

          {/* Column 3: Developers */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">Developers</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">React & Next.js SDK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Python SDK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Edge Node Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub Repository</a></li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About NEXUS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers (Hiring!)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Audit Report</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} NEXUS AI Inc. All rights reserved. Designed for $1,000+ Awwwards Commercial Value.</p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" aria-label="Global Community">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" aria-label="Social Feed">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" aria-label="Developer Forum">
              <MessageSquare className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors" aria-label="Terminal Console">
              <Terminal className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
