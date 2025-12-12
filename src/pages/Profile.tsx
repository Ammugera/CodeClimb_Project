import Navbar from "@/components/Navbar";

export default function Profile() {
  const achievements = [
    { name: "First Blood", desc: "Solve your first challenge", icon: "🎯", unlocked: true },
    { name: "Streak Master", desc: "7 day solving streak", icon: "🔥", unlocked: true },
    { name: "Bug Hunter", desc: "Find 10 bugs", icon: "🐛", unlocked: false },
    { name: "Speed Demon", desc: "Solve in under 1 minute", icon: "⚡", unlocked: false },
  ];

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
        
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Profile Header */}
          <div className="relative mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-75" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-2xl">
                    D
                  </div>
                </div>
                
                {/* Info */}
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl font-bold text-white mb-1">Developer</h1>
                  <p className="text-purple-200/70 mb-3">developer@example.com</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 rounded-full text-xs text-cyan-300">
                      JavaScript Expert
                    </span>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 rounded-full text-xs text-purple-300">
                      Bug Hunter
                    </span>
                  </div>
                </div>

                {/* Edit Button */}
                <button className="px-5 py-2.5 bg-white/5 border border-white/20 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-all">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Challenges Solved", value: "12", gradient: "from-green-400 to-emerald-500" },
              { label: "Challenges Created", value: "3", gradient: "from-blue-400 to-cyan-500" },
              { label: "Total Points", value: "2,450", gradient: "from-yellow-400 to-orange-500" },
              { label: "Member Since", value: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }), gradient: "from-purple-400 to-pink-500" },
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all text-center">
                  <p className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </p>
                  <p className="text-purple-200/60 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-lg" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Achievements</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-2xl border text-center transition-all ${
                      achievement.unlocked
                        ? "bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border-white/20"
                        : "bg-white/5 border-white/5 opacity-50"
                    }`}
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <p className="text-white font-medium text-sm mb-1">{achievement.name}</p>
                    <p className="text-purple-200/50 text-xs">{achievement.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Settings Section */}
          <div className="mt-8 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-lg" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <p className="text-white font-medium">Email Notifications</p>
                    <p className="text-purple-200/50 text-sm">Receive updates about new challenges</p>
                  </div>
                  <div className="w-12 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <p className="text-white font-medium">Dark Mode</p>
                    <p className="text-purple-200/50 text-sm">Always enabled for that hacker vibe</p>
                  </div>
                  <div className="w-12 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg" />
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
