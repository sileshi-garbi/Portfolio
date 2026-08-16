import React, { useState } from 'react';
import { CAREER_JOURNEY } from '../data/portfolioData';
import { CheckCircle, Briefcase, Award, ArrowRight } from 'lucide-react';

interface CareerJourneyProps {
  onOpenCv: () => void;
}

export const CareerJourney: React.FC<CareerJourneyProps> = ({ onOpenCv }) => {
  const [activePhase, setActivePhase] = useState<number>(4);

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F3EEE6] relative border-b border-[#DDD3C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD3C3] text-xs font-semibold text-[#1A1714] mb-3 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E8551F]"></span>
              <span className="font-mono uppercase tracking-widest text-[#E8551F] text-[11px]">
                [EXPERIENCE]
              </span>
              <span className="text-[#A39A8C]">/</span>
              <span className="text-[#6B6256]">16+ YEARS TIMELINE</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1714] tracking-tight">
              Professional Journey
            </h2>
            <p className="text-base text-[#6B6256] mt-2 max-w-2xl">
              An evolutionary track record spanning frontline community clinical practice, multinational pharmaceutical detailing, wholesale enterprise establishment, and strategic executive leadership.
            </p>
          </div>

          <button
            onClick={onOpenCv}
            className="self-start md:self-auto px-5 py-2.5 bg-white hover:bg-[#FBF8F3] text-[#1A1714] font-bold text-xs uppercase tracking-wider rounded-full border border-[#DDD3C3] hover:border-[#1A1714] transition-all shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <span>Complete Career Dossier</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E8551F]" />
          </button>
        </div>

        {/* 4-Step Timeline Flow (Desktop & Mobile Adaptive) */}
        <div className="relative mb-12">
          
          {/* Horizontal Connecting Track (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-1 bg-[#DDD3C3] rounded-full z-0">
            <div
              className="h-full bg-gradient-to-r from-[#E8551F] to-[#F08A2C] rounded-full transition-all duration-700 ease-out"
              style={{ width: `${((activePhase - 1) / 3) * 100}%` }}
            />
          </div>

          {/* 4 Milestone Step Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {CAREER_JOURNEY.map((phase) => {
              const isActive = activePhase === phase.id;

              return (
                <div
                  key={phase.id}
                  onClick={() => setActivePhase(phase.id)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-[#E8551F] shadow-xl -translate-y-2 ring-2 ring-[#E8551F]/20'
                      : 'bg-white/80 hover:bg-white border-[#DDD3C3] hover:border-[#A39A8C] shadow-xs'
                  }`}
                >
                  <div>
                    {/* Node Number & Indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-lg transition-all duration-300 shadow-xs ${
                          isActive
                            ? 'bg-[#E8551F] text-white tangerine-shadow'
                            : 'bg-[#F3EEE6] text-[#1A1714] border border-[#DDD3C3]'
                        }`}
                      >
                        0{phase.id}
                      </div>

                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B6256] bg-[#FBF8F3] px-2.5 py-1 rounded-md border border-[#EBE4D8]">
                        {phase.period}
                      </span>
                    </div>

                    {/* Titles */}
                    <h3 className="font-display font-bold text-lg text-[#1A1714] leading-snug mb-1">
                      {phase.phaseTitle}
                    </h3>
                    <p className="text-xs font-semibold text-[#E8551F] mb-1">
                      {phase.role}
                    </p>
                    <p className="text-[11px] text-[#A39A8C] font-mono mb-4">
                      {phase.organizationType}
                    </p>

                    {/* Summary */}
                    <p className="text-xs text-[#6B6256] leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Competency Chip */}
                  <div className="mt-6 pt-4 border-t border-[#EBE4D8] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#1A1714] font-medium truncate">
                      {phase.keyCompetency}
                    </span>
                    <span className={`text-xs font-bold ${isActive ? 'text-[#E8551F]' : 'text-[#A39A8C]'}`}>
                      {isActive ? 'Active Phase' : 'Select'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Active Phase Deep Dive Banner */}
        {(() => {
          const current = CAREER_JOURNEY.find((p) => p.id === activePhase) || CAREER_JOURNEY[3];
          return (
            <div className="bg-white rounded-3xl border border-[#DDD3C3] p-6 sm:p-10 shadow-lg animate-in fade-in duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#EBE4D8] pb-6 lg:pb-0 lg:pr-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-[#E8551F]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8551F]">
                      PHASE 0{current.id} DEEP DIVE
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-2xl text-[#1A1714] mb-2">
                    {current.phaseTitle}
                  </h4>
                  <p className="text-xs text-[#6B6256]">
                    {current.role} • {current.period}
                  </p>
                  <div className="mt-4 p-3 rounded-xl bg-[#F3EEE6] border border-[#DDD3C3] flex items-center gap-2 text-xs font-mono text-[#1A1714]">
                    <Award className="w-4 h-4 text-[#E8551F] shrink-0" />
                    <span>Focus: {current.keyCompetency}</span>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#6B6256] font-bold block mb-4">
                    KEY ACHIEVEMENTS & STRATEGIC CONTRIBUTION
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {current.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#FBF8F3] border border-[#EBE4D8] flex flex-col justify-between space-y-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#E8551F]/10 text-[#E8551F] font-mono text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </div>
                        <p className="text-xs text-[#1A1714] font-medium leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
