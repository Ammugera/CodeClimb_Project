import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const demoChallenge = {
  id: "demo-array-filter",
  title: "Find the Bug in the Array Filter",
  language: "JavaScript",
  difficulty: "Medium" as const,
  description: `You're working on a data processing pipeline that filters user records. The function below is supposed to filter out inactive users and return only users who have been active in the last 30 days. However, there's a bug causing it to return incorrect results.

Your task: Identify the bug and provide the fix.`,
  codeSnippet: `function filterActiveUsers(users) {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  const activeUsers = users.filter(user => {
    const lastActive = new Date(user.lastActiveDate);
    return lastActive > thirtyDaysAgo && user.isActive == true;
  });
  
  return activeUsers;
}

// Test data
const users = [
  { id: 1, name: "Alice", lastActiveDate: "2024-01-15", isActive: true },
  { id: 2, name: "Bob", lastActiveDate: "2024-01-10", isActive: "true" },
  { id: 3, name: "Charlie", lastActiveDate: "2023-12-01", isActive: true },
  { id: 4, name: "Diana", lastActiveDate: "2024-01-14", isActive: false }
];

console.log(filterActiveUsers(users));
// Expected: Only Alice should be returned
// Actual: Alice AND Bob are returned`,
  correctAnswer: "=== instead of ==",
  hints: [
    "Look at the comparison operators being used",
    "Check the data types of the isActive property in the test data",
    "JavaScript has both == and === operators - what's the difference?"
  ]
};

