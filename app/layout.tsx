import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@aws-amplify/ui-react/styles.css";
import "./app.css";
import AmplifyAuthenticatorProvider from "@/components/providers/AmplifyAuthenticatorProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AmplifyAuthenticatorProvider>{children}</AmplifyAuthenticatorProvider>
      </body>
    </html>
  );
}
