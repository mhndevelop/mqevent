import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Basic Template",
  description: "This is a basic template for Next.js with TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