export default function ChallengeDemo() {
  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<{
    message: string;
    type: "success" | "error" | "info";
  } | null>(null);
  const [hasGivenUp, setHasGivenUp] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [revealedHints, setRevealedHints] = useState<number[]>([]);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    if (!userAnswer.trim()) {
      setFeedback({
        message: "Please enter an answer",
        type: "error",
      });
      return;
    }

    setAttempts(prev => prev + 1);

    const answer = userAnswer.toLowerCase().trim();
    const isCorrect = 
      answer.includes("===") ||
      answer.includes("strict equality") ||
      answer.includes("type coercion") ||
      answer.includes("triple equals");

    if (isCorrect) {
      setFeedback({
        message: "🎉 Correct! The bug is using == instead of === for comparison. The == operator performs type coercion, so \"true\" (string) == true evaluates to true, incorrectly including Bob in the results.",
        type: "success",
      });
    } else {
      setFeedback({
        message: "❌ Not quite right. Look more carefully at the comparison operators and data types.",
        type: "error",
      });
    }
  };

  const handleGiveUp = () => {
    setHasGivenUp(true);
    setFeedback({
      message: `💡 The bug is on line 7: using == instead of ===. The loose equality operator (==) performs type coercion, so "true" (string) == true evaluates to true. Bob's isActive is the string "true", not the boolean true, but == treats them as equal. The fix: change user.isActive == true to user.isActive === true`,
      type: "info",
    });
  };

  const revealHint = (index: number) => {
    if (!revealedHints.includes(index)) {
      setRevealedHints([...revealedHints, index]);
    }
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
      <div className="fixed top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-violet-400/15 to-fuchsia-400/15 rounded-full blur-2xl animate-pulse-glow" />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Challenge Header */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-40" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-xl shadow-lg shadow-orange-500/30">
                          🐛
                        </div>
                        <div>
                          <h1 className="text-2xl font-bold text-white">{demoChallenge.title}</h1>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="px-3 py-1 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border border-white/10 rounded-full text-xs text-cyan-300 font-medium">
                              {demoChallenge.language}
                            </span>
                            <span className={`px-3 py-1 bg-gradient-to-r ${difficultyColors[demoChallenge.difficulty]} rounded-full text-xs text-white font-medium shadow-lg`}>
                              {demoChallenge.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate("/dashboard")}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-purple-200/70 text-sm hover:bg-white/10 hover:text-white transition-all"
                    >
                      ← Back
                    </button>
                  </div>
                  
                  {/* Description */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <h3 className="text-sm font-semibold text-cyan-300 mb-2">📋 Challenge Description</h3>
                    <p className="text-purple-200/80 text-sm leading-relaxed whitespace-pre-line">
                      {demoChallenge.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Code Editor */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30" />
                <div className="relative bg-[#0d1117] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Editor Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
                      <span className="ml-3 text-xs text-gray-400 font-mono">filterUsers.js</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setShowOutput(!showOutput)}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                          showOutput 
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" 
                            : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {showOutput ? "Hide Output" : "Show Output"}
                      </button>
                    </div>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-6 overflow-x-auto max-h-[400px] overflow-y-auto">
                    <pre className="font-mono text-sm leading-relaxed">
                      {demoChallenge.codeSnippet.split('\n').map((line, index) => (
                        <div key={index} className="flex hover:bg-white/5 -mx-2 px-2 rounded">
                          <span className="w-8 text-gray-600 text-right mr-4 select-none font-mono">{index + 1}</span>
                          <span className={`${
                            line.includes('function') ? 'text-purple-400' :
                            line.includes('const') || line.includes('return') ? 'text-pink-400' :
                            line.includes('//') ? 'text-gray-500' :
                            line.includes('"') || line.includes("'") ? 'text-green-400' :
                            line.includes('true') || line.includes('false') ? 'text-orange-400' :
                            'text-gray-300'
                          }`}>{line || ' '}</span>
                        </div>
                      ))}
                    </pre>
                  </div>

                  {/* Output Panel */}
                  {showOutput && (
                    <div className="border-t border-white/10 bg-[#161b22] p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-400 font-mono">▶ Console Output</span>
                      </div>
                      <div className="bg-[#0d1117] rounded-lg p-3 font-mono text-sm">
                        <div className="text-yellow-400">[Object, Object]</div>
                        <div className="text-gray-400 text-xs mt-1">// Alice and Bob are returned (Bob shouldn't be!)</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Answer Input */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-lg" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                  <label className="block text-sm font-medium text-purple-200/80 mb-3">
                    🎯 What's the bug? Describe the issue and how to fix it.
                  </label>
                  <textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="w-full h-24 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all resize-none"
                    placeholder="Describe the bug and your solution..."
                    disabled={hasGivenUp || feedback?.type === "success"}
                  />
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-4">
                    <button
                      onClick={handleSubmit}
                      disabled={hasGivenUp || feedback?.type === "success"}
                      className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      <span>▶</span> Run & Submit
                    </button>
                    <button
                      onClick={handleGiveUp}
                      disabled={hasGivenUp || feedback?.type === "success"}
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
                    ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400/40" 
                    : feedback.type === "error"
                    ? "bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400/40"
                    : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-cyan-400/40"
                } p-6`}>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                      feedback.type === "success" ? "bg-green-500/30" : feedback.type === "error" ? "bg-red-500/30" : "bg-cyan-500/30"
                    }`}>
                      {feedback.type === "success" ? "🎉" : feedback.type === "error" ? "🤔" : "💡"}
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold mb-2 ${
                        feedback.type === "success" ? "text-green-300" : feedback.type === "error" ? "text-red-300" : "text-cyan-300"
                      }`}>
                        {feedback.type === "success" ? "Excellent Work!" : feedback.type === "error" ? "Not Quite..." : "Solution Revealed"}
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        feedback.type === "success" ? "text-green-200/80" : feedback.type === "error" ? "text-red-200/80" : "text-cyan-200/80"
                      }`}>
                        {feedback.message}
                      </p>
                      {feedback.type === "success" && (
                        <button
                          onClick={() => navigate("/dashboard")}
                          className="mt-4 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl hover:scale-105 transition-all shadow-lg shadow-green-500/30"
                        >
                          Next Challenge →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {!feedback && (
                <div className="border-2 border-dashed border-white/10 rounded-3xl p-8 text-center">
                  <div className="text-4xl mb-3">💬</div>
                  <p className="text-purple-300/50">Submit your answer to see feedback</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Progress Card */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-lg" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-xl">📊</span> Your Progress
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                      <span className="text-purple-200/70 text-sm">Attempts</span>
                      <span className="text-white font-bold text-lg">{attempts}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                      <span className="text-purple-200/70 text-sm">Time Spent</span>
                      <span className="text-cyan-400 font-mono font-bold text-lg">{formatTime(timeSpent)}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-purple-200/70">Completion</span>
                        <span className="text-white font-medium">{feedback?.type === "success" ? "100%" : "0%"}</span>
                      </div>
                      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-500 ${
                            feedback?.type === "success" ? "w-full" : "w-0"
                          }`} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hints Card */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-lg" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-xl">💡</span> Hints
                  </h3>
                  <div className="space-y-3">
                    {demoChallenge.hints.map((hint, index) => (
                      <button
                        key={index}
                        onClick={() => revealHint(index)}
                        className={`w-full p-4 rounded-xl text-left text-sm transition-all ${
                          revealedHints.includes(index)
                            ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-200"
                            : "bg-white/5 border border-white/10 text-purple-200/70 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {revealedHints.includes(index) ? (
                          <div>
                            <span className="text-yellow-400 font-medium">Hint {index + 1}:</span>
                            <p className="mt-1">{hint}</p>
                          </div>
                        ) : (
                          <span>🔒 Hint {index + 1} - Click to reveal</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Community Stats */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-lg" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-xl">🌍</span> Community Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl border border-white/10">
                      <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">1,247</p>
                      <p className="text-xs text-purple-200/50 mt-1">Solved</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-white/10">
                      <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">68%</p>
                      <p className="text-xs text-purple-200/50 mt-1">Success Rate</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-white/10">
                      <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">2:34</p>
                      <p className="text-xs text-purple-200/50 mt-1">Avg. Time</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl border border-white/10">
                      <p className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">4.8</p>
                      <p className="text-xs text-purple-200/50 mt-1">Rating</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Challenges */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-3xl blur-lg" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-xl">🎯</span> Related Challenges
                  </h3>
                  <div className="space-y-3">
                    {[
                      { title: "Type Coercion Trap", difficulty: "Easy" },
                      { title: "Async Array Methods", difficulty: "Hard" },
                      { title: "Object Reference Bug", difficulty: "Medium" },
                    ].map((challenge, index) => (
                      <button
                        key={index}
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-xl text-left hover:bg-white/10 transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm group-hover:text-cyan-300 transition-colors">{challenge.title}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            challenge.difficulty === "Easy" ? "bg-green-500/20 text-green-300" :
                            challenge.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-300" :
                            "bg-red-500/20 text-red-300"
                          }`}>
                            {challenge.difficulty}
                          </span>
                        </div>
                      </button>
                    ))}
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
