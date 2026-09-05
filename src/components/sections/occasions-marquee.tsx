import { Marquee } from "@/components/ui/marquee";
import {
  Heart,
  PartyPopper,
  Gem,
  Baby,
  Sparkle,
  Users,
  Flower2,
  Music,
} from "lucide-react";

const occasions = [
  { label: "Bridal Weddings", icon: Gem },
  { label: "Engagements", icon: Heart },
  { label: "Baby Showers", icon: Baby },
  { label: "Festive & Diwali", icon: Sparkle },
  { label: "Sangeet & Mehndi Night", icon: Music },
  { label: "Birthday Parties", icon: PartyPopper },
  { label: "Group Bookings", icon: Users },
  { label: "Arabic & Indo-Western", icon: Flower2 },
];

export function OccasionsMarquee() {
  return (
    <section className="border-y border-border bg-muted/40 py-8">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted for every celebration
      </p>
      <Marquee pauseOnHover className="[--duration:35s]">
        {occasions.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-sm"
          >
            <Icon className="size-4 text-primary" />
            {label}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
