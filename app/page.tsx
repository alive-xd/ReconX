import Link from "next/link"
import { osintTools, groups, categories } from "@/lib/data"
import { ArrowRight, Shield, Database, Globe } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const TOOL_COUNT     = osintTools.length
const GROUP_COUNT    = groups.length
const CATEGORY_COUNT = Object.keys(categories).length

const FEATURE_PILLS = [
  { icon: Shield,   label: "Threat Intelligence" },
  { icon: Database, label: "Infrastructure Recon" },
  { icon: Globe,    label: "OSINT & Discovery" },
]

/**
 * Wordmark: "Recon" in Inter (light weight) + "X" in Inter (black weight,
 * larger, dropped below baseline). No italic — keeps everything aligned.
 */
function Wordmark({ size = "sm" }: { size?: "sm" | "lg" }) {
  if (size === "lg") {
    return (
      <span
        className="select-none inline-flex items-baseline leading-none"
        aria-label="ReconX"
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(4rem, 12vw, 9rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
          className="text-foreground"
        >
          Recon
        </span>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(4.8rem, 14.4vw, 10.8rem)",
            lineHeight: 1,
            verticalAlign: "-0.12em",
            color: "hsl(var(--primary))",
            letterSpacing: "-0.02em",
          }}
        >
          X
        </span>
      </span>
    )
  }

  // Small / nav size
  return (
    <span
      className="select-none inline-flex items-baseline leading-none"
      aria-label="ReconX"
    >
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "1rem",
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
        className="text-foreground"
      >
        Recon
      </span>
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 900,
          fontSize: "1.25rem",
          lineHeight: 1,
          verticalAlign: "-0.14em",
          color: "hsl(var(--primary))",
        }}
      >
        X
      </span>
    </span>
  )
}

export default function LandingPage() {
  return (
    <div className="dot-grid relative flex flex-col h-screen overflow-hidden bg-background">

      {/* ── Top nav ─────────────────────────────────────── */}
      <header className="shrink-0 flex items-center justify-between px-8 py-4 border-b border-border/50">
        <Wordmark size="sm" />
        <ThemeToggle />
      </header>

      {/* ── Hero ────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center min-h-0">

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-8">
          Intelligence Gathering Platform
        </p>

        <h1 className="mb-8">
          <Wordmark size="lg" />
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed mb-10">
          A curated directory of{" "}
          <span className="text-foreground font-medium">{TOOL_COUNT}+ professional tools</span>{" "}
          used by security researchers, red teams, and OSINT analysts.
        </p>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
        >
          Open Dashboard
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>

        {/* Stat strip */}
        <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground tabular-nums">{TOOL_COUNT}+</div>
            <div className="text-xs mt-0.5">Tools</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground tabular-nums">{CATEGORY_COUNT}</div>
            <div className="text-xs mt-0.5">Categories</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground tabular-nums">{GROUP_COUNT}</div>
            <div className="text-xs mt-0.5">Groups</div>
          </div>
        </div>

        {/* Feature pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {FEATURE_PILLS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground bg-card/60 backdrop-blur-sm"
            >
              <Icon className="w-3 h-3 text-primary" />
              {label}
            </span>
          ))}
        </div>
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="shrink-0 border-t border-border/50 px-8 py-3 flex items-center justify-between text-xs text-muted-foreground font-mono">
        <span>ReconX &copy; 2024</span>
        <span>All-in-One OSINT &amp; Intelligence Gathering Toolkit</span>
        <span>For ethical hackers &amp; security researchers</span>
      </footer>

    </div>
  )
}
