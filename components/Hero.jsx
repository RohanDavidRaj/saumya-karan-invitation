"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const detailReveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

export default function Hero({
  isVisible,
  nameFirst = "Saumya",
  nameSecond = "Karan"
}) {
  return (
    <section id="celebration" className="relative h-dvh overflow-hidden bg-[#fff5df] px-3 py-2 sm:h-auto sm:min-h-dvh sm:overflow-x-hidden sm:px-10 sm:py-16">
      <motion.div
        variants={reveal}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        transition={{ duration: 0.85, delay: 0.25 }}
        className="relative mx-auto flex h-full max-w-2xl items-center justify-center sm:h-auto"
      >
        <motion.article
          initial={{ clipPath: "inset(0 50% 0 50% round 32px)", opacity: 0 }}
          animate={isVisible ? { clipPath: "inset(0 0% 0 0% round 32px)", opacity: 1 } : { clipPath: "inset(0 50% 0 50% round 32px)", opacity: 0 }}
          transition={{ duration: 1.05, delay: 0.12, ease: [0.65, 0, 0.35, 1] }}
          className="relative aspect-[2/3] w-full overflow-hidden rounded-[1.6rem] border border-[#b98a5a]/30 bg-[#fff9e9] p-1.5 shadow-[0_24px_70px_rgba(97,55,43,.22)] sm:rounded-[2.2rem] sm:p-3"
        >
          <Image src="/invitation-assets/palace-garden-background-no-peacocks.png" alt="Ornate Indian palace garden archway invitation background" fill priority unoptimized sizes="(max-width: 768px) 100vw, 672px" className="object-fill opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff9e9]/5 via-[#fff9e9]/10 to-[#fff9e9]/5" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
            <div className="absolute left-[25%] right-[25%] top-[7%] flex -translate-y-1/2 justify-between">
              {[0, 1, 2, 3, 4].map((light) => (
                <motion.span
                  key={light}
                  animate={{ opacity: [0.45, 1, 0.45], scale: [0.85, 1.15, 0.85], boxShadow: ["0 0 4px rgba(232,199,123,.35)", "0 0 14px rgba(232,170,61,.95)", "0 0 4px rgba(232,199,123,.35)"] }}
                  transition={{ duration: 1.8, delay: light * 0.28, repeat: Infinity, ease: "easeInOut" }}
                  className="h-2 w-2 rounded-full bg-[#ffdc86]"
                />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: [0, -5, 0], rotate: [0, 1.4, -1.4, 0] } : { opacity: 0 }}
              transition={{ opacity: { duration: 0.8, delay: 1.1 }, y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 5.2, repeat: Infinity, ease: "easeInOut" } }}
              style={{ transformOrigin: "bottom center" }}
              className="absolute bottom-[5%] left-[2%] h-[clamp(5rem,14dvh,9rem)] w-[clamp(5rem,14dvh,9rem)] drop-shadow-[0_8px_8px_rgba(70,45,26,.2)] sm:h-36 sm:w-36"
            >
              <Image src="/invitation-assets/decorative-dancing-peacock.png" alt="Dancing peacock in the palace garden" fill unoptimized sizes="144px" className="object-contain object-bottom" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: [0, -5, 0], rotate: [0, -1.4, 1.4, 0], scaleX: -1 } : { opacity: 0 }}
              transition={{ opacity: { duration: 0.8, delay: 1.35 }, y: { duration: 4.2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 5.2, delay: 0.4, repeat: Infinity, ease: "easeInOut" } }}
              style={{ transformOrigin: "bottom center" }}
              className="absolute bottom-[5%] right-[2%] h-[clamp(5rem,14dvh,9rem)] w-[clamp(5rem,14dvh,9rem)] drop-shadow-[0_8px_8px_rgba(70,45,26,.2)] sm:h-36 sm:w-36"
            >
              <Image src="/invitation-assets/decorative-dancing-peacock.png" alt="Dancing peacock in the palace garden" fill unoptimized sizes="144px" className="object-contain object-bottom" />
            </motion.div>
          </div>
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.45 } } }}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="relative z-20 flex min-h-full flex-col justify-center border border-[#bb966e]/45 px-2 py-2 text-center sm:px-8 sm:py-7"
          >
            <motion.div initial={{ opacity: 0, y: -110, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1, y: [0, -8, 0], rotate: [0, 0.4, 0] } : {}} transition={{ opacity: { duration: 0.6, delay: 0.2 }, scale: { duration: 0.7, delay: 0.2, type: "spring", stiffness: 120 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" } }} className="relative z-10 isolate mx-auto mb-0 h-[clamp(2rem,7dvh,4rem)] w-[clamp(2rem,7dvh,4rem)] sm:h-32 sm:w-32">
              <motion.span
                aria-hidden="true"
                animate={isVisible ? { opacity: [0.18, 0.48, 0.18], scale: [0.88, 1.08, 0.88] } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-1 rounded-full bg-[#e8b759]/55 blur-lg"
              />
              <Image src="/invitation-assets/Minimalist Maroon Ganesha with Amber Tilak.png" alt="Minimalist maroon illustration of Lord Ganesha with an amber tilak" fill priority unoptimized sizes="128px" className="object-contain drop-shadow-[0_12px_12px_rgba(134,72,72,.2)]" />
            </motion.div>
            <motion.p variants={detailReveal} className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#725d4e] sm:text-[11px] sm:tracking-[0.25em]">Together with their families</motion.p>
            <motion.h1 variants={detailReveal} whileHover={{ scale: 1.03 }} className="mt-1 font-display text-xl italic leading-none text-[#562d32] sm:mt-4 sm:text-6xl">{nameFirst} <span className="text-[#b99161]">&</span> {nameSecond}</motion.h1>
            <motion.p variants={detailReveal} className="mt-1 text-[8px] font-bold uppercase tracking-[0.1em] text-[#725d4e] sm:mt-4 sm:text-xs">Delighted to announce their engagement</motion.p>
            <motion.div variants={detailReveal} className="mx-auto my-1 flex items-center justify-center gap-2 text-[#b99161] sm:my-5 sm:gap-3"><span className="h-px w-8 bg-current sm:w-12" />✦<span className="h-px w-8 bg-current sm:w-12" /></motion.div>
            <motion.div variants={detailReveal} className="grid grid-cols-3 items-center gap-1 text-ink sm:gap-3">
              <p className="text-[6px] font-bold uppercase tracking-wider sm:text-[11px]">Saturday</p>
              <p className="border-x border-[#b99161]/60 px-1 font-display text-[13px] leading-tight text-[#8f3b55] sm:px-2 sm:text-xl"><span className="block text-xl sm:text-5xl">21</span>November<br />2026</p>
              <p className="text-[6px] font-bold uppercase leading-4 tracking-wider sm:text-[11px]">6:00 PM<br />Onwards</p>
            </motion.div>
            <motion.p variants={detailReveal} className="mt-1 text-[9px] leading-4 text-ink/80 sm:mt-5 sm:text-xs sm:leading-6">Your presence will make this occasion even more special.</motion.p>
            <motion.p variants={detailReveal} className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-[#a57548] sm:mt-4 sm:text-[11px]">Venue</motion.p>
            <motion.p variants={detailReveal} className="mt-0.5 font-display text-[13px] leading-4 text-[#8f3b55] sm:mt-1 sm:text-xl sm:leading-7">Manasi Hotel<br />Chhatrapati Sambhajinagar, Aurangabad</motion.p>
            <motion.div initial={{ opacity: 0, y: 100, scale: 0.86 }} animate={isVisible ? { opacity: 1, scale: 1, y: [0, -2, 0], rotate: [0, 0.8, -0.8, 0] } : {}} transition={{ opacity: { duration: 0.65, delay: 1 }, scale: { duration: 0.75, delay: 1, type: "spring", stiffness: 120 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }} style={{ transformOrigin: "bottom center" }} className="relative z-10 mx-auto mt-3 h-[clamp(6rem,20dvh,10rem)] w-full max-w-[10rem] sm:mt-5 sm:h-[clamp(10rem,24dvh,13rem)] sm:max-w-[12rem]">
              <Image src="/invitation-assets/Elegant Wedding Couple Dancing.png" alt="Elegant illustration of a wedding couple dancing" fill unoptimized sizes="(max-width: 640px) 288px, 384px" className="object-contain object-bottom drop-shadow-[0_18px_15px_rgba(87,46,42,.18)]" />
            </motion.div>
            <motion.p variants={detailReveal} className="mt-0.5 text-[8px] text-ink/80 sm:mt-1 sm:text-xs">With best compliments from <span className="font-display text-xs text-[#8f3b55] sm:text-lg">Family</span></motion.p>
          </motion.div>
        </motion.article>
      </motion.div>
    </section>
  );
}
