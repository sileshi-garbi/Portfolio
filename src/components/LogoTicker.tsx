import React from 'react';
import { PARTNER_LOGOS } from '../data/portfolioData';
import { Building, ShieldCheck } from 'lucide-react';

export const LogoTicker: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="w-full bg-[#F3EEE6] border-y border-[#DDD3C3] py-6 relative overflow-hidden">
      {/* Left and Right Fade Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F3EEE6] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F3EEE6] to-transparent z-10 pointer-events-none" />

      {/* Header bar / Eyebrow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8551F]"></span>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B6256] uppercase">
            COLLABORATIONS, HEALTHCARE INSTITUTIONS & MULTINATIONAL ALLIANCES
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#A39A8C] hidden sm:block">
          EAST AFRICA & GLOBAL NETWORKS
        </span>
      </div>

      {/* Marquee Row */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-6 py-2">
          {marqueeItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white border border-[#DDD3C3] hover:border-[#E8551F] transition-all duration-200 shadow-2xs group cursor-default shrink-0"
            >
              <div className="w-6 h-6 rounded-md bg-[#FBF8F3] border border-[#EBE4D8] flex items-center justify-center text-[#E8551F] group-hover:bg-[#E8551F] group-hover:text-white transition-colors">
                {partner.category.includes('Regulatory') || partner.category.includes('Quality') ? (
                  <ShieldCheck className="w-3.5 h-3.5" />
                ) : (
                  <Building className="w-3.5 h-3.5" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#1A1714] font-display whitespace-nowrap group-hover:text-[#E8551F] transition-colors">
                  {partner.name}
                </span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#A39A8C]">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
