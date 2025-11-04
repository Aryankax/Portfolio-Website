"use client";

export default function HelloHero() {
  return (
    <div className="relative flex items-center justify-center select-none h-[80vh] lg:h-[60vh]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] md:w-[80%] aspect-2/1 rounded-[48px] bg-[radial-gradient(1200px_600px_at_50%_50%,rgba(255,255,255,0.18),transparent_70%)]" />
      </div>
      <AnimatedHello />
    </div>
  );
}

function AnimatedHello() {
  return (
    <svg
      viewBox="0 0 1200 300"
      className="w-[96%] max-w-[1100px] h-auto"
      aria-hidden="true"
    >
      <defs>
        {/* Static gradient for stroke outline */}
        <linearGradient id="helloStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        {/* Animated gradient for the fill */}
        <linearGradient id="helloFillGradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse" gradientTransform="translate(0,0)">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="50%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#38bdf8" />
          <animateTransform attributeName="gradientTransform" type="translate" values="0,0; 600,0; 0,0" dur="12s" repeatCount="indefinite" />
        </linearGradient>
      </defs>
      {/* Solid white text, no stroke/gradient */}
      <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" className="hello-text" fill="#ffffff">
        hello world!
      </text>
    </svg>
  );
}
