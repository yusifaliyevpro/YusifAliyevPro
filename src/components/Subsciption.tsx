"use client";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { FormEventHandler, startTransition, useActionState, useEffect } from "react";
import { subscribe } from "@/lib/email/actions";
import { AiOutlineLoading } from "react-icons/ai";
import { addToast } from "@heroui/toast";

export default function SubscribeComponent() {
  const [state, formAction, isPending] = useActionState(subscribe, initialState);
  function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    startTransition(() => formAction(formData));
  }

  useEffect(() => {
    if (state.success) addToast({ title: "Müvəffəqiyətlə abunə oldunuz!", description: "Emailinizi yoxlayın!", color: "success" });
  }, [state]);

  return (
    <div className="w-full px-36">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="my-20 flex flex-row items-start justify-between space-y-8 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-300 p-10 shadow-large"
      >
        <div className="flex flex-col items-center space-y-10">
          <div className="flex flex-row space-x-6">
            <Input
              variant="faded"
              name="firstName"
              id="firstName"
              type="text"
              label="Ad"
              placeholder="Yusif"
              labelPlacement="outside"
              classNames={{ label: "text-white" }}
              size="md"
              isInvalid={!!state.errors?.firstName?.length}
              errorMessage={state.errors?.firstName}
            />
            <Input
              variant="faded"
              name="lastName"
              id="lastName"
              type="text"
              labelPlacement="outside"
              label="Soyad"
              placeholder="Aliyev"
              size="md"
              isInvalid={!!state.errors?.lastName?.length}
              errorMessage={state.errors?.lastName}
            />
          </div>
          <Input
            variant="faded"
            name="email"
            id="email"
            type="email"
            labelPlacement="outside"
            label="Email"
            placeholder="example@gmail.com"
            size="md"
            isInvalid={!!state.errors?.email?.length}
            errorMessage={state.errors?.email}
          />
          <Button
            color="primary"
            isDisabled={isPending || state.success}
            type="submit"
            className="w-64 bg-white text-base font-bold text-black"
          >
            {isPending ? <AiOutlineLoading className="size-4 animate-spin" /> : state.success ? "Göndərildi!" : "Təsdiqlə"}
          </Button>
        </div>
        <div className="flex w-full flex-col items-center space-y-5 text-white">
          <h3 className="text-4xl">Bülletenə Abunə ol</h3>
          <p>UI yaxşılaşdırılacaq, funksionaldır</p>
        </div>
      </form>
    </div>
  );
}

const initialState = {
  success: false,
  errors: {
    firstName: [],
    lastName: [],
    email: [],
  },
};
