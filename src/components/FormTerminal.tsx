"use client";

import { createContact } from "../lib/prisma/actions";
import TerminalInput from "./TerminalInput";
import { cn } from "@/lib/cn";
import { Button } from "@heroui/button";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

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
    const formData = { fullName, email, phone, hasWhatsApp, description };
    const { error } = await createContact(formData);

    if (error) {
      setMessage("Xəta baş verdi! Zəhmət olmasa yenidən cəhd edin.");
    } else {
      setIsSending(false);
      setMessage("Əlaqə qurduğunuz üçün təşəkkürlər✨. Ən qısa zamanda geri dönüş edəcəyəm! 🚀");
    }
  };
  return (
    <form className="z-10 w-full rounded-lg bg-slate-200/90 shadow-large backdrop-blur-3xl lg:font-mono">
      <header className="flex w-full flex-row items-center justify-between rounded-t-lg bg-slate-300/90 px-4 py-3 backdrop-blur-3xl">
        <div className="flex flex-row gap-x-2">
          <span className="size-3 rounded-full bg-red-500"></span>
          <span className="size-3 rounded-full bg-yellow-500"></span>
          <span className="size-3 rounded-full bg-green-500"></span>
        </div>
        <p>Əlaqə</p>
        <p className="w-12"></p>
      </header>
      <div className="flex min-h-[22rem] flex-col overflow-y-scroll p-3 scrollbar-hide">
        <p>Elə isə layihən mənə çox maraqlı gəlir✨</p>
        <span className="mr-2 overflow-hidden text-nowrap pb-3">
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
        </span>
        <div className="flex flex-col gap-y-3 transition-all">
          <TerminalInput
            inputPlaceholder="Yusif Aliyev"
            isEntered={isEnteredFullName}
            isPreviousEntered={true}
            name="Ad"
            placeholder="Adın:"
            setIsEntered={setIsEnteredFullName}
            setValue={setFullName}
            value={fullName}
            title={
              <>
                Başlamaq üçün, <span className="text-blue-600">tam adını</span> yaza bilərsən?
              </>
            }
          />
          <TerminalInput
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
                Əla! <span className="text-blue-600">Emailini</span> yaza bilərsən?📧
              </>
            }
          />
          <TerminalInput
            inputPlaceholder="+994 00 000 00 00"
            isEntered={isEnteredPhone}
            isPreviousEntered={isEnteredEmail}
            name="Nömrə"
            placeholder="Nömrə:"
            setIsEntered={setIsEnteredPhone}
            setValue={setPhone}
            value={phone}
            title={
              <>
                Möhtəşəm! <span className="text-blue-600">Nömrəni</span> daxil et ki, əlaqə saxlayım📞
              </>
            }
          />
          <TerminalInput
            isBoolean
            isEntered={isEnteredHasWhatsApp}
            isPreviousEntered={isEnteredPhone}
            name="Whatsapp?"
            placeholder="Var?:"
            setIsEntered={setIsEnteredHasWhatsApp}
            setValue={setHasWhatsApp}
            value={hasWhatsApp}
            title={
              <>
                Super! Bu nömrənin <span className="text-blue-600">WhatsApp</span>-ı var?📲
              </>
            }
          />
          <TerminalInput
            inputPlaceholder="Layihəm bu haqqdadır"
            isEntered={isEnteredDescription}
            isPreviousEntered={isEnteredHasWhatsApp}
            name="Açıqlama"
            placeholder="Kiçik bir açıqlama:"
            setIsEntered={setIsEnteredDescription}
            setValue={setDescription}
            title={"Son bir sual! Layihən nə haqqdadır?🤔"}
            value={description}
          />
          <p
            className={cn("text-lg font-bold", {
              "sr-only": !isEnteredDescription,
            })}
          >
            Hər şey düzdür?✅
          </p>
          <div
            className={cn("flex flex-row gap-x-3", {
              "sr-only": !isEnteredDescription || message,
            })}
          >
            <Button className="text-base font-bold text-slate-800" color="warning" radius="sm" onPress={clearAll}>
              Yenidən başlat
            </Button>
            <Button className="text-base font-bold" color="primary" radius="sm" onPress={handleSubmit}>
              {isSending ? <AiOutlineLoading className="animate-spin text-2xl" /> : "Göndər!"}
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
