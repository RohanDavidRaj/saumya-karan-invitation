import InviteExperience from "../../components/InviteExperience";

export const metadata = {
  title: "Saumya & Karan — Engagement Invitation",
  description: "Together with their families, Saumya and Karan invite you to celebrate their engagement on Saturday, 21 November 2026 at Manasi Hotel, Chhatrapati Sambhajinagar, Aurangabad, Maharashtra.",
  openGraph: {
    title: "Saumya & Karan — Engagement Invitation",
    description: "You're invited! Saturday, 21 November 2026 at Manasi Hotel, Chhatrapati Sambhajinagar, Aurangabad, Maharashtra.",
    images: [{ url: "/invitation-assets/og-preview.png", width: 1200, height: 630, alt: "Saumya & Karan Engagement Invitation" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Saumya & Karan — Engagement Invitation",
    images: ["/invitation-assets/og-preview.png"]
  }
};

export default function KaranSide() {
  return <InviteExperience nameFirst="Saumya" nameSecond="Karan" />;
}
