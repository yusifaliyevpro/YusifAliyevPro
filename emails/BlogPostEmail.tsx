import { BASE_URL } from "@/lib/constants";
import { Button, Column, Head, Heading, Html, Img, Preview, Row, Section, Tailwind, Text } from "@react-email/components";

import { EmailFooter } from "./EmailFooter";
import { EmailHeader } from "./EmailHeader";

type TPostEmail = {
  description: string;
  poster: string | null;
  slug: string;
  title: string;
};

export default function BlogPostEmail({
  description = "Bugün sizlərlə yeni hazırladığım Kofe.al Widget-ni paylaşmaq istəyirəm. NextJS üçün hazırlanmış bu widget həmdə TypeScript ilə yazıldığına görə type-safe-dir. Bu widgeti istədiyiniz kimi istifadə edə bilərsiz. Əslində bir neçə gündür üzərində işlədiyim öz portofolio web-səhifəm üçün hazırlamışdım. Lakin istərəm ki sizlərdə bu komponent-dən istifadə edə biləsiz",
  poster = "https://cdn.sanity.io/images/jl0ycvey/production/3a950399975a0ce4c791409decc1e2229a11b071-1920x1080.png",
  slug = "nextjs-ucun-kofe-al-widgeti",
  title = "NextJS Haqqında hər Şey",
}: TPostEmail) {
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
        <Section className="mb-8 text-center text-4xl font-semibold leading-9">
          Salam 👋<span className="text-[#007bff]">{" {{{FIRST_NAME}}} {{{LAST_NAME}}}"}</span>
        </Section>
        <Section className="my-4">
          {poster && (
            <Row>
              <Column align="center">
                <Img
                  alt={title}
                  className="w-full rounded-xl object-cover filter-none lg:w-5/6"
                  height="320"
                  src={poster}
                  style={{ filter: "none" }}
                />
              </Column>
            </Row>
          )}
          <Section className="mt-8 text-center">
            <Text className="my-4 text-lg font-semibold leading-7 text-blue-600">Yeni Bloq Post</Text>
            <Heading as="h1" className="m-0 mt-2 text-4xl font-semibold leading-9 text-gray-900">
              {title}
            </Heading>
            <Text className="text-base leading-6 text-gray-500 lg:px-20">{description}</Text>
            <Button className="mt-4 rounded-lg bg-blue-600 px-10 py-3 font-semibold text-white" href={`${BASE_URL}/blog/${slug}`}>
              Daha çox oxu
            </Button>
          </Section>
        </Section>
        {/* Footer */}
        <EmailFooter />
      </Tailwind>
    </Html>
  );
}
