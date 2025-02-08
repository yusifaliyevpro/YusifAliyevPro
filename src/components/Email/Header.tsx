import { BASE_URL } from "@/src/lib/constants";
import { Column, Img, Row, Section, Link, Font } from "@react-email/components";

const staticRoutes: {
  name: string;
  link: string;
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

export const EmailHeader = () => (
  <>
    <Font
      fontFamily="Poppins"
      fallbackFontFamily="Verdana"
      webFont={{
        url: `${BASE_URL}/Poppins-SemiBold.ttf`,
        format: "truetype",
      }}
      fontWeight={400}
      fontStyle="normal"
    />
    <Section className="my-[40px] px-[40px] py-[40px] lg:px-[85px]">
      <Row>
        <Column className="w-[70%]">
          <Img
            alt="Yusif Aliyev Logo"
            height="60"
            className="filter-none"
            style={{ filter: "none" }}
            src={`${BASE_URL}/Notion Profile Rounded.png`}
          />
        </Column>
        <Column align="center">
          <Row align="right">
            {staticRoutes.map((route, i) => (
              <Column key={i} className="px-[8px]">
                <Link
                  className="flex-nowrap whitespace-nowrap text-base text-gray-600 [text-decoration:none]"
                  href={BASE_URL + route.link}
                >
                  {route.name}
                </Link>
              </Column>
            ))}
          </Row>
        </Column>
      </Row>
    </Section>
  </>
);
