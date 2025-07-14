import type { Metadata } from "next";
import ContactsTable from "@/components/ContactsTable";
import { getContacts } from "@/data-access/contact/get";
import { Suspense } from "react";
import { auth } from "@/lib/auth";
import { AdminSignIn } from "@/components/AdminSignIn";
import { AdminEmail } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Admin Console",
  robots: { follow: false, index: false },
};

export default async function Admin() {
  const session = await auth();
  if (!session) return <AdminSignIn />;

  if (session.user?.email !== AdminEmail)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <p>You are not authorized to see Contacts!</p>
      </div>
    );

  const contactsPromise = getContacts();

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
