"use client";

import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDebounce } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchQuery = searchParams.get("search")?.trim() || "";
  const [text, setText] = useState(searchQuery);
  const [query] = useDebounce(text.trim(), 500);
  const resultCount: number = 1;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value.trim()) params.set(name, value);
      else params.delete(name);

      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    router.replace(`?${createQueryString("search", query)}`);
  }, [query, createQueryString, router]);

  useEffect(() => {
    if (resultCount === 0) {
      addToast({
        color: "warning",
        icon: <BiSearch className="text-2xl font-bold" />,
        title: "No results found for your search",
      });
    }
  }, [resultCount]);

  return (
    <search className="w-full px-6 md:w-88 lg:mt-0">
      <Input
        endContent={<BiSearch className="text-[1.7rem] font-bold" />}
        placeholder={"Search"}
        radius="md"
        size="lg"
        value={text}
        variant="bordered"
        classNames={{
          input: "text-lg font-normal placeholder:text-gray-500",
          inputWrapper: "border-blue-200 group-data-[focus=true]:border-blue-400 hover:border-blue-300!",
        }}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </search>
  );
}
