import { ReactNode } from "react";

interface PageBackgroundProps {
  children: ReactNode;
}

export default function PageBackground({ children }: PageBackgroundProps) {
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
        {children}
      </div>
    </div>
  );
}
