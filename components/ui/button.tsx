import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "secondary" | "ghost";
type ButtonSize = "default" | "sm" | "lg";

const variantClass: Record<ButtonVariant, string> = {
  default: "btn-variant-default",
  outline: "btn-variant-outline",
  secondary: "btn-variant-secondary",
  ghost: "btn-variant-ghost",
};

const sizeClass: Record<ButtonSize, string> = {
  default: "btn-size-default",
  sm: "btn-size-sm",
  lg: "btn-size-lg",
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "default",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn("btn", variantClass[variant], sizeClass[size], className)}
      {...props}
    />
  );
}

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  variant = "default",
  size = "default",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn("btn", variantClass[variant], sizeClass[size], className)}
      {...props}
    />
  );
}
