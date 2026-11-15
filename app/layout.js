import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Saumya & Karan — Engagement Invitation",
  description: "Together with their families, Saumya and Karan invite you to celebrate their engagement on Saturday, 21 November 2026 at Manasi Hotel, Chhatrapati Sambhajinagar, Aurangabad, Maharashtra.",
  openGraph: {
    title: "Saumya & Karan — Engagement Invitation",
    description: "You're invited! Saturday, 21 November 2026 at Manasi Hotel, Chhatrapati Sambhajinagar, Aurangabad, Maharashtra.",
    siteName: "Saumya & Karan Engagement",
    images: [
      {
        url: "/invitation-assets/og-preview.svg",
        width: 1200,
        height: 630,
        alt: "Saumya & Karan Engagement Invitation"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  // This specifically controls the WhatsApp/iMessage/Twitter-style card
  twitter: {
    card: "summary_large_image",
    title: "Saumya & Karan — Engagement Invitation",
    description: "You're invited! Saturday, 21 November 2026 at Manasi Hotel.",
    images: ["/invitation-assets/og-preview.svg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
