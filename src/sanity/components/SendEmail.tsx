"use client";

import { broadcastBlogPostEmail } from "@/src/data-access/resend/broadcastBlogPost";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { startTransition, useActionState, useEffect } from "react";
import { useFormValue } from "sanity";

export default function SendEmailComponent() {
  const slug = useFormValue(["slug"]) as { _type: "slug"; current: string };
  const isPublished = !(useFormValue(["_id"]) as string).startsWith("drafts.");

  const [state, action] = useActionState(broadcastBlogPostEmail, { message: "", success: false });

  useEffect(() => {
    if (state.success) addToast({ color: "success", title: state.message });
    else if (state.message) addToast({ color: "danger", title: state.message });
  }, [state]);
  function handleConfirm() {
    startTransition(() => action(slug.current));
  }

  if (!isPublished)
    return (
      <div className="flex flex-row items-center justify-center gap-x-10 font-bold">
        Publish before sending
      </div>
    );
  return (
    <div className="flex flex-row items-center justify-center gap-x-10">
      <Button className="font-bold" color="primary" onPress={handleConfirm}>
        Create Broadcast
      </Button>
    </div>
  );
}
