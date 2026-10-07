'use client';

import React, { useState, useEffect } from 'react';
import {
  FileText,
  Scale,
  ShieldCheck,
  Zap,
  Search,
  CheckCircle2,
  Cpu,
  Lock,
  EyeOff,
  RefreshCw,
  Sliders,
  Terminal,
  BookOpen,
  Eye,
  AlertTriangle,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

interface DocumentFile {
  name: string;
  size: string;
  status: 'pending' | 'stamped';
  pages: number;
  batesRange?: string;
  hash: string;
}

export function StripeInteractiveShowcase() {
  // 1. Bates Stamper State
  const [batesPrefix, setBatesPrefix] = useState('EX');
  const [batesStart, setBatesStart] = useState(1001);
  const [isStamping, setIsStamping] = useState(false);
  const [stampedDocuments, setStampedDocuments] = useState<DocumentFile[]>([
    { name: 'plaintiff_complaint.pdf', size: '2.4 MB', status: 'pending', pages: 12, hash: 'sha256:8f3c2d...' },
    { name: 'contract_of_sale.pdf', size: '4.8 MB', status: 'pending', pages: 28, hash: 'sha256:4a9c1e...' },
    { name: 'medical_record_log.pdf', size: '1.2 MB', status: 'pending', pages: 8, hash: 'sha256:7b2e1f...' },
  ]);

  // 2. US Court Jurisdiction Adapter State
  const [jurisdiction, setJurisdiction] = useState<'sdny' | 'cdcal' | 'del_chancery'>('sdny');

  // 3. Zero-Hallucination Transcript Search State
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [searchResponse, setSearchResponse] = useState<{
    quote: string;
    page: number;
    line: number;
    witness: string;
    confidence: number;
    grounded: boolean;
  } | null>(null);

  // 4. Multi-Provider Failover State
  const [activeEngine, setActiveEngine] = useState<'openai' | 'gemini'>('openai');
  const [failoverRunning, setFailoverRunning] = useState(false);

  // 5. Rule 5.2 Redaction State
  const [isRedacting, setIsRedacting] = useState(true);
  const [redactStats, setRedactStats] = useState({ ssn: 1, phone: 1, email: 0 });

  // 6. Interactive Nix Package Shell State
  const [nixRuby, setNixRuby] = useState(true);
  const [nixPostgres, setNixPostgres] = useState(true);
  const [nixGraphicsMagick, setNixGraphicsMagick] = useState(true);
  const [nixPoppler, setNixPoppler] = useState(false);

  const handleRunStamping = () => {
    setIsStamping(true);
    setTimeout(() => {
      let currentBates = batesStart;
      setStampedDocuments((prev) =>
        prev.map((doc) => {
          const docStart = currentBates;
          const docEnd = currentBates + doc.pages - 1;
          const padStart = String(docStart).padStart(6, '0');
          const padEnd = String(docEnd).padStart(6, '0');
          currentBates = docEnd + 1;
          return {
            ...doc,
            status: 'stamped',
            batesRange: `${batesPrefix}-${padStart} to ${batesPrefix}-${padEnd}`,
          };
        })
      );
      setIsStamping(false);
    }, 1200);
  };

  const handleResetStamping = () => {
    setStampedDocuments((prev) => prev.map((doc) => ({ ...doc, status: 'pending', batesRange: undefined })));
  };

  const handleQueryTranscript = (qType: 'contract' | 'knowledge') => {
    setActiveQuestion(qType);
    if (qType === 'contract') {
      setSearchResponse({
        witness: 'Richard Roe (Acme CEO)',
        quote: "Yes, I signed the contract on March 12, 2024, but we had a verbal agreement to defer execution of Section 4.2.",
        page: 42,
        line: 14,
        confidence: 99.98,
        grounded: true,
      });
    } else {
      setSearchResponse({
        witness: 'Richard Roe (Acme CEO)',
        quote: "We scanned the logs on March 15 and discovered the anomalous prompt payload, but decided it wasn't a PII threat.",
        page: 84,
        line: 22,
        confidence: 99.94,
        grounded: true,
      });
    }
  };

  const handleTriggerFailover = () => {
    setFailoverRunning(true);
    setTimeout(() => {
      setActiveEngine((prev) => (prev === 'openai' ? 'gemini' : 'openai'));
      setFailoverRunning(false);
    }, 800);
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--color-border)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#533AFD]/20 bg-[#533AFD]/8 px-3 py-1 text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Adapting for the US Litigation Market</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-tight">
            Adapting eBrief Ready for US Courtrooms.{' '}
            <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
              Fully interactive US-compliant workflows engineered to address document volume, security, and strict local rules.
            </span>
          </h2>
        </div>

        {/* 6-Card Interactive Legal Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Card 1: Interactive Bates Stamper & Exhibit Auto-Indexer */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Filing &amp; Bundling Operations
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <FileText className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Bates stamping &amp; exhibit indexer
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Automatically compiles litigation briefs, registers SHA-256 integrity hashes, and applies sequential Bates stamps.
              </p>
            </div>

            {/* Interactive Section */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                <div>
                  <label className="text-[9px] text-[var(--color-text-muted)]">Bates Prefix</label>
                  <input
                    type="text"
                    value={batesPrefix}
                    onChange={(e) => setBatesPrefix(e.target.value.toUpperCase())}
                    className="w-full mt-0.5 bg-[var(--color-panel-subtle)] border border-[var(--color-border)] rounded px-1.5 py-0.5 text-[var(--color-text-primary)]"
                  />
                </div>
                <div>
                  <label className="text-[9px] text-[var(--color-text-muted)]">Starting Number</label>
                  <input
                    type="number"
                    value={batesStart}
                    onChange={(e) => setBatesStart(parseInt(e.target.value) || 1)}
                    className="w-full mt-0.5 bg-[var(--color-panel-subtle)] border border-[var(--color-border)] rounded px-1.5 py-0.5 text-[var(--color-text-primary)]"
                  />
                </div>
              </div>

              <div className="space-y-1 rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)] p-2.5">
                {stampedDocuments.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between text-[10px] font-mono">
                    <span className="truncate max-w-[120px] text-[var(--color-text-primary)]">{doc.name}</span>
                    {doc.status === 'stamped' ? (
                      <span className="text-emerald-500 font-semibold">{doc.batesRange}</span>
                    ) : (
                      <span className="text-[var(--color-text-muted)]">Pending</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handleRunStamping}
                  disabled={isStamping}
                  className="flex-1 rounded-[4px] bg-[#533AFD] text-white py-1 px-3 text-[10px] font-semibold hover:bg-[#432ec4] transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  {isStamping ? (
                    <>
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Stamping...
                    </>
                  ) : (
                    'Stamp Exhibits'
                  )}
                </button>
                <button
                  onClick={handleResetStamping}
                  className="rounded-[4px] border border-[var(--color-border)] bg-[var(--color-surface)] py-1 px-2 text-[10px] text-[var(--color-text-primary)] hover:bg-[var(--color-panel-subtle)] cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: US Court Jurisdictions Adapter */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Jurisdictional Compliance
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Scale className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                US jurisdiction compliance adapter
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Adapts court filings to match exact local formatting rules, file-size limits, and PACER/ECF indexing requirements.
              </p>
            </div>

            {/* Interactive Section */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex rounded-md bg-[var(--color-panel-subtle)] p-0.5 border border-[var(--color-border)]">
                <button
                  onClick={() => setJurisdiction('sdny')}
                  className={`flex-1 rounded-[4px] py-1 text-[9px] font-semibold transition-all cursor-pointer ${
                    jurisdiction === 'sdny' ? 'bg-white dark:bg-[#1E293B] text-[var(--color-text-primary)] shadow-2xs' : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  S.D.N.Y. Federal
                </button>
                <button
                  onClick={() => setJurisdiction('cdcal')}
                  className={`flex-1 rounded-[4px] py-1 text-[9px] font-semibold transition-all cursor-pointer ${
                    jurisdiction === 'cdcal' ? 'bg-white dark:bg-[#1E293B] text-[var(--color-text-primary)] shadow-2xs' : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  C.D. Cal.
                </button>
                <button
                  onClick={() => setJurisdiction('del_chancery')}
                  className={`flex-1 rounded-[4px] py-1 text-[9px] font-semibold transition-all cursor-pointer ${
                    jurisdiction === 'del_chancery' ? 'bg-white dark:bg-[#1E293B] text-[var(--color-text-primary)] shadow-2xs' : 'text-[var(--color-text-muted)]'
                  }`}
                >
                  Del. Chancery
                </button>
              </div>

              <div className="rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)] p-3 space-y-1.5 text-[10px] font-mono text-[var(--color-text-primary)]">
                {jurisdiction === 'sdny' && (
                  <>
                    <div className="flex justify-between border-b border-[var(--color-border)]/50 pb-1">
                      <span className="text-[var(--color-text-muted)]">Max Document Size:</span>
                      <span className="font-semibold text-[#533AFD]">100 MB</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--color-border)]/50 pb-1">
                      <span className="text-[var(--color-text-muted)]">Redaction Mandate:</span>
                      <span className="font-semibold text-emerald-500">FRCP Rule 5.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--color-text-muted)]">PACER Metadata Index:</span>
                      <span className="font-semibold text-sky-500">Auto-generated XML</span>
                    </div>
                  </>
                )}
                {jurisdiction === 'cdcal' && (
                  <>
                    <div className="flex justify-between border-b border-[var(--color-border)]/50 pb-1">
                      <span className="text-[var(--color-text-muted)]">Max Document Size:</span>
                      <span className="font-semibold text-[#533AFD]">50 MB</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--color-border)]/50 pb-1">
                      <span className="text-[var(--color-text-muted)]">Archival Format:</span>
                      <span className="font-semibold text-emerald-500">PDF/A-1b Compliant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text(--color-text-muted)">State Cover Sheet:</span>
                      <span className="font-semibold text-sky-500">CIV-100 Auto-fill</span>
                    </div>
                  </>
                )}
                {jurisdiction === 'del_chancery' && (
                  <>
                    <div className="flex justify-between border-b border-[var(--color-border)]/50 pb-1">
                      <span className="text-[var(--color-text-muted)]">Rule Style:</span>
                      <span className="font-semibold text-[#533AFD]">Court of Chancery Rules</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--color-border)]/50 pb-1">
                      <span className="text-[var(--color-text-muted)]">Public Accessibility:</span>
                      <span className="font-semibold text-amber-500">Rule 5.1 Confidential</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--color-text-muted)]">Docket Synchronization:</span>
                      <span className="font-semibold text-sky-500">File & ServeXpress</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Card 3: Zero-Hallucination Deposition QA Engine */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Zero-Hallucination AI
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Search className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Deposition transcript RAG engine
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Queries volumes of raw depositions, returning citations locked to specific Pages &amp; Lines, preventing any AI hallucination.
              </p>
            </div>

            {/* Interactive Section */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2">
              <div className="text-[9px] font-mono text-[var(--color-text-muted)]">Query Witness Deposition Transcript:</div>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  onClick={() => handleQueryTranscript('contract')}
                  className={`px-2 py-1 rounded border text-[9px] font-mono text-left truncate cursor-pointer hover:bg-[var(--color-panel-subtle)] transition-all ${
                    activeQuestion === 'contract' ? 'border-[#533AFD] bg-[#533AFD]/5 text-[#533AFD]' : 'border-[var(--color-border)] text-[var(--color-text-secondary)]'
                  }`}
                >
                  "Did you sign on Mar 12?"
                </button>
                <button
                  onClick={() => handleQueryTranscript('knowledge')}
                  className={`px-2 py-1 rounded border text-[9px] font-mono text-left truncate cursor-pointer hover:bg-[var(--color-panel-subtle)] transition-all ${
                    activeQuestion === 'knowledge' ? 'border-[#533AFD] bg-[#533AFD]/5 text-[#533AFD]' : 'border-[var(--color-border)] text-[var(--color-text-secondary)]'
                  }`}
                >
                  "Were you aware of the logs?"
                </button>
              </div>

              {searchResponse ? (
                <div className="rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)] p-2.5 space-y-1">
                  <div className="flex items-center justify-between text-[8px] font-mono text-emerald-500 font-semibold">
                    <span>CITED RESPONSE • {searchResponse.confidence}% grounded</span>
                    <span className="bg-emerald-50 dark:bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                      Page {searchResponse.page}, Line {searchResponse.line}
                    </span>
                  </div>
                  <p className="text-[10px] italic leading-tight text-[var(--color-text-primary)]">
                    "{searchResponse.quote}"
                  </p>
                  <div className="text-[8px] font-mono text-[var(--color-text-muted)]">
                    Witness: {searchResponse.witness}
                  </div>
                </div>
              ) : (
                <div className="h-16 flex items-center justify-center rounded-lg border border-dashed border-[var(--color-border)] text-[10px] font-mono text-[var(--color-text-muted)]">
                  Click a question above to test RAG accuracy
                </div>
              )}
            </div>
          </div>

          {/* Card 4: Inline LLM Prompt Firewall & Guard */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Litigation Safety &amp; SecOps
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Lock className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Active NIST RMF prompt firewall
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Intercepts prompt injection jailbreaks embedded in legal attachments, isolating malicious instructions before exposing models.
              </p>
            </div>

            {/* Interactive Section */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-[var(--color-text-primary)] font-semibold">LLM Security Shield:</span>
                <button
                  onClick={() => setIsRedacting(!isRedacting)}
                  className={`text-[9px] font-mono px-2 py-0.5 rounded-full border transition-all cursor-pointer ${
                    isRedacting
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-[#057A55] dark:text-emerald-400 font-semibold'
                      : 'bg-red-50 dark:bg-red-950/40 border-red-300 text-red-600 dark:text-red-400 font-semibold'
                  }`}
                >
                  {isRedacting ? 'Active Shield (Rule 5.2)' : 'Shield Disabled'}
                </button>
              </div>

              <div className="rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)] p-2.5 font-mono text-[9px] space-y-1.5">
                <div className="text-[var(--color-text-muted)]">Filing Brief Segment:</div>
                <div className="p-1.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] break-all leading-normal">
                  "Plaintiff Jane Doe (SSN:{' '}
                  {isRedacting ? (
                    <span className="bg-[#533AFD]/15 text-[#533AFD] px-1 rounded font-bold">***-**-****</span>
                  ) : (
                    <span className="bg-red-100 text-red-600 px-1 rounded font-bold">442-99-1029</span>
                  )}
                  ) instructs the court..."
                </div>
                {isRedacting ? (
                  <div className="flex items-center gap-1 text-[8px] text-emerald-500 font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    Federal Rule 5.2 compliance active. Redacted SSN.
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-[8px] text-red-500 font-semibold animate-pulse">
                    <AlertTriangle className="w-3 h-3" />
                    CRITICAL WARNING: HIPAA/Rule 5.2 violation detected.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Card 5: Multi-Provider Failover & Telemetry Router */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Highly-Available Routing
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <RefreshCw className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Dual-provider failover routing
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Prevents third-party API downtime. Routes requests to OpenAI with seamless hot-failover to Gemini if latency exceeds 500ms.
              </p>
            </div>

            {/* Interactive Section */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-[var(--color-text-primary)]">Core Provider Ingress:</span>
                <span className="font-semibold text-[#533AFD] uppercase">{activeEngine}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center">
                <div className={`p-2 rounded-lg border font-mono text-[9px] ${
                  activeEngine === 'openai' ? 'border-[#533AFD] bg-[#533AFD]/5 text-[#533AFD]' : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
                }`}>
                  <div className="font-bold">GPT-4o-mini</div>
                  <div className="text-[8px] opacity-75">Primary • 82ms</div>
                </div>
                <div className={`p-2 rounded-lg border font-mono text-[9px] ${
                  activeEngine === 'gemini' ? 'border-emerald-500 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400' : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
                }`}>
                  <div className="font-bold">Gemini 2.5</div>
                  <div className="text-[8px] opacity-75">Fallback • 104ms</div>
                </div>
              </div>

              <button
                onClick={handleTriggerFailover}
                disabled={failoverRunning}
                className="w-full rounded-[4px] bg-[var(--color-panel-subtle)] border border-[var(--color-border)] text-[var(--color-text-primary)] py-1 text-[10px] font-semibold hover:bg-[var(--color-border)]/50 transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                {failoverRunning ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin text-[#533AFD]" />
                    <span>Routing Fallover Stream...</span>
                  </>
                ) : (
                  <span>Trigger Synthetic Rate Limit Failover</span>
                )}
              </button>
            </div>
          </div>

          {/* Card 6: Reproducible Nix Package Generator */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Reproducible Operations
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Terminal className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Reproducible Nix environment
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Toggle your required tech modules and compile a real-time, reproducible nix-shell setup ready for staging environments.
              </p>
            </div>

            {/* Interactive Section */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2.5">
              <div className="flex gap-1">
                <button
                  onClick={() => setNixRuby(!nixRuby)}
                  className={`flex-1 text-[8px] font-mono py-0.5 rounded border transition-all cursor-pointer ${
                    nixRuby ? 'border-[#533AFD] bg-[#533AFD]/5 text-[#533AFD]' : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
                  }`}
                >
                  Ruby 3.2
                </button>
                <button
                  onClick={() => setNixPostgres(!nixPostgres)}
                  className={`flex-1 text-[8px] font-mono py-0.5 rounded border transition-all cursor-pointer ${
                    nixPostgres ? 'border-[#533AFD] bg-[#533AFD]/5 text-[#533AFD]' : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
                  }`}
                >
                  PostgreSQL
                </button>
                <button
                  onClick={() => setNixGraphicsMagick(!nixGraphicsMagick)}
                  className={`flex-1 text-[8px] font-mono py-0.5 rounded border transition-all cursor-pointer ${
                    nixGraphicsMagick ? 'border-[#533AFD] bg-[#533AFD]/5 text-[#533AFD]' : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
                  }`}
                >
                  OCR Tools
                </button>
                <button
                  onClick={() => setNixPoppler(!nixPoppler)}
                  className={`flex-1 text-[8px] font-mono py-0.5 rounded border transition-all cursor-pointer ${
                    nixPoppler ? 'border-[#533AFD] bg-[#533AFD]/5 text-[#533AFD]' : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
                  }`}
                >
                  PDF Utilities
                </button>
              </div>

              <div className="rounded-lg bg-[#0F172A] border border-slate-800 p-2 text-white font-mono text-[8px] leading-tight space-y-1 relative">
                <div className="absolute right-2 top-2 text-[7px] text-slate-500">shell.nix</div>
                <div className="text-slate-500">{"{"} pkgs ? import &lt;nixpkgs&gt; {"{}"} {"}"}:</div>
                <div className="text-slate-500">pkgs.mkShell {"{"}</div>
                <div className="pl-3 text-slate-300">
                  buildInputs = [
                  {nixRuby && <span className="text-[#38BDF8] block pl-3">pkgs.ruby_3_2</span>}
                  {nixPostgres && <span className="text-[#38BDF8] block pl-3">pkgs.postgresql_15</span>}
                  {nixGraphicsMagick && <span className="text-[#38BDF8] block pl-3">pkgs.graphicsmagick</span>}
                  {nixPoppler && <span className="text-[#38BDF8] block pl-3">pkgs.poppler_utils</span>}
                  <span className="block">];</span>
                </div>
                <div className="text-slate-500">{"}"}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Section 6 Architecture Connectivity Graphic */}
        <div className="mt-14 rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 shadow-2xs relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="max-w-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#533AFD] dark:text-[#7A68FF] font-semibold mb-1">
                US Systems Orchestration &amp; Case Feeds
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Connect briefs directly to US Court Ingress APIs
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] opacity-85 mt-1.5 leading-relaxed">
                Automate document ingestions and case synchronizations across PACER (PACER/ECF feeds), county courthouse file shares, and local document Management Systems (DMS) with zero file loss and strict compliance auditing.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-[#533AFD]/8 text-[#533AFD] border border-[#533AFD]/20">
                <Zap className="w-3.5 h-3.5" />
                PACER Ingress Active
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-emerald-50 dark:bg-emerald-950/40 text-[#057A55] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                HIPAA Compliant Vault
              </span>
            </div>
          </div>

          {/* Visual Animated SVG Architecture Node Diagram */}
          <div className="w-full bg-[var(--color-panel-subtle)] rounded-[6px] border border-[var(--color-border)] p-6 sm:p-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 text-center font-mono">

              {/* Left Ingestion Sources */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  US federal PACER
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Secure SFTP / S3 Ingest
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Court Clerk Webhooks
                </div>
              </div>

              {/* Animated Conduits Left -> Center */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-slate-300 via-[#533AFD] to-[#533AFD] relative">
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#533AFD] animate-ping" />
                </div>
                <span className="text-[10px] text-[#533AFD] font-bold mt-1">mTLS Pipeline</span>
              </div>

              {/* Core Cockpit Engine (Center Node) */}
              <div className="p-5 rounded-[8px] bg-gradient-to-br from-[#0D1738] to-[#1E2954] text-white shadow-lg border border-[#533AFD]/40 space-y-2">
                <div className="inline-flex p-2 rounded-md bg-[#533AFD] text-white">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm tracking-tight">
                  {siteConfig.name.endsWith('Core') ? siteConfig.name : `${siteConfig.name} Core`}
                </div>
                <div className="text-[10px] text-slate-300">Deterministic OCR &amp; RAG Router</div>
                <div className="pt-1 flex items-center justify-center gap-1 text-[9px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  14.2ms P99
                </div>
              </div>

              {/* Animated Conduits Center -> Right */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-[#533AFD] via-[#057A55] to-emerald-400 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <span className="text-[10px] text-[#057A55] dark:text-emerald-400 font-bold mt-1">Event DLQ</span>
              </div>

              {/* Right Output Destinations */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Zero-Hallucination AI
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Inngest Sync Job
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  State Compliance Audit
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}