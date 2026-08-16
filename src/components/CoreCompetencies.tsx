import React, { useState } from 'react';
import { COMPETENCIES } from '../data/portfolioData';
import { TrendingUp, ShieldCheck, FileCheck, CheckCircle2, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

interface CoreCompetenciesProps {
  onOpenContact: () => void;
}

export const CoreCompetencies: React.FC<CoreCompetenciesProps> = ({ onOpenContact }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="competencies" className="py-20 sm:py-28 bg-[#FBF8F3] relative border-b border-[#EBE4D8]">
      
      {/* Background Subtle Margin Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-3">
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
              [EXPERTISE]
            </span>
            <span className="text-[#A39A8C]">/</span>
            <span className="text-[#6B6256]">END-TO-END PHARMA VALUE CHAIN</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1714] tracking-tight">
            Core Executive Competencies
          </h2>
          <p className="text-base text-[#6B6256] mt-3 leading-relaxed">
            Bridging clinical science, commercial market development, and strict regulatory compliance to build resilient healthcare delivery channels.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {COMPETENCIES.map((comp) => {
            const isExpanded = expandedId === comp.id;

            return (
              <div
                key={comp.id}
                className="relative bg-white rounded-3xl border border-[#DDD3C3] hover:border-[#E8551F] transition-all duration-300 shadow-md hover:shadow-xl p-6 sm:p-8 flex flex-col justify-between group overflow-hidden"
              >
                {/* Growing Left Accent Bar on Hover */}
                <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-gradient-to-b from-[#E8551F] to-[#F08A2C] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div>
                  {/* Icon and Tag Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#F3EEE6] text-[#E8551F] group-hover:bg-gradient-to-tr group-hover:from-[#E8551F] group-hover:to-[#F08A2C] group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-xs">
                      {getIcon(comp.icon)}
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B6256] bg-[#FBF8F3] px-3 py-1 rounded-md border border-[#EBE4D8]">
                      {comp.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1714] mb-2 leading-tight group-hover:text-[#E8551F] transition-colors">
                    {comp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6256] leading-relaxed mb-6">
                    {comp.subtitle}
                  </p>

                  {/* Key Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-[#F3EEE6] border border-[#EBE4D8] mb-6">
                    {comp.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="font-display font-bold text-sm sm:text-base text-[#E8551F]">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-[#6B6256] leading-tight">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* High-Level Overview */}
                  <p className="text-xs sm:text-sm text-[#1A1714] font-medium leading-relaxed mb-4">
                    {comp.description}
                  </p>

                  {/* Expandable Key Capabilities */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#EBE4D8] space-y-3 animate-in fade-in duration-200">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#E8551F] font-bold block mb-2">
                          KEY CAPABILITIES & IMPACT
                        </span>
                        <div className="space-y-2">
                          {comp.keyCapabilities.map((cap, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#6B6256]">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#3FB36B] shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#1A1714] font-bold block mb-2">
                          FRAMEWORKS & STANDARDS
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {comp.toolsAndStandards.map((tool) => (
                            <span key={tool} className="text-[10px] font-mono bg-white border border-[#DDD3C3] px-2 py-0.5 rounded text-[#1A1714]">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Action Controls */}
                <div className="mt-6 pt-4 border-t border-[#EBE4D8] flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(comp.id)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#1A1714] hover:text-[#E8551F] transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Collapse Details' : 'Deep Dive'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#E8551F]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#E8551F]" />
                    )}
                  </button>

                  <button
                    onClick={onOpenContact}
                    className="text-xs font-semibold text-[#E8551F] hover:text-[#D44713] flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>Engage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
