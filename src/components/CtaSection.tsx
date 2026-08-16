import React from 'react';
import { VALUE_PROPOSITIONS } from '../data/portfolioData';
import { ArrowRight, Calendar, Sparkles, Zap, Target, ShieldCheck, HeartHandshake } from 'lucide-react';

interface CtaSectionProps {
  onOpenContact: () => void;
  onOpenCv: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact, onOpenCv }) => {
  const getPropIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Zap className="w-5 h-5" />;
      case 1:
        return <Target className="w-5 h-5" />;
      case 2:
        return <ShieldCheck className="w-5 h-5" />;
      case 3:
        return <HeartHandshake className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FBF8F3] relative overflow-hidden pb-36">
      {/* Background Tangerine Radial Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8551F]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Box */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DDD3C3] text-xs font-semibold text-[#1A1714] mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#E8551F]"></span>
            <span className="font-mono uppercase tracking-widest text-[#E8551F] text-[11px]">
              [LET&apos;S CONNECT]
            </span>
            <span className="text-[#A39A8C]">/</span>
            <span className="text-[#6B6256]">STRATEGIC DIALOGUE</span>
          </div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1A1714] tracking-tight leading-[1.08] mb-6">
            Ready to elevate pharmaceutical healthcare together?
          </h2>

          <p className="text-base sm:text-lg text-[#6B6256] leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you are expanding a multinational portfolio into East Africa, establishing a GxP wholesale distribution infrastructure, or seeking executive commercial leadership, let&apos;s build an enduring alliance.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              id="cta-start-project-button"
              onClick={onOpenContact}
              className="px-8 py-4 bg-gradient-to-r from-[#E8551F] to-[#F08A2C] hover:from-[#D44713] hover:to-[#E8551F] text-white font-bold text-sm tracking-wide rounded-full transition-all duration-300 tangerine-shadow flex items-center gap-2.5 active:scale-98 cursor-pointer group"
            >
              <span>Initiate Strategic Advisory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="cta-schedule-call-button"
              onClick={onOpenContact}
              className="px-8 py-4 bg-white hover:bg-[#F3EEE6] text-[#1A1714] font-bold text-sm tracking-wide rounded-full border border-[#DDD3C3] hover:border-[#1A1714] transition-all duration-300 shadow-2xs flex items-center gap-2 active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#E8551F]" />
              <span>Schedule Direct Meeting</span>
            </button>

            <button
              onClick={onOpenCv}
              className="w-full sm:w-auto px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B6256] hover:text-[#1A1714] underline underline-offset-4 cursor-pointer"
            >
              Review Full Curriculum Vitae
            </button>
          </div>
        </div>

        {/* 4-Tile Value Proposition Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <div
              key={prop.title}
              className="bg-white rounded-2xl border border-[#DDD3C3] hover:border-[#E8551F] p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F3EEE6] text-[#E8551F] group-hover:bg-[#E8551F] group-hover:text-white transition-colors flex items-center justify-center mb-4">
                {getPropIcon(idx)}
              </div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8551F] font-bold block mb-1">
                {prop.tagline}
              </span>
              <h3 className="font-display font-bold text-base text-[#1A1714] mb-2">
                {prop.title}
              </h3>
              <p className="text-xs text-[#6B6256] leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
