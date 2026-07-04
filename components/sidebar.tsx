"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAppStore } from "@/store/use-app-store"
import { groups, categories, osintTools } from "@/lib/data"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect, useRef } from "react"

export function Sidebar() {
  const { isSidebarExpanded, toggleSidebar } = useAppStore()
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get("category") ?? "Search Intelligence"

  const [mounted, setMounted] = useState(false)
  const [search, setSearch] = useState("")
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => { setMounted(true) }, [])

  if (!mounted) {
    return (
      <div
        className="shrink-0 h-full border-r border-border bg-card w-[52px]"
        aria-hidden="true"
      />
    )
  }

  // Filter categories by search
  const filteredGroups = groups.map((group) => ({
    ...group,
    categories: group.categories.filter((catId) => {
      if (!search) return true
      return categories[catId].name.toLowerCase().includes(search.toLowerCase())
    }),
  })).filter((g) => g.categories.length > 0)

  return (
    <aside
      aria-label="Navigation sidebar"
      className={cn(
        "shrink-0 hidden md:flex flex-col h-full border-r border-border bg-card",
        "transition-[width] duration-200 ease-in-out will-change-[width]",
        isSidebarExpanded ? "w-60" : "w-[52px]",
      )}
    >
      {/* ── Brand bar ──────────────────────────────────── */}
      <div className="h-11 shrink-0 flex items-center justify-between px-3 border-b border-border">
        {isSidebarExpanded && (
          <Link
            href="/"
            className="flex items-baseline gap-0 select-none leading-none hover:opacity-80 transition-opacity"
            aria-label="Back to home"
          >
            <span
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.875rem", letterSpacing: "-0.01em", lineHeight: 1 }}
              className="text-foreground"
            >
              Recon
            </span>
            <span
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "1.1rem", lineHeight: 1, verticalAlign: "-0.14em", color: "hsl(var(--primary))" }}
            >
              X
            </span>
          </Link>
        )}
        <button
          onClick={toggleSidebar}
          aria-label={isSidebarExpanded ? "Collapse sidebar" : "Expand sidebar"}
          className={cn(
            "p-1.5 rounded text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            !isSidebarExpanded && "mx-auto",
          )}
        >
          {isSidebarExpanded
            ? <ChevronLeft className="w-3.5 h-3.5" />
            : <ChevronRight className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* ── Search ─────────────────────────────────────── */}
      {isSidebarExpanded && (
        <div className="shrink-0 px-3 py-2.5 border-b border-border">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            <input
              ref={searchRef}
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter categories…"
              aria-label="Filter categories"
              className={cn(
                "w-full h-8 pl-8 pr-3 rounded text-xs bg-secondary border border-transparent",
                "text-foreground placeholder:text-muted-foreground/60",
                "focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring",
                "transition-colors",
              )}
            />
          </div>
        </div>
      )}

      {/* ── Groups ─────────────────────────────────────── */}
      <ScrollArea className="flex-1 min-h-0">
        <TooltipProvider delayDuration={0}>

          {isSidebarExpanded ? (
            <nav aria-label="Tool categories" className="p-2 pb-6">
              <Accordion
                type="multiple"
                defaultValue={groups.map((g) => g.id)}
                className="space-y-0.5"
              >
                {filteredGroups.map((group) => (
                  <AccordionItem key={group.id} value={group.id} className="border-none">
                    <AccordionTrigger
                      className={cn(
                        "py-1.5 px-2 rounded text-xs font-semibold uppercase tracking-wider text-muted-foreground/70",
                        "hover:bg-secondary hover:text-muted-foreground hover:no-underline",
                        "[&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground/50",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      )}
                    >
                      {group.name}
                    </AccordionTrigger>

                    <AccordionContent className="pt-0.5 pb-2">
                      <div className="space-y-px">
                        {group.categories.map((catId) => {
                          const category = categories[catId]
                          const isActive = activeCategory === catId
                          const Icon = category.icon
                          const count = osintTools.filter((t) =>
                            t.categories.includes(catId),
                          ).length

                          return (
                            <Link
                              key={catId}
                              href={`?category=${encodeURIComponent(catId)}`}
                              scroll={false}
                              aria-current={isActive ? "page" : undefined}
                              className={cn(
                                "w-full flex items-center justify-between gap-2 pl-3 pr-2 py-1.5 rounded text-sm transition-colors",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring no-underline",
                                isActive
                                  ? "bg-primary/10 text-foreground font-medium"
                                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                              )}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <Icon
                                  className={cn(
                                    "w-3.5 h-3.5 shrink-0",
                                    isActive ? "text-primary" : "text-muted-foreground/60",
                                  )}
                                />
                                <span className="truncate text-xs">{category.name}</span>
                              </div>
                              <span
                                className={cn(
                                  "shrink-0 text-[10px] px-1.5 py-0.5 rounded font-mono tabular-nums",
                                  isActive
                                    ? "bg-primary/15 text-primary"
                                    : "bg-secondary text-muted-foreground/60",
                                )}
                              >
                                {count}
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}

                {filteredGroups.length === 0 && (
                  <p className="px-3 py-6 text-xs text-muted-foreground text-center">
                    No categories match &ldquo;{search}&rdquo;
                  </p>
                )}
              </Accordion>
            </nav>
          ) : (
            /* ── Compact icon-only mode ── */
            <nav aria-label="Tool categories (compact)" className="p-2 pb-6 space-y-3">
              {groups.map((group) => (
                <div key={group.id} className="space-y-px">
                  {group.categories.map((catId) => {
                    const category = categories[catId]
                    const isActive = activeCategory === catId
                    const Icon = category.icon

                    return (
                      <Tooltip key={catId}>
                        <TooltipTrigger asChild>
                          <Link
                            href={`?category=${encodeURIComponent(catId)}`}
                            scroll={false}
                            aria-current={isActive ? "page" : undefined}
                            aria-label={category.name}
                            className={cn(
                              "w-full flex items-center justify-center p-2 rounded transition-colors",
                              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                            )}
                          >
                            <Icon className="w-4 h-4 shrink-0" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="text-xs">
                          {category.name}
                        </TooltipContent>
                      </Tooltip>
                    )
                  })}
                  <div className="border-t border-border mx-1 my-1" />
                </div>
              ))}
            </nav>
          )}
        </TooltipProvider>
      </ScrollArea>
    </aside>
  )
}
