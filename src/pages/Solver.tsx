import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { mockChallenges } from "@/data/mockChallenges";

export default function Solver() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const challenge = mockChallenges.find((c) => c.id === id);

  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const [hasGivenUp, setHasGivenUp] = useState(false);

  if (!challenge) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800" />
        <div className="relative z-10">
          <Navbar />
          <div className="max-w-4xl mx-auto px-6 py-12 text-center">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-white text-xl mb-6">Challenge not found</p>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = () => {
    if (!userAnswer.trim()) {
      setFeedback({
        message: "Please enter an answer",
        type: "error",
      });
      return;
    }

    const isCorrect = challenge.correctAnswer
      .toLowerCase()
      .includes(userAnswer.toLowerCase().trim()) ||
      userAnswer.toLowerCase().trim().includes(challenge.correctAnswer.toLowerCase());

    if (isCorrect) {
      setFeedback({
        message: "🎉 Correct! Well done!",
        type: "success",
      });
    } else {
      setFeedback({
        message: "❌ Incorrect. Try again or give up to see the answer.",
        type: "error",
      });
    }
  };

  const handleGiveUp = () => {
    setHasGivenUp(true);
    setFeedback({
      message: `💡 The correct answer is: ${challenge.correctAnswer}`,
      type: "info",
    });
  };

  const difficultyColors = {
    Easy: "from-green-400 to-emerald-500",
    Medium: "from-yellow-400 to-orange-500",
    Hard: "from-red-400 to-pink-500",
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
        
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content - Code Editor */}
            <div className="lg:col-span-2 space-y-6">
              {/* Challenge Header */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-lg" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold text-white mb-2">{challenge.title}</h1>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border border-white/10 rounded-full text-xs text-cyan-300">
                          {challenge.language}
                        </span>
                        <span className={`px-3 py-1 bg-gradient-to-r ${difficultyColors[challenge.difficulty]} rounded-full text-xs text-white font-medium`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate("/dashboard")}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-purple-200/70 text-sm hover:bg-white/10 hover:text-white transition-all"
                    >
                      ← Back
                    </button>
                  </div>
                  <p className="text-purple-200/70 text-sm">
                    Find the bug in the code below and enter your solution.
                  </p>
                </div>
              </div>

              {/* Code Editor */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20" />
                <div className="relative bg-[#1a1a2e]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                  {/* Editor Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                      <span className="ml-3 text-xs text-purple-300/50">challenge.{challenge.language.toLowerCase()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-purple-300/50">Line numbers: ON</span>
                    </div>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-6 overflow-x-auto">
                    <pre className="font-mono text-sm leading-relaxed">
                      {challenge.codeSnippet.split('\n').map((line, index) => (
                        <div key={index} className="flex">
                          <span className="w-8 text-purple-400/40 text-right mr-4 select-none">{index + 1}</span>
                          <span className="text-cyan-300">{line}</span>
                        </div>
                      ))}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Answer Input */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-lg" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <label className="block text-sm font-medium text-purple-200/80 mb-3">
                    Enter your solution or line number
                  </label>
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all font-mono"
                    placeholder="Your answer..."
                    disabled={hasGivenUp}
                  />
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={handleSubmit}
                      disabled={hasGivenUp}
                      className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      Submit Answer
                    </button>
                    <button
                      onClick={handleGiveUp}
                      disabled={hasGivenUp}
                      className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Give Up
                    </button>
                  </div>
                </div>
              </div>

              {/* Feedback Zone */}
              {feedback && (
                <div className={`relative rounded-3xl overflow-hidden ${
                  feedback.type === "success" 
                    ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30" 
                    : feedback.type === "error"
                    ? "bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30"
                    : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-400/30"
                } p-6`}>
                  <p className={`text-lg font-medium ${
                    feedback.type === "success" ? "text-green-300" : feedback.type === "error" ? "text-red-300" : "text-cyan-300"
                  }`}>
                    {feedback.message}
                  </p>
                  {feedback.type === "success" && (
                    <button
                      onClick={() => navigate("/dashboard")}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:scale-105 transition-all"
                    >
                      Next Challenge →
                    </button>
                  )}
                </div>
              )}

              {!feedback && (
                <div className="border-2 border-dashed border-white/10 rounded-3xl p-6 text-center">
                  <p className="text-purple-300/50">💬 Feedback will appear here</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Card */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-lg" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Challenge Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-purple-200/70">Attempts</span>
                        <span className="text-white font-medium">0</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-purple-200/70">Time Spent</span>
                        <span className="text-white font-medium">0:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hints Card */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-lg" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">💡 Hints</h3>
                  <div className="space-y-3">
                    <button className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-left text-purple-200/70 text-sm hover:bg-white/10 hover:text-white transition-all">
                      Hint 1 - Click to reveal
                    </button>
                    <button className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-left text-purple-200/70 text-sm hover:bg-white/10 hover:text-white transition-all">
                      Hint 2 - Click to reveal
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-lg" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">📊 Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <p className="text-2xl font-bold text-cyan-400">156</p>
                      <p className="text-xs text-purple-200/50">Solved</p>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <p className="text-2xl font-bold text-purple-400">72%</p>
                      <p className="text-xs text-purple-200/50">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
