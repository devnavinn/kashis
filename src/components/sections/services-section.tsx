"use client";

import { motion } from "framer-motion";
import { Crown, Gem, PartyPopper, Baby, Users2, Sparkles } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { PaisleyMotif } from "@/components/mehndi-motif";

const services = [
  {
    icon: Gem,
    title: "Bridal Mehndi",
    price: "From ₹15,000",
    description:
      "Intricate full hand & feet bridal designs with fine detailing, personalised motifs, and a trial session included.",
    tags: ["Trial included", "3–6 hrs"],
    featured: true,
  },
  {
    icon: Crown,
    title: "Groom Mehndi",
    price: "From ₹3,000",
    description:
      "Clean, masculine patterns for the groom — subtle detailing that complements the bride's bridal look.",
    tags: ["45–60 min"],
  },
  {
    icon: PartyPopper,
    title: "Party & Sangeet",
    price: "From ₹2,500",
    description:
      "Statement designs for sangeet nights, festive parties, and pre-wedding functions — quick-dry and long-lasting.",
    tags: ["30–45 min"],
  },
  {
    icon: Users2,
    title: "Group Bookings",
    price: "From ₹800 / person",
    description:
      "On-site artists for guests at weddings, baby showers & corporate events — we scale the team to your headcount.",
    tags: ["2+ artists available"],
  },
  {
    icon: Baby,
    title: "Baby Shower & Godh Bharai",
    price: "From ₹4,000",
    description:
      "Soft, elegant belly and hand mehndi designs for baby showers, with safe, natural henna paste.",
    tags: ["Natural henna"],
  },
  {
    icon: Sparkles,
    title: "Arabic & Indo-Western",
    price: "From ₹1,500",
    description:
      "Bold floral Arabic trails and fusion Indo-western patterns — perfect for a modern, minimal aesthetic.",
    tags: ["20–30 min"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <PaisleyMotif className="pointer-events-none absolute top-10 left-0 hidden h-32 w-32 text-primary/10 lg:block" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Mehndi designs for every occasion"
          description="From bridal masterpieces to quick festive touch-ups — every package is tailored, priced clearly, and booked directly with the artist."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <Card
                className={
                  service.featured
                    ? "relative h-full overflow-hidden border-primary/30 bg-gradient-to-b from-primary/5 to-transparent shadow-md"
                    : "h-full transition-shadow hover:shadow-md"
                }
              >
                {service.featured && (
                  <Badge className="absolute right-4 top-4 bg-accent text-accent-foreground hover:bg-accent">
                    Most booked
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="size-5" />
                  </div>
                  <CardTitle className="mt-3 font-heading text-xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-semibold text-primary">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
