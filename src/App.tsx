/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PhotoProvider } from './context/PhotoContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LogoTicker } from './components/LogoTicker';
import { SelectedWork } from './components/SelectedWork';
import { CoreCompetencies } from './components/CoreCompetencies';
import { CareerJourney } from './components/CareerJourney';
import { StrategicAdvisoryPlanner } from './components/StrategicAdvisoryPlanner';
import { Testimonials } from './components/Testimonials';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactModal } from './components/ContactModal';
import { CvModal } from './components/CvModal';
import { ProjectCaseStudy } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);
  const [contactInitialScope, setContactInitialScope] = useState<string>('');

  const handleOpenContactWithScope = (scope: string) => {
    setContactInitialScope(scope);
    setIsContactOpen(true);
  };

  const handleOpenGeneralContact = () => {
    setContactInitialScope('');
    setIsContactOpen(true);
  };

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#FBF8F3] text-[#1A1714] relative selection:bg-[#E8551F] selection:text-white">
        {/* Fixed Navigation Header */}
        <Header
          onOpenContact={handleOpenGeneralContact}
          onOpenCv={() => setIsCvOpen(true)}
        />

        {/* Main Content Sections */}
        <main>
          {/* Section 1: Hero */}
          <Hero
            onOpenContact={handleOpenGeneralContact}
            onOpenCv={() => setIsCvOpen(true)}
          />

          {/* Section 2: Logo Ticker Band */}
          <LogoTicker />

          {/* Section 3: Selected Work & Case Studies (3D Shelf Ticker) */}
          <SelectedWork
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* Section 4: Core Competencies */}
          <CoreCompetencies
            onOpenContact={handleOpenGeneralContact}
          />

          {/* Section 5: Career Journey Timeline */}
          <CareerJourney
            onOpenCv={() => setIsCvOpen(true)}
          />

          {/* Section 6: Strategic Advisory Scope Planner */}
          <StrategicAdvisoryPlanner
            onOpenContactWithScope={handleOpenContactWithScope}
          />

          {/* Section 7: Partner Testimonials */}
          <Testimonials />

          {/* Section 8: CTA Section */}
          <CtaSection
            onOpenContact={handleOpenGeneralContact}
            onOpenCv={() => setIsCvOpen(true)}
          />
        </main>

        {/* Section 9: Dark Footer */}
        <Footer
          onOpenContact={handleOpenGeneralContact}
          onOpenCv={() => setIsCvOpen(true)}
        />

        {/* Interactive Modals */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenContact={handleOpenGeneralContact}
        />

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          initialScope={contactInitialScope}
        />

        <CvModal
          isOpen={isCvOpen}
          onClose={() => setIsCvOpen(false)}
        />
      </div>
    </PhotoProvider>
  );
}

