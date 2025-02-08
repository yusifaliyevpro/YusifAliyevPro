"use client";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { startTransition, useActionState } from "react";
import { subscribe, subscribeState } from "../lib/actions";
import { AiOutlineLoading } from "react-icons/ai";

export default function SubscribeComponent() {
  const [state, formAction, isPending] = useActionState(subscribe, initialState);
  function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    startTransition(() => formAction(formData));
  }
  // if (true)
  //   return <div className="my-20 flex flex-col items-center space-y-8 rounded-xl border-3 border-blue-600 p-4">

  //   </div>;
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="my-20 flex flex-col items-center space-y-8 rounded-xl border-3 border-blue-600 p-4"
    >
      <h3 className="text-xl">Bülletenə Abunə ol</h3>
      <div className="flex flex-row space-x-6">
        <Input
          variant="bordered"
          name="firstName"
          id="firstName"
          type="text"
          label="Ad"
          placeholder="Yusif"
          labelPlacement="outside"
          color="primary"
          size="md"
          isInvalid={!!state.errors?.firstName?.length}
          errorMessage={state.errors?.firstName}
        />
        <Input
          variant="bordered"
          name="lastName"
          id="lastName"
          type="text"
          color="primary"
          labelPlacement="outside"
          label="Soyad"
          placeholder="Aliyev"
          size="md"
          isInvalid={!!state.errors?.lastName?.length}
          errorMessage={state.errors?.lastName}
        />
      </div>
      <Input
        variant="bordered"
        name="email"
        id="email"
        type="email"
        color="primary"
        labelPlacement="outside"
        label="Email"
        placeholder="example@gmail.com"
        size="md"
        isInvalid={!!state.errors?.email?.length}
        errorMessage={state.errors?.email}
      />
      <Button color="primary" isDisabled={isPending || state.success} type="submit" className="w-2/3 text-base">
        {isPending ? <AiOutlineLoading className="size-4 animate-spin" /> : state.success ? "Göndərildi!" : "Təsdiqlə"}
      </Button>
      <p className="text-sm text-slate-500">UI yaxşılaşdırılacaq</p>
    </form>
  );
}

const initialState: subscribeState = {
  success: false,
  errors: {
    firstName: [],
    lastName: [],
    email: [],
  },
};
