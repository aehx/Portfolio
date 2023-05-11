import "./globals.css";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
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
      <body className={`${orbitron.className}`}>{children}</body>
    </html>
  );
}
