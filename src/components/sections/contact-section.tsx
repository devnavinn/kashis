"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { SectionHeading } from "@/components/section-heading";
import {
  buildWhatsappLink,
  phoneDisplay,
  phoneHref,
  site,
} from "@/lib/constants";

export function ContactSection() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [message, setMessage] = useState("");

  const composed = [
    `Hi ${site.shortName}! I'd like to book mehndi.`,
    name && `Name: ${name}`,
    date && `Preferred date: ${date}`,
    occasion && `Occasion: ${occasion}`,
    message && `Details: ${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <DotPattern className="text-primary/10 [mask-image:radial-gradient(700px_circle_at_center,white,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's plan your mehndi day"
          description="Fastest way to book: call us directly or drop a message on WhatsApp. Prefer email or the form? That works too."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <a href={`tel:${phoneHref}`} className="block">
              <Card className="flex flex-row items-center gap-4 p-5 transition-shadow hover:shadow-md">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call now</p>
                  <p className="font-heading text-lg font-semibold">
                    {phoneDisplay}
                  </p>
                </div>
              </Card>
            </a>

            <a href={buildWhatsappLink()} target="_blank" rel="noreferrer" className="block">
              <Card className="flex flex-row items-center gap-4 border-primary/30 bg-primary/5 p-5 transition-shadow hover:shadow-md">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <WhatsAppIcon className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Chat instantly
                  </p>
                  <p className="font-heading text-lg font-semibold">
                    WhatsApp Us
                  </p>
                </div>
              </Card>
            </a>

            <a href={`mailto:${site.email}`} className="block">
              <Card className="flex flex-row items-center gap-4 p-5 transition-shadow hover:shadow-md">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-heading text-lg font-semibold break-all">
                    {site.email}
                  </p>
                </div>
              </Card>
            </a>

            <Card className="flex flex-row items-center gap-4 p-5">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Based in / travels to
                </p>
                <p className="font-heading text-lg font-semibold">
                  {site.city}
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold">
                Send a quick enquiry
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill this in and we&apos;ll open WhatsApp with your details
                pre-filled — just hit send.
              </p>

              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(buildWhatsappLink(composed), "_blank", "noreferrer");
                }}
              >
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-sm font-medium">
                    Your name
                  </label>
                  <Input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sneha Joshi"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-sm font-medium">
                    Preferred date
                  </label>
                  <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium">
                    Occasion
                  </label>
                  <Input
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    placeholder="Bridal, Sangeet, Baby shower..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium">
                    Tell us more
                  </label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Number of guests, location, design preferences..."
                    rows={4}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 rounded-full sm:w-auto"
                  >
                    <Send className="size-4" />
                    Send via WhatsApp
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
