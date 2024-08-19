import { PREVIEW_URL } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import { useFormValue } from "sanity";

export default function PreviewMode() {
  const slug = useFormValue(["slug"]) as { current: string };
  return (
    <div className="relative my-0 flex w-full flex-row justify-end">
      <a
        href={`${PREVIEW_URL}/blog/${slug.current}?__vercel_draft=1`}
        target="_blank"
      >
        <Button color="primary" className="font-bold">
          Preview Mode
        </Button>
      </a>
    </div>
  );
}
