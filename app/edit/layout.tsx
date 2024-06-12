import type { Metadata } from "next";
// import { Poppins } from "next/font/google";



// const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}</body>
    </html>
  );
}
