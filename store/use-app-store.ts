import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  isSidebarExpanded: boolean
  toggleSidebar: () => void
  activeCategory: string
  setActiveCategory: (id: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isSidebarExpanded: true,
      toggleSidebar: () =>
        set((state) => ({ isSidebarExpanded: !state.isSidebarExpanded })),

      activeCategory: 'Search Intelligence',
      setActiveCategory: (id) => set({ activeCategory: id }),
    }),
    {
      name: 'reconx-store',
      partialize: (state) => ({
        isSidebarExpanded: state.isSidebarExpanded,
      }),
    },
  ),
)
