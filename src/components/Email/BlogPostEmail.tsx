import { BASE_URL } from "@/lib/constants";
import { Button, Column, Head, Heading, Html, Img, Preview, Row, Section, Tailwind, Text } from "@react-email/components";

import { EmailFooter } from "./Footer";
import { EmailHeader } from "./Header";

type TPostEmailTemplate = {
  description: string;
  poster: string | null;
  slug: string;
  title: string;
};
export const BlogPostEmail = ({ description, poster, slug, title }: TPostEmailTemplate) => (
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
      <Section className="mb-[32px] text-center text-[36px] font-semibold leading-[36px]">
        Salam 👋<span className="text-[#007bff]">{" {{{FIRST_NAME}}} {{{LAST_NAME}}}"}</span>
      </Section>
      <Section className="my-[16px]">
        {poster && (
          <Row>
            <Column align="center">
              <Img
                alt={title}
                className="w-full rounded-[12px] object-cover filter-none lg:w-5/6"
                height="320"
                src={poster}
                style={{ filter: "none" }}
              />
            </Column>
          </Row>
        )}
        <Section className="mt-[32px] text-center">
          <Text className="my-[16px] text-[18px] font-semibold leading-[28px] text-blue-600">Yeni Bloq Post</Text>
          <Heading as="h1" className="m-0 mt-[8px] text-[36px] font-semibold leading-[36px] text-gray-900">
            {title}
          </Heading>
          <Text className="text-[16px] leading-[24px] text-gray-500 lg:px-[80px]">{description}</Text>
          <Button
            className="mt-[16px] rounded-[8px] bg-blue-600 px-[40px] py-[12px] font-semibold text-white"
            href={`${BASE_URL}/blog/${slug}`}
          >
            Daha çox oxu
          </Button>
        </Section>
      </Section>
      {/* Footer */}
      <EmailFooter />
    </Tailwind>
  </Html>
);
