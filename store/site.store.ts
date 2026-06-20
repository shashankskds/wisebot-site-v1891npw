"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface SiteRecord {
  id: string;
  data: Record<string, unknown>;
  updatedAt: number;
}

interface SiteState {
  records: SiteRecord[];
  mobileNavOpen: boolean;
  upsert: (id: string, data: Record<string, unknown>) => void;
  get: (id: string) => SiteRecord | undefined;
  remove: (id: string) => void;
  list: () => SiteRecord[];
  setMobileNavOpen: (open: boolean) => void;
  toggleMobileNav: () => void;
}

export const useSiteStore = create<SiteState>()(
  devtools(
    (set, get) => ({
      records: [],
      mobileNavOpen: false,
      upsert: (id, data) =>
        set((state) => {
          const existing = state.records.find((r) => r.id === id);
          const next: SiteRecord = {
            id,
            data: { ...(existing?.data ?? {}), ...data },
            updatedAt: Date.now(),
          };
          const records = existing
            ? state.records.map((r) => (r.id === id ? next : r))
            : [...state.records, next];
          return { records };
        }),
      get: (id) => get().records.find((r) => r.id === id),
      remove: (id) =>
        set((state) => ({ records: state.records.filter((r) => r.id !== id) })),
      list: () => get().records,
      setMobileNavOpen: (mobileNavOpen) => set({ mobileNavOpen }),
      toggleMobileNav: () => set((s) => ({ mobileNavOpen: !s.mobileNavOpen })),
    }),
    { name: "SiteStore" }
  )
);
