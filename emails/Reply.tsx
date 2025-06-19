import { Column, Head, Html, Img, Preview, Row, Section, Tailwind, Text } from "@react-email/components";

import { EmailFooter } from "./EmailFooter";
import { EmailHeader } from "./EmailHeader";

export default function Ramziyya() {
  const pre =
    "Hello, I hope you are doing well. Yes i saw it about 2 hours ago, but your email now. I also wanted to delete my IW from KOICA because i will prepare it again w/o AI. Thank you for doing it before me (i hope you didn't open my IW presentation).".slice(
      0,
      90,
    );
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
        <Preview>{pre}</Preview>
        <EmailHeader />
        {/* Body */}
        <Section className="my-4">
          <Row>
            <Column align="center">
              <Img
                alt={"Thank you"}
                className="w-full rounded-xl object-cover filter-none lg:w-5/6"
                height="320"
                src={`https://moderncat.com/wp-content/uploads/2020/09/teaser-6-scaled-1440x980.jpg`}
                style={{ filter: "none" }}
              />
            </Column>
          </Row>
          <Text className="text-center">Random Cat API™</Text>
          <Section className="mt-8 text-center font-semibold">
            <Text className="px-5 text-left text-sm leading-6 text-gray-500 lg:px-20">Hello,</Text>
            <Text className="px-5 text-left text-sm leading-6 text-gray-500 lg:px-20">
              I hope you are doing well.
            </Text>
            <Text className="px-5 text-left text-sm leading-6 text-gray-500 lg:px-20">
              Yes i saw it about 2 hours ago, but your email now. I also wanted to delete my IW from KOICA
              because i will prepare it again w/o AI. Thank you for doing it before me (i hope you didn't open
              my IW presentation).
            </Text>
            <Text className="px-5 text-left text-sm leading-6 text-gray-500 lg:px-20">
              I notified others to upload their work to KOICA, again.
            </Text>
            <Text className="px-5 text-left text-sm leading-6 text-gray-500 lg:px-20">
              If we will do some Bahçeli calculations, (8 + 4 * 10) / 5 makes 9.6, and what it does?, 10, and
              this makes us satisfied.😊
            </Text>
            <Text className="px-5 text-left text-sm leading-6 text-gray-500 lg:px-20">
              Thanks for considering to update, I appreciate your effort and time.
            </Text>
            <Text className="px-5 text-left text-sm leading-6 text-gray-500 lg:px-20">Sincerely,</Text>
            <Text className="px-5 text-left text-sm leading-6 text-gray-500 lg:px-20">Yusif Aliyev</Text>
            <Text className="px-5 text-center text-base leading-6 text-blue-500 lg:px-20">
              Please do not reply to this email. Instead, reach out to{" "}
              <span className="text-green-500">yusifaliyevpro@gmail.com</span> for any inquiries.
            </Text>
          </Section>
        </Section>
        {/* Footer */}
        <EmailFooter />
      </Tailwind>
    </Html>
  );
}
