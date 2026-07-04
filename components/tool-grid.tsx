"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Search, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAppStore } from "@/store/use-app-store"
import { osintTools, categories } from "@/lib/data"

export function ToolGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const searchRef = useRef<HTMLInputElement>(null)
  const { activeCategory } = useAppStore()

  // ── Ctrl+K focuses the search ──────────────────────
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  // ── Filter ─────────────────────────────────────────
  const filteredTools = osintTools.filter((tool) => {
    const matchesCategory = tool.categories.includes(activeCategory)
    if (!matchesCategory) return false
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.categories.some((c) => c.toLowerCase().includes(q))
    )
  })

  const currentLabel = categories[activeCategory]?.name ?? activeCategory

  return (
    <div className="w-full space-y-4">

      {/* ── Section header + search row ────────────────── */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-foreground">{currentLabel}</h2>
          <p className="text-xs text-muted-foreground mt-0.5 font-mono tabular-nums">
            {filteredTools.length} {filteredTools.length === 1 ? "tool" : "tools"}
          </p>
        </div>

        {/* Search */}
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
          <input
            ref={searchRef}
            type="search"
            placeholder="Search…"
            aria-label={`Search within ${currentLabel}`}
            className={cn(
              "w-full h-8 pl-8 pr-14 rounded text-xs bg-secondary border border-transparent",
              "text-foreground placeholder:text-muted-foreground/60",
              "focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring",
              "transition-colors",
            )}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <kbd className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 text-[10px] font-mono text-muted-foreground/40 select-none">
            ⌃K
          </kbd>
        </div>
      </div>

      {/* ── Grid ───────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
        {filteredTools.map((tool) => (
          <a
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open ${tool.name}`}
            className={cn(
              "surface-card group flex flex-col p-4 min-h-[90px] no-underline",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            {/* Name + icon */}
            <div className="flex items-start justify-between gap-2 mb-3">
              <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-tight">
                {tool.name}
              </h3>
              <ExternalLink className="w-3.5 h-3.5 shrink-0 text-muted-foreground/40 group-hover:text-primary transition-colors mt-0.5 opacity-0 group-hover:opacity-100" />
            </div>

            {/* Category badges */}
            <div className="mt-auto flex flex-wrap gap-1">
              {tool.categories.slice(0, 2).map((cat) => (
                <span
                  key={cat}
                  className="text-[9px] uppercase font-mono px-1.5 py-0.5 bg-secondary text-muted-foreground rounded"
                >
                  {cat}
                </span>
              ))}
              {tool.categories.length > 2 && (
                <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 bg-secondary text-muted-foreground rounded">
                  +{tool.categories.length - 2}
                </span>
              )}
            </div>
          </a>
        ))}

        {filteredTools.length === 0 && (
          <div
            role="status"
            className="col-span-full py-16 flex flex-col items-center text-center border-2 border-dashed border-border rounded-lg bg-card/20"
          >
            <Search className="w-5 h-5 mb-3 text-muted-foreground/30" />
            <p className="text-sm font-medium text-foreground mb-1">No tools found</p>
            <p className="text-xs text-muted-foreground">
              {searchQuery
                ? `Nothing matching "${searchQuery}"`
                : "No tools in this category"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
