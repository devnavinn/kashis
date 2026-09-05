"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { buildWhatsappLink } from "@/lib/constants";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={buildWhatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4, type: "spring" }}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <WhatsAppIcon className="relative size-7" />
    </motion.a>
  );
}
