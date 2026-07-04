import type React from "react"
import { Suspense } from "react"
import { Sidebar } from "@/components/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden w-full bg-background">
      <Suspense fallback={<div className="hidden md:flex w-64 border-r border-border bg-card/30 flex-col h-full" />}>
        <Sidebar />
      </Suspense>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {children}
      </div>
    </div>
  )
}
