import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export default async function Layout({ children }: { children: Readonly<React.ReactNode> }) {
  return (
    <>
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <VisualEditing />
        </>
      )}
    </>
  );
}
