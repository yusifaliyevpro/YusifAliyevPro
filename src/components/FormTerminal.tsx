"use client";
import { useState } from "react";
import TerminalInput from "./TerminalInput";
import { Button } from "@nextui-org/react";
import { addNewContactWithMe } from "@/lib/actions";
import { cn } from "@/lib/cn";
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
    const { error } = await addNewContactWithMe(
      fullName,
      email,
      phone,
      hasWhatsApp,
      description,
    );

    if (error) {
      setMessage("Xəta baş verdi! Zəhmət olmasa yenidən cəhd edin.");
      return;
    } else {
      setIsSending(false);
      setMessage(
        "Əlaqə qurduğunuz üçün təşəkkürlər✨. Ən qısa zamanda geri dönüş edəcəyəm! 🚀",
      );
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
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
          _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
        </span>
        <div className="flex flex-col gap-y-3 transition-all">
          <TerminalInput
            title={
              <>
                Başlamaq üçün, <span className="text-blue-600">tam adını</span>{" "}
                yaza bilərsən?
              </>
            }
            placeholder="Adın:"
            isPreviousEntered={true}
            isEntered={isEnteredFullName}
            setIsEntered={setIsEnteredFullName}
            setValue={setFullName}
            value={fullName}
            inputPlaceholder="Yusif Aliyev"
            name="Ad"
          />
          <TerminalInput
            title={
              <>
                Əla! <span className="text-blue-600">Emailini</span> yaza
                bilərsən?📧
              </>
            }
            placeholder="Email:"
            isPreviousEntered={isEnteredFullName}
            isEntered={isEnteredEmail}
            setIsEntered={setIsEnteredEmail}
            setValue={setEmail}
            inputPlaceholder="example@gmail.com"
            value={email}
            name="Email"
          />
          <TerminalInput
            title={
              <>
                Möhtəşəm! <span className="text-blue-600">Nömrəni</span> daxil
                et ki, əlaqə saxlayım📞
              </>
            }
            placeholder="Nömrə:"
            inputPlaceholder="+994 00 000 00 00"
            isPreviousEntered={isEnteredEmail}
            isEntered={isEnteredPhone}
            setIsEntered={setIsEnteredPhone}
            setValue={setPhone}
            value={phone}
            name="Nömrə"
          />
          <TerminalInput
            title={
              <>
                Super! Bu nömrənin{" "}
                <span className="text-blue-600">WhatsApp</span>-ı var?📲
              </>
            }
            placeholder="Var?:"
            isPreviousEntered={isEnteredPhone}
            isEntered={isEnteredHasWhatsApp}
            setIsEntered={setIsEnteredHasWhatsApp}
            setValue={setHasWhatsApp}
            value={hasWhatsApp}
            isBoolean
            name="Whatsapp?"
          />
          <TerminalInput
            title={"Son bir sual! Layihən nə haqqdadır?🤔"}
            placeholder="Kiçik bir açıqlama:"
            isPreviousEntered={isEnteredHasWhatsApp}
            isEntered={isEnteredDescription}
            setIsEntered={setIsEnteredDescription}
            setValue={setDescription}
            value={description}
            name="Açıqlama"
            inputPlaceholder="Layihəm bu haqqdadır"
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
            <Button
              color="warning"
              className="text-base font-bold text-slate-800"
              onClick={clearAll}
              radius="sm"
            >
              Yenidən başlat
            </Button>
            <Button
              radius="sm"
              color="primary"
              className="text-base font-bold"
              onClick={handleSubmit}
            >
              {isSending ? (
                <AiOutlineLoading className="animate-spin text-2xl" />
              ) : (
                "Göndər!"
              )}
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
