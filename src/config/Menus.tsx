import { ReactNode } from "react";

export type TMenus = {
  name: string;
  path: string;
  icon?: ReactNode;
  opened?: boolean;
  children?: TMenus[];
};

export const MENUS: TMenus[] = [
  {
    name: "Info",
    path: "/info",
    children: [
      {
        name: "WhoIs",
        path: "/info/something2",
      },
      {
        name: "Career",
        path: "/info/career",
      },
    ],
  },
  {
    name: "Projects",
    path: "/schedule",
    children: [
      {
        name: "In-Company",
        path: "/skills/nextjs",
      },
      {
        name: "Personal",
        path: "/skills/typescript",
      },
    ],
  },
  {
    name: "Mind",
    path: "/mind",
    children: [
      {
        name: "Co-Work",
        path: "/mind/co-work",
      },
      {
        name: "Developer",
        path: "/mind/developer",
      },
      {
        name: "Attitude",
        path: "/mind/attitude",
      },
    ],
  },
];
