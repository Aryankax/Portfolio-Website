"use client";

export default function HelloHero() {
  return (
    <div className="relative flex h-full items-center justify-center select-none">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-2/1 rounded-[48px] bg-[radial-gradient(1200px_600px_at_50%_50%,rgba(255,255,255,0.18),transparent_70%)]" />
      </div>
      <AnimatedHello />
    </div>
  );
}

function AnimatedHello() {
  return (
    <svg
      viewBox="0 0 1200 300"
      className="w-[88%] max-w-[1000px] h-auto"
      aria-hidden="true"
    >
      <defs>
        {/* Static gradient for stroke outline */}
        <linearGradient id="helloStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
        {/* Animated gradient for the fill */}
        <linearGradient id="helloFillGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse" gradientTransform="translate(0,0)">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#60a5fa" />
          <animateTransform attributeName="gradientTransform" type="translate" values="0,0; 600,0; 0,0" dur="12s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      {/* Stroke layer: draws in */}
      <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" className="hello-text hello-stroke" stroke="url(#helloStrokeGradient)">
        hello world!
      </text>
      {/* Animated gradient fill that fades in after stroke starts */}
      <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" className="hello-text hello-fill" fill="url(#helloFillGradient)">
        hello world!
      </text>
    </svg>
  );
}
