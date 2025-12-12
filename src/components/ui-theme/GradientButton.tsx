import { ReactNode, ButtonHTMLAttributes } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function GradientButton({ 
  children, 
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  disabled,
  ...props 
}: GradientButtonProps) {
  const baseStyles = "font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02]",
    secondary: "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.02]",
    outline: "bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/30",
    ghost: "bg-transparent text-purple-200/70 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
