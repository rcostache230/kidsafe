import { type Locale } from "@/lib/locale";

const tipsByLocale = {
  en: {
    title: "Make the settings part of a conversation",
    lead: "Talk about the rules as you set them. Your child should know what to do when something goes wrong.",
    closing: "Inspired by the parent guide from Asociația EU te iubesc.",
    tips: [
      { title: "Ask about their apps", body: "Ask what they use and why they like it. Listen before explaining the risks, and make clear that they can come to you for help." },
      { title: "Explore together", body: "Try the apps yourself, check the minimum age and look through the privacy and parental settings together." },
      { title: "Agree on screen-free times", body: "Choose moments such as meals and the hour before bed. Use Screen Time, Digital Wellbeing or Family Link to support that routine." },
      { title: "Respond calmly to mistakes", body: "If your child posts something impulsively or encounters trolling, help them decide what to do next. Shame makes it harder to ask for help." }
    ]
  },
  ro: {
    title: "Vorbiți despre setări, pe măsură ce le faceți",
    lead: "Explică regulile când le stabiliți. Copilul trebuie să știe ce poate face când ceva nu merge bine.",
    closing: "Inspirat din ghidul pentru părinți al Asociației EU te iubesc.",
    tips: [
      { title: "Întreabă despre aplicațiile lui", body: "Află ce folosește și de ce îi place. Ascultă înainte să explici riscurile și asigură-l că poate veni la tine pentru ajutor." },
      { title: "Explorați împreună", body: "Încearcă și tu aplicațiile, verifică vârsta minimă și parcurgeți împreună setările de confidențialitate și control parental." },
      { title: "Stabiliți perioade fără ecrane", body: "Alegeți momente precum masa și ora dinaintea somnului. Folosiți Screen Time, Digital Wellbeing sau Family Link pentru a susține rutina." },
      { title: "Reacționează calm la greșeli", body: "Dacă postează impulsiv sau întâlnește comentarii răutăcioase, ajută-l să decidă ce face mai departe. Rușinea îl poate împiedica să ceară ajutor." }
    ]
  }
};

export function PartnerTips({ locale = "en" }: { locale?: Locale }) {
  const data = tipsByLocale[locale];
  return (
    <section aria-labelledby="partner-tips-title" className="space-y-7 border-t border-paper-line pt-10">
      <div className="max-w-2xl space-y-3">
        <h2 id="partner-tips-title" className="font-display text-3xl font-semibold leading-tight">{data.title}</h2>
        <p className="text-paper-mute">{data.lead}</p>
      </div>
      <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
        {data.tips.map((tip) => <li key={tip.title} className="space-y-2">
          <h3 className="font-display text-xl font-semibold">{tip.title}</h3>
          <p className="text-[15px] leading-7 text-paper-mute">{tip.body}</p>
        </li>)}
      </ul>
      <p className="text-sm text-paper-mute">{data.closing}</p>
    </section>
  );
}
