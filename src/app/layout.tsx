import "~/styles/globals.css";

import { Inter, Poppins } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { ThemeProvider } from "./_components/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const metadata = {
  title: "Mbugua",
  description: "Mwaura Mbugua's personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative !scroll-smooth">
      <body className={`font-sans ${poppins.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
