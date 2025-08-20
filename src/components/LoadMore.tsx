"use client";

import { Button } from "@heroui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function LoadMore() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = searchParams.get("search")?.trim() || "";
  const pageQuery = Number(searchParams.get("page")) || 1;
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value.trim()) params.set(name, value);
      else params.delete(name);

      return params.toString();
    },
    [searchParams],
  );
  return (
    !searchQuery && (
      <Button
        size="lg"
        className="mt-10 bg-linear-to-r from-blue-500 to-blue-400 text-lg text-white"
        onPress={() => router.push(`?${createQueryString("page", String(pageQuery + 1))}`, { scroll: false })}
      >
        Load More...
      </Button>
    )
  );
}
