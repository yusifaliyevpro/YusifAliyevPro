"use client";

import { updateBlogs, updateSpecificBlog } from "@/lib/actions";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RxUpdate } from "react-icons/rx";

export function RefreshBlogs() {
  const router = useRouter();
  const refresh = () => {
    try {
      updateBlogs();
      router.refresh();
      toast.success("Blogs Updated!");
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

export function RefreshSpecificBlog({ title }: { title: string }) {
  const router = useRouter();
  const refresh = () => {
    try {
      updateSpecificBlog();
      router.refresh();
      toast.success(`Updated "${title}"`);
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
