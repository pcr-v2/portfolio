import type { Metadata } from "next";
import Head from "next/head";

import ClientLayout from "@/app/layout.client";

import "./globals.css";

export const metadata: Metadata = {
  title: "FE | 박철련",
  description: "프론트엔드 개발자 박철련 포트폴리오",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

interface IProps {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout(props: IProps) {
  const { children } = props;

  return (
    <html>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
