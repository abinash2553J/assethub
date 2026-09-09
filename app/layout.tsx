import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AssetHub",
  description: "Asset management dashboard",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#f7f9fc] text-neutral-900 font-sans">
        {children}
      </body>
    </html>
  );
}