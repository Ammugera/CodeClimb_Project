import { Challenge } from "@/types/challenge";
import { useNavigate } from "react-router-dom";

interface ChallengeCardProps {
  challenge: Challenge;
}

const difficultyColors = {
  Easy: "from-green-400 to-emerald-500",
  Medium: "from-yellow-400 to-orange-500",
  Hard: "from-red-400 to-pink-500",
};

const languageIcons: Record<string, string> = {
  JavaScript: "JS",
  TypeScript: "TS",
  Python: "PY",
  Java: "JV",
  "C++": "C+",
};

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  const navigate = useNavigate();

  return (
    <div className="group relative">
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Card */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            {/* Language Badge */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-purple-500/20">
                {languageIcons[challenge.language] || challenge.language.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-200 transition-colors">
                  {challenge.title}
                </h3>
                <p className="text-sm text-purple-300/60">{challenge.language}</p>
              </div>
            </div>
            
            {/* Difficulty Badge */}
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${difficultyColors[challenge.difficulty]} text-white shadow-lg`}>
                {challenge.difficulty}
              </span>
            </div>
          </div>
          
          {/* Solve Button */}
          <button
            onClick={() => navigate(`/solve/${challenge.id}`)}
            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
          >
            Solve Now
          </button>
        </div>
      </div>
    </div>
  );
}
