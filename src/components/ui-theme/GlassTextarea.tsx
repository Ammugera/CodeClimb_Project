import { TextareaHTMLAttributes, forwardRef } from "react";

interface GlassTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const GlassTextarea = forwardRef<HTMLTextAreaElement, GlassTextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-purple-200/80 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-purple-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all resize-none ${
            error ? "border-red-400/50 focus:ring-red-400/50" : ""
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

GlassTextarea.displayName = "GlassTextarea";

export default GlassTextarea;
