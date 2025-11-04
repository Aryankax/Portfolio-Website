export default function ThinGlassPanel() {
  return (
    <div className="hidden lg:flex w-[76px] h-[280px] rounded-2xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl backdrop-saturate-200 shadow-[0_8px_32px_rgba(0,0,0,0.2)] ring-1 ring-white/10 overflow-hidden flex-col items-center justify-evenly py-3">
        <IconLink href="https://www.linkedin.com/in/aryan-kacker/" label="LinkedIn">
        {/* LinkedIn icon */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5ZM.24 8.25h4.52v14.5H.24V8.25ZM8.51 8.25h4.33v1.982h.062c.603-1.143 2.077-2.35 4.275-2.35 4.574 0 5.417 3.011 5.417 6.928v8.94h-4.52v-7.93c0-1.89-.034-4.323-2.634-4.323-2.636 0-3.04 2.06-3.04 4.187v8.066H8.51V8.25Z" />
        </svg>
      </IconLink>
      <IconLink href="https://github.com/Aryankax" label="GitHub">
        {/* GitHub icon */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.477 2 2 6.486 2 12.02c0 4.43 2.865 8.185 6.839 9.504.5.092.683-.218.683-.484 0-.239-.009-.873-.014-1.714-2.782.606-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.465-1.11-1.465-.907-.62.069-.608.069-.608 1.003.071 1.53 1.032 1.53 1.032.892 1.532 2.341 1.089 2.91.833.091-.648.35-1.089.636-1.34-2.22-.253-4.555-1.113-4.555-4.952 0-1.093.39-1.988 1.03-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.706.115 2.505.338 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.849-2.339 4.696-4.566 4.944.359.31.679.921.679 1.856 0 1.34-.012 2.418-.012 2.746 0 .269.18.58.688.481A10.02 10.02 0 0 0 22 12.02C22 6.486 17.523 2 12 2Z"/>
        </svg>
      </IconLink>
      <IconLink href="https://leetcode.com/u/AryanKax/" label="LeetCode">
        <img src="/leetcode.svg" alt="LeetCode" className="w-6 h-6" />
      </IconLink>
    </div>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex items-center justify-center w-12 h-12 rounded-full text-white/95 ring-1 ring-white/10 hover:ring-white/30 bg-white/5 hover:bg-white/10 transition-all duration-200 ease-out transform-gpu will-change-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  );
}
