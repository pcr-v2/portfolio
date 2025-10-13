import { ReactNode } from "react";

export type TMenus = {
  name: string;
  path: string;
  icon?: ReactNode;
  refName?: string;
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
        refName: "whois",
        path: "/info/something2",
      },
      {
        name: "Career",
        refName: "career",
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
        refName: "projectCompany",
        path: "/skills/nextjs",
      },
      {
        name: "Personal",
        refName: "projectPersonal",
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
        refName: "mindCoWork",
        path: "/mind/co-work",
      },
      {
        name: "Developer",
        refName: "mindDeveloper",
        path: "/mind/developer",
      },
      {
        name: "Attitude",
        refName: "mindAttitude",
        path: "/mind/attitude",
      },
    ],
  },
];
