"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  buildWhatsappLink,
  phoneHref,
  phoneDisplay,
} from "@/lib/constants";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo image */}
        <Link
          href="#top"
          aria-label="Go to homepage"
          className="flex items-center"
        >
          <Image
            src="/icon.png"
            alt="K Logo"
            width={160}
            height={48}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${phoneHref}`}>
            <Button variant="outline" size="sm" className="gap-2 rounded-full">
              <Phone className="size-4" />
              {phoneDisplay}
            </Button>
          </a>

          <a href={buildWhatsappLink()} target="_blank" rel="noreferrer">
            <Button size="sm" className="gap-2 rounded-full">
              <WhatsAppIcon className="size-4" />
              Book Now
            </Button>
          </a>
        </div>

        <Sheet>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" className="md:hidden" />}
          >
            <Menu className="size-5" />
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/logo.png"
                  alt="R Logo"
                  width={150}
                  height={45}
                  className="h-9 w-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>

            <nav className="mt-4 flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  nativeButton={false}
                  render={
                    <a
                      href={link.href}
                      className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground/90 hover:bg-muted"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-2 px-4">
              <a href={`tel:${phoneHref}`}>
                <Button variant="outline" className="w-full gap-2 rounded-full">
                  <Phone className="size-4" />
                  {phoneDisplay}
                </Button>
              </a>

              <a href={buildWhatsappLink()} target="_blank" rel="noreferrer">
                <Button className="w-full gap-2 rounded-full">
                  <WhatsAppIcon className="size-4" />
                  Book on WhatsApp
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
