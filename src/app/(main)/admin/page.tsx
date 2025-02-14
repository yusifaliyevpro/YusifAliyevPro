import { isInDevelopment } from "@/src/lib/constants";
import { getAllContacts } from "@/src/lib/prisma/actions";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export default async function Admin() {
  const contacts = await getAllContacts();
  const { isEnabled } = await draftMode();
  if (!isEnabled && !isInDevelopment) redirect("/admin?__vercel_draft=1");
  return (
    <main className="mt-24 flex min-h-svh flex-col items-center justify-start px-36">
      {(isEnabled || isInDevelopment) && (
        <section className="flex size-full min-h-72 flex-col items-center justify-center space-y-10 rounded-2xl shadow-medium">
          {contacts.map((contact, i) => (
            <div key={i} className="flex w-full flex-row items-center gap-x-10 px-12 *:w-72 *:text-nowrap">
              <p>Name: {contact.fullName}</p>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
              <p>Whatsap?: {contact.hasWhatsApp ? "True" : "False"}</p>
              <p>Description: {contact.description}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export const metadata: Metadata = {
  alternates: {
    canonical: `/about`,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};
