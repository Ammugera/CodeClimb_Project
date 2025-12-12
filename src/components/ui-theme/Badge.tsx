import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md";
}

const variants = {
  default: "bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border-white/10 text-cyan-300",
  success: "bg-gradient-to-r from-green-400 to-emerald-500 text-white",
  warning: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
  error: "bg-gradient-to-r from-red-400 to-pink-500 text-white",
  info: "bg-gradient-to-r from-blue-400 to-cyan-500 text-white",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export default function Badge({ 
  children, 
  variant = "default",
  size = "md" 
}: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full font-medium border ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}
