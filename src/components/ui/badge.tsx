import { JSX, splitProps } from "solid-js";

interface BadgeProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "destructive";
}

export function Badge(props: BadgeProps) {
  const [local, rest] = splitProps(props, ["variant", "class", "children"]);
  const base =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
  const variantClass =
    local.variant === "destructive"
      ? "bg-red-100 text-red-800"
      : "bg-green-100 text-green-800";
  return (
    <span class={`${base} ${variantClass} ${local.class || ""}`} {...rest}>
      {local.children}
    </span>
  );
}