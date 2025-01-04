"use client";

import { updateBlogs, updateSpecificBlog } from "@/lib/actions";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { RxUpdate } from "react-icons/rx";

export function RefreshBlogs() {
  const refresh = () => {
    try {
      updateBlogs();
      toast.success("Blogs Refreshed");
    } catch (error) {
      console.log(error);
      toast.error("Couldn't refresh blogs");
    }
  };

  return (
    <div
      className={`pointer-events-none fixed right-0 top-5 flex h-full w-full flex-row justify-end pb-28 pr-9`}
    >
      <Button
        radius="full"
        onPress={refresh}
        color="primary"
        size="lg"
        isIconOnly
        className="pointer-events-auto"
      >
        <RxUpdate />
      </Button>
    </div>
  );
}

export function RefreshSpecificBlog() {
  const refresh = () => {
    try {
      updateSpecificBlog();
      toast.success("Refreshed Specific Blog");
    } catch (error) {
      console.log(error);
      toast.error("Couldn't refresh spicific blog");
    }
  };

  return (
    <div
      className={`pointer-events-none fixed right-0 top-5 flex h-full w-full flex-row justify-end pb-28 pr-9`}
    >
      <Button
        radius="full"
        onPress={refresh}
        color="primary"
        size="lg"
        className="pointer-events-auto size-32"
        isIconOnly
      >
        <RxUpdate />
      </Button>
    </div>
  );
}
