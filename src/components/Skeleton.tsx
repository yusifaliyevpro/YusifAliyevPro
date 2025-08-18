import { cn } from "@/lib/cn";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("size-10 animate-pulse rounded-md bg-gray-200", className)}></div>;
}
