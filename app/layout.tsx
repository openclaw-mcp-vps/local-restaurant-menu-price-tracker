import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant Menu Price Tracker",
  description: "Track menu price changes across local restaurants. Get alerts when prices increase."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="666f97c6-f015-469a-b7d8-730d8f4d2102"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
