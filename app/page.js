// "use client";

// import { useEffect, useRef, useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import Countdown from "../components/Countdown";
// import Hero from "../components/Hero";
// import SplashScreen from "../components/SplashScreen";
// import Venue from "../components/Venue";
// import BackgroundMusic from "../components/BackgroundMusic";

// export default function Home() {
//   const [hasEntered, setHasEntered] = useState(false);
//   const musicRef = useRef(null);
//   const venueRef = useRef(null);

//   const handleEnter = () => {
//     setHasEntered(true);
//     musicRef.current?.play(); // same tap that opens the invite also starts the music
//   };

//   useEffect(() => {
//     if (!hasEntered) return;

//     // Step 1 — after 1s, nudge down a little so the guest notices there's more below.
//     const peekTimer = setTimeout(() => {
//       window.scrollTo({ top: 160, behavior: "smooth" });
//     }, 1000);

//     // Step 2 — 1 more second after that (2s total), continue scrolling down to the venue/location section.
//     const venueTimer = setTimeout(() => {
//       venueRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
//     }, 2000);

//     return () => {
//       clearTimeout(peekTimer);
//       clearTimeout(venueTimer);
//     };
//   }, [hasEntered]);

//   return (
//     <main>
//       <AnimatePresence>
//         {!hasEntered && <SplashScreen onEnter={handleEnter} />}
//       </AnimatePresence>
//       <BackgroundMusic ref={musicRef} src="/invitation-assets/song.mp3" />
//       <Hero isVisible={hasEntered} />
//       <Countdown />
//       <div ref={venueRef}>
//         <Venue />
//       </div>
//     </main>
//   );
// }
import InviteExperience from "../components/InviteExperience";

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

export default function Home() {
  return (
    <InviteExperience
      nameFirst="Saumya"
      nameSecond="Karan"
    />
  );
}
