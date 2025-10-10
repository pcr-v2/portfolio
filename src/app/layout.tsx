import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Park Cheol Ryeon",
  description: "프론트엔드 개발자 박철련 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
