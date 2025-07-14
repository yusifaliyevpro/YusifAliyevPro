"use client";

import { addSubscriber } from "@/data-access/resend/subscribe";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { type FormEvent, startTransition, useActionState, useEffect, useRef } from "react";
import { FiMail } from "react-icons/fi";

const initialState = {
  success: false,
  data: { fullName: "", email: "" },
  errors: {},
};

export default function SubscribeComponent() {
  const [state, formAction, isPending] = useActionState(addSubscriber, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  };

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
      addToast({
        color: "success",
        description: "Check your email!",
        title: "Successfully subscribed!",
      });
    }
  }, [state]);

  return (
    <div className="w-full px-5 lg:w-2/5" id="subscription">
      <form
        ref={formRef}
        noValidate
        className="my-10 overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-300 shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-8 lg:p-10">
            <div className="mb-4 flex items-center justify-center space-x-3">
              <FiMail className="size-9 text-white" size={24} />
              <h3 className="text-center text-3xl font-bold text-white md:text-4xl">Email Subscription</h3>
            </div>
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-white" htmlFor="fullName">
                  Full Name
                </label>
                <Input
                  fullWidth
                  errorMessage={state.errors?.fullName}
                  id="fullName"
                  isInvalid={!!state.errors?.fullName}
                  name="fullName"
                  placeholder="Yusif Aliyev"
                  size="lg"
                  type="text"
                  defaultValue={state.data.fullName}
                  classNames={{
                    errorMessage: "text-white",
                    input:
                      "border-white/30 !bg-white/10 placeholder:!text-white/60 autofill:!text-white group-data-[has-value=true]:!text-white",
                    inputWrapper:
                      "!bg-white/10 hover:!bg-white/10 group-data-[data-focus-within=true]:!bg-white/10 group-data-[data-invalid=true]:!bg-white/10 group-data-[focus=true]:!bg-white/10 group-data-[hover=true]:!bg-white/10",
                  }}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white" htmlFor="email">
                  Email
                </label>
                <div className="flex">
                  <Input
                    fullWidth
                    errorMessage={state.errors?.email}
                    id="email"
                    isInvalid={!!state.errors?.email}
                    name="email"
                    placeholder="example@gmail.com"
                    size="lg"
                    type="email"
                    defaultValue={state.data.email}
                    classNames={{
                      errorMessage: "text-white",
                      input:
                        "!border-white/30 !bg-white/10 placeholder:!text-white/60 autofill:!text-white group-data-[has-value=true]:!text-white",
                      inputWrapper:
                        "rounded-r-none !bg-white/10 hover:!bg-white/10 group-data-[focus=true]:!bg-white/10 group-data-[hover=true]:!bg-white/10",
                    }}
                  />
                  <Button
                    className="rounded-l-none bg-white font-bold text-blue-600 hover:bg-blue-50"
                    isDisabled={isPending || state.success}
                    isLoading={isPending}
                    size="lg"
                    type="submit"
                  >
                    {!isPending && (state.success ? "Sent!" : "Subscribe")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
