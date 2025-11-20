import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pcr.me.kr"), // 실제 도메인으로 변경

  title: {
    default: "박철련 | 포트폴리오",
    template: "%s | 박철련",
  },

  description: "가치를 만드는 개발자 박철련입니다.",

  keywords: [
    "개발자",
    "프론트엔드 포폴",
    "프론트엔드 포트폴리오",
    "개발자 포폴",
    "개발자 포트폴리오",
    "박철련",
    "fe portfolio",
    "frontend portfolio",
    "프론트",
    "프론트 포폴",
    "프론트 개발자 포폴",
    "React",
    "Next.js",
    "Typescript",
    "웹개발자",
    "Web Developer",
  ],

  authors: [{ name: "박철련" }],
  creator: "박철련",
  publisher: "박철련",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://pcr.me.kr",
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://pcr.me.kr",
    siteName: "박철련 포트폴리오",
    title: "박철련 | 프론트엔드 개발자",
    description:
      "React · Next.js · TypeScript 기반 웹서비스를 만드는 프론트엔드 개발자 박철련 포트폴리오.",
    images: [
      {
        url: "/og-image.png", // 1200x630 추천
        width: 1200,
        height: 630,
        alt: "박철련 포트폴리오 미리보기",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "박철련 | 프론트엔드 개발자",
    description: "React · Next.js 기반 포트폴리오",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        {/* Schema.org 구조화된 데이터 (네이버 + 구글 SEO 강화) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "박철련",
              jobTitle: "Frontend Developer",
              url: "https://pcr.me.kr",
              sameAs: ["https://github.com/otesic"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
