'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';
import { mediaConfig } from '@/config/media';
import { siteConfig } from '@/config/site';

export function EnterpriseMediaShowcase() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // 3 Fully Bespoke, Domain-Specific Editorial Architectural Pillars (Legal Tech focused)
  const architecturalPillars = [
    {
      id: 'pillar-video',
      tag: 'Async PDF OCR Ingest',
      title: 'Sub-40ms Page Tokenization & Layout OCR Engine',
      description: 'Replaced legacy document rendering bottlenecks with asynchronous multi-threaded PDF parsers and regional OCR caching, guaranteeing instant search for 500,000+ page exhibits.',
    },
    {
      id: 'pillar-iap',
      tag: 'PACER Docket Sync',
      title: 'Cryptographic Docket Sync & Court Event Ingestion',
      description: 'Synchronizes federal docket entries and local court clerk filings with idempotent Inngest event queues, eliminating duplicate exhibits, missing briefs, or out-of-order filing states.',
    },
    {
      id: 'pillar-ai',
      tag: 'Dual LLM Circuit Breaker',
      title: 'Secure Case Citation Guard & Fallback LLM Bank',
      description: 'OpenAI GPT-4o with a 500ms latency-triggered fallback circuit breaker to Google Gemini 2.5 and local semantic indexes, ensuring legal researchers get instant citation validation with zero server timeouts.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Part 1: Ambient High-Throughput Video Stage with High-Contrast Typography Scrim */}
        <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-black shadow-xl min-h-[420px] sm:min-h-[480px] flex items-end">
          {/* Looping Ambient HD Video with Dark Gradient Scrim */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              ref={videoRef}
              src={mediaConfig.ambientVideo.videoUrl}
              poster={mediaConfig.ambientVideo.posterUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000"
            />
            {/* Multi-Layer Deep Scrim to Ensure 100% Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* Foreground High-Contrast Controls & Copy */}
          <div className="relative z-10 w-full p-6 sm:p-10 flex flex-col justify-between gap-8">
            {/* Top Bar: Live Status & Controls */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/75 backdrop-blur-md px-3.5 py-1.5 text-xs font-mono text-white border border-white/20 shadow-lg">
                <span className="h-2 w-2 rounded-full bg-[#00D924] animate-pulse" />
                <span className="font-semibold tracking-wide" style={{ color: '#ffffff' }}>Live High-Throughput Node</span>
                <span className="text-white/40">|</span>
                <span className="text-slate-300" style={{ color: '#CBD5E1' }}>Edge PoP #904</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause ambient video" : "Play ambient video"}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white transition-all border border-white/20 shadow-md cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white transition-all border border-white/20 shadow-md cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                </button>
              </div>
            </div>

            {/* Bottom Content: Headline and Value Propositions */}
            <div className="max-w-2xl space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-[-0.02em] leading-tight" style={{ color: '#ffffff' }}>
                Secure, high-volume case file compilation at scale.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed" style={{ color: '#E2E8F0' }}>
                Leverage local 4-bit private models, deterministic document-binding parsers, and active court-access filters. Your US legal files remain completely private and HIPAA-compliant.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5" style={{ color: '#94A3B8' }}>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  NIST AI RMF 1.0 Compliant
                </span>
                <span className="flex items-center gap-1.5" style={{ color: '#94A3B8' }}>
                  <Zap className="w-4 h-4 text-sky-400" />
                  GraphQL API Integrations
                </span>
                <span className="flex items-center gap-1.5" style={{ color: '#94A3B8' }}>
                  <Activity className="w-4 h-4 text-purple-400" />
                  Multi-Jurisdictional Parsing
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: High-Density Showcase Columns */}
        <div className="space-y-8">
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-2xs flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">

            <div className="relative h-64 md:h-auto md:w-1/3 overflow-hidden bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mediaConfig.caseStudyPhoto.url}
                alt="Case compilation desk"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-2.5 py-1 rounded-[4px] bg-black/75 text-white backdrop-blur-md text-[10px] font-mono font-semibold border border-white/15">
                  Production Case Study
                </span>
                <span className="px-2.5 py-1 rounded-[4px] bg-[#533AFD]/90 text-white backdrop-blur-md text-[10px] font-mono font-semibold">
                  Sub-50ms P99 Latency
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 md:w-2/3">
              <div className="space-y-1 max-w-2xl">
                <div className="text-base sm:text-lg font-bold text-[var(--color-text-primary)]">
                  Enterprise Infrastructure Consolidation
                </div>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                  Eliminated legacy high-latency bottlenecks and server timeouts through regional AWS clusters and automated fallback circuit breakers.
                </p>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono text-[var(--color-text-secondary)] shrink-0 font-semibold">
                <div>
                  <div className="text-lg font-bold text-[var(--color-text-primary)]">99.999%</div>
                  <div className="text-[10px] opacity-75 font-normal">SLA Uptime</div>
                </div>
                <div className="h-8 w-[1px] bg-[var(--color-border)]" />
                <div>
                  <div className="text-lg font-bold text-[#533AFD] dark:text-[#7A68FF]">500K+</div>
                  <div className="text-[10px] opacity-75 font-normal">Pages Parsed</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Column Editorial Photography Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaConfig.editorialPhotos.map((photo, idx) => {
              const pillar = architecturalPillars[idx % architecturalPillars.length];

              return (
                <div
                  key={photo.id}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-[var(--color-panel-subtle)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.url}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 rounded-[4px] bg-[#0D1738]/90 text-white backdrop-blur-md text-[10px] font-mono font-semibold border border-white/15">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[#533AFD] dark:group-hover:text-[#7A68FF] transition-colors leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}