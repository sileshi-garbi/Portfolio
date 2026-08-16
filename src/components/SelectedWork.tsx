import React, { useState } from 'react';
import { SELECTED_PROJECTS } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types';
import { ArrowUpRight, Sparkles, Layers, Grid } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');
  
  // Duplicated list for seamless infinite marquee loop
  const tickerProjects = [...SELECTED_PROJECTS, ...SELECTED_PROJECTS];

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#FBF8F3] relative overflow-hidden border-b border-[#EBE4D8]">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD3C3] text-xs font-semibold text-[#1A1714] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E8551F]"></span>
              <span className="font-mono uppercase tracking-widest text-[#E8551F] text-[11px]">
                [SELECTED WORK]
              </span>
              <span className="text-[#A39A8C]">/</span>
              <span className="text-[#6B6256]">STRATEGIC ACHIEVEMENTS</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1714] tracking-tight">
              Selected Impact & Initiatives
            </h2>
            <p className="text-sm sm:text-base text-[#6B6256] mt-2 max-w-2xl">
              Real-world executions spanning wholesale startup commissioning, regulatory CTD portfolios, commercial market share turnarounds, and national healthcare logistics.
            </p>
          </div>

          {/* View Mode Toggle Controls */}
          <div className="flex items-center gap-2 bg-[#F3EEE6] p-1.5 rounded-xl border border-[#DDD3C3] self-start md:self-auto">
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                viewMode === '3d'
                  ? 'bg-white text-[#1A1714] shadow-xs'
                  : 'text-[#6B6256] hover:text-[#1A1714]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#E8551F]" />
              <span>3D Shelf Ticker</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-[#1A1714] shadow-xs'
                  : 'text-[#6B6256] hover:text-[#1A1714]'
              }`}
            >
              <Grid className="w-3.5 h-3.5 text-[#E8551F]" />
              <span>Grid View (6)</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: 3D PERSPECTIVE TICKER SHELF */}
      {viewMode === '3d' ? (
        <div className="w-full relative py-6">
          {/* Subtle 3D Perspective container */}
          <div className="perspective-container w-full overflow-hidden">
            <div className="perspective-shelf flex overflow-hidden select-none py-6">
              <div className="animate-marquee flex items-stretch gap-6 px-4">
                {tickerProjects.map((project, idx) => (
                  <div
                    key={`${project.id}-${idx}`}
                    onClick={() => onSelectProject(project)}
                    className="w-[320px] sm:w-[380px] bg-white rounded-2xl border border-[#DDD3C3] hover:border-[#E8551F] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between overflow-hidden cursor-pointer group shrink-0"
                  >
                    {/* Top Tangerine Gradient Strip */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-[#E8551F] to-[#F08A2C]" />

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      {/* Category & Status Bar */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{project.icon}</span>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B6256]">
                            {project.category}
                          </span>
                        </div>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#E8551F] bg-[#E8551F]/10 px-2 py-0.5 rounded">
                            <Sparkles className="w-2.5 h-2.5" />
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title & Metric */}
                      <div>
                        <div className="mb-2">
                          <span className="text-xs font-mono font-bold text-[#E8551F] bg-[#FBF8F3] px-2 py-1 rounded border border-[#EBE4D8]">
                            {project.metric} // {project.metricLabel}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-lg text-[#1A1714] leading-snug group-hover:text-[#E8551F] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs text-[#6B6256] mt-2 line-clamp-2 leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Tags & Action Link */}
                      <div className="pt-4 border-t border-[#EBE4D8] flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#A39A8C]">
                          {project.year}
                        </span>
                        <div className="flex items-center gap-1 text-xs font-bold text-[#E8551F] group-hover:translate-x-1 transition-transform">
                          <span>View Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <span className="text-xs font-mono text-[#A39A8C]">
              ← Hover card to pause ticker • Click any card to explore full case study details →
            </span>
          </div>
        </div>
      ) : (
        /* VIEW MODE 2: RESPONSIVE GRID VIEW */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SELECTED_PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="bg-white rounded-2xl border border-[#DDD3C3] hover:border-[#E8551F] transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden cursor-pointer group"
              >
                {/* Top Tangerine Gradient Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#E8551F] to-[#F08A2C]" />

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{project.icon}</span>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B6256]">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#A39A8C]">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Metric */}
                  <div>
                    <div className="mb-2">
                      <span className="text-xs font-mono font-bold text-[#E8551F] bg-[#FBF8F3] px-2 py-0.5 rounded border border-[#EBE4D8]">
                        {project.metric} {project.metricLabel}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#1A1714] group-hover:text-[#E8551F] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#6B6256] mt-2 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Tags & Action Link */}
                  <div className="pt-4 border-t border-[#EBE4D8] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.tags.slice(0, 2).map((t) => (
                        <span key={t} className="text-[10px] font-mono bg-[#F3EEE6] px-2 py-0.5 rounded text-[#6B6256]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-[#E8551F] group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
};
