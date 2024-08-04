import Link from "next/link";
import { jua } from "@/lib/fonts";

import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { LiaFacebook } from "react-icons/lia";
import { PiLinkedinLogoBold } from "react-icons/pi";

export const socialAccounts = [
  {
    icon: <GrInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/yusifaliyevpro",
    className:
      "rounded-md from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[3px] text-3xl hover:bg-gradient-to-r hover:text-white",
  },
  {
    icon: <LiaFacebook strokeWidth={0.3} />,
    name: "FaceBook",
    link: "https://www.facebook.com/yusifaliyevpro",
    className:
      "rounded-full from-[#00c6ff] to-[#0072ff] text-[42px] hover:bg-gradient-to-r hover:text-white",
  },
  {
    icon: <PiLinkedinLogoBold />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yusifaliyevpro/",
    className:
      "rounded-md from-[#0c8bea] to-[#0B66C2] text-4xl hover:bg-gradient-to-r hover:text-white",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    link: "https://github.com/YusifAliyevPro",
    className:
      "rounded-full to-gray-800 p-[2px] text-4xl hover:bg-black hover:text-white",
  },
];

export default function Footer() {
  return (
    <footer className="z-50 w-full bg-white shadow-medium">
      <div className="flex w-full flex-col items-center justify-between p-4 px-10 md:flex-row md:py-6">
        <div className="flex flex-row items-center justify-start pb-5 pt-4 md:px-10 md:py-0">
          <Link
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span
              className={`self-center whitespace-nowrap text-3xl font-extrabold text-black ${jua.className}`}
            >
              Yusif<span className="text-blue-500">Aliyev</span>Pro
            </span>
          </Link>
          <span className="text-md block pl-4 text-center text-gray-500 md:py-0 md:text-left">
            © {new Date().getFullYear()}{" "}
          </span>
        </div>
        <div>
          <div className="flex flex-row items-center justify-center gap-x-4">
            {socialAccounts.map((account, i) => (
              <Link
                key={i}
                prefetch={false}
                href={account.link}
                target="_blank"
                aria-label={`My ${account.name} Account`}
                className={account.className}
                rel="noopener noreferrer"
              >
                {account.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex h-10 w-full flex-col items-center justify-center py-4 font-medium max-sm:px-5 max-sm:py-10">
        <p className="text-center">
          Bu sayt hazırlanma mərhələsindədir. Yazılar və məlumatlar düzgün
          olmaya bilər
        </p>
      </div> */}
    </footer>
  );
}
