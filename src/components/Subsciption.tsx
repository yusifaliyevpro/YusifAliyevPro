"use client";

import InputErrors from "./InputErrors";
import { subscribe } from "@/lib/email/actions";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { addToast } from "@heroui/toast";
import { FormEvent, startTransition, useActionState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const initialState = { success: false, errors: { fullName: [], email: [] } };

export default function SubscribeComponent() {
  const [state, formAction, isPending] = useActionState(subscribe, initialState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    startTransition(() => formAction(formData));
  };

  useEffect(() => {
    if (state.success)
      addToast({ title: "Müvəffəqiyətlə abunə oldunuz!", description: "Emailinizi yoxlayın!", color: "success" });
  }, [state]);

  return (
    <div className="w-full px-5 lg:w-2/5" id="subscription">
      <form
        noValidate
        className="my-10 overflow-hidden rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-300 shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-8 lg:p-10">
            {/* <div className="mb-2 flex items-center">
              <FiMail className="mr-2 text-white" size={24} />
              <span className="text-sm font-semibold uppercase tracking-wider text-white">Email Abunəliyi</span>
            </div> */}
            <div className="mb-4 flex items-center justify-center space-x-3">
              <FiMail className="size-9 text-white" size={24} />
              <h3 className="text-center text-3xl font-bold text-white md:text-4xl">Email Abunəliyi</h3>
            </div>
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-white" htmlFor="fullName">
                  Adınız
                </label>
                <Input
                  fullWidth
                  errorMessage={<InputErrors errors={state.errors?.fullName} />}
                  id="fullName"
                  isInvalid={!!state.errors?.fullName?.length}
                  name="fullName"
                  placeholder="Yusif Aliyev"
                  size="lg"
                  type="text"
                  classNames={{
                    input:
                      "border-white/30 !bg-white/10 placeholder:!text-white/60 autofill:!text-white group-data-[has-value=true]:!text-white",
                    errorMessage: "text-white",
                    inputWrapper:
                      "!bg-white/10 hover:!bg-white/10 group-data-[data-focus-within=true]:!bg-white/10 group-data-[data-invalid=true]:!bg-white/10 group-data-[focus=true]:!bg-white/10 group-data-[hover=true]:!bg-white/10",
                  }}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white" htmlFor="email">
                  Email ünvanınız
                </label>
                <div className="flex">
                  <Input
                    fullWidth
                    errorMessage={<InputErrors errors={state.errors?.email} />}
                    id="email"
                    isInvalid={!!state.errors?.email?.length}
                    name="email"
                    placeholder="example@gmail.com"
                    size="lg"
                    type="email"
                    classNames={{
                      input:
                        "!border-white/30 !bg-white/10 placeholder:!text-white/60 autofill:!text-white group-data-[has-value=true]:!text-white",
                      errorMessage: "text-white",
                      inputWrapper:
                        "rounded-r-none !bg-white/10 hover:!bg-white/10 group-data-[focus=true]:!bg-white/10 group-data-[hover=true]:!bg-white/10",
                    }}
                  />
                  <Button
                    className="rounded-l-none bg-white font-bold text-blue-600 hover:bg-blue-50"
                    isDisabled={isPending || state.success}
                    size="lg"
                    type="submit"
                  >
                    {isPending ? (
                      <AiOutlineLoading className="size-4 animate-spin" />
                    ) : state.success ? (
                      "Göndərildi!"
                    ) : (
                      "Abunə ol"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="hidden bg-gradient-to-br from-indigo-500/20 to-blue-700/40 backdrop-blur-sm lg:block lg:w-2/5">
            <div className="h-full w-full overflow-hidden opacity-20">
              <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRIMjV2MTBIMzZ6TTE5LjUtOC41aDEwdjEwaC0xMHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
            </div>
          </div> */}
        </div>
      </form>
    </div>
  );
}

export function SubscribeButton() {
  return (
    <a href="#subscription">
      <Button isIconOnly color="primary">
        <FaRegBell className="size-5" />
      </Button>
    </a>
  );
}
