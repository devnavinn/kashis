"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, PenTool, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    icon: MessageCircle,
    title: "Reach out",
    description:
      "Call or WhatsApp us with your event date, occasion, and design preference.",
  },
  {
    icon: CalendarCheck,
    title: "Confirm your slot",
    description:
      "We share available time slots and lock in your booking with a small advance.",
  },
  {
    icon: PenTool,
    title: "Get styled",
    description:
      "Our artist arrives on time and applies your custom henna design with premium paste.",
  },
  {
    icon: Sparkles,
    title: "Enjoy the glow",
    description:
      "Aftercare tips included so your rich, dark stain lasts 2–3 weeks.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Booking your mehndi artist is effortless"
          description="No apps, no forms — just a quick conversation and you're booked."
        />

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-8 left-0 right-0 hidden h-px bg-border lg:block" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-start"
            >
              <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
                <step.icon className="size-6 text-primary" />
                <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
