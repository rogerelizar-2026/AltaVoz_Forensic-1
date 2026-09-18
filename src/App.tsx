import { useState } from 'react';
import { AudioAnalyzer } from './components/AudioAnalyzer';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { Architecture } from './components/Architecture';
import { Roadmap } from './components/Roadmap';
import { CodeSnippets } from './components/CodeSnippets';
import { LibraryRecommendations } from './components/LibraryRecommendations';
import { ForensicChecklist } from './components/ForensicChecklist';
import { InstallationManual } from './components/InstallationManual';
import { UserGuide } from './components/UserGuide';

type MenuSection = 'analyzer' | 'summary' | 'architecture' | 'roadmap' | 'code' | 'libraries' | 'checklist' | 'installation' | 'userguide';

export default function App() {
  const [currentSection, setCurrentSection] = useState<MenuSection>('analyzer');
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 'analyzer' as MenuSection, label: '🎙️ Analisador de Áudio', section: 'principal' },
    { id: 'summary' as MenuSection, label: '📋 Resumo Executivo', section: 'documentacao' },
    { id: 'architecture' as MenuSection, label: '🏗️ Arquitetura', section: 'documentacao' },
    { id: 'roadmap' as MenuSection, label: '🗺️ Roadmap', section: 'documentacao' },
    { id: 'code' as MenuSection, label: '💻 Trechos de Código', section: 'documentacao' },
    { id: 'libraries' as MenuSection, label: '📦 Bibliotecas e Modelos', section: 'documentacao' },
    { id: 'checklist' as MenuSection, label: '✅ Checklist Forense', section: 'documentacao' },
    { id: 'installation' as MenuSection, label: '📥 Manual de Instalação', section: 'documentacao' },
    { id: 'userguide' as MenuSection, label: '📖 Guia do Usuário', section: 'documentacao' },
  ];

  const handleMenuSelect = (id: MenuSection) => {
    setCurrentSection(id);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header Compacto */}
      <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo e Título */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
                AF
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">AltaVoz Forensic-1</h1>
                <p className="text-xs text-gray-400">Sistema de Análise Forense de Áudio</p>
              </div>
            </div>

            {/* Menu Hamburguer */}
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <span className="text-xl">{menuOpen ? '✕' : '☰'}</span>
                <span className="text-sm hidden sm:inline">Menu</span>
              </button>

              {/* Dropdown Menu */}
              {menuOpen && (
                <>
                  {/* Overlay para fechar */}
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setMenuOpen(false)}
                  />
                  
                  {/* Menu Dropdown */}
                  <div className="absolute right-0 mt-2 w-72 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50 overflow-hidden">
                    {/* Seção Principal */}
                    <div className="border-b border-gray-700">
                      <div className="px-4 py-2 bg-emerald-900/20 text-emerald-400 text-xs font-semibold uppercase">
                        Sistema Principal
                      </div>
                      {menuItems
                        .filter(item => item.section === 'principal')
                        .map(item => (
                          <button
                            key={item.id}
                            onClick={() => handleMenuSelect(item.id)}
                            className={`w-full text-left px-4 py-3 hover:bg-gray-800 transition-colors ${
                              currentSection === item.id ? 'bg-emerald-900/30 text-emerald-400' : 'text-gray-200'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                    </div>

                    {/* Seção Documentação */}
                    <div>
                      <div className="px-4 py-2 bg-gray-800/50 text-gray-400 text-xs font-semibold uppercase">
                        Documentação Técnica
                      </div>
                      {menuItems
                        .filter(item => item.section === 'documentacao')
                        .map(item => (
                          <button
                            key={item.id}
                            onClick={() => handleMenuSelect(item.id)}
                            className={`w-full text-left px-4 py-3 hover:bg-gray-800 transition-colors text-sm ${
                              currentSection === item.id ? 'bg-gray-800 text-white' : 'text-gray-300'
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {currentSection === 'analyzer' && <AudioAnalyzer />}
        {currentSection === 'summary' && <ExecutiveSummary />}
        {currentSection === 'architecture' && <Architecture />}
        {currentSection === 'roadmap' && <Roadmap />}
        {currentSection === 'code' && <CodeSnippets />}
        {currentSection === 'libraries' && <LibraryRecommendations />}
        {currentSection === 'checklist' && <ForensicChecklist />}
        {currentSection === 'installation' && <InstallationManual />}
        {currentSection === 'userguide' && <UserGuide />}
      </main>

      {/* Footer Compacto */}
      <footer className="border-t border-gray-800 bg-gray-900/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>AltaVoz Forensic-1 • 100% Offline • Zero Egress</span>
            <span className="font-medium text-gray-400">by rogerelizar</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
