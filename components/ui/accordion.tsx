import { cn } from "@/lib/utils";

export function Accordion({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("accordion", className)} {...props} />;
}

export function AccordionItem({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDetailsElement>) {
  return (
    <details name="site-accordion" className={cn("accordion-item", className)} {...props}>
      {children}
    </details>
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <summary className={cn("accordion-trigger", className)} {...props}>
      {children}
    </summary>
  );
}

export function AccordionContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("accordion-content", className)} {...props}>
      {children}
    </div>
  );
}
