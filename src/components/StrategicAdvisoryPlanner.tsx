import React, { useState } from 'react';
import { ADVISORY_OPTIONS } from '../data/portfolioData';
import { AdvisoryOption } from '../types';
import { Compass, FileCheck, Boxes, TrendingUp, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface StrategicAdvisoryPlannerProps {
  onOpenContactWithScope: (scopeTitle: string) => void;
}

export const StrategicAdvisoryPlanner: React.FC<StrategicAdvisoryPlannerProps> = ({ onOpenContactWithScope }) => {
  const [selectedAdvisory, setSelectedAdvisory] = useState<AdvisoryOption>(ADVISORY_OPTIONS[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="advisory" className="py-20 sm:py-28 bg-[#F3EEE6] relative border-b border-[#DDD3C3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD3C3] text-xs font-semibold text-[#1A1714] mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#E8551F]"></span>
            <span className="font-mono uppercase tracking-widest text-[#E8551F] text-[11px]">
              [STRATEGIC ENGAGEMENT]
            </span>
            <span className="text-[#A39A8C]">/</span>
            <span className="text-[#6B6256]">ADVISORY SCOPE PLANNER</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1714] tracking-tight">
            Tailored Pharmaceutical Advisory
          </h2>
          <p className="text-base text-[#6B6256] mt-3 leading-relaxed">
            Select your organization&apos;s strategic priority below to preview recommended timelines, core deliverables, and engagement roadmaps.
          </p>
        </div>

        {/* 2-Column Advisory Planner Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Scope Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {ADVISORY_OPTIONS.map((opt) => {
              const isSelected = selectedAdvisory.id === opt.id;

              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedAdvisory(opt)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white border-[#E8551F] shadow-lg ring-1 ring-[#E8551F]/30 translate-x-1'
                      : 'bg-white/70 hover:bg-white border-[#DDD3C3] hover:border-[#A39A8C]'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#E8551F] text-white shadow-xs'
                        : 'bg-[#F3EEE6] text-[#6B6256]'
                    }`}
                  >
                    {getIcon(opt.icon)}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display font-bold text-sm sm:text-base text-[#1A1714]">
                        {opt.title}
                      </h4>
                      {isSelected && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#E8551F] font-bold bg-[#E8551F]/10 px-2 py-0.5 rounded shrink-0">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#6B6256] mt-1 line-clamp-2">
                      {opt.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Interactive Roadmap Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DDD3C3] p-6 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              {/* Scope Title & Duration */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EBE4D8] pb-6 mb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E8551F] font-bold block mb-1">
                    [ENGAGEMENT BLUEPRINT]
                  </span>
                  <h3 className="font-display font-bold text-2xl text-[#1A1714]">
                    {selectedAdvisory.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEE6] border border-[#DDD3C3] text-xs font-mono font-bold text-[#1A1714]">
                  <Clock className="w-3.5 h-3.5 text-[#E8551F]" />
                  <span>Timeline: {selectedAdvisory.typicalDuration}</span>
                </div>
              </div>

              {/* Scope Description */}
              <p className="text-sm text-[#6B6256] leading-relaxed mb-6">
                {selectedAdvisory.description}
              </p>

              {/* Key Deliverables Checklist */}
              <div className="space-y-3 mb-8">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#1A1714] font-bold block">
                  CORE DELIVERABLES & PHARMACEUTICAL MILESTONES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedAdvisory.deliverables.map((del, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#FBF8F3] border border-[#EBE4D8] flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#3FB36B] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#1A1714] font-medium leading-snug">
                        {del}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Consultation Action Banner */}
            <div className="pt-6 border-t border-[#EBE4D8] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FBF8F3] -mx-6 sm:-mx-10 -mb-6 sm:-mb-10 p-6 sm:px-10 rounded-b-3xl">
              <div className="flex items-center gap-2 text-xs text-[#6B6256]">
                <Sparkles className="w-4 h-4 text-[#E8551F]" />
                <span>Executive confidentiality & NDA guaranteed</span>
              </div>

              <button
                onClick={() => onOpenContactWithScope(selectedAdvisory.title)}
                className="w-full sm:w-auto px-6 py-3 bg-[#E8551F] hover:bg-[#D44713] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Inquire for &quot;{selectedAdvisory.title}&quot;</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
