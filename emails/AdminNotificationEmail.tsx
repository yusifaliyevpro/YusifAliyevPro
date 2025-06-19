import { BASE_URL } from "@/lib/constants";
import { Button, Head, Heading, Html, Preview, Section, Tailwind, Text } from "@react-email/components";

import { EmailFooter } from "./EmailFooter";
import { EmailHeader } from "./EmailHeader";

type TNotificationEmailTemplate = {
  description: string;
  name: string;
};
export default function AdminNotificationEmail({
  description = "Layihə Haqqında Məlumat",
  name = "John Doe",
}: TNotificationEmailTemplate) {
  return (
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
        <Section>
          <Section className="text-center">
            <Text className="my-4 text-lg font-semibold leading-7 text-blue-600">Yeni Kontakt</Text>
            <Heading as="h1" className="m-0 mt-2 text-4xl font-semibold leading-9 text-gray-900">
              {name}
            </Heading>
            <Text className="text-base leading-6 text-gray-500 lg:px-20">{description}</Text>
            <Button
              className="mt-4 rounded-lg bg-blue-600 px-10 py-3 font-semibold text-white"
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
}
