import { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { codeSnippets } from '../data/codeSnippets';

export function CodeSnippets() {
  const [activeSnippet, setActiveSnippet] = useState(codeSnippets[0].id);
  const [copied, setCopied] = useState(false);

  const snippet = codeSnippets.find(s => s.id === activeSnippet) || codeSnippets[0];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pillars = [...new Set(codeSnippets.map(s => s.pillar))];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Code Snippets</h2>
        <p className="text-gray-400 text-sm">
          Critical implementation examples for each pillar. All code is TypeScript 5.x strict mode.
        </p>
      </div>

      {/* Pillar Filter */}
      <div className="flex flex-wrap gap-2">
        {codeSnippets.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSnippet(s.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeSnippet === s.id
                ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30'
                : 'text-gray-400 hover:text-gray-200 bg-gray-800/50 border border-gray-700/50'
            }`}
          >
            {s.title.split('—')[0].trim()}
          </button>
        ))}
      </div>

      {/* Snippet Detail */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-white">{snippet.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-0.5 rounded bg-gray-800 text-xs text-gray-400">{snippet.pillar}</span>
              <span className="px-2 py-0.5 rounded bg-gray-800 text-xs text-gray-400">{snippet.language}</span>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg bg-gray-800 text-gray-300 text-xs hover:bg-gray-700 transition-colors"
          >
            {copied ? '✓ Copied' : 'Copy'}
          </button>
        </div>

        <div className="p-4 border-b border-gray-800">
          <p className="text-sm text-gray-300">{snippet.description}</p>
        </div>

        <div className="overflow-x-auto">
          <Highlight theme={themes.nightOwl} code={snippet.code} language={snippet.language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={`${className} p-4 text-sm leading-relaxed`} style={{ ...style, background: 'transparent', margin: 0 }}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })} className="table-row">
                    <span className="table-cell pr-4 text-right text-gray-600 select-none w-10 text-xs">
                      {i + 1}
                    </span>
                    <span className="table-cell">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </span>
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>

      {/* All Snippets Index */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-semibold text-white">All Snippets Index</h3>
        </div>
        <div className="divide-y divide-gray-800">
          {codeSnippets.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSnippet(s.id)}
              className={`w-full text-left p-4 hover:bg-gray-800/50 transition-colors ${
                activeSnippet === s.id ? 'bg-gray-800/30' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white">{s.title}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{s.description.slice(0, 100)}...</p>
                </div>
                <span className="px-2 py-0.5 rounded bg-gray-800 text-xs text-gray-400 whitespace-nowrap ml-4">
                  {s.pillar}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
