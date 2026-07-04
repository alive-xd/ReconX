"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import { groups, categories, osintTools } from "@/lib/data"
import { Menu, Search } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileSidebar() {
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get("category") ?? "Search Intelligence"
  const [search, setSearch] = useState("")
  const [open, setOpen] = useState(false)

  // Filter categories by search
  const filteredGroups = groups.map((group) => ({
    ...group,
    categories: group.categories.filter((catId) => {
      if (!search) return true
      return categories[catId].name.toLowerCase().includes(search.toLowerCase())
    }),
  })).filter((g) => g.categories.length > 0)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="md:hidden p-1.5 mr-2 rounded text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0 flex flex-col [&>button]:hidden border-r">
        <SheetHeader className="h-11 px-4 border-b flex flex-row items-center space-y-0">
          <SheetTitle className="flex items-baseline gap-0 select-none leading-none">
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
          </SheetTitle>
        </SheetHeader>

        {/* ── Search ─────────────────────────────────────── */}
        <div className="shrink-0 px-3 py-2.5 border-b border-border">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
            <input
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

        {/* ── Groups ─────────────────────────────────────── */}
        <ScrollArea className="flex-1 min-h-0">
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
                            onClick={() => setOpen(false)}
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
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
