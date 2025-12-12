import Navbar from "@/components/Navbar";
import ChallengeCard from "@/components/ChallengeCard";
import { mockChallenges } from "@/data/mockChallenges";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  
  const stats = [
    { label: "Challenges Solved", value: "12", icon: "✓", gradient: "from-green-400 to-emerald-500" },
    { label: "Current Streak", value: "5 days", icon: "🔥", gradient: "from-orange-400 to-red-500" },
    { label: "Total Points", value: "2,450", icon: "⭐", gradient: "from-yellow-400 to-amber-500" },
    { label: "Rank", value: "#42", icon: "🏆", gradient: "from-purple-400 to-pink-500" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 animate-gradient" />
      
      {/* Floating Shapes */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="fixed top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-violet-400/15 to-fuchsia-400/15 rounded-full blur-2xl animate-pulse-glow" />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Welcome Section */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Developer</span>
            </h1>
            <p className="text-purple-200/70">Ready to level up your coding skills?</p>
          </div>

          {/* Featured Challenge Banner */}
          <div className="relative mb-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-3xl blur-lg opacity-50" />
            <div className="relative bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl shadow-lg shadow-orange-500/30">
                    🐛
                  </div>
                  <div>
                    <span className="text-xs text-yellow-300 font-semibold uppercase tracking-wider">Featured Challenge</span>
                    <h3 className="text-xl font-bold text-white">Find the Bug in the Array Filter</h3>
                    <p className="text-yellow-200/70 text-sm">A polished demo challenge with hints, progress tracking, and more!</p>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/challenge-demo")}
                  className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all whitespace-nowrap"
                >
                  Try Demo Challenge →
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-lg shadow-lg`}>
                      {stat.icon}
                    </div>
                    <span className="text-purple-200/60 text-sm">{stat.label}</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Challenges Section */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Available Challenges</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-purple-200/70 hover:bg-white/10 hover:text-white transition-all">
                All
              </button>
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-purple-200/70 hover:bg-white/10 hover:text-white transition-all">
                Easy
              </button>
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-purple-200/70 hover:bg-white/10 hover:text-white transition-all">
                Medium
              </button>
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-purple-200/70 hover:bg-white/10 hover:text-white transition-all">
                Hard
              </button>
            </div>
          </div>

          {/* Challenge Cards */}
          <div className="space-y-4">
            {mockChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
