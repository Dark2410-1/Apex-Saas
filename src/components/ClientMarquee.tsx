import React from 'react';
import { CLIENT_LOGOS } from '../data/mockData';

export const ClientMarquee: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-slate-950/40 overflow-hidden relative">
      {/* Side Blur Fades */}
      <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">
          Trusted by Engineering Teams at Industry Pioneers
        </p>
      </div>

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 pr-12">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-2 text-slate-400 hover:text-white font-extrabold text-lg sm:text-xl tracking-tight transition-colors duration-300 cursor-pointer group"
            >
              <span className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                {item.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
