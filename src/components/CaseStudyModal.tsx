import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '../types';
import { X, CheckCircle2, TrendingUp, AlertCircle, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#1A1714]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="case-study-modal-container"
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FBF8F3] rounded-3xl border border-[#DDD3C3] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Tangerine Accent Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-[#E8551F] via-[#F08A2C] to-[#E8551F]" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#EBE4D8] bg-white flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F3EEE6] border border-[#DDD3C3] flex items-center justify-center text-3xl shrink-0 shadow-2xs">
              {project.icon}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#E8551F] uppercase bg-[#E8551F]/10 px-2.5 py-0.5 rounded">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-[#6B6256] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1714] leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            id="close-case-study-button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#F3EEE6] hover:bg-[#1A1714] text-[#6B6256] hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#1A1714]">
          {/* Key Metric Banner */}
          <div className="p-5 rounded-2xl bg-[#F3EEE6] border border-[#DDD3C3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#6B6256] font-bold block mb-1">
                KEY RESULT & VERIFIED IMPACT
              </span>
              <div className="text-2xl sm:text-3xl font-display font-bold text-[#E8551F]">
                {project.metric}
              </div>
              <p className="text-sm font-medium text-[#1A1714]">
                {project.metricLabel}
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-xl border border-[#EBE4D8] text-xs font-semibold text-[#3FB36B] shrink-0">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Executive Outcome</span>
            </div>
          </div>

          {/* Full Executive Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E8551F] font-bold mb-2">
              [OVERVIEW & SCOPE]
            </h4>
            <p className="text-sm sm:text-base text-[#6B6256] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Core Challenge */}
          <div className="p-4 rounded-xl bg-white border border-[#EBE4D8]">
            <div className="flex items-center gap-2 text-[#E8551F] mb-1.5">
              <AlertCircle className="w-4 h-4" />
              <h4 className="text-xs font-mono uppercase tracking-widest font-bold">
                STRATEGIC CHALLENGE
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#6B6256] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Strategic Actions Taken */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E8551F] font-bold mb-3">
              [STRATEGIC INTERVENTIONS & METHODOLOGY]
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.strategy.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#EBE4D8]"
                >
                  <span className="w-5 h-5 rounded-full bg-[#E8551F]/10 text-[#E8551F] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm text-[#1A1714] font-medium leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Outcomes */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#3FB36B] font-bold mb-3 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" />
              <span>[MEASURABLE BUSINESS & CLINICAL IMPACT]</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.outcomes.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#FFFFFF] border border-[#DDD3C3]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#3FB36B] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#1A1714] font-semibold leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono bg-[#F3EEE6] border border-[#DDD3C3] text-[#6B6256] rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-[#EBE4D8] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#6B6256]">
            Discuss similar implementations for your organization.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#6B6256] hover:text-[#1A1714] bg-[#F3EEE6] rounded-xl transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 bg-[#E8551F] hover:bg-[#D44713] text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Consult on this Topic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
