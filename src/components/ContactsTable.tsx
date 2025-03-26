"use client";

import { setIsCalled } from "../lib/prisma/actions";
import { Chip } from "@heroui/chip";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { addToast, closeAll } from "@heroui/toast";
import { Contact } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export default function ContactsTable({ contacts }: { contacts: Contact[] }) {
  const router = useRouter();
  const calledIDs = contacts.map((c) => c.isCalled && c.id);

  const handleUpdate = (contact: Contact) => {
    addToast({ title: "Updating Contact...", timeout: Infinity });
    setIsCalled(contact.id, contact.isCalled).then(() => {
      closeAll();
      addToast({ title: "Contact updated successfully!", color: "success" });
    });
    router.refresh();
  };
  return (
    <Table
      aria-label="User management table"
      color="primary"
      disabledKeys={calledIDs}
      classNames={{
        wrapper: "min-h-[400px]",
      }}
    >
      <TableHeader>
        <TableColumn>FULL NAME</TableColumn>
        <TableColumn>DATE</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>PHONE NUMBER</TableColumn>
        <TableColumn>WHATSAPP</TableColumn>
        <TableColumn>DESCRIPTION</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>{contact.fullName}</TableCell>
            <TableCell>{contact.createdAt.toLocaleDateString("az-AZ")}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>
              <Chip
                color={contact.hasWhatsApp ? "success" : "danger"}
                isDisabled={calledIDs.includes(contact.id)}
                startContent={contact.hasWhatsApp && <FaWhatsapp className="text-lg text-green-500" />}
                variant="flat"
              >
                {contact.hasWhatsApp ? "Yes" : "No"}
              </Chip>
            </TableCell>
            <TableCell className="max-w-xs">
              <p className="truncate">{contact.description}</p>
            </TableCell>
            <TableCell>
              <TiTick
                className={`cursor-pointer text-2xl ${contact.isCalled ? "text-danger" : "text-success"}`}
                onClick={() => handleUpdate(contact)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
