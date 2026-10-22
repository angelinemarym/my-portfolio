import type { ComponentProps, CSSProperties } from "react";
import { cn } from "@/lib/utils";
/** Native sticky stacking inspired by Systaliko UI Cards Stack; all content remains in document order. */
export function CardsStack({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("cards-stack", className)} {...props} />;
}
export function CardSticky({
  index,
  className,
  style,
  ...props
}: ComponentProps<"article"> & { index: number }) {
  return (
    <article
      className={cn("stack-sticky-card", className)}
      style={{ "--stack-index": index, ...style } as CSSProperties}
      {...props}
    />
  );
}
