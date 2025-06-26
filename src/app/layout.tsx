import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/contexts/cart-context";
import { AuthProvider } from "@/contexts/auth-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Doumar's Cones and BBQ - Home of the World's First Waffle Cone",
  description: "Since 1904, Doumar's has been serving Norfolk's finest ice cream cones and barbecue. Home of the world's first waffle cone, still made on our original 1905 machine.",
  keywords: "waffle cone, ice cream, barbecue, Norfolk VA, family restaurant, 1904, BBQ, cones",
  authors: [{ name: "Doumar's Cones and BBQ" }],
  creator: "Doumar's Cones and BBQ",
  publisher: "Doumar's Cones and BBQ",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://doumars.com",
    title: "Doumar's Cones and BBQ - Home of the World's First Waffle Cone",
    description: "Since 1904, Doumar's has been serving Norfolk's finest ice cream cones and barbecue.",
    siteName: "Doumar's Cones and BBQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doumar's Cones and BBQ - Home of the World's First Waffle Cone",
    description: "Since 1904, Doumar's has been serving Norfolk's finest ice cream cones and barbecue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased font-sans">
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
