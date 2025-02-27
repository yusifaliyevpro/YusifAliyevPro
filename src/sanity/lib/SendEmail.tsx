"use client";

import { sendEmail } from "@/src/lib/email/actions";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { startTransition, useActionState, useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useFormValue } from "sanity";

export default function SendEmailComponent() {
  const slug = useFormValue(["slug"]) as { _type: "slug"; current: string };
  const isPublished = useFormValue(["isPublished"]) as boolean;
  const [state, action, isPending] = useActionState(sendEmail, { success: false, message: "" });
  const [oneClick, setOneClick] = useState(false);
  useEffect(() => {
    if (state.success) addToast({ title: state.message, color: "success" });
    else if (state.message) addToast({ title: state.message, color: "danger" });
  }, [state]);
  function handleConfirm() {
    startTransition(() => action(slug.current));
  }
  if (!isPublished) return <div className="flex flex-row items-center justify-center gap-x-10 font-bold">Publish before sending</div>;
  return (
    <div className="flex flex-row items-center justify-center gap-x-10">
      <Button color="primary" className="font-bold" onPress={() => setOneClick(true)}>
        Send Email
      </Button>
      {oneClick && (
        <Button color="success" className="font-bold" isDisabled={isPending || state.success} onPress={handleConfirm}>
          {isPending ? <AiOutlineLoading className="size-4 animate-spin" /> : state.success ? "Sent!" : "Confirm"}
        </Button>
      )}
    </div>
  );
}
