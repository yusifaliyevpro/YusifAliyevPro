import { BASE_URL } from "@/src/lib/constants";
import {
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { EmailFooter } from "./EmailFooter";
import { EmailHeader } from "./EmailHeader";

type TWelcomeEmail = {
  firstName: string;
  lastName: string;
};

export default function WelcomeEmail({ firstName, lastName }: TWelcomeEmail) {
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
        <Preview>
          Paylaşdığım postlar və yeni layihələr haqqda xəbərdar olmaq üçün tez-tez emailinizi yoxlamağı
          unutmayın!
        </Preview>
        <EmailHeader />
        <Section className="my-4">
          <Row>
            <Column align="center">
              <Img
                alt="Thank You"
                className="w-full rounded-xl object-cover filter-none lg:w-5/6"
                height="320"
                src={`${BASE_URL}/email/Thank-You.jpg`}
                style={{ filter: "none" }}
              />
            </Column>
          </Row>
          <Section className="mt-8 text-center">
            <Heading as="h1" className="m-0 mb-6 mt-2 text-4xl font-semibold leading-9 text-[#007bff]">
              {firstName} {lastName}
            </Heading>
            <Heading as="h1" className="m-0 mt-2 text-3xl font-semibold leading-9 text-gray-900">
              Abunə olduğunuz üçün Təşəkkürlər!
            </Heading>
            <Text className="my-5 text-xl leading-6 text-gray-500 lg:px-20">
              Paylaşdığım postlar və yeni layihələr haqqda xəbərdar olmaq üçün tez-tez emailinizi yoxlamağı
              unutmayın!
            </Text>
          </Section>
        </Section>
        <EmailFooter />
      </Tailwind>
    </Html>
  );
}
