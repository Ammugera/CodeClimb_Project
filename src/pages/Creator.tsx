import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Language, Difficulty } from "@/types/challenge";

export default function Creator() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    language: "JavaScript" as Language,
    codeSnippet: "",
    correctAnswer: "",
  });
  const [difficulty, setDifficulty] = useState<Difficulty>("Easy");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a challenge title");
      return;
    }
    if (!formData.codeSnippet.trim()) {
      alert("Please paste a code snippet");
      return;
    }
    if (!formData.correctAnswer.trim()) {
      alert("Please enter the correct answer");
      return;
    }

    console.log("Publishing challenge:", { ...formData, difficulty });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 animate-gradient" />
      
      {/* Floating Shapes */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="max-w-2xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Create New Challenge</h1>
            <p className="text-purple-200/70">Share your coding puzzles with the community</p>
          </div>
          
          {/* Form Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Challenge Title */}
                <div>
                  <label className="block text-sm font-medium text-purple-200/80 mb-2">
                    Challenge Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all"
                    placeholder="Enter challenge title..."
                  />
                </div>

                {/* Language & Difficulty Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-200/80 mb-2">
                      Language
                    </label>
                    <div className="relative">
                      <select
                        value={formData.language}
                        onChange={(e) =>
                          setFormData({ ...formData, language: e.target.value as Language })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all appearance-none cursor-pointer"
                      >
                        <option value="JavaScript" className="bg-purple-900">JavaScript</option>
                        <option value="TypeScript" className="bg-purple-900">TypeScript</option>
                        <option value="Python" className="bg-purple-900">Python</option>
                        <option value="Java" className="bg-purple-900">Java</option>
                        <option value="C++" className="bg-purple-900">C++</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-200/80 mb-2">
                      Difficulty
                    </label>
                    <div className="relative">
                      <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all appearance-none cursor-pointer"
                      >
                        <option value="Easy" className="bg-purple-900">Easy</option>
                        <option value="Medium" className="bg-purple-900">Medium</option>
                        <option value="Hard" className="bg-purple-900">Hard</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Snippet */}
                <div>
                  <label className="block text-sm font-medium text-purple-200/80 mb-2">
                    Code Snippet
                  </label>
                  <div className="relative">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 rounded-t-xl border-b border-white/10 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                      <div className="w-3 h-3 rounded-full bg-green-400/60" />
                      <span className="ml-2 text-xs text-purple-300/50">code.{formData.language.toLowerCase()}</span>
                    </div>
                    <textarea
                      value={formData.codeSnippet}
                      onChange={(e) =>
                        setFormData({ ...formData, codeSnippet: e.target.value })
                      }
                      className="w-full h-56 pt-14 px-4 pb-4 bg-white/5 border border-white/10 rounded-xl text-cyan-300 font-mono text-sm placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all resize-none"
                      placeholder="// Paste your buggy code here..."
                    />
                  </div>
                </div>

                {/* Correct Answer */}
                <div>
                  <label className="block text-sm font-medium text-purple-200/80 mb-2">
                    Correct Answer
                  </label>
                  <input
                    type="text"
                    value={formData.correctAnswer}
                    onChange={(e) =>
                      setFormData({ ...formData, correctAnswer: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all"
                    placeholder="Enter the correct answer..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300"
                >
                  Publish Challenge
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
