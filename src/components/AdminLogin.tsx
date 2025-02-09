"use client";

import { Contact } from "@prisma/client";
import { Input } from "@heroui/input";
import { useState } from "react";

export default function AdminLogin({ myPassowrd, contacts }: { myPassowrd: string; contacts: Contact[] }) {
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
  );
}
