"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "@/components/section-heading";
import { PaisleyMotif, MandalaMotif } from "@/components/mehndi-motif";
import { cn } from "@/lib/utils";

type Category = "All" | "Bridal" | "Arabic" | "Party" | "Kids";

const gradients = [
  "from-primary via-[oklch(0.45_0.13_28)] to-[oklch(0.6_0.12_35)]",
  "from-accent via-[oklch(0.68_0.12_60)] to-primary",
  "from-[oklch(0.5_0.1_30)] via-primary to-[oklch(0.4_0.13_15)]",
  "from-accent/80 via-[oklch(0.7_0.1_50)] to-[oklch(0.55_0.11_35)]",
];

const items: {
  title: string;
  category: Exclude<Category, "All">;
  motif: "paisley" | "mandala";
}[] = [
  { title: "Bridal full-hand trail", category: "Bridal", motif: "mandala" },
  { title: "Arabic floral vine", category: "Arabic", motif: "paisley" },
  { title: "Sangeet statement palm", category: "Party", motif: "paisley" },
  { title: "Little hands, sweet dots", category: "Kids", motif: "paisley" },
  { title: "Bridal feet mandala", category: "Bridal", motif: "mandala" },
  { title: "Minimal Indo-western cuff", category: "Arabic", motif: "paisley" },
  { title: "Festive quick trail", category: "Party", motif: "paisley" },
  { title: "Bridal back-of-hand jaal", category: "Bridal", motif: "mandala" },
];

const categories: Category[] = ["All", "Bridal", "Arabic", "Party", "Kids"];

export function GallerySection() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = items
    .map((item, i) => ({ ...item, i }))
    .filter((item) => active === "All" || item.category === active);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A peek into recent designs"
          description="Every design is hand-drawn and one-of-a-kind. Browse by occasion, or message us your inspiration photo for a custom pattern."
        />

        <Tabs
          value={active}
          onValueChange={(v) => setActive(v as Category)}
          className="mt-10 items-center"
        >
          <TabsList className="flex-wrap bg-muted/70">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="rounded-full">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <motion.button
              key={item.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelected(item.i)}
              className={cn(
                "group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br text-left shadow-sm",
                gradients[item.i % gradients.length]
              )}
            >
              {item.motif === "mandala" ? (
                <MandalaMotif className="absolute inset-0 m-auto h-3/4 w-3/4 text-white/25 transition-transform duration-500 group-hover:scale-110" />
              ) : (
                <PaisleyMotif className="absolute inset-0 m-auto h-2/3 w-2/3 text-white/25 transition-transform duration-500 group-hover:scale-110" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Expand className="size-4" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3">
                <p className="text-xs font-medium text-white/80">
                  {item.category}
                </p>
                <p className="text-sm font-semibold text-white">
                  {item.title}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-lg overflow-hidden p-0">
          {selected !== null && (
            <>
              <div
                className={cn(
                  "flex aspect-square items-center justify-center bg-gradient-to-br",
                  gradients[selected % gradients.length]
                )}
              >
                {items[selected].motif === "mandala" ? (
                  <MandalaMotif className="h-3/4 w-3/4 text-white/30" />
                ) : (
                  <PaisleyMotif className="h-2/3 w-2/3 text-white/30" />
                )}
              </div>
              <DialogHeader className="p-6 pt-4">
                <DialogTitle className="font-heading">
                  {items[selected].title}
                </DialogTitle>
                <DialogDescription>
                  {items[selected].category} mehndi design — message us this
                  look to book something similar.
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
