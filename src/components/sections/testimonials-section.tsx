import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    name: "Sneha Joshi",
    role: "Bride, Dec 2025",
    initials: "SJ",
    quote:
      "She understood exactly what I wanted for my bridal look. The detailing on my hands was stunning and the stain came out so dark!",
  },
  {
    name: "Ayesha Malik",
    role: "Sangeet guest",
    initials: "AM",
    quote:
      "Booked last minute over WhatsApp for a sangeet and got a slot the same evening. Super professional and quick.",
  },
  {
    name: "Priya Kapoor",
    role: "Baby shower host",
    initials: "PK",
    quote:
      "Arranged mehndi for 15 guests at my baby shower — everyone got a unique design and it wrapped up right on schedule.",
  },
  {
    name: "Ritika Sharma",
    role: "Bride, Nov 2025",
    initials: "RS",
    quote:
      "The bridal package with a trial session was worth every rupee. She patiently redrew designs until I loved it.",
  },
  {
    name: "Fatima Noor",
    role: "Engagement",
    initials: "FN",
    quote:
      "Loved the Arabic floral pattern for my engagement. Clean lines, finished in under 30 minutes.",
  },
  {
    name: "Meera Iyer",
    role: "Diwali party",
    initials: "MI",
    quote:
      "Called on a whim two days before Diwali and she fit me in. The design lasted almost three weeks!",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div className="w-80 shrink-0 rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-3.5 fill-current" />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/90">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <Avatar className="size-9">
          <AvatarFallback className="bg-primary/15 text-xs font-semibold text-primary">
            {t.initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3);

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by brides & party guests alike"
          description="A few words from clients across weddings, festivals, and celebrations."
        />
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32" />
        <Marquee pauseOnHover className="[--duration:45s]">
          {first.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="mt-4 [--duration:45s]">
          {second.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
