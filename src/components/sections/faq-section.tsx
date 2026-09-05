import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "For bridal packages, we recommend booking 3–4 weeks ahead, especially during wedding season (Oct–Feb). Party and simple designs can often be booked with just 1–2 days' notice — message us on WhatsApp to check availability.",
  },
  {
    q: "Do you travel to my venue?",
    a: "Yes — we travel across the city and nearby areas for bridal and group bookings. Travel charges beyond 15km are shared upfront with no surprises.",
  },
  {
    q: "What henna do you use — is it safe?",
    a: "We use 100% natural, chemical-free henna paste made in-house. No black henna or PPD additives, so it's safe for sensitive skin, pregnant clients, and kids.",
  },
  {
    q: "How long does the design last?",
    a: "With proper aftercare (which we walk you through after your session), the stain typically lasts 2–3 weeks, gradually fading over time.",
  },
  {
    q: "Can I send a reference design?",
    a: "Absolutely — share a photo or Pinterest link on WhatsApp and we'll recreate it, or use it as inspiration for something personalised to you.",
  },
  {
    q: "How do I confirm my booking?",
    a: "A small advance payment confirms your slot once we finalise the date, package, and location over a call or WhatsApp.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-muted/40 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Can't find what you're looking for? Call or WhatsApp us directly."
        />

        <Accordion className="mt-12 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading text-base font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
