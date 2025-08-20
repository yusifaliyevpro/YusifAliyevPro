import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export default async function Layout({ children }: LayoutProps<"/preview">) {
  return (
    <>
      {children}
      {(await draftMode()).isEnabled && (
        <>
          <VisualEditing />
        </>
      )}
    </>
  );
}
