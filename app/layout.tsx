import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "파비스 애니원 다이어트 효소",
  description: "파비스 애니원 효소 3개월 장 디톡스 프로그램",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
