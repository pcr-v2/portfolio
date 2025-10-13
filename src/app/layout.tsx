import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/app/layout.client";

export const metadata: Metadata = {
  title: "Park Cheol Ryeon",
  description: "프론트엔드 개발자 박철련 포트폴리오",
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
