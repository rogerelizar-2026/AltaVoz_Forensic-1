import { useState } from 'react';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { Roadmap } from './components/Roadmap';
import { CodeSnippets } from './components/CodeSnippets';
import { LibraryRecommendations } from './components/LibraryRecommendations';
import { ForensicChecklist } from './components/ForensicChecklist';
import { Architecture } from './components/Architecture';

type TabId = 'summary' | 'architecture' | 'roadmap' | 'code' | 'libraries' | 'checklist';

const tabs: { id: TabId; label: string; icon: string }[] = [
  { id: 'summary', label: 'Executive Summary', icon: '📋' },
  { id: 'architecture', label: 'Architecture', icon: '🏗️' },
  { id: 'roadmap', label: 'Roadmap', icon: '🗺️' },
  { id: 'code', label: 'Code Snippets', icon: '💻' },
  { id: 'libraries', label: 'Libraries & Models', icon: '📦' },
  { id: 'checklist', label: 'Forensic Checklist', icon: '✅' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('summary');

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center font-bold text-white text-sm">
              AF
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">AltaVoz Forensic-1</h1>
              <p className="text-xs text-gray-400">Architecture & Implementation Reference — Court-Grade Audio Intelligence</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/50 sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div role="tabpanel" id={`panel-${activeTab}`} aria-labelledby={activeTab}>
          {activeTab === 'summary' && <ExecutiveSummary />}
          {activeTab === 'architecture' && <Architecture />}
          {activeTab === 'roadmap' && <Roadmap />}
          {activeTab === 'code' && <CodeSnippets />}
          {activeTab === 'libraries' && <LibraryRecommendations />}
          {activeTab === 'checklist' && <ForensicChecklist />}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              AltaVoz Forensic-1 — Zero-egress, offline-first, court-grade audio intelligence.
            </p>
            <div className="flex gap-4 text-xs text-gray-600">
              <span>TypeScript 5.x Strict</span>
              <span>•</span>
              <span>WebCrypto API</span>
              <span>•</span>
              <span>ONNX Runtime Web</span>
              <span>•</span>
              <span>whisper.cpp WASM</span>
            </div>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-amber-900/20 border border-amber-800/30">
            <p className="text-xs text-amber-300/80">
              <strong>Disclaimer:</strong> This document provides technical architecture guidance only. 
              Admissibility of digital evidence varies by jurisdiction. Legal review by qualified counsel 
              is required before deployment in any legal proceeding. This is not legal advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
