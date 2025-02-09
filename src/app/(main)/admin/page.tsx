import AdminLogin from "@/components/AdminLogin";
import { getAllContacts } from "@/src/lib/prisma/actions";
import type { Metadata } from "next";

export default async function Admin() {
  const contacts = await getAllContacts();
  return (
    <main className="mt-24 flex min-h-svh flex-col items-center justify-start px-36">
      <AdminLogin myPassowrd={process.env.NEXT_SECRET_ADMIN_PASSWORD} contacts={contacts} />
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
