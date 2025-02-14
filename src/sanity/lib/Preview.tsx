import { PREVIEW_URL } from "@/lib/constants";
import { useFormValue } from "sanity";

export default function PreviewMode() {
  const slug = useFormValue(["slug"]) as { current: string };
  if (!slug) return null;
  return (
    <div className="relative my-0 flex w-full flex-row justify-end">
      <a
        href={`${PREVIEW_URL}/blog/${slug.current}`}
        target="_blank"
        className="rounded-xl bg-blue-500 px-5 py-2 font-bold"
      >
        Preview Mode
      </a>
    </div>
  );
}
