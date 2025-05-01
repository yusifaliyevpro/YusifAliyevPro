"use client";

import type { Contact } from "../prisma/client";

import { Chip } from "@heroui/chip";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";
import { addToast, closeAll } from "@heroui/toast";
import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import { deleteContact, updateIsCaledInfo } from "../lib/prisma/actions";

export default function ContactsTable({ contacts }: { contacts: Contact[] }) {
  const router = useRouter();
  const calledIDs = contacts.filter((c) => c.isCalled).map((c) => c.id);

  const handleUpdate = (contact: Contact) => {
    addToast({ timeout: Infinity, title: "Updating Contact..." });
    updateIsCaledInfo(contact.id, contact.isCalled).then(() => {
      closeAll();
      addToast({ color: "success", title: "Contact updated successfully!" });
    });
    router.refresh();
  };

  const handleDelete = (contact: Contact) => {
    addToast({ timeout: Infinity, title: "Deleting Contact..." });
    deleteContact(contact.id).then(() => {
      closeAll();
      addToast({ color: "success", title: "Contact deleted successfully!" });
    });
    router.refresh();
  };
  const columns = [
    { key: "fullName", label: "Full Name" },
    { key: "date", label: "Date" },
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone Number" },
    { key: "whatsapp", label: "Whatsapp" },
    { key: "description", label: "Description" },
    { key: "actions", label: "Actions" },
  ];
  return (
    <Table
      aria-label="User management table"
      color="primary"
      disabledKeys={calledIDs}
      classNames={{
        wrapper: "min-h-[400px]",
      }}
    >
      <TableHeader columns={columns}>{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}</TableHeader>
      <TableBody items={contacts}>
        {(contact) => (
          <TableRow key={contact.id}>
            <TableCell>{contact.fullName}</TableCell>
            <TableCell>{contact.createdAt.toDateString()}</TableCell>
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
            <TableCell className="flex flex-row space-x-3">
              <TiTick
                className={`cursor-pointer text-2xl ${contact.isCalled ? "text-danger" : "text-success"}`}
                onClick={() => handleUpdate(contact)}
              />
              <MdDeleteOutline className={`cursor-pointer text-2xl text-danger`} onClick={() => handleDelete(contact)} />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
