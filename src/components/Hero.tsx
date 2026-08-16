import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Star, Shield, Award, Activity, PackageCheck, FileSpreadsheet, Building2, Truck, Phone, Send, Linkedin, Mail, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenCv }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 sm:pt-32 pb-16 flex flex-col justify-between overflow-hidden border-b border-[#EBE4D8]"
    >
      {/* Background Ruled Vertical Margin Lines & Ambient Warm Washes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Sketchbook vertical guide rules */}
        <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 h-full opacity-40">
          <div className="col-span-3 border-r border-[#EBE4D8] h-full hidden lg:block"></div>
          <div className="col-span-6 border-r border-[#EBE4D8] h-full hidden lg:block"></div>
          <div className="col-span-3 h-full hidden lg:block"></div>
        </div>

        {/* Soft Tangerine and Amber Ambient Orbs */}
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-[#E8551F]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#F08A2C]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 pb-10">
          
          {/* LEFT COLUMN: Executive Headline & Content (≈7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            {/* Tangerine Rule + Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF] border border-[#DDD3C3] text-xs font-semibold tracking-wider text-[#1A1714] mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E8551F]"></span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#E8551F]">
                [EXECUTIVE PROFILE]
              </span>
              <span className="text-[#A39A8C]">/</span>
              <span className="text-[#6B6256]">HELLO, I&apos;M SILASHI</span>
            </div>

            {/* Mixed-Typography Main Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1A1714] tracking-tight leading-[1.08] mb-5">
              <span>SENIOR PHARMACEUTICAL</span>{' '}
              <span className="block mt-1 sm:mt-0 sm:inline">EXECUTIVE</span>
              <div className="block mt-2 sm:mt-3">
                <span className="font-sans text-2xl sm:text-3xl lg:text-4xl text-[#6B6256] font-normal mr-2">
                  &
                </span>
                <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#E8551F] font-bold inline-block -rotate-2 transform origin-left tracking-normal">
                  Trusted Healthcare Leader
                </span>
              </div>
              <span className="block text-lg sm:text-xl lg:text-2xl font-normal text-[#6B6256] mt-3 font-sans tracking-tight">
                Based in <strong className="text-[#1A1714] font-medium">{PERSONAL_INFO.location}</strong>
              </span>
            </h1>

            {/* Executive Summary Paragraph */}
            <p className="text-base sm:text-lg text-[#6B6256] leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.summary}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-6">
              <button
                id="hero-view-work-button"
                onClick={() => scrollToSection('work')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#E8551F] hover:bg-[#D44713] text-white font-bold text-sm tracking-wide rounded-full transition-all duration-300 tangerine-shadow flex items-center justify-center gap-2.5 active:scale-98 group cursor-pointer"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-contact-button"
                onClick={onOpenContact}
                className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-[#F3EEE6] text-[#1A1714] font-bold text-sm tracking-wide rounded-full border border-[#DDD3C3] hover:border-[#1A1714] transition-all duration-300 shadow-2xs flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
              >
                <span>Let&apos;s Talk</span>
              </button>

              <button
                id="hero-cv-button"
                onClick={onOpenCv}
                className="w-full sm:w-auto px-5 py-3.5 text-[#6B6256] hover:text-[#1A1714] text-xs font-semibold tracking-wider uppercase underline underline-offset-4 transition-colors cursor-pointer text-center"
              >
                Read Executive CV
              </button>
            </div>

            {/* Quick Direct Channels (LinkedIn, Email, Telegram & Direct Phone) */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEE6] hover:bg-[#0A66C2] hover:text-white text-[#1A1714] text-xs font-semibold border border-[#DDD3C3] transition-colors shadow-2xs group"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2] group-hover:text-white" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEE6] hover:bg-[#E8551F] hover:text-white text-[#1A1714] text-xs font-semibold border border-[#DDD3C3] transition-colors shadow-2xs group"
              >
                <Mail className="w-3.5 h-3.5 text-[#E8551F] group-hover:text-white" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEE6] hover:bg-[#E8551F] hover:text-white text-[#1A1714] text-xs font-semibold border border-[#DDD3C3] transition-colors shadow-2xs group"
              >
                <Send className="w-3.5 h-3.5 text-[#E8551F] group-hover:text-white" />
                <span>Telegram: @{PERSONAL_INFO.telegram}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.rawPhone}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EEE6] hover:bg-[#E8551F] hover:text-white text-[#1A1714] text-xs font-semibold border border-[#DDD3C3] transition-colors shadow-2xs group"
              >
                <Phone className="w-3.5 h-3.5 text-[#E8551F] group-hover:text-white" />
                <span>Direct: {PERSONAL_INFO.phone}</span>
              </a>
            </div>

            {/* Social Proof & Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#EBE4D8] w-full text-xs text-[#6B6256]">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3FB36B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3FB36B]"></span>
                </span>
                <span className="font-semibold text-[#1A1714]">Available for Advisory & Leadership</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-md border border-[#EBE4D8]">
                <div className="flex text-[#F2B705]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F2B705]" />
                  ))}
                </div>
                <span className="font-bold text-[#1A1714]">5.0</span>
                <span className="text-[#A39A8C]">|</span>
                <span className="text-[#6B6256]">Trusted by 60+ Partners</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Executive Portrait Card with Floating Micro-Cards (≈5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Background Decorative Rings & Ambient Glow */}
            <div className="absolute w-72 sm:w-80 h-72 sm:h-80 rounded-full border border-[#EBE4D8] -z-10 animate-pulse pointer-events-none"></div>
            <div className="absolute w-96 h-96 rounded-full border border-[#DDD3C3]/40 -z-10 pointer-events-none"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E8551F]/15 rounded-full blur-2xl pointer-events-none"></div>

            {/* Central 3/4 Aspect Ratio Executive Portrait Dossier Card */}
            <div className="relative w-full max-w-[360px] aspect-[3/4] bg-white rounded-3xl border border-[#DDD3C3] shadow-xl p-5 flex flex-col justify-between overflow-hidden tech-grid-pattern group">
              
              {/* Card Header Tag */}
              <div className="flex items-center justify-between border-b border-[#EBE4D8] pb-2.5 relative z-10 bg-white/90 backdrop-blur-xs rounded-t-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E8551F]"></div>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#1A1714] uppercase">
                    EXECUTIVE // DOSSIER
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#A39A8C] uppercase">
                  ET-EFDA // GxP
                </span>
              </div>

              {/* Central Executive Portrait Photo Container */}
              <div className="my-auto relative w-full flex-1 flex flex-col items-center justify-center py-2">
                <div className="relative w-full max-w-[270px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#DDD3C3] shadow-md bg-[#F3EEE6] group/photo hover:border-[#E8551F] transition-all duration-300">
                  <img
                    src={PERSONAL_INFO.photoUrl}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                  />

                  {/* Subtle Gradient Vignette at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1714]/85 via-[#1A1714]/20 to-transparent flex flex-col justify-end p-3.5 pointer-events-none">
                    <div className="text-white">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F08A2C]">
                        {PERSONAL_INFO.name}
                      </div>
                      <div className="text-[11px] text-white/90 font-medium leading-tight">
                        {PERSONAL_INFO.title}
                      </div>
                    </div>
                  </div>

                  {/* Top Right Verified Shield Badge */}
                  <div className="absolute top-2.5 right-2.5 bg-[#E8551F] text-white p-1.5 rounded-full shadow-md z-10">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card Footer Live Bar */}
              <div className="bg-[#F3EEE6] rounded-xl p-3 border border-[#EBE4D8] flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#3FB36B]" />
                  <span className="text-xs font-semibold text-[#1A1714]">Active Executive Practice</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#E8551F] bg-white px-2 py-0.5 rounded border border-[#DDD3C3]">
                  16+ YRS
                </span>
              </div>

              {/* FLOATING MICRO-CARDS (Pharmaceutical Industry Equivalents) */}
              
              {/* 1. 16+ Years Experience Badge (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-sm p-3 rounded-2xl border border-[#DDD3C3] shadow-lg animate-float-1 z-20 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E8551F]/10 text-[#E8551F] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#1A1714]">16+ Years</div>
                  <div className="text-[10px] text-[#6B6256]">Pharma Leadership</div>
                </div>
              </div>

              {/* 2. WHO-GDP Compliance Card (Top Right) */}
              <div className="absolute top-10 -right-4 sm:-right-8 bg-white/95 backdrop-blur-sm px-3.5 py-2.5 rounded-2xl border border-[#DDD3C3] shadow-lg animate-float-2 z-20 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#3FB36B]/15 text-[#3FB36B] flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1714]">WHO-GDP</div>
                  <div className="text-[9px] text-[#3FB36B] font-bold">100% Certified</div>
                </div>
              </div>

              {/* 3. Product Registration Dossier Mock (Middle Left) */}
              <div className="absolute top-1/2 -left-6 sm:-left-10 bg-white/95 backdrop-blur-sm p-3 rounded-2xl border border-[#DDD3C3] shadow-lg animate-float-3 z-20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F08A2C]/15 text-[#E8551F] flex items-center justify-center">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1714]">50+ CTD Dossiers</div>
                  <div className="text-[10px] text-[#6B6256]">EFDA Approved</div>
                </div>
              </div>

              {/* 4. Supply Chain Flow Diagram (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 sm:-right-8 bg-white/95 backdrop-blur-sm p-3 rounded-2xl border border-[#DDD3C3] shadow-lg animate-float-4 z-20">
                <div className="flex items-center gap-2 mb-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#E8551F]" />
                  <span className="text-[10px] font-bold text-[#1A1714] uppercase">Supply Chain Integrity</span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#6B6256]">
                  <span className="bg-[#F3EEE6] px-1.5 py-0.5 rounded border border-[#EBE4D8]">Import</span>
                  <span>→</span>
                  <span className="bg-[#F3EEE6] px-1.5 py-0.5 rounded border border-[#EBE4D8]">Cold Chain</span>
                  <span>→</span>
                  <span className="bg-[#3FB36B]/15 text-[#1A1714] font-bold px-1.5 py-0.5 rounded border border-[#3FB36B]/30">Dispensary</span>
                </div>
              </div>

              {/* 5. 98% Client/Partner Satisfaction Badge (Bottom Left) */}
              <div className="absolute bottom-16 -left-4 sm:-left-6 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl border border-[#DDD3C3] shadow-md animate-float-1 z-20 flex items-center gap-2">
                <div className="text-[#E8551F] font-black text-sm">98%</div>
                <div className="text-[9px] text-[#6B6256] leading-tight">
                  Partner<br />Satisfaction
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BELOW-THE-FOLD 3-COLUMN STRIP */}
        <div className="mt-8 pt-8 border-t border-[#DDD3C3] grid grid-cols-1 md:grid-cols-3 gap-6 text-[#1A1714]">
          
          {/* Column 1: Core Domain Pills */}
          <div className="p-4 rounded-xl bg-white border border-[#EBE4D8] shadow-2xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8551F] font-bold block mb-2.5">
              01 // CORE DOMAINS
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['Commercial Management', 'Technical Ops', 'Regulatory Affairs', 'Healthcare Dev'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium bg-[#FBF8F3] hover:bg-[#F3EEE6] border border-[#DDD3C3] rounded-md text-[#1A1714] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Industry Frameworks & Tooling */}
          <div className="p-4 rounded-xl bg-white border border-[#EBE4D8] shadow-2xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8551F] font-bold block mb-2.5">
              02 // STANDARDS & FRAMEWORKS
            </span>
            <div className="flex flex-wrap gap-1.5">
              {['WHO-GDP & GxP', 'ICH-CTD Format', 'IoT Cold-Chain', 'Hospital Formularies'].map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-xs font-medium bg-[#F3EEE6] border border-[#DDD3C3] rounded-md text-[#1A1714]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Partner Reach & Track Record */}
          <div className="p-4 rounded-xl bg-white border border-[#EBE4D8] shadow-2xs flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#E8551F] font-bold block mb-1">
                03 // PARTNER ECOSYSTEM
              </span>
              <div className="text-lg font-bold font-display text-[#1A1714]">
                60+ Organizations
              </div>
              <p className="text-xs text-[#6B6256]">
                Multinationals, WHO, MoH & Wholesalers
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#E8551F]/10 border border-[#E8551F]/20 flex items-center justify-center text-[#E8551F]">
              <Building2 className="w-6 h-6" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
