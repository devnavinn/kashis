import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <BlurFade inView>
      <div
        className={cn(
          "mx-auto max-w-2xl",
          align === "center" ? "text-center" : "text-left ml-0",
          className
        )}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-balance text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </BlurFade>
  );
}
