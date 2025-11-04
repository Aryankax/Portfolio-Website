export default function GlassPanel({ children }) {
  return (
    <div className="w-full max-w-[1180px] lg:w-[min(1180px,calc(100vw-120px))] h-auto min-h-[calc(100vh-24px)] lg:min-h-0 lg:h-[min(760px,calc(100vh-80px))] rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl backdrop-saturate-200 shadow-[0_8px_32px_rgba(0,0,0,0.2)] ring-1 ring-white/10 overflow-hidden mx-auto my-3 sm:my-4 lg:my-0">
      {children}
    </div>
  );
}
