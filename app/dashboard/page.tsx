import { ToolGrid } from "@/components/tool-grid"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileSidebar } from "@/components/mobile-sidebar"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-full">

      {/* ── Sticky topbar ───────────────────────────────── */}
      <header className="shrink-0 sticky top-0 z-10 h-11 flex items-center justify-between px-4 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="flex items-center gap-0 select-none leading-none">
          <MobileSidebar />
          <span
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
            className="text-muted-foreground"
          >
            Recon
          </span>
          <span
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "1rem", lineHeight: 1, verticalAlign: "-0.12em", color: "hsl(var(--primary))" }}
          >
            X
          </span>
          <span className="ml-2 text-border text-xs">/</span>
          <span className="ml-2 text-xs font-mono text-muted-foreground">Dashboard</span>
        </div>

        <ThemeToggle />
      </header>

      {/* ── Scrollable content ───────────────────────────── */}
      <main className="flex-1 overflow-y-auto px-6 py-5">
        <ToolGrid />
      </main>

      {/* ── Status bar ───────────────────────────────────── */}
      <footer
        aria-label="Status bar"
        className="shrink-0 h-7 border-t border-border px-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground bg-card/50"
      >
        <span className="text-primary font-semibold tracking-widest uppercase">ReconX</span>
        <span>OSINT Intelligence Toolkit &mdash; All-in-One Directory</span>
        <span>&copy; 2024 ReconX</span>
      </footer>

    </div>
  )
}
