import { SelectHTMLAttributes, forwardRef } from "react";

interface GlassSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const GlassSelect = forwardRef<HTMLSelectElement, GlassSelectProps>(
  ({ label, error, options, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-purple-200/80 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all appearance-none cursor-pointer ${
              error ? "border-red-400/50 focus:ring-red-400/50" : ""
            } ${className}`}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-purple-900">
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
            </svg>
          </div>
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

GlassSelect.displayName = "GlassSelect";

export default GlassSelect;
