"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function SplashScreen({ onEnter, nameFirst = "Saumya", nameSecond = "Karan" }) {
  const [isOpening, setIsOpening] = useState(false);
  const openingStarted = useRef(false);

  const handleOpen = () => {
    if (openingStarted.current) return;
    openingStarted.current = true;
    setIsOpening(true);
    window.setTimeout(onEnter, 650);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[#fff5df] px-4 py-5 text-center"
      exit={{ opacity: 0, scale: 1.025 }}
      transition={{ duration: 0.65 }}
    >
      <Image
        src="/invitation-assets/Ornate Indian Palace Garden Archway.jpeg"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="scale-[1.03] object-cover object-center blur-[3px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#eed7ae]/30 via-[#fff3dc]/25 to-[#754b36]/25" />

      {isOpening && (
        <>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            className="pointer-events-none absolute inset-y-0 left-0 z-30 w-1/2 border-r border-[#e8c77b]/75 bg-gradient-to-r from-[#4b202c]/95 to-[#76503e]/95 shadow-[12px_0_36px_rgba(48,25,35,.3)]"
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            className="pointer-events-none absolute inset-y-0 right-0 z-30 w-1/2 border-l border-[#e8c77b]/75 bg-gradient-to-l from-[#4b202c]/95 to-[#76503e]/95 shadow-[-12px_0_36px_rgba(48,25,35,.3)]"
          />
        </>
      )}

      <motion.article
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={isOpening ? { opacity: 0, y: -8, scale: 0.97 } : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full max-w-lg rounded-[2rem] border border-[#b98a5a]/75 bg-gradient-to-br from-[#fff4df]/90 via-[#f4e4c8]/88 to-[#ead4ae]/90 p-2 shadow-[0_28px_90px_rgba(73,45,30,.32)] backdrop-blur-md sm:rounded-[2.5rem] sm:p-3"
      >
        <div className="rounded-[1.5rem] border border-[#b98a5a]/50 bg-[#fff8ec]/25 px-4 py-7 sm:rounded-[2rem] sm:px-10 sm:py-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-[#9a6940] sm:text-xs sm:tracking-[0.42em]">A joyful celebration awaits</p>

          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring", stiffness: 130 }}
            className="relative mx-auto my-5 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full border border-[#d5ac68]/80 bg-[#fff5df] shadow-[0_8px_28px_rgba(0,0,0,.24)] sm:my-6 sm:h-20 sm:w-20"
          >
            <Image
              src="/invitation-assets/Minimalist Maroon Ganesha with Amber Tilak.png"
              alt="Lord Ganesha"
              fill
              unoptimized
              sizes="80px"
              className="object-contain p-2"
            />
          </motion.div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#725d4e]">Together with their families</p>
          <h1 className="mt-2 font-display text-[2.6rem] italic leading-none text-[#562d32] sm:mt-3 sm:text-6xl">
            {nameFirst} <span className="not-italic text-[#e8c77b]">&amp;</span> {nameSecond}
          </h1>
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#725d4e] sm:mt-4 sm:text-xs sm:tracking-[0.24em]">Invite you to celebrate their engagement</p>

          <div className="mx-auto my-5 flex max-w-xs items-center justify-center gap-3 text-[#e8c77b] sm:my-6">
            <span className="h-px flex-1 bg-current/60" />
            <span className="text-sm">✦</span>
            <span className="h-px flex-1 bg-current/60" />
          </div>

          <motion.div
            className="relative mt-2 inline-block sm:mt-3"
            animate={{ scale: [1, 1.045, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              aria-hidden="true"
              className="absolute -inset-1 rounded-full border border-[#8f3b55]/55"
              animate={{ scale: [1, 1.12, 1], opacity: [0.65, 0.12, 0.65] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.button
              type="button"
              onClick={handleOpen}
              disabled={isOpening}
              whileHover={{ scale: 1.08, y: -2, boxShadow: "0 14px 34px rgba(143,59,85,.4)" }}
              whileTap={{ scale: 0.94 }}
              className="relative flex items-center gap-3 rounded-full border border-[#8f3b55] bg-[#8f3b55] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#fff8ec] shadow-[0_8px_24px_rgba(86,45,50,.28)] transition-colors hover:bg-[#723343] focus:outline-none focus:ring-2 focus:ring-[#b98a5a] focus:ring-offset-4 focus:ring-offset-[#f4e4c8] sm:px-10 sm:text-xs"
            >
              <span>Enter invitation</span>
              <motion.span aria-hidden="true" animate={{ x: [0, 3, 0] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }} className="text-base leading-none">→</motion.span>
            </motion.button>
          </motion.div>
          <motion.p
            animate={{ opacity: [0.45, 1, 0.45], y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#725d4e]/80"
          >
            Tap to open ✦
          </motion.p>
        </div>
      </motion.article>
    </motion.div>
  );
}
