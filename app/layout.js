import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const deploymentHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Saumya & Karan — Engagement Invitation",
  description: "Together with their families, Saumya and Karan invite you to celebrate their engagement on Saturday, 21 November 2026, 6:00 PM onwards at Manasi Hotel, Chhatrapati Sambhajinagar, Aurangabad, Maharashtra.",
  openGraph: {
    title: "Saumya & Karan — Engagement Invitation",
    description: "You're invited! Saturday, 21 November 2026, 6:00 PM onwards at Manasi Hotel, Chhatrapati Sambhajinagar, Aurangabad, Maharashtra.",
    siteName: "Saumya & Karan Engagement",
    images: [
      {
        url: "/invitation-assets/og-preview.png",
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
    description: "You're invited! Saturday, 21 November 2026, 6:00 PM onwards at Manasi Hotel.",
    images: ["/invitation-assets/og-preview.png"]
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
