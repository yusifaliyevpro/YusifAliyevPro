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
        base: `w-auto fixed z-[10000]  xl:mx-40 rounded-b-lg transition-all ${isScrolled && " lg:shadow-medium lg:translate-y-3 lg:rounded-lg"}`,
      }}
    >
      <NavbarContent>
        <NavbarBrand as={"li"}>
          <Link
            href={`/`}
            className="relative left-0 flex flex-row items-center gap-1.5 text-xl font-bold"
          >
            <p className="sr-only">YusifAliyevPro</p>
            <div className={`font-jua text-3xl font-normal text-black`}>
              Yusif<span className="text-blue-500">Aliyev</span>Pro
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden gap-x-10 md:flex">
        <NavbarItem>
          <Link
            color="foreground"
            className="hover: hidden text-lg font-semibold text-slate-700 hover:text-black sm:flex"
            href={`/`}
            aria-current="page"
          >
            Ana səhifə
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="hover: hidden text-lg font-semibold text-slate-700 hover:text-black sm:flex"
            href={`/blog`}
            aria-current="page"
          >
            Bloq
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="hover: hidden text-lg font-semibold text-slate-700 hover:text-black sm:flex"
            href={`/about`}
            aria-current="page"
          >
            Haqqımda
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden flex-row items-center justify-center gap-x-4 transition-all md:flex">
          {socialAccounts.map((account, i) => (
            <Link
              key={i}
              prefetch={false}
              href={account.link}
              aria-label={`My ${account.name} Account`}
              target="_blank"
              className={account.className}
              rel="noopener noreferrer me"
            >
              {account.icon}
              <span className="sr-only">{account.name}</span>
            </Link>
          ))}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="max-h-[200px] items-center justify-center gap-3 overflow-hidden bg-gray-100/90 backdrop-blur-md">
        <NavbarMenuItem>
          <Link href={`/`} className={`w-full text-xl font-semibold`}>
            Ana Səhifə
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={`/blog`} className={`w-full text-xl font-semibold`}>
            Bloq
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href={`/about`} className={`w-full text-xl font-semibold`}>
            Haqqımda
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
    </Navbar>
  );
}
