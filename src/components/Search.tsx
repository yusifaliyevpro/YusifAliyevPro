"use client";

import useQuery from "@/lib/store";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDebounce } from "use-debounce";

export default function Search() {
  const [text, setText] = useState("");
  const [query] = useDebounce(text.trim(), 600);
  const setSearch = useQuery((state) => state.setSearch);
  const resultCount = useQuery((state) => state.resultCount);

  useEffect(() => {
    setSearch(query);
  }, [query]);

  useEffect(() => {
    if (resultCount === 0) {
      addToast({
        title: "Axtarışınıza uyğun nəticə tapılmadı",
        color: "warning",
        icon: <BiSearch className="text-2xl font-bold" />,
      });
    }
  }, [resultCount]);

  return (
    <search className="w-full px-6 md:w-[22rem] lg:mt-0">
      <Input
        classNames={{
          inputWrapper: "border-blue-200 hover:!border-blue-300 group-data-[focus=true]:border-blue-400 dark:border-slate-400",
          input: "text-lg font-normal placeholder:text-gray-500 dark:placeholder:text-slate-400",
        }}
        endContent={<BiSearch className="text-[1.7rem] font-bold" />}
        placeholder={"Axtarış"}
        radius="md"
        size="lg"
        value={text}
        variant="bordered"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </search>
  );
}
