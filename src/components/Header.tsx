"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import Link from "next/link";
import { type JSX, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { LiaFacebook } from "react-icons/lia";
import { PiLinkedinLogoBold } from "react-icons/pi";

import { FacebookAccount, GitHubAccount, InstagramAccount, LinkedInAccount } from "../lib/constants";

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
      isBlurred
      className="select-none"
      classNames={{
        base: `fixed z-[9998] w-auto transition-all dark:bg-foreground md:rounded-b-lg xl:mx-40 ${isScrolled && "dark:bg-foreground/70 lg:translate-y-3 lg:rounded-lg lg:shadow-medium"}`,
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand as={"li"}>
          <Link
            className="relative left-0 flex flex-row items-center gap-1.5 font-jua text-3xl font-normal text-black dark:text-white"
            href={`/`}
          >
            <p>
              Yusif<span className="text-blue-500">Aliyev</span>Pro
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-x-10 md:flex" justify="center">
        {staticRoutes.map((navbar, i) => (
          <NavbarItem key={i}>
            <Link
              aria-current="page"
              className="hidden text-lg font-semibold text-slate-700 hover:text-black dark:text-slate-300 dark:hover:text-slate-400 sm:flex"
              color="foreground"
              href={navbar.link}
            >
              {navbar.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden flex-row items-center justify-center gap-x-4 transition-all md:flex">
          {socialAccounts.map((account, i) => (
            <motion.a
              key={i}
              aria-label={`My ${account.name} Account`}
              className={account.className}
              href={account.link}
              rel="noopener noreferrer me"
              target="_blank"
              whileHover={{ scale: 1.1 }}
            >
              {account.icon}
              <span className="sr-only">My {account.name} Account</span>
            </motion.a>
          ))}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="max-h-[30svh] items-center justify-center gap-y-3 overflow-hidden dark:bg-foreground/70">
        {staticRoutes.map((navbar, i) => (
          <NavbarMenuItem key={i}>
            <Link className="w-full text-xl font-semibold" href={navbar.link}>
              {navbar.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden" />
    </Navbar>
  );
}

const staticRoutes: {
  link: string;
  name: string;
}[] = [
  {
    link: "/",
    name: "Ana Səhifə",
  },
  {
    link: "/blog",
    name: "Bloq",
  },
  {
    link: "/contact",
    name: "Əlaqə",
  },
];

const socialAccounts: {
  className: string;
  icon: JSX.Element;
  link: string;
  name: string;
}[] = [
  {
    className:
      "rounded-md from-[#833ab4] via-[#fd1d1d] dark:text-slate-300 to-[#fcb045] p-[3px] text-3xl hover:bg-gradient-to-r hover:text-white",
    icon: <GrInstagram />,
    link: InstagramAccount,
    name: "Instagram",
  },
  {
    className:
      "rounded-full from-[#00c6ff] to-[#0072ff] dark:text-slate-300 text-[42px] hover:bg-gradient-to-r hover:text-white",
    icon: <LiaFacebook strokeWidth={0.3} />,
    link: FacebookAccount,
    name: "FaceBook",
  },
  {
    className:
      "rounded-md from-[#0c8bea] to-[#0B66C2] dark:text-slate-300 text-4xl hover:bg-gradient-to-r hover:text-white",
    icon: <PiLinkedinLogoBold />,
    link: LinkedInAccount,
    name: "LinkedIn",
  },
  {
    className:
      "rounded-full to-gray-800  p-[2px] text-4xl dark:text-slate-300 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white",
    icon: <FaGithub />,
    link: GitHubAccount,
    name: "GitHub",
  },
];
