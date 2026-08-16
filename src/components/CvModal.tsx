import React, { useEffect } from 'react';
import { PERSONAL_INFO, CAREER_JOURNEY, COMPETENCIES } from '../data/portfolioData';
import { useExecutivePhoto } from '../context/PhotoContext';
import { X, Printer, Download, Mail, Phone, MapPin, Award, CheckCircle, GraduationCap, ShieldCheck, Send } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const { photoUrl } = useExecutivePhoto();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#1A1714]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="cv-modal-container"
        className="relative w-full max-w-4xl bg-[#FBF8F3] rounded-3xl border border-[#DDD3C3] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Line */}
        <div className="h-2 w-full bg-gradient-to-r from-[#E8551F] via-[#F08A2C] to-[#E8551F]" />

        {/* Modal Controls Bar */}
        <div className="p-4 sm:p-6 border-b border-[#EBE4D8] bg-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8551F]"></span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1A1714]">
              EXECUTIVE CURRICULUM VITAE // DOSSIER
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-full bg-[#F3EEE6] hover:bg-[#1A1714] text-[#1A1714] hover:text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#F3EEE6] hover:bg-[#1A1714] text-[#6B6256] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-[#1A1714]">
          
          {/* Header Section */}
          <div className="border-b border-[#DDD3C3] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border-2 border-[#E8551F] shrink-0 bg-[#F3EEE6] shadow-sm">
                  <img
                    src={photoUrl}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h1 className="font-display font-black text-2xl sm:text-3xl text-[#1A1714] tracking-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  <div className="text-sm font-semibold text-[#E8551F] mt-0.5">
                    {PERSONAL_INFO.title}
                  </div>
                  <div className="text-xs text-[#6B6256] mt-0.5">
                    16+ Years Multidisciplinary Pharmaceutical Leadership
                  </div>
                </div>
              </div>

              <div className="text-xs space-y-1 text-[#6B6256] sm:text-right font-mono">
                <div>📍 {PERSONAL_INFO.location}</div>
                <div>✉️ <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#E8551F] hover:underline">{PERSONAL_INFO.email}</a></div>
                <div>🔗 <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:underline">LinkedIn Profile</a></div>
                <div>📞 <a href={`tel:${PERSONAL_INFO.rawPhone}`} className="hover:underline">{PERSONAL_INFO.phone}</a></div>
                <div>✈️ Telegram: <a href={PERSONAL_INFO.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">@{PERSONAL_INFO.telegram}</a></div>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-4 border-t border-[#EBE4D8]">
              <div className="p-2.5 rounded-lg bg-[#FBF8F3] border border-[#EBE4D8] text-center">
                <div className="font-bold text-base text-[#E8551F]">16+ Yrs</div>
                <div className="text-[10px] text-[#6B6256] uppercase">Industry Experience</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FBF8F3] border border-[#EBE4D8] text-center">
                <div className="font-bold text-base text-[#E8551F]">50+</div>
                <div className="text-[10px] text-[#6B6256] uppercase">Dossiers Cleared</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FBF8F3] border border-[#EBE4D8] text-center">
                <div className="font-bold text-base text-[#E8551F]">$25M+</div>
                <div className="text-[10px] text-[#6B6256] uppercase">Turnover Managed</div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FBF8F3] border border-[#EBE4D8] text-center">
                <div className="font-bold text-base text-[#E8551F]">100%</div>
                <div className="text-[10px] text-[#6B6256] uppercase">WHO-GDP Compliance</div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8551F] mb-2">
              [EXECUTIVE SUMMARY]
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1714] leading-relaxed">
              Accomplished Pharmaceutical Executive with over 16 years of multidisciplinary leadership across commercial sales management, WHO-Good Distribution Practices (GDP), EFDA drug regulatory affairs, and national healthcare market access in East Africa. Proven track record of launching turnkey wholesale pharmaceutical distribution enterprises, steering $25M+ commercial portfolios, and securing fast-track approvals for critical therapeutics.
            </p>
          </div>

          {/* Core Competencies Matrix */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8551F] mb-3">
              [CORE AREAS OF EXPERTISE]
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {COMPETENCIES.map((comp) => (
                <div key={comp.id} className="p-3 rounded-xl bg-[#FBF8F3] border border-[#EBE4D8]">
                  <h3 className="text-xs font-bold text-[#1A1714] mb-1.5">{comp.title}</h3>
                  <ul className="space-y-1 text-[11px] text-[#6B6256]">
                    {comp.keyCapabilities.slice(0, 3).map((cap, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#E8551F]">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Career Experience Timeline */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8551F] mb-4">
              [PROFESSIONAL CAREER HISTORY]
            </h2>
            <div className="space-y-6">
              {CAREER_JOURNEY.map((phase) => (
                <div key={phase.id} className="border-l-2 border-[#E8551F]/40 pl-4 relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E8551F] absolute -left-[6px] top-1"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold text-[#1A1714]">
                      {phase.role}
                    </h3>
                    <span className="text-xs font-mono text-[#E8551F] font-semibold">
                      {phase.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#6B6256] mb-2">
                    {phase.organizationType}
                  </div>
                  <p className="text-xs text-[#6B6256] mb-2">
                    {phase.description}
                  </p>
                  <ul className="space-y-1 text-xs text-[#1A1714]">
                    {phase.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#3FB36B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Professional Credentials */}
          <div className="border-t border-[#DDD3C3] pt-6">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8551F] mb-3">
              [EDUCATION & REGULATORY CREDENTIALS]
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-[#FBF8F3] border border-[#EBE4D8] space-y-1">
                <div className="font-bold text-[#1A1714] flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#E8551F]" />
                  <span>Bachelor of Pharmacy (B.Pharm)</span>
                </div>
                <div className="text-[#6B6256]">Licensed Pharmacist • Health Professionals Council</div>
              </div>

              <div className="p-3 rounded-xl bg-[#FBF8F3] border border-[#EBE4D8] space-y-1">
                <div className="font-bold text-[#1A1714] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#3FB36B]" />
                  <span>WHO-Good Distribution Practice (GDP)</span>
                </div>
                <div className="text-[#6B6256]">Certified Quality & Cold-Chain Management</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
