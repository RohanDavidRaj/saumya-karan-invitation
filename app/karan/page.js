import InviteExperience from "../../components/InviteExperience";

export const metadata = {
  title: "Karan & Saumya — Engagement Invitation",
  description: "Together with their families, Karan and Saumya invite you to celebrate their engagement on Saturday, 21 November 2026 at Manasi Hotel, Chhatrapati Sambhajinagar, Aurangabad, Maharashtra.",
  openGraph: {
    title: "Karan & Saumya — Engagement Invitation",
    description: "You're invited! Saturday, 21 November 2026 at Manasi Hotel, Chhatrapati Sambhajinagar, Aurangabad, Maharashtra.",
    images: [{ url: "/invitation-assets/og-preview-karan.png", width: 1200, height: 630, alt: "Karan & Saumya Engagement Invitation" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan & Saumya — Engagement Invitation",
    images: ["/invitation-assets/og-preview-karan.png"]
  }
};

export default function KaranSide() {
  return <InviteExperience nameFirst="Karan" nameSecond="Saumya" />;
}
