"use client";

import { cn } from "@/lib/utils";
import { createContext, useContext, useState } from "react";

interface TabsContextValue {
  value: string;
  setValue: (next: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs components must be used within Tabs");
  return ctx;
}

export function Tabs({
  defaultValue,
  className,
  children,
}: {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={cn("tabs", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="tablist" className={cn("tabs-list", className)} {...props} />;
}

export function TabsTrigger({
  value,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const { value: active, setValue } = useTabsContext();
  const selected = active === value;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      className={cn("tabs-trigger", selected && "tabs-trigger-active", className)}
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const { value: active } = useTabsContext();
  if (active !== value) return null;
  return (
    <div role="tabpanel" className={cn("tabs-content", className)} {...props}>
      {children}
    </div>
  );
}
