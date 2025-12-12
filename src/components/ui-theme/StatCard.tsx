interface StatCardProps {
  label: string;
  value: string | number;
  icon?: string;
  gradient?: string;
}

export default function StatCard({ 
  label, 
  value, 
  icon,
  gradient = "from-cyan-400 to-purple-500" 
}: StatCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all">
        <div className="flex items-center gap-3 mb-2">
          {icon && (
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-lg shadow-lg`}>
              {icon}
            </div>
          )}
          <span className="text-purple-200/60 text-sm">{label}</span>
        </div>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
