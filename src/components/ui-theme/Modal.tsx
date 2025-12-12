import { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
};

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children,
  size = "md" 
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full ${sizes[size]}`}>
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-50" />
        <div className="relative bg-[#1a1a2e]/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-purple-200/70 hover:bg-white/10 hover:text-white transition-all"
              >
                ✕
              </button>
            </div>
          )}
          
          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
