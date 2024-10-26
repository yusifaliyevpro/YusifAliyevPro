"use client";

import useQuery from "@/lib/store";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
      toast("Axtarışınıza uyğun nəticə tapılmadı", {
        position:
          window.innerHeight > window.innerWidth ? "top-right" : "bottom-right",
        icon: <BiSearch className="text-2xl font-bold" />,
      });
    }
  }, [resultCount]);

  return (
    <search className="mt-5 w-full px-6 md:w-[22rem] lg:mt-0">
      <Input
        classNames={{
          inputWrapper:
            "group-data-[focus=true]:border-blue-400  hover:!border-blue-300 border-blue-200 dark:border-slate-400",
          input:
            "placeholder:text-gray-500 dark:placeholder:text-slate-400 text-lg font-normal",
        }}
        placeholder={"Axtarış"}
        variant="bordered"
        size="lg"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        radius="md"
        endContent={<BiSearch className="text-[1.7rem] font-bold" />}
      />
    </search>
  );
}
