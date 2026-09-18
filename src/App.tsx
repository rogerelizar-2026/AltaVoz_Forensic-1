import { useState, useRef, useEffect } from 'react';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { Architecture } from './components/Architecture';
import { Roadmap } from './components/Roadmap';
import { CodeSnippets } from './components/CodeSnippets';
import { LibraryRecommendations } from './components/LibraryRecommendations';
import { ForensicChecklist } from './components/ForensicChecklist';
import { InstallationManual } from './components/InstallationManual';
import { UserGuide } from './components/UserGuide';
import { AudioAnalyzer } from './components/AudioAnalyzer';

type TabId = 'analyzer' | 'summary' | 'architecture' | 'roadmap' | 'code' | 'libraries' | 'checklist' | 'installation' | 'userguide';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('analyzer');

  const tabs = [
    { id: 'analyzer' as TabId, label: '🎙️ Analisador de Áudio', icon: '🎙️' },
    { id: 'summary' as TabId, label: '📋 Resumo', icon: '📋' },
    { id: 'architecture' as TabId, label: '🏗️ Arquitetura', icon: '🏗️' },
    { id: 'roadmap' as TabId, label: '🗺️ Roadmap', icon: '🗺️' },
    { id: 'code' as TabId, label: '💻 Código', icon: '💻' },
    { id: 'libraries' as TabId, label: '📦 Bibliotecas', icon: '📦' },
    { id: 'checklist' as TabId, label: '✅ Checklist', icon: '✅' },
    { id: 'installation' as TabId, label: '📥 Instalação', icon: '📥' },
    { id: 'userguide' as TabId, label: '📖 Guia', icon: '📖' },
  ];

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
              <p className="text-xs text-gray-400">Sistema Funcional de Análise Forense de Áudio</p>
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
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'analyzer' && <AudioAnalyzer />}
        {activeTab === 'summary' && <ExecutiveSummary />}
        {activeTab === 'architecture' && <Architecture />}
        {activeTab === 'roadmap' && <Roadmap />}
        {activeTab === 'code' && <CodeSnippets />}
        {activeTab === 'libraries' && <LibraryRecommendations />}
        {activeTab === 'checklist' && <ForensicChecklist />}
        {activeTab === 'installation' && <InstallationManual />}
        {activeTab === 'userguide' && <UserGuide />}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-400 font-medium">by rogerelizar</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
