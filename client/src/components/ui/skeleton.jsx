import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      className={cn("animate-pulse rounded-md bg-neutral-300 dark:bg-neutral-900", className)}
      {...props} />)
  );
}

export { Skeleton }
