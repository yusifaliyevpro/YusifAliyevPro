"use client";
import { addEmailAction } from "@/lib/actions";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

export default function AddEmail() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <Input
        type="email"
        variant="bordered"
        placeholder="Enter your email"
        className="w-80"
        value={email}
        onValueChange={setEmail}
        endContent={
          <Button
            isIconOnly
            onClick={() => {
              addEmailAction(email);
              setEmail("");
            }}
            color="primary"
          >
            <TiTick className="text-2xl" />
          </Button>
        }
      />
    </div>
  );
}
