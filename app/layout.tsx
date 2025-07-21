import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cores of Light - Spiritual Awakening & Holistic Wellness",
  description:
    "Ignite your inner potential with intuitive guidance and personalized self-discovery journeys. Experience spiritual awakening through yoga, meditation, and holistic therapies.",
  keywords:
    "spiritual awakening, energy healing, holistic wellness, yoga, meditation, self-discovery, conscious teaching, personal empowerment",
  openGraph: {
    title: "Cores of Light",
    description: "Spiritual Awakening & Holistic Wellness",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-200`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            toastClassName="!bg-white !text-gray-900 !border !border-gray-200 !shadow-lg"
            progressClassName="!bg-purple-600"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
