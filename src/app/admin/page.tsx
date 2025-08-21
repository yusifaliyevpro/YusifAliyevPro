import ContactsTable from "@/components/ContactsTable";
import { getContacts } from "@/data-access/contact/get";
import { Suspense } from "react";
import { auth } from "@/lib/auth";
import { AdminSignIn } from "@/components/AdminSignIn";
import { Skeleton } from "@/components/Skeleton";
import { checkIsAdmin } from "@/lib/utils";

export default async function Admin() {
  const session = await auth();
  if (!session) return <AdminSignIn />;
  const isAdmin = checkIsAdmin(session);

  if (!isAdmin)
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
        <Suspense fallback={<Skeleton className="h-100 w-full rounded-2xl" />}>
          <ContactsTable contactsPromise={contactsPromise} />
        </Suspense>
      </div>
    </main>
  );
}
