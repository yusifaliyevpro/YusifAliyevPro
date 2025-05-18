import type { Metadata } from "next";

import ContactsTable from "@/src/components/ContactsTable";
import { isInDevelopment } from "@/src/lib/constants";
import { getAllContacts } from "@/src/lib/prisma/actions";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Admin Console",
  robots: { follow: false, index: false },
};

export default async function Admin() {
  const { isEnabled } = await draftMode();
  if (!isEnabled && !isInDevelopment) redirect("/admin?__vercel_draft=1");
  const contactsPromise = getAllContacts();
  return (
    <main className="mt-24 flex min-h-svh flex-col lg:px-20">
      <div className="overflow-x-scroll p-6">
        <h1 className="mb-4 text-2xl font-bold">Contacts Management</h1>
        <Suspense>
          <ContactsTable contactsPromise={contactsPromise} />
        </Suspense>
      </div>
    </main>
  );
}
