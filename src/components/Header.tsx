import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useExecutivePhoto } from '../context/PhotoContext';
import { ArrowUpRight, Mail, MapPin, Phone, Linkedin, CheckCircle2, FileText, Send } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenCv: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onOpenCv }) => {
  const { avatarUrl } = useExecutivePhoto();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', tag: '01' },
    { name: 'Selected Work', href: '#work', tag: '02' },
    { name: 'Core Competencies', href: '#competencies', tag: '03' },
    { name: 'Career Journey', href: '#experience', tag: '04' },
    { name: 'Advisory Planner', href: '#advisory', tag: '05' },
    { name: 'Testimonials', href: '#testimonials', tag: '06' },
    { name: 'Contact', href: '#contact', tag: '07' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Fixed Header Bar */}
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF8F3]/90 backdrop-blur-md border-b border-[#EBE4D8] py-3.5 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark & Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="w-9 h-9 rounded-md bg-[#1A1714] text-[#FBF8F3] flex items-center justify-center font-bold tracking-tighter text-sm border border-[#DDD3C3] group-hover:border-[#E8551F] group-hover:bg-[#E8551F] transition-all duration-300 shadow-xs">
              {PERSONAL_INFO.monogram}
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-widest text-[#1A1714] uppercase group-hover:text-[#E8551F] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] tracking-wider uppercase text-[#6B6256] hidden sm:block">
                Pharmaceutical Executive
              </span>
            </div>
          </a>

          {/* Center quick status pill (desktop only) */}
          <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#EBE4D8] text-xs text-[#6B6256] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3FB36B] animate-pulse"></span>
            <span className="font-medium text-[#1A1714]">Available</span>
            <span className="text-[#A39A8C]">|</span>
            <span>Strategic Advisory & Leadership</span>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            <button
              id="header-cv-button"
              onClick={onOpenCv}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#1A1714] bg-white hover:bg-[#F3EEE6] border border-[#DDD3C3] rounded-full transition-all duration-200 shadow-xs active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-[#E8551F]" />
              <span>Executive CV</span>
            </button>

            <button
              id="header-consult-button"
              onClick={onOpenContact}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-[#E8551F] hover:bg-[#D44713] rounded-full transition-all duration-200 shadow-xs tangerine-shadow-sm active:scale-95"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Morphing Menu Toggle */}
            <button
              id="menu-toggle-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1A1714] text-white hover:bg-[#E8551F] transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-sm focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="relative overflow-hidden h-4 flex items-center">
                <span
                  className={`inline-block transition-transform duration-300 ease-out ${
                    isMenuOpen ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                >
                  MENU
                </span>
                <span
                  className={`absolute inset-0 transition-transform duration-300 ease-out ${
                    isMenuOpen ? 'translate-y-0 opacity-100 text-[#FBF8F3]' : 'translate-y-full opacity-0'
                  }`}
                >
                  CLOSE
                </span>
              </span>

              <div className="w-4 h-3.5 relative flex flex-col justify-between items-center">
                <span
                  className={`w-4 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Dark-Ink Overlay Menu */}
      <div
        id="fullscreen-menu-overlay"
        className={`fixed inset-0 bg-[#1A1714] z-40 transition-all duration-500 flex flex-col justify-between p-6 sm:p-12 lg:p-16 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto visible translate-y-0'
            : 'opacity-0 pointer-events-none invisible -translate-y-4'
        }`}
      >
        {/* Top spacer */}
        <div className="h-16"></div>

        {/* Center Nav Grid */}
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Oversized Links */}
          <nav className="lg:col-span-8 flex flex-col space-y-2 sm:space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="group flex items-baseline gap-4 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#DDD3C3] hover:text-white transition-colors duration-200 py-1 focus:outline-none"
              >
                <span className="text-xs sm:text-sm font-mono text-[#E8551F] opacity-70 group-hover:opacity-100 transition-opacity">
                  [{link.tag}]
                </span>
                <span className="group-hover:translate-x-3 transition-transform duration-300 font-display">
                  {link.name}
                </span>
                <ArrowUpRight className="w-5 h-5 text-[#E8551F] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Info Box within Menu */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#332E28] pt-6 lg:pt-0 lg:pl-10 space-y-6 text-[#A39A8C] text-sm">
            <div className="flex items-center gap-3 pb-2 border-b border-[#2A241F]">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#E8551F] shrink-0 bg-[#25201B]">
                <img
                  src={avatarUrl}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#E8551F] block">
                  Executive Profile
                </span>
                <p className="text-white font-medium text-sm">
                  {PERSONAL_INFO.name}
                </p>
                <span className="text-[11px] text-[#A39A8C] block">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#DDD3C3]">
                <MapPin className="w-4 h-4 text-[#E8551F] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#DDD3C3]">
                <Mail className="w-4 h-4 text-[#E8551F] shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">{PERSONAL_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#DDD3C3]">
                <Phone className="w-4 h-4 text-[#E8551F] shrink-0" />
                <a href={`tel:${PERSONAL_INFO.rawPhone}`} className="hover:text-white transition-colors">{PERSONAL_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#DDD3C3]">
                <Send className="w-4 h-4 text-[#E8551F] shrink-0" />
                <a href={PERSONAL_INFO.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram: @{PERSONAL_INFO.telegram}</a>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full text-center px-4 py-3 bg-[#E8551F] hover:bg-[#D44713] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md active:scale-98"
              >
                Schedule Consultation
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenCv();
                }}
                className="w-full text-center px-4 py-3 bg-[#2A241F] hover:bg-[#38312A] text-[#DDD3C3] hover:text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-[#453D34] transition-all"
              >
                View Full CV
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar in Menu */}
        <div className="max-w-6xl w-full mx-auto border-t border-[#2A241F] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6256]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#3FB36B]" />
            <span>WHO-GDP Compliant • EFDA Regulatory Expert</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A39A8C] hover:text-white flex items-center gap-1 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#E8551F]" />
              <span>LinkedIn Network</span>
            </a>
            <span className="text-[#453D34]">© {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
          </div>
        </div>
      </div>
    </>
  );
};
