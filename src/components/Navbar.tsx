import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <nav className="w-full bg-white/5 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all">
              <span className="text-white font-bold text-sm">&lt;/&gt;</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              CodeClimb
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Link
              to="/dashboard"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive("/dashboard")
                  ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-white/20"
                  : "text-purple-200/70 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>
            <Link
              to="/create"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive("/create")
                  ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-white/20"
                  : "text-purple-200/70 hover:text-white hover:bg-white/5"
              }`}
            >
              Create Challenge
            </Link>
            <Link
              to="/profile"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive("/profile")
                  ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-white/20"
                  : "text-purple-200/70 hover:text-white hover:bg-white/5"
              }`}
            >
              Profile
            </Link>
          </div>

          {/* User Avatar */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-purple-500/20">
              U
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
