import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Bot Command Autocomplete — Smart Suggestions for Your Server",
  description:
    "Intelligent autocomplete for Discord bot commands. Context-aware suggestions based on server bots, user permissions, and usage history."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="84a10917-41b1-4e72-abfb-83e011a67632"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
