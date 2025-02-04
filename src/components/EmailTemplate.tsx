import {
  Section,
  Img,
  Text,
  Heading,
  Button,
  Tailwind,
  Column,
  Link,
  Row,
} from "@react-email/components";
import {
  BASE_URL,
  FacebookAccount,
  GitHubAccount,
  InstagramAccount,
} from "../lib/constants";
import type { Route } from "next";

type EmailTemplate = {
  title: string;
  description: string;
  poster: string;
  slug: string;
};
export const EmailTemplate = ({
  title,
  description,
  poster,
  slug,
}: EmailTemplate) => (
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
    {/* Header */}
    <Section className="my-[40px] px-[32px] py-[40px]">
      <Row>
        <Column align="center">
          <Img
            alt="Yusif Aliyev Logo"
            height="42"
            src={`${BASE_URL}/Notion Profile Rounded.png`}
          />
        </Column>
      </Row>
      <Row className="mt-[40px]">
        <Column align="center">
          <table>
            <tr>
              {staticRoutes.map((route, i) => (
                <td key={i} className="px-[8px]">
                  <Link
                    className="text-gray-600 [text-decoration:none]"
                    href={`${BASE_URL}/${route.link}`}
                  >
                    {route.name}
                  </Link>
                </td>
              ))}
            </tr>
          </table>
        </Column>
      </Row>
    </Section>
    {/* Body */}
    <Section className="my-[16px]">
      <Column align="center">
        <Img
          alt={title}
          className="w-3/4 rounded-[12px] object-cover"
          height="320"
          src={poster}
        />
      </Column>
      <Section className="mt-[32px] text-center">
        <Text className="my-[16px] text-[18px] font-semibold leading-[28px] text-indigo-600">
          Yeni Bloq Postum
        </Text>
        <Heading
          as="h1"
          className="m-0 mt-[8px] text-[36px] font-semibold leading-[36px] text-gray-900"
        >
          {title}
        </Heading>
        <Text className="text-[16px] leading-[24px] text-gray-500">
          {description}
        </Text>
        <Button
          className="mt-[16px] rounded-[8px] bg-indigo-600 px-[40px] py-[12px] font-semibold text-white"
          href={`${BASE_URL}/blog/${slug}`}
        >
          Daha çox oxu
        </Button>
      </Section>
    </Section>
    {/* Footer */}
    <Section className="text-center">
      <table className="w-full">
        <tr className="w-full">
          <td align="center">
            <Img
              alt="YusifAliyevPro Logo"
              height="42"
              src={`${BASE_URL}/Notion Profile Rounded.png`}
            />
          </td>
        </tr>
        <tr className="w-full">
          <td align="center">
            <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-900">
              Yusif Aliyev
            </Text>
            <Text className="mb-0 mt-[4px] text-[16px] leading-[24px] text-gray-500">
              Think different
            </Text>
          </td>
        </tr>
        <tr>
          <td align="center">
            <Row className="table-cell h-[44px] w-[56px] align-bottom">
              <Column className="pr-[8px]">
                <Link href={GitHubAccount}>
                  <Img
                    alt="X"
                    height="36"
                    src="https://react.email/static/x-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
              <Column className="pr-[8px]">
                <Link href={FacebookAccount}>
                  <Img
                    alt="Facebook"
                    height="36"
                    src="https://react.email/static/facebook-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
              <Column>
                <Link href={InstagramAccount}>
                  <Img
                    alt="Instagram"
                    height="36"
                    src="https://react.email/static/instagram-logo.png"
                    width="36"
                  />
                </Link>
              </Column>
            </Row>
          </td>
        </tr>
        <tr>
          <td align="center">
            <Text className="my-[8px] text-[16px] font-semibold leading-[24px] text-gray-500">
              Bakı, Azərbaycan
            </Text>
            <Text className="mb-0 mt-[4px] text-[16px] font-semibold leading-[24px] text-gray-500">
              yusifaliyevpro@gmail.com
            </Text>
          </td>
        </tr>
      </table>
    </Section>
  </Tailwind>
);

const staticRoutes: {
  name: string;
  link: Route;
}[] = [
  {
    name: "Ana Səhifə",
    link: "/",
  },
  {
    name: "Bloq",
    link: "/blog",
  },
  {
    name: "Əlaqə",
    link: "/contact",
  },
];
