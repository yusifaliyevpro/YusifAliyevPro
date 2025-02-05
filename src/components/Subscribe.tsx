"use client";
import { Button } from "@heroui/button";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { Input } from "@heroui/input";
import { useState } from "react";
import { subscribe } from "../lib/actions";
import { AiOutlineLoading } from "react-icons/ai";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Subscribe() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isPending, setisPending] = useState(false);
  const [subsribed, setSubscribed] = useState(false);
  const validateEmail = (value: string) =>
    value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  async function handleSubmit() {
    if (!validateEmail(email)) setEmailError("Emaili düzgün daxil edin!");
    else {
      setEmailError("");
      setisPending(true);
      const subscription = await subscribe(firstName, lastName, email);
      if (!subscription.error) setSubscribed(true);
    }
  }
  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        className="mt-5 text-base lg:mt-0"
      >
        <IoNotificationsOutline className="size-5" />{" "}
        <span className="hidden lg:flex">Abunə ol</span>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="opaque"
        className="z-[10000]"
        classNames={{
          backdrop: "z-[9999]",
          base: "z-[10000]",
          wrapper: "z-[10000]",
        }}
      >
        <ModalContent>
          {subsribed ? (
            <div className="my-10 flex flex-col items-center space-y-8">
              <DotLottieReact src="/Success.lottie" autoplay />
              <p className="text-lg">Abunə olundu! Emailinizi yoxlayın</p>
            </div>
          ) : (
            <>
              <ModalHeader className="flex flex-col items-center gap-1 text-2xl">
                Abunə ol
              </ModalHeader>
              <ModalBody className="flex flex-col items-center space-y-8">
                <div className="flex flex-row space-x-6">
                  <Input
                    variant="bordered"
                    name="firstName"
                    type="text"
                    label="Ad"
                    placeholder="Yusif"
                    labelPlacement="outside"
                    color="primary"
                    size="md"
                    value={firstName}
                    onValueChange={setFirstName}
                  />
                  <Input
                    variant="bordered"
                    name="lastName"
                    type="text"
                    color="primary"
                    labelPlacement="outside"
                    label="Soyad"
                    placeholder="Aliyev"
                    size="md"
                    value={lastName}
                    onValueChange={setLastName}
                  />
                </div>
                <Input
                  variant="bordered"
                  name="email"
                  type="email"
                  color="primary"
                  labelPlacement="outside"
                  label="Email"
                  placeholder="example@gmail.com"
                  size="md"
                  value={email}
                  isInvalid={emailError !== ""}
                  errorMessage={emailError}
                  onValueChange={setEmail}
                />
                {isPending ? (
                  <Button
                    color="primary"
                    className="w-2/3 text-base"
                    onPress={handleSubmit}
                  >
                    <AiOutlineLoading className="size-4 animate-spin" />
                  </Button>
                ) : (
                  <Button
                    color="primary"
                    className="w-2/3 text-base"
                    onPress={handleSubmit}
                  >
                    Təsdiqlə
                  </Button>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
