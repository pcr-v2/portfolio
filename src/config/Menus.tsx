import { ReactNode } from "react";

export type TMenus = {
  name: string;
  path: string;
  icon?: ReactNode;
  refName: string;
  opened?: boolean;
  children?: TMenus[];
};

export const MENUS: TMenus[] = [
  {
    name: "Info",
    path: "/info",
    refName: "info",
  },
  {
    name: "Projects",
    path: "/schedule",
    refName: "projectCompany",
  },
  {
    name: "Mind",
    path: "/mind",
    refName: "mindCoWork",
  },
];
