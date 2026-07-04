import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  isSidebarExpanded: boolean
  toggleSidebar: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isSidebarExpanded: true,
      toggleSidebar: () =>
        set((state) => ({ isSidebarExpanded: !state.isSidebarExpanded })),
    }),
    {
      name: 'reconx-store',
    },
  ),
)
