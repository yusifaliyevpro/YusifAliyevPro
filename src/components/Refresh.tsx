"use client";

import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { RxUpdate } from "react-icons/rx";

export function RefreshRouterButton() {
  const router = useRouter();
  const refresh = () => {
    router.refresh();
    addToast({
      color: "success",
      shouldShowTimeoutProgress: true,
      timeout: 1500,
      title: "All blog are upto date!",
    });
  };
  return (
    <div
      className={`pointer-events-none fixed top-5 right-0 flex h-full w-full flex-row justify-end pr-9 pb-28`}
    >
      <Button
        isIconOnly
        className="pointer-events-auto"
        color="primary"
        radius="full"
        size="lg"
        onPress={refresh}
      >
        <RxUpdate />
      </Button>
    </div>
  );
}
