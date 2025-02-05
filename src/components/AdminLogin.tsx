"use client";
import { Button } from "@heroui/button";
import { Contact } from "@prisma/client";
import { sendEmail } from "../lib/actions";
import { BLOGS_QUERYResult } from "@/sanity.types";
import { Input } from "@heroui/input";
import { useState } from "react";

export default function AdminLogin({
  myPassowrd,
  // contacts,
  blogs,
}: {
  myPassowrd: string;
  contacts: Contact[];
  blogs: BLOGS_QUERYResult;
}) {
  const [value, setValue] = useState("");
  return myPassowrd !== value ? (
    <Input
      variant="bordered"
      placeholder="Password"
      label="Password"
      labelPlacement="outside"
      className="w-56 pt-40"
      value={value}
      onValueChange={setValue}
      type="password"
    />
  ) : (
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
  );
}
