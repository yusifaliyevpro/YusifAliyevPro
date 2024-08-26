"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Link from "next/link";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import type { TNavbars, TSocialAccounts } from "@/lib/customTypes";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { LiaFacebook } from "react-icons/lia";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { ThemeSwitcher } from "./ThemeSwitcher";
const socialAccounts: TSocialAccounts = [
  {
    icon: <GrInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/yusifaliyevpro",
    className:
      "rounded-md from-[#833ab4] via-[#fd1d1d] dark:text-slate-300 to-[#fcb045] p-[3px] text-3xl hover:bg-gradient-to-r hover:text-white",
  },
  {
    icon: <LiaFacebook strokeWidth={0.3} />,
    name: "FaceBook",
    link: "https://www.facebook.com/yusifaliyevpro",
    className:
      "rounded-full from-[#00c6ff] to-[#0072ff] dark:text-slate-300 text-[42px] hover:bg-gradient-to-r hover:text-white",
  },
  {
    icon: <PiLinkedinLogoBold />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yusifaliyevpro/",
    className:
      "rounded-md from-[#0c8bea] to-[#0B66C2] dark:text-slate-300 text-4xl hover:bg-gradient-to-r hover:text-white",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
    link: "https://github.com/YusifAliyevPro",
    className:
      "rounded-full to-gray-800 p-[2px] text-4xl dark:text-slate-300 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white",
  },
];

const navigationLinks: TNavbars = [
  {
    name: "Ana Səhifə",
    link: "/",
  },
  {
    name: "Bloq",
    link: "/blog",
  },
  {
    name: "Haqqımda",
    link: "/about",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <Navbar
      className="select-none"
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
      classNames={{
        base: `w-auto fixed z-[10000] dark:bg-foreground  xl:mx-40 md:rounded-b-lg transition-all ${isScrolled && " lg:shadow-medium dark:bg-foreground/70 lg:translate-y-3 lg:rounded-lg"}`,
      }}
    >
      <NavbarContent>
        <NavbarBrand as={"li"}>
          <p className="sr-only">YusifAliyevPro</p>
          <Link
            href={`/`}
            className="relative left-0 flex flex-row items-center gap-1.5 text-xl font-bold"
          >
            <div
              className={`font-jua text-3xl font-normal text-black dark:text-white`}
            >
              Yusif<span className="text-blue-500">Aliyev</span>Pro
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden gap-x-10 md:flex">
        {navigationLinks.map((navbar, i) => (
          <NavbarItem key={i}>
            <Link
              color="foreground"
              className="hidden text-lg font-semibold text-slate-700 hover:text-black dark:text-slate-300 dark:hover:text-slate-400 sm:flex"
              href={navbar.link}
              aria-current="page"
            >
              {navbar.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden flex-row items-center justify-center gap-x-4 transition-all md:flex">
          {/* <ThemeSwitcher /> */}
          {socialAccounts.map((account, i) => (
            <a
              key={i}
              href={account.link}
              aria-label={`My ${account.name} Account`}
              target="_blank"
              className={account.className}
              rel="noopener noreferrer me"
            >
              {account.icon}
              <span className="sr-only">My {account.name} Account</span>
            </a>
          ))}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="max-h-[30svh] items-center justify-center gap-y-3 overflow-hidden dark:bg-foreground/70">
        {navigationLinks.map((navbar, i) => (
          <NavbarMenuItem key={i}>
            <Link href={navbar.link} className="w-full text-xl font-semibold">
              {navbar.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
    </Navbar>
  );
}
