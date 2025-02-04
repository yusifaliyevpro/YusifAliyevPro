import AdminLogin from "@/components/AdminLogin";
import { getAllContacts } from "@/src/lib/actions";
import { getBlogs } from "@/src/lib/utils";
import type { Metadata } from "next";

export default async function Admin() {
  const contacts = await getAllContacts();
  const blogs = await getBlogs({ isEnabled: false });
  return (
    <main className="mt-24 flex min-h-svh flex-col items-center justify-start px-36">
      <AdminLogin
        myPassowrd={process.env.NEXT_SECRET_ADMIN_PASSWORD}
        contacts={contacts}
        blogs={blogs}
      />
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
