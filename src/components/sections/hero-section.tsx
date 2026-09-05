"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import { DotPattern } from "@/components/ui/dot-pattern";
import { BorderBeam } from "@/components/ui/border-beam";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PaisleyMotif } from "@/components/mehndi-motif";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { buildWhatsappLink, phoneDisplay, phoneHref, site } from "@/lib/constants";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Happy clients", value: 500, suffix: "+" },
  { label: "Years of artistry", value: 8, suffix: "+" },
  { label: "Design styles", value: 40, suffix: "+" },
  { label: "Cities served", value: 12, suffix: "+" },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background pt-16 pb-24 sm:pt-24 sm:pb-32"
    >
      <DotPattern
        glow
        className="text-primary/20 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
      />
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl"
      />
      <PaisleyMotif className="pointer-events-none absolute -top-6 right-6 hidden h-40 w-40 text-primary/15 sm:block" />
      <PaisleyMotif className="pointer-events-none absolute bottom-10 left-4 hidden h-28 w-28 rotate-180 text-accent/20 md:block" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm shadow-sm backdrop-blur"
          >
            <Sparkles className="size-3.5 text-accent" />
            <AnimatedGradientText
              colorFrom="oklch(0.6 0.14 40)"
              colorTo="oklch(0.74 0.13 75)"
              className="font-medium"
            >
              Now booking Wedding Season 2026
            </AnimatedGradientText>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Bridal mehndi that
            <span className="block bg-gradient-to-r from-primary via-[oklch(0.55_0.13_30)] to-accent bg-clip-text text-transparent">
              tells your story
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-balance text-lg text-muted-foreground"
          >
            Hand-drawn henna art for weddings, engagements, and festive
            celebrations — designed around you, applied with care, and
            booked in minutes over a call or WhatsApp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href={buildWhatsappLink()} target="_blank" rel="noreferrer">
              <ShimmerButton
                background="oklch(0.34 0.13 20)"
                shimmerColor="oklch(0.85 0.1 75)"
                className="h-12 w-full gap-2 px-6 text-base font-semibold sm:w-auto"
              >
                <WhatsAppIcon className="size-5" />
                Chat on WhatsApp
              </ShimmerButton>
            </a>
            <a href={`tel:${phoneHref}`} className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full gap-2 rounded-full border-2 px-6 text-base sm:w-auto"
              >
                <Phone className="size-4" />
                {phoneDisplay}
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {["RS", "PK", "AM", "SJ"].map((initials) => (
                  <Avatar key={initials} className="size-9 border-2 border-background">
                    <AvatarFallback className="bg-primary/15 text-xs font-semibold text-primary">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  4.9/5 from 300+ reviews
                </p>
              </div>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-2xl font-bold sm:text-3xl">
                  <NumberTicker
                    value={stat.value}
                    className="text-foreground"
                  />
                  {stat.suffix}
                </dd>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <HeroBookingCard />
        </motion.div>
      </div>
    </section>
  );
}

function HeroBookingCard() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-primary/10">
        <BorderBeam
          colorFrom="oklch(0.74 0.13 75)"
          colorTo="oklch(0.34 0.13 20)"
          size={140}
          duration={8}
        />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Booking request
            </p>
            <p className="font-heading text-lg font-semibold">
              Bridal Mehndi Package
            </p>
          </div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Confirmed
          </span>
        </div>

        <div className="relative mt-6 flex h-40 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-[oklch(0.42_0.13_25)] to-[oklch(0.55_0.12_35)]">
          <PaisleyMotif className="h-28 w-28 text-primary-foreground/80" />
          <PaisleyMotif className="absolute -right-4 -top-4 h-20 w-20 rotate-45 text-accent/60" />
          <PaisleyMotif className="absolute -bottom-6 -left-6 h-24 w-24 -rotate-12 text-primary-foreground/30" />
        </div>

        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Date</dt>
            <dd className="font-medium">Sat, 14 Feb 2026</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Artist</dt>
            <dd className="font-medium">{site.founder}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-muted-foreground">Duration</dt>
            <dd className="font-medium">3–4 hours</dd>
          </div>
        </dl>

        <Button
          className="mt-6 w-full rounded-full"
          size="lg"
          nativeButton={false}
          render={<a href={buildWhatsappLink()} target="_blank" rel="noreferrer" />}
        >
          View availability
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -10, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className={cn(
          "absolute -left-8 -bottom-6 flex items-center gap-3 rounded-2xl border border-border",
          "bg-card px-4 py-3 shadow-lg sm:-left-10"
        )}
      >
        <div className="flex size-9 items-center justify-center rounded-full bg-accent/20 text-accent">
          <Star className="size-4 fill-current" />
        </div>
        <div className="text-sm">
          <p className="font-semibold">4.9 rating</p>
          <p className="text-xs text-muted-foreground">300+ reviews</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute -right-4 -top-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:-right-8"
      >
        <p className="text-xs text-muted-foreground">Next available slot</p>
        <p className="font-heading text-sm font-semibold text-primary">
          Tomorrow, 5 PM
        </p>
      </motion.div>
    </div>
  );
}
