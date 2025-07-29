import { BASE_URL } from "@/src/lib/constants";
import { useFormValue } from "sanity";

export default function PreviewMode() {
  const slug = useFormValue(["slug"]) as { current: string };
  if (!slug) return null;
  return (
    <div className="relative my-0 flex w-full flex-row justify-end">
      <a
        className="rounded-xl bg-blue-500 px-5 py-2 font-bold"
        href={`${BASE_URL}/preview/blog/${slug.current}`}
        target="_blank"
      >
        Preview Mode
      </a>
    </div>
  );
}
