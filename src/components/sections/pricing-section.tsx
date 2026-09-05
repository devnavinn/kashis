"use client";

import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { buildWhatsappLink, phoneHref } from "@/lib/constants";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Simple",
    price: "₹1,500",
    unit: "starting price",
    description: "Quick, elegant designs for everyday festive occasions.",
    features: [
      "One hand, front & back",
      "Simple floral / Arabic pattern",
      "20–30 minutes",
      "Natural henna paste",
    ],
    featured: false,
  },
  {
    name: "Party & Sangeet",
    price: "₹4,000",
    unit: "starting price",
    description: "Statement designs for guests, sangeet & pre-wedding events.",
    features: [
      "Both hands, wrist to fingertips",
      "Choice of 5 curated patterns",
      "45–60 minutes",
      "Touch-up visit within 3 days",
      "Priority scheduling",
    ],
    featured: true,
  },
  {
    name: "Bridal",
    price: "₹15,000",
    unit: "starting price",
    description: "The full bridal experience — hands, feet & a trial run.",
    features: [
      "Full hands & feet, intricate detail",
      "Personalised bridal motifs",
      "One trial session included",
      "3–6 hours, dedicated artist",
      "Complimentary groom mehndi",
    ],
    featured: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent packages"
          description="Every event is unique — these starting prices are a guide. Share your occasion for an exact quote over WhatsApp."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={plan.featured ? "lg:-translate-y-4" : ""}
            >
              <Card
                className={cn(
                  "relative h-full overflow-hidden p-8",
                  plan.featured
                    ? "border-primary/40 bg-card shadow-xl"
                    : "shadow-sm"
                )}
              >
                {plan.featured && (
                  <BorderBeam
                    colorFrom="oklch(0.74 0.13 75)"
                    colorTo="oklch(0.34 0.13 20)"
                    duration={7}
                  />
                )}
                {plan.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.unit}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-2">
                  <a href={buildWhatsappLink(`Hi! I'd like to book the ${plan.name} mehndi package.`)} target="_blank" rel="noreferrer">
                    <Button
                      className="w-full gap-2 rounded-full"
                      variant={plan.featured ? "default" : "outline"}
                      size="lg"
                    >
                      <WhatsAppIcon className="size-4" />
                      Book on WhatsApp
                    </Button>
                  </a>
                  <a href={`tel:${phoneHref}`}>
                    <Button variant="ghost" className="w-full gap-2 rounded-full" size="sm">
                      <Phone className="size-3.5" />
                      or call to ask a question
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
