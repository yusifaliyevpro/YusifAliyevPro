"use client";
import { cn } from "@/lib/cn";
import { Input } from "@nextui-org/react";
import { Contact } from "@prisma/client";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export default function AdminLogin({
  myPassowrd,
  contacts,
}: {
  myPassowrd: string;
  contacts: Contact[];
}) {
  const [password, setPassword] = useState("");
  return (
    <>
      {myPassowrd !== process.env.NEXT_SECRET_ADMIN_PASSWORD ? (
        <div className="flex flex-col rounded-2xl p-8 py-12 shadow-large">
          <Input
            placeholder="Enter Admin Password"
            label="Admin Login"
            type="password"
            className="w-72"
            value={password}
            onValueChange={setPassword}
            labelPlacement="outside"
          />
        </div>
      ) : (
        <div className="flex min-h-[80svh] w-full flex-col gap-y-3 rounded-2xl p-7 shadow-large">
          <h1 className="w-full text-center text-2xl font-bold">Admin Panel</h1>
          <table className="*:border-1" border={1}>
            <tr className="*:border-1">
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Has Whathsap?</th>
              <th className="w-44">Description</th>
            </tr>
            {contacts.map((contact) => (
              <tr
                key={contact.id}
                className={cn("*:border-1 *:py-1", {
                  "*:font-bold": !contact.isCalled,
                })}
              >
                <td>{contact.fullName}</td>
                <td>{contact.email}</td>
                <td className="text-nowrap">{contact.phone}</td>
                <td>
                  {contact.hasWhatsApp ? (
                    <FaWhatsapp className="text-2xl text-green-500" />
                  ) : (
                    <IoCall className="text-2xl text-blue-500" />
                  )}
                </td>
                <td className="line-clamp-1 w-44 truncate border-none">
                  {contact.description}
                </td>
              </tr>
            ))}
          </table>
          {/* {contacts.map((contact) => (
            <div className="flex flex-row gap-x-5 overflow-x-scroll scrollbar-hide">
              <p className="min-w-32 text-nowrap">{contact.fullName}</p>
              <p>{contact.email}</p>
              <p>{contact.description}</p>
            </div>
          ))} */}
        </div>
      )}
    </>
  );
}
