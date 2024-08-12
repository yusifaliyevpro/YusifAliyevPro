"use client";

import { UpdateBlogs, UpdateSpecificBlog } from "@/lib/actions";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { RxUpdate } from "react-icons/rx";

export function RefreshBlogs() {
  const refresh = () => {
    try {
      UpdateBlogs();
      toast.success("Blogs Refreshed");
    } catch (error) {
      console.log(error);
      toast.error("Couldn't refresh blogs");
    }
  };

  return (
    <div
      className={`sticky bottom-0 right-0 flex h-full w-full flex-row justify-end pb-28 pr-9`}
    >
      <Button
        radius="full"
        onPress={refresh}
        color="primary"
        size="lg"
        isIconOnly
      >
        <RxUpdate />
      </Button>
    </div>
  );
}

export function RefreshSpecificBlog() {
  const refresh = () => {
    try {
      UpdateSpecificBlog();
      toast.success("Refreshed Specific Blog");
    } catch (error) {
      console.log(error);
      toast.error("Couldn't refresh spicific blog");
    }
  };

  return (
    <div
      className={`sticky bottom-0 right-0 flex h-full w-full flex-row justify-end pb-28 pr-9`}
    >
      <Button
        radius="full"
        onPress={refresh}
        color="primary"
        size="lg"
        className="size-32"
        isIconOnly
      >
        <RxUpdate />
      </Button>
    </div>
  );
}
