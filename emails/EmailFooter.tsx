import { BASE_URL, FacebookAccount, GitHubAccount, InstagramAccount } from "@/src/lib/constants";
import { Column, Hr, Img, Link, Row, Section, Text } from "@react-email/components";

export function EmailFooter() {
  return (
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
                    className="mr-[20px] filter-none"
                    height="60"
                    src={`${BASE_URL}/Notion Profile Rounded.png`}
                    style={{ filter: "none" }}
                    width="60"
                  />
                </Column>
                <Column align="center">
                  <Text className="my-[2px] text-[16px] font-semibold leading-[12px] text-gray-900">
                    Yusif Aliyev
                  </Text>
                  <Text className="leading-[12px]] mb-0 text-[16px] text-gray-500">Think different</Text>
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
                      className="filter-none"
                      height="36"
                      src={`${BASE_URL}/email/GitHub-Logo.png`}
                      style={{ filter: "none" }}
                      width="36"
                    />
                  </Link>
                </Column>
                <Column className="pr-[8px]">
                  <Link href={FacebookAccount}>
                    <Img
                      alt="Facebook"
                      className="filter-none"
                      height="36"
                      src={`${BASE_URL}/email/Facebook-Logo.png`}
                      style={{ filter: "none" }}
                      width="36"
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href={InstagramAccount}>
                    <Img
                      alt="Instagram"
                      className="filter-none"
                      height="36"
                      src={`${BASE_URL}/email/Instagram-Logo.png`}
                      style={{ filter: "none" }}
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
                Baku, Azerbaijan
              </Text>
            </td>
          </tr>
          <tr>
            <td align="center">
              <Link
                className="my-[8px] text-[13px] font-semibold leading-[24px] text-gray-500"
                href="{{{RESEND_UNSUBSCRIBE_URL}}}"
              >
                Unsubscribe newsletter
              </Link>
            </td>
          </tr>
        </table>
      </Section>
    </>
  );
}
