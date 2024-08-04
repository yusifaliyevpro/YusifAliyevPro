"use client";

import { BASE_URL } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useFormValue } from "sanity";

export default function PreviewMode() {
  const form = useFormValue(["slug"]);
  const [slug, setSlug] = useState(form.current ? form.current : "");
  useEffect(() => {
    setSlug(form.current);
  }, [form]);
  return (
    <div className="relative my-0 flex w-full flex-row justify-end">
      <a href={`${BASE_URL}/blog/${slug}?__vercel_draft=1`} target="_blank">
        <Button color="primary" className="font-bold">
          Preview Mode
        </Button>
      </a>
    </div>
  );
}
