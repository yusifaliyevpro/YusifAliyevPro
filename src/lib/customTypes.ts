import type { Route } from "next";

export type TSocialAccounts = {
  icon: JSX.Element;
  name: string;
  link: Route;
  className: string;
}[];

export type TNavbars = {
  name: string;
  link: Route;
}[];
