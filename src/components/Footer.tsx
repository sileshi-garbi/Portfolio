import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useExecutivePhoto } from '../context/PhotoContext';
import { Mail, MapPin, Phone, Linkedin, CheckCircle2, ArrowRight, Shield, FileText, Send } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenCv }) => {
  const { avatarUrl } = useExecutivePhoto();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#1A1714] text-[#DDD3C3] -mt-16 pt-24 pb-12 z-20 overflow-hidden border-t border-[#332E28]">
      
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-[#E8551F]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2A241F]">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#E8551F] bg-[#1A1714] flex items-center justify-center shrink-0 shadow-md">
                <img
                  src={avatarUrl}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white tracking-wider uppercase">
                  {PERSONAL_INFO.name}
                </h3>
                <span className="text-xs font-mono text-[#E8551F] block">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A39A8C] max-w-md leading-relaxed">
              Bridging pharmaceutical clinical science, WHO-GDP regulatory compliance, and sustainable commercial expansion across East Africa and international markets.
            </p>

            {/* Direct Contact Items */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-[#DDD3C3]">
                <MapPin className="w-4 h-4 text-[#E8551F] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#DDD3C3]">
                <Mail className="w-4 h-4 text-[#E8551F] shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#DDD3C3]">
                <Linkedin className="w-4 h-4 text-[#0A66C2] shrink-0" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#DDD3C3]">
                <Phone className="w-4 h-4 text-[#E8551F] shrink-0" />
                <a href={`tel:${PERSONAL_INFO.rawPhone}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[#DDD3C3]">
                <Send className="w-4 h-4 text-[#E8551F] shrink-0" />
                <a href={PERSONAL_INFO.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Telegram: @{PERSONAL_INFO.telegram}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Col (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8551F] block">
              PORTFOLIO SECTIONS
            </span>
            <ul className="space-y-2.5 text-xs text-[#A39A8C]">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Executive Profile & Hero
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Selected Work & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('competencies')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Core Competencies & GxP
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('experience')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  16+ Years Career Journey
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('advisory')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Strategic Advisory Scope Planner
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('testimonials')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Partner Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Executive Newsletter & Briefing (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8551F] block">
              REGULATORY & MARKET INSIGHTS
            </span>
            <p className="text-xs text-[#A39A8C] leading-relaxed">
              Subscribe to periodic executive memos covering Ethiopian EFDA regulatory changes, WHO-GDP updates, and regional market access dynamics.
            </p>

            {isSubscribed ? (
              <div className="p-3.5 rounded-xl bg-[#3FB36B]/15 border border-[#3FB36B]/30 flex items-center gap-2.5 text-xs text-white">
                <CheckCircle2 className="w-4 h-4 text-[#3FB36B] shrink-0" />
                <span>Thank you. You have been added to the executive briefing list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter corporate email..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#25201B] border border-[#38312A] text-xs text-white placeholder-[#6B6256] focus:outline-none focus:border-[#E8551F] transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#E8551F] hover:bg-[#D44713] text-white font-bold text-xs rounded-xl transition-all shadow-sm flex items-center gap-1 shrink-0 cursor-pointer active:scale-95"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
            )}

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenCv}
                className="text-xs text-[#A39A8C] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#E8551F]" />
                <span>Download Executive Profile PDF</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6256]">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#3FB36B]" />
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#E8551F]" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={onOpenContact}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Advisory Inquiries
            </button>
            <span className="text-[#38312A]">|</span>
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
