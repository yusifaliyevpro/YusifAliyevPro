import {
  BASE_URL,
  FacebookAccount,
  GitHubAccount,
  InstagramAccount,
} from "@/src/lib/constants";
import {
  Column,
  Hr,
  Img,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";

export const EmailFooter = () => (
  <>
    <Hr className="my-[40px] border-t-2 border-gray-300" />
    <Section className="text-center">
      <table className="w-full">
        <tr>
          <td align="center">
            <Row className="table-cell align-bottom">
              <Column align="center">
                <Img
                  alt="YusifAliyevPro Logo"
                  height="60"
                  className="mr-[20px] filter-none"
                  style={{ filter: "none" }}
                  width="60"
                  src={`${BASE_URL}/Notion Profile Rounded.png`}
                />
              </Column>
              <Column align="center">
                <Text className="my-[2px] text-[16px] font-semibold leading-[12px] text-gray-900">
                  Yusif Aliyev
                </Text>
                <Text className="leading-[12px]] mb-0 text-[16px] text-gray-500">
                  Think different
                </Text>
              </Column>
            </Row>
          </td>
        </tr>
        <tr>
          <td align="center">
            <Row className="table-cell h-[44px] w-[56px] align-bottom">
              <Column className="pr-[8px]">
                <Link href={GitHubAccount}>
                  <Img
                    alt="Github"
                    height="36"
                    className="filter-none"
                    style={{ filter: "none" }}
                    src={`${BASE_URL}/email/GitHub-Logo.png`}
                    width="36"
                  />
                </Link>
              </Column>
              <Column className="pr-[8px]">
                <Link href={FacebookAccount}>
                  <Img
                    alt="Facebook"
                    height="36"
                    className="filter-none"
                    style={{ filter: "none" }}
                    src={`${BASE_URL}/email/Facebook-Logo.png`}
                    width="36"
                  />
                </Link>
              </Column>
              <Column>
                <Link href={InstagramAccount}>
                  <Img
                    alt="Instagram"
                    height="36"
                    className="filter-none"
                    style={{ filter: "none" }}
                    src={`${BASE_URL}/email/Instagram-Logo.png`}
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
          </td>
        </tr>
      </table>
    </Section>
  </>
);
