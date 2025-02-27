"use client";

import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { RxUpdate } from "react-icons/rx";

export function RefreshBlog() {
  const router = useRouter();
  const refresh = () => {
    try {
      router.refresh();
      addToast({ title: "All blog are upto date!", color: "success", timeout: 1500, shouldShowTimeoutProgess: true });
    } catch (error) {
      console.log(error);
      addToast({ title: "Couldn't update blog", color: "danger" });
    }
  };
  return (
    <div className={`pointer-events-none fixed right-0 top-5 flex h-full w-full flex-row justify-end pb-28 pr-9`}>
      <Button radius="full" onPress={refresh} color="primary" size="lg" className="pointer-events-auto" isIconOnly>
        <RxUpdate />
      </Button>
    </div>
  );
}
