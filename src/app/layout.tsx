import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import topGradient from "./_rootComponents/images/gradient-background-top.png"
import bottomGradient from "./_rootComponents/images/gradient-background-bottom.png"
export const metadata: Metadata = {
  title: "KR Portfolio",
  description: "Kasturirangan Portfolio",
  icons: [{ rel: "icon", url: "/ghost.png" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});


import Image from 'next/image'
import { Header } from './_rootComponents/header'
import Footer from './_rootComponents/footer'
import { ThemeProvider } from 'next-themes'
import { Toaster } from "sonner";
type MainLayoutProps = {
  children: React.ReactNode
}

const RootLayout = (props: MainLayoutProps) => {
  const { children } = props

  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col relative">
        <TRPCReactProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main
              id="skip-nav"
              className="mx-auto mb-16 w-full max-w-5xl flex-1 px-4 py-24 sm:px-8"
            >
              {children}
            </main>
            <Toaster />
            <Footer />
            <div className="w-full relative">
              <Image
                width={1512}
                height={447}
                src={bottomGradient}
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10"
                role="presentation"
                priority
              />
            </div>
            <Image
              width={1512}
              height={550}
              className="absolute top-0 left-1/2 -z-10 -translate-x-1/2"
              src={topGradient}
              alt=""
              role="presentation"
              priority
            />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>

    </html>
  )
}


export default RootLayout