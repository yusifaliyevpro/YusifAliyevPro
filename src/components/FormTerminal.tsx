"use client";

import { Input } from "@/components/Terminal/Input";
import { cn } from "@/lib/cn";
import { createContact } from "../data-access/contact/actions";
import { Button } from "@heroui/button";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

import { notifyAdmin } from "../data-access/resend/notifyAdmin";
import { BooleanInput } from "./Terminal/BooleanInput";

export default function FormTerminal() {
  const [fullName, setFullName] = useState("");
  const [isEnteredFullName, setIsEnteredFullName] = useState(false);
  const [email, setEmail] = useState("");
  const [isEnteredEmail, setIsEnteredEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [isEnteredPhone, setIsEnteredPhone] = useState(false);
  const [hasWhatsApp, setHasWhatsApp] = useState(false);
  const [isEnteredHasWhatsApp, setIsEnteredHasWhatsApp] = useState(false);
  const [description, setDescription] = useState("");
  const [isEnteredDescription, setIsEnteredDescription] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [message, setMessage] = useState("");

  const clearAll = () => {
    setFullName("");
    setIsEnteredFullName(false);
    setEmail("");
    setIsEnteredEmail(false);
    setPhone("");
    setIsEnteredPhone(false);
    setHasWhatsApp(false);
    setIsEnteredHasWhatsApp(false);
    setDescription("");
    setIsEnteredDescription(false);
    setMessage("");
  };

  const handleSubmit = async () => {
    setIsSending(true);
    const formData = { description, email, fullName, hasWhatsApp, phone };
    const contact = await createContact(formData);
    if (contact) {
      await notifyAdmin({ description: contact.description, name: contact.fullName });
      setIsSending(false);
      setMessage("Thank you for reaching out✨. I will get back to you as soon as possible! 🚀");
    } else {
      setMessage("An error occurred! Please try again.");
    }
  };

  return (
    <form className="z-10 w-full rounded-3xl bg-slate-200/90 shadow-large backdrop-blur-3xl lg:font-mono">
      <header className="flex w-full flex-row items-center justify-between rounded-t-3xl bg-slate-300/90 px-4 backdrop-blur-3xl">
        <div className="flex flex-row gap-x-2 py-4">
          <span className="size-3 rounded-full bg-red-500"></span>
          <span className="size-3 rounded-full bg-yellow-500"></span>
          <span className="size-3 rounded-full bg-green-500"></span>
        </div>
        <p>Contact</p>
        <p className="w-12"></p>
      </header>
      <div className="flex min-h-[22rem] flex-col overflow-y-scroll p-3 scrollbar-hide">
        <p>Well then, your project sounds very interesting to me✨</p>
        <span className="mr-2 overflow-hidden text-nowrap pb-3">
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
        </span>
        <div className="flex flex-col gap-y-3 transition-all">
          <Input
            inputPlaceholder="Yusif Aliyev"
            isEntered={isEnteredFullName}
            isPreviousEntered={true}
            name="Full Name"
            placeholder="Full Name:"
            setIsEntered={setIsEnteredFullName}
            setValue={setFullName}
            value={fullName}
            title={
              <>
                To get started, could you write your <span className="text-blue-600">full name</span>?
              </>
            }
          />
          <Input
            inputPlaceholder="example@gmail.com"
            isEntered={isEnteredEmail}
            isPreviousEntered={isEnteredFullName}
            name="Email"
            placeholder="Email:"
            setIsEntered={setIsEnteredEmail}
            setValue={setEmail}
            value={email}
            title={
              <>
                Great! Could you write your <span className="text-blue-600">email</span>?📧
              </>
            }
          />
          <Input
            inputPlaceholder="+994 00 000 00 00"
            isEntered={isEnteredPhone}
            isPreviousEntered={isEnteredEmail}
            name="Phone Number"
            placeholder="Phone Number:"
            setIsEntered={setIsEnteredPhone}
            setValue={setPhone}
            value={phone}
            title={
              <>
                Awesome! Please enter your <span className="text-blue-600">phone number</span> so I can
                contact you📞
              </>
            }
          />
          <BooleanInput
            isEntered={isEnteredHasWhatsApp}
            isPreviousEntered={isEnteredPhone}
            name="WhatsApp?"
            placeholder="Available?:"
            setIsEntered={setIsEnteredHasWhatsApp}
            setValue={setHasWhatsApp}
            value={hasWhatsApp}
            title={
              <>
                Great! Does this number have <span className="text-blue-600">WhatsApp</span>?📲
              </>
            }
          />
          <Input
            inputPlaceholder="My project is about..."
            isEntered={isEnteredDescription}
            isPreviousEntered={isEnteredHasWhatsApp}
            name="Description"
            placeholder="A short description:"
            setIsEntered={setIsEnteredDescription}
            setValue={setDescription}
            title={"One last question! What is your project about?🤔"}
            value={description}
          />
          <p
            className={cn("text-lg font-bold", {
              "sr-only": !isEnteredDescription,
            })}
          >
            Is everything correct?✅
          </p>
          <div
            className={cn("flex flex-row gap-x-3", {
              "sr-only": !isEnteredDescription || message,
            })}
          >
            <Button
              className="text-base font-bold text-slate-800"
              color="warning"
              radius="sm"
              onPress={clearAll}
            >
              Restart Form
            </Button>
            <Button className="text-base font-bold" color="primary" radius="sm" onPress={handleSubmit}>
              {isSending ? <AiOutlineLoading className="animate-spin text-2xl" /> : "Send!"}
            </Button>
          </div>

          {message && (
            <p
              className={cn({
                "text-blue-600": message.startsWith("Ə"),
                "text-red-600": message.startsWith("X"),
              })}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
