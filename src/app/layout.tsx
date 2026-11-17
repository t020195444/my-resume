import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "姜雲瀚 Herry｜網頁前端工程師",
  description:
    "四年多前端經驗，React、Next.js、TypeScript，也寫 ASP.NET Core 後端。工作經歷與個人作品。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="antialiased">{children}</body>
    </html>
  );
}
