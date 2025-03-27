import { BASE_URL } from "@/src/lib/constants";
import { Column, Head, Heading, Html, Img, Preview, Row, Section, Tailwind, Text } from "@react-email/components";

import { EmailFooter } from "./Footer";
import { EmailHeader } from "./Header";

type WelcomeEmailTemplate = {
  firstName: string;
  lastName: string;
};

export const WelcomeEmailTemplate = ({ firstName, lastName }: WelcomeEmailTemplate) => (
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
      <Preview>Paylaşdığım postlar və yeni layihələr haqqda xəbərdar olmaq üçün tez-tez emailinizi yoxlamağı unutmayın!</Preview>
      <EmailHeader />
      <Section className="my-[16px]">
        <Row>
          <Column align="center">
            <Img
              alt="Thank You"
              className="w-full rounded-[12px] object-cover filter-none lg:w-5/6"
              height="320"
              src={`${BASE_URL}/email/Thank-You.jpg`}
              style={{ filter: "none" }}
            />
          </Column>
        </Row>
        <Section className="mt-[32px] text-center">
          <Heading as="h1" className="m-0 mb-[24px] mt-[6px] text-[36px] font-semibold leading-[36px] text-[#007bff]">
            {firstName} {lastName}
          </Heading>
          <Heading as="h1" className="m-0 mt-[8px] text-[36px] font-semibold leading-[36px] text-gray-900">
            Bülletenə abunə olduğunuz üçün Təşəkkürlər!
          </Heading>
          <Text className="my-[5px] text-[20px] leading-[24px] text-gray-500 lg:px-[80px]">
            Paylaşdığım postlar və yeni layihələr haqqda xəbərdar olmaq üçün tez-tez emailinizi yoxlamağı unutmayın!
          </Text>
        </Section>
      </Section>
      <EmailFooter />
    </Tailwind>
  </Html>
);
