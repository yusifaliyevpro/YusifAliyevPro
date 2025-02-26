"use client";

import { Contact } from "@prisma/client";
import { Chip } from "@heroui/chip";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { FaWhatsapp } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { deleteContact } from "../lib/prisma/actions";
import { addToast } from "@heroui/toast";

export default function ContactsTable({ contacts }: { contacts: Contact[] }) {
  const router = useRouter();
  const calledIDs = contacts.map((c) => {
    if (c.isCalled) return c.id;
  });

  const handleDelete = (id: string) => {
    addToast({ title: "Deleting Contact...", timeout: 1000 });
    deleteContact(id).then(() => addToast({ title: "Contact deleted successfully!", color: "success" }));
    router.refresh();
  };
  return (
    <Table
      aria-label="User management table"
      classNames={{
        wrapper: "min-h-[400px]",
      }}
      color="primary"
      disabledKeys={calledIDs}
    >
      <TableHeader>
        <TableColumn>FULL NAME</TableColumn>
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
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>
              <Chip
                startContent={contact.hasWhatsApp && <FaWhatsapp className="text-lg text-green-500" />}
                color={contact.hasWhatsApp ? "success" : "danger"}
                variant="flat"
                isDisabled={calledIDs.includes(contact.id)}
              >
                {contact.hasWhatsApp ? "Yes" : "No"}
              </Chip>
            </TableCell>
            <TableCell className="max-w-xs">
              <p className="truncate">{contact.description}</p>
            </TableCell>
            <TableCell>
              <MdDeleteOutline onClick={() => handleDelete(contact.id)} className="cursor-pointer text-2xl text-danger" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
