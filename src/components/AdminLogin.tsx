"use client";
import { Button } from "@heroui/button";
import { Contact } from "@prisma/client";
import { sendEmail } from "../lib/actions";
import { BLOGS_QUERYResult } from "@/sanity.types";

export default function AdminLogin({
  // myPassowrd,
  // contacts,
  blogs,
}: {
  myPassowrd: string;
  contacts: Contact[];
  blogs: BLOGS_QUERYResult;
}) {
  return (
    <main className="flex size-full min-h-svh flex-col items-center justify-center">
      <section className="flex size-full min-h-72 flex-col items-center justify-center space-y-10 rounded-2xl shadow-medium">
        {blogs.map((blog, i) => (
          <div key={i} className="flex flex-row items-center gap-x-10">
            <p>{blog.title}</p>
            <Button color="primary" onPress={() => sendEmail(blog.slug)}>
              Send Email
            </Button>
          </div>
        ))}
      </section>
    </main>
  );
}
