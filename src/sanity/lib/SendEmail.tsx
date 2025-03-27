"use client";

import { notifySubscribers } from "@/src/lib/email/notifySubscribers";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { startTransition, useActionState, useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useFormValue } from "sanity";

export default function SendEmailComponent() {
  const slug = useFormValue(["slug"]) as { _type: "slug"; current: string };
  const isPublished = useFormValue(["isPublished"]) as boolean;
  const [state, action, isPending] = useActionState(notifySubscribers, { message: "", success: false });
  const [oneClick, setOneClick] = useState(false);
  useEffect(() => {
    if (state.success) addToast({ color: "success", title: state.message });
    else if (state.message) addToast({ color: "danger", title: state.message });
  }, [state]);
  function handleConfirm() {
    startTransition(() => action(slug.current));
  }
  if (!isPublished)
    return <div className="flex flex-row items-center justify-center gap-x-10 font-bold">Publish before sending</div>;
  return (
    <div className="flex flex-row items-center justify-center gap-x-10">
      <Button className="font-bold" color="primary" onPress={() => setOneClick(true)}>
        Send Email
      </Button>
      {oneClick && (
        <Button className="font-bold" color="success" isDisabled={isPending || state.success} onPress={handleConfirm}>
          {isPending ? <AiOutlineLoading className="size-4 animate-spin" /> : state.success ? "Sent!" : "Confirm"}
        </Button>
      )}
    </div>
  );
}
