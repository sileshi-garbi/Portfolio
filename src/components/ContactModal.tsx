import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useExecutivePhoto } from '../context/PhotoContext';
import { X, Send, CheckCircle2, Mail, Phone, MapPin, Linkedin, Sparkles, Building2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialScope }) => {
  const { avatarUrl } = useExecutivePhoto();
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    scope: initialScope || 'Market Entry & Strategy',
    timeline: 'Immediate (Next 30 Days)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({ ...prev, scope: initialScope }));
    }
  }, [initialScope]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      scope: 'Market Entry & Strategy',
      timeline: 'Immediate (Next 30 Days)',
      message: '',
    });
    onClose();
  };

  return (
    <div
      id="contact-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#1A1714]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="contact-modal-container"
        className="relative w-full max-w-2xl bg-[#FBF8F3] rounded-3xl border border-[#DDD3C3] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Tangerine Accent Line */}
        <div className="h-2 w-full bg-gradient-to-r from-[#E8551F] to-[#F08A2C]" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#EBE4D8] bg-white flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#E8551F]/30 bg-[#F3EEE6] shrink-0 shadow-sm">
              <img
                src={avatarUrl}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#E8551F]"></span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#E8551F]">
                  [EXECUTIVE CONSULTATION]
                </span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#1A1714]">
                Connect with {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-[#6B6256] mt-0.5">
                Senior Pharmaceutical Executive & Strategic Healthcare Advisor
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#F3EEE6] hover:bg-[#1A1714] text-[#6B6256] hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {/* Quick Direct Instant Channels Strip */}
          <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={PERSONAL_INFO.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white hover:bg-[#F3EEE6] border border-[#DDD3C3] hover:border-[#E8551F] transition-all flex items-center gap-3 group shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-[#E8551F]/10 text-[#E8551F] group-hover:bg-[#E8551F] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#6B6256]">Direct Telegram</div>
                <div className="text-xs font-bold text-[#1A1714]">@{PERSONAL_INFO.telegram}</div>
              </div>
            </a>

            <a
              href={`tel:${PERSONAL_INFO.rawPhone}`}
              className="p-3 rounded-xl bg-white hover:bg-[#F3EEE6] border border-[#DDD3C3] hover:border-[#E8551F] transition-all flex items-center gap-3 group shadow-2xs"
            >
              <div className="w-9 h-9 rounded-lg bg-[#3FB36B]/15 text-[#3FB36B] group-hover:bg-[#3FB36B] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#6B6256]">Direct Phone</div>
                <div className="text-xs font-bold text-[#1A1714]">{PERSONAL_INFO.phone}</div>
              </div>
            </a>
          </div>
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#3FB36B]/15 text-[#3FB36B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-2xl text-[#1A1714]">
                Inquiry Successfully Logged
              </h4>
              <p className="text-sm text-[#6B6256] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong> from <strong>{formData.organization || 'your organization'}</strong>. Your consultation request regarding <em>{formData.scope}</em> has been recorded. {PERSONAL_INFO.shortName} will review and respond directly to {formData.email} within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#1A1714] hover:bg-[#E8551F] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                >
                  Close Confirmation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1714] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C3] text-xs text-[#1A1714] focus:outline-none focus:border-[#E8551F] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1714] mb-1.5">
                    Organization / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Global Pharma Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C3] text-xs text-[#1A1714] focus:outline-none focus:border-[#E8551F] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1714] mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.jenkins@pharma.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C3] text-xs text-[#1A1714] focus:outline-none focus:border-[#E8551F] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1714] mb-1.5">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+251 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C3] text-xs text-[#1A1714] focus:outline-none focus:border-[#E8551F] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1714] mb-1.5">
                    Engagement Focus / Scope
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C3] text-xs text-[#1A1714] focus:outline-none focus:border-[#E8551F] transition-colors"
                  >
                    <option value="Market Entry & Strategy">Market Entry & Regional Access</option>
                    <option value="EFDA Regulatory Clearance & CTD Dossiers">EFDA Regulatory & CTD Dossiers</option>
                    <option value="Wholesale Startup & WHO-GDP Audit">Wholesale Startup & WHO-GDP Setup</option>
                    <option value="Commercial Strategy & Sales Restructure">Commercial Sales Leadership</option>
                    <option value="Executive Board Advisory / Interim Management">Executive Board Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1714] mb-1.5">
                    Desired Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C3] text-xs text-[#1A1714] focus:outline-none focus:border-[#E8551F] transition-colors"
                  >
                    <option value="Immediate (Next 30 Days)">Immediate (Next 30 Days)</option>
                    <option value="Q1 / Q2 Planning Horizon">Q1 / Q2 Planning Horizon</option>
                    <option value="Long-term Strategic Alliance">Long-term Strategic Alliance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1714] mb-1.5">
                  Brief Overview of Strategic Needs & Objectives
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline key targets, therapeutic areas, or regulatory challenges..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDD3C3] text-xs text-[#1A1714] focus:outline-none focus:border-[#E8551F] transition-colors"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E8551F] hover:bg-[#D44713] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md tangerine-shadow flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Strategic Inquiry</span>
                </button>
              </div>
            </form>
          )}

          {/* Quick Direct Coordinates Footer */}
          <div className="mt-6 pt-6 border-t border-[#EBE4D8] grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-[#6B6256]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#E8551F] shrink-0" />
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#E8551F] transition-colors truncate">
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-[#0A66C2] shrink-0" />
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition-colors">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#E8551F] shrink-0" />
              <a href={`tel:${PERSONAL_INFO.rawPhone}`} className="hover:text-[#E8551F] transition-colors">{PERSONAL_INFO.phone}</a>
            </div>
            <div className="flex items-center gap-2">
              <Send className="w-4 h-4 text-[#E8551F] shrink-0" />
              <a href={PERSONAL_INFO.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#E8551F] transition-colors">@{PERSONAL_INFO.telegram}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
