import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: "cyan" | "purple" | "pink" | "green" | "yellow";
}

const glowColors = {
  cyan: "from-cyan-500/30 via-purple-500/30 to-pink-500/30",
  purple: "from-purple-500/30 via-pink-500/30 to-purple-500/30",
  pink: "from-pink-500/30 via-purple-500/30 to-pink-500/30",
  green: "from-green-500/30 via-emerald-500/30 to-green-500/30",
  yellow: "from-yellow-500/30 via-orange-500/30 to-yellow-500/30",
};

export default function GlassCard({ 
  children, 
  className = "", 
  glow = false,
  glowColor = "cyan" 
}: GlassCardProps) {
  return (
    <div className="relative">
      {glow && (
        <div className={`absolute -inset-1 bg-gradient-to-r ${glowColors[glowColor]} rounded-3xl blur-lg`} />
      )}
      <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl ${className}`}>
        {children}
      </div>
    </div>
  );
}
