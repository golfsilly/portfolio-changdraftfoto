import type { Metadata } from "next";
import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import "aos/dist/aos.css";
import { siteMetadata } from "@/config/siteMetadata";
import { NextThemeProvider } from "@/provider/ThemeProvider";
import RadixThemeProvider from "@/provider/RadixThemeProvider";
import Cookie from "@/components/CookieConsent";
import { Toaster } from "@/components/ui/sonner";
import { ScollToTop } from "@/components/ScollToTop";
import { sarabun } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export const metadata: Metadata = {
  title: "Chang Draft Foto",
  description: "Chang Draft Foto Photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteMetadata.language} suppressContentEditableWarning>
      <GoogleTagManager
        gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}`}
      />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <body
        className={cn(
          "min-h-screen bg-background font-sarabun antialiased",
          sarabun.variable
        )}
      >
        <NextThemeProvider>
          <RadixThemeProvider>
            <main className="bg-slate-50">
              <Header />
              {children}
              <Footer />
            </main>
            <ScollToTop />
            <Cookie />
            <Toaster position="top-right" expand={false} richColors />
          </RadixThemeProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
