"use client";

import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RxUpdate } from "react-icons/rx";

export function RefreshBlog() {
  const router = useRouter();
  const refresh = () => {
    try {
      router.refresh();
      toast.success(`All blog are upto date!`);
    } catch (error) {
      console.log(error);
      toast.error("Couldn't update blog");
    }
  };
  return (
    <div className={`pointer-events-none fixed right-0 top-5 flex h-full w-full flex-row justify-end pb-28 pr-9`}>
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
