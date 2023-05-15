import "./globals.css";
import { Orbitron, Poppins } from "next/font/google";

const orbitron = Orbitron({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Kevin's website",
    template: "%s | Kevin's website",
  },
  description:
    "Welcome, this is my website, here you can see my website/app projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <body className={`${orbitron.className}`}>{children}</body>
    </html>
  );
}
