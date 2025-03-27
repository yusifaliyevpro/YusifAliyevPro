import { BASE_URL } from "@/lib/constants";
import { Button, Head, Heading, Html, Preview, Section, Tailwind, Text } from "@react-email/components";

import { EmailFooter } from "./Footer";
import { EmailHeader } from "./Header";

type TNotificationEmailTemplate = {
  description: string;
  name: string;
};
export const NotificationEmailTemplate = ({ description, name }: TNotificationEmailTemplate) => (
  <Html dir="ltr" lang="az">
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: "#007bff",
            },
          },
        },
      }}
    >
      <Head />
      <Preview>{description.slice(0, 90)}</Preview>
      <EmailHeader />
      {/* Body */}
      <Section className="my-[16px]">
        <Section className="mt-[32px] text-center">
          <Text className="my-[16px] text-[18px] font-semibold leading-[28px] text-blue-600">Yeni Kontakt</Text>
          <Heading as="h1" className="m-0 mt-[8px] text-[36px] font-semibold leading-[36px] text-gray-900">
            {name}
          </Heading>
          <Text className="text-[16px] leading-[24px] text-gray-500 lg:px-[80px]">{description}</Text>
          <Button
            className="mt-[16px] rounded-[8px] bg-blue-600 px-[40px] py-[12px] font-semibold text-white"
            href={`${BASE_URL}/admin`}
          >
            Admin Console
          </Button>
        </Section>
      </Section>
      {/* Footer */}
      <EmailFooter />
    </Tailwind>
  </Html>
);
