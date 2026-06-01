import { type Locale } from "@/lib/locale";

/**
 * Parent partnership tips — distilled from the Salvați Copiii / EU te iubesc
 * online safety guide for parents on social networks. Surfaces the
 * "be a partner, not a guard" framing on the homepage so the site doesn't
 * feel like another scary checklist.
 */

type Tip = {
  number: string;
  title: string;
  body: string;
  takeaway: string;
};

const tipsByLocale: Record<Locale, { eyebrow: string; title: string; lead: string; tips: Tip[]; closing: string }> = {
  en: {
    eyebrow: "For parents, in plain language",
    title: "Be your child's partner in the digital world — not its guard.",
    lead:
      "The settings on this site work best when they're paired with a routine and a real conversation. These are the habits parent experts agree matter most.",
    tips: [
      {
        number: "01",
        title: "Start with an open conversation",
        body:
          "Ask what apps they use and why they like them. Show interest without judging — listen first, then explain the risks.",
        takeaway: "Open dialogue beats strict control."
      },
      {
        number: "02",
        title: "Learn the platforms they live on",
        body:
          "Make an account on the same apps. Check the minimum recommended age. Explore the privacy and parental controls together.",
        takeaway: "Knowing the platform = informed protection."
      },
      {
        number: "03",
        title: "Set screen-time limits together",
        body:
          "Agree on screen-free moments — meals, the hour before bed. Use Screen Time, Digital Wellbeing, or Family Link to keep it honest.",
        takeaway: "Digital balance = better mental health."
      },
      {
        number: "04",
        title: "Make it safe to talk about mistakes",
        body:
          "Kids will post impulsively or get caught in trolling. React calmly, with empathy — every slip can become a lesson in digital responsibility.",
        takeaway: "No shame — only the next decision."
      }
    ],
    closing: "Inspired by the parent guide from Asociația EU te iubesc."
  },
  ro: {
    eyebrow: "Pentru părinți, pe înțelesul tuturor",
    title: "Fii partenerul copilului tău în lumea digitală — nu paznicul ei.",
    lead:
      "Setările de pe acest site funcționează cel mai bine alături de o rutină și o conversație reală. Acestea sunt obiceiurile pe care părinții și specialiștii le consideră cele mai importante.",
    tips: [
      {
        number: "01",
        title: "Începe cu o discuție deschisă",
        body:
          "Întreabă ce aplicații folosește și de ce îi plac. Ascultă fără să judeci, apoi explică riscurile. Asigură-l că poate veni la tine oricând.",
        takeaway: "Dialogul sincer e mai eficient decât controlul strict."
      },
      {
        number: "02",
        title: "Învață platformele pe care le folosește",
        body:
          "Creează-ți cont pe aceleași rețele. Verifică vârsta minimă recomandată și explorează împreună setările de confidențialitate.",
        takeaway: "Cunoașterea platformei = protecție informată."
      },
      {
        number: "03",
        title: "Stabiliți împreună limite de timp",
        body:
          "Stabiliți perioade fără ecrane — la masă, cu o oră înainte de somn. Folosiți Screen Time, Digital Wellbeing sau Family Link.",
        takeaway: "Echilibrul digital = sănătate mintală mai bună."
      },
      {
        number: "04",
        title: "Vorbiți despre greșeli fără rușine",
        body:
          "Copiii pot posta impulsiv sau pot fi victime ale trolling-ului. Reacționează calm, cu empatie — orice greșeală poate deveni o lecție.",
        takeaway: "Fără rușine — doar decizia următoare."
      }
    ],
    closing: "Inspirat din ghidul pentru părinți al Asociației EU te iubesc."
  }
};

export function PartnerTips({ locale = "en" }: { locale?: Locale }) {
  const data = tipsByLocale[locale];

  return (
    <section
      aria-labelledby="partner-tips-title"
      className="scroll-mt-24 rounded-[28px] border border-paper-line bg-white px-6 py-10 shadow-soft sm:px-10 sm:py-12"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2
            id="partner-tips-title"
            className="font-display text-3xl font-semibold leading-tight text-paper-ink sm:text-[34px]"
          >
            {data.title}
          </h2>
          <p className="text-paper-ink/80">{data.lead}</p>
          <p className="text-sm italic text-paper-ink/60">{data.closing}</p>
        </div>
        <ol className="grid gap-5 sm:grid-cols-2">
          {data.tips.map((tip) => (
            <li
              key={tip.number}
              className="rounded-2xl border border-paper-line bg-paper-50 p-5"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl font-semibold text-accent-500">
                  {tip.number}
                </span>
                <h3 className="font-display text-lg font-semibold text-paper-ink">
                  {tip.title}
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-7 text-paper-ink/80">
                {tip.body}
              </p>
              <p className="mt-3 border-t border-paper-line pt-3 text-sm font-medium text-brand-700">
                {tip.takeaway}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
