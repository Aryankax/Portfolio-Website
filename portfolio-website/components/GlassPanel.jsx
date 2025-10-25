export default function GlassPanel({ children }) {
  return (
    <div className="w-[min(1090px,calc(100vw-140px))] h-[min(500px,calc(100vh-140px))] rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl backdrop-saturate-200 shadow-[0_8px_32px_rgba(0,0,0,0.2)] ring-1 ring-white/10 overflow-hidden">
      {children}
    </div>
  );
}
