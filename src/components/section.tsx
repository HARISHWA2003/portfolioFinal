import { Reveal } from "@/components/reveal";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  caption?: string;
  children: ReactNode;
}

export function Section({ id, index, title, caption, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-16 sm:py-24">
      <Reveal>
        <div className="flex items-baseline gap-3 border-b border-steel/50 pb-4">
          <span className="label text-accent">{index}</span>
          <h2 className="headline text-2xl text-white sm:text-3xl">{title}</h2>
          {caption && (
            <span className="ml-auto hidden text-sm text-chrome/45 sm:block">
              {caption}
            </span>
          )}
        </div>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
