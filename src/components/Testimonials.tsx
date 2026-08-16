import React from 'react';
import { TESTIMONIALS, PERSONAL_INFO } from '../data/portfolioData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FBF8F3] relative border-b border-[#EBE4D8]">
      
      {/* Background Margin Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-3">
        <div className="border-r border-[#EBE4D8] h-full"></div>
        <div className="border-r border-[#EBE4D8] h-full"></div>
        <div className="h-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD3C3] text-xs font-semibold text-[#1A1714] mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#E8551F]"></span>
            <span className="font-mono uppercase tracking-widest text-[#E8551F] text-[11px]">
              [TESTIMONIALS]
            </span>
            <span className="text-[#A39A8C]">/</span>
            <span className="text-[#6B6256]">EXECUTIVE ENDORSEMENTS</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1714] tracking-tight">
            What Healthcare Partners Say
          </h2>
          <p className="text-base text-[#6B6256] mt-3 leading-relaxed">
            Testimonials from medical directors, multinational market access heads, and wholesale executives on {PERSONAL_INFO.shortName}&apos;s leadership and regulatory execution.
          </p>
        </div>

        {/* 3-Card Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#F3EEE6] rounded-3xl border border-[#DDD3C3] hover:border-[#E8551F] transition-all duration-300 p-8 flex flex-col justify-between relative group hover:shadow-xl hover:-translate-y-1"
            >
              {/* Big Tangerine Quote Mark */}
              <div className="w-12 h-12 rounded-2xl bg-white text-[#E8551F] border border-[#DDD3C3] flex items-center justify-center mb-6 shadow-2xs group-hover:bg-[#E8551F] group-hover:text-white transition-colors">
                <Quote className="w-6 h-6" />
              </div>

              {/* 5-Star Rating */}
              <div className="flex items-center gap-1 text-[#F2B705] mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F2B705]" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-sm text-[#1A1714] font-medium leading-relaxed mb-6 italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="pt-6 border-t border-[#DDD3C3]/80">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="font-display font-bold text-base text-[#1A1714]">
                    {t.author}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-[#3FB36B] font-bold bg-white px-2 py-0.5 rounded border border-[#DDD3C3]">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
                <div className="text-xs font-semibold text-[#E8551F]">
                  {t.title}
                </div>
                <div className="text-[11px] text-[#6B6256] font-mono">
                  {t.organization}
                </div>
                <div className="mt-2 text-[10px] font-mono uppercase tracking-wider text-[#A39A8C] bg-white/60 px-2 py-0.5 rounded inline-block">
                  Scope: {t.partnershipType}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
