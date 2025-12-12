interface CodeEditorProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  showOutput?: boolean;
  output?: string;
}

export default function CodeEditor({ 
  code, 
  language = "javascript",
  filename = "code.js",
  showLineNumbers = true,
  showOutput = false,
  output
}: CodeEditorProps) {
  const highlightLine = (line: string) => {
    if (line.includes('function') || line.includes('const') || line.includes('let') || line.includes('var') || line.includes('return')) {
      return 'text-pink-400';
    }
    if (line.includes('//')) {
      return 'text-gray-500';
    }
    if (line.includes('"') || line.includes("'") || line.includes('`')) {
      return 'text-green-400';
    }
    if (line.includes('true') || line.includes('false') || line.includes('null') || line.includes('undefined')) {
      return 'text-orange-400';
    }
    return 'text-gray-300';
  };

  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20" />
      <div className="relative bg-[#0d1117] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        {/* Editor Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
            <span className="ml-3 text-xs text-gray-400 font-mono">{filename}</span>
          </div>
          <span className="text-xs text-gray-500 uppercase">{language}</span>
        </div>
        
        {/* Code Content */}
        <div className="p-6 overflow-x-auto max-h-[400px] overflow-y-auto">
          <pre className="font-mono text-sm leading-relaxed">
            {code.split('\n').map((line, index) => (
              <div key={index} className="flex hover:bg-white/5 -mx-2 px-2 rounded">
                {showLineNumbers && (
                  <span className="w-8 text-gray-600 text-right mr-4 select-none font-mono">
                    {index + 1}
                  </span>
                )}
                <span className={highlightLine(line)}>{line || ' '}</span>
              </div>
            ))}
          </pre>
        </div>

        {/* Output Panel */}
        {showOutput && output && (
          <div className="border-t border-white/10 bg-[#161b22] p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 font-mono">▶ Console Output</span>
            </div>
            <div className="bg-[#0d1117] rounded-lg p-3 font-mono text-sm text-yellow-400">
              {output}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
