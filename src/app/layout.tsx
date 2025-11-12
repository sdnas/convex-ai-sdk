import { Toaster } from "@/components/ui/sonner";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ConvexClientProvider } from "./convex-client-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Smart Recipe Finder",
    default: "Smart Recipe Finder",
  },
  description:
    "A simple recipe app with AI integration built with Convex and the Vercel AI SDK. Enter ingredients to discover new recipes, generate cooking steps, and save your favorites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.className} antialiased`}>
          <ConvexClientProvider>{children}</ConvexClientProvider>
          <Toaster position="top-right" />
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
