/**
 * Slow-drifting blurred color blobs used as ambient depth behind hero content.
 * Plain CSS animation (not Framer Motion) so the drift runs on the compositor
 * thread, and hidden below md: — a continuously-animating 110px blur is
 * expensive on phone GPUs and was a real contributor to mobile jank.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-20 hidden overflow-hidden md:block ${className ?? ""}`}
    >
      <div
        className="absolute -left-1/4 top-[-15%] h-[36rem] w-[36rem] rounded-full bg-signal/25 blur-[100px]"
        style={{ animation: "aurora-drift-a 22s ease-in-out infinite" }}
      />
      <div
        className="absolute right-[-15%] top-[5%] h-[30rem] w-[30rem] rounded-full bg-signal-2/20 blur-[100px]"
        style={{ animation: "aurora-drift-b 26s ease-in-out infinite" }}
      />
    </div>
  );
}
