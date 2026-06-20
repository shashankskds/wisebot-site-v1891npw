import { cn } from "@/lib/utils";

export function Alert({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "destructive" }) {
  return (
    <div
      role="alert"
      className={cn(
        "alert",
        variant === "destructive" ? "alert-destructive" : "alert-default",
        className
      )}
      {...props}
    />
  );
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn("alert-title", className)} {...props} />;
}

export function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("alert-description", className)} {...props} />;
}
