import { getPublishedGuides } from "@/lib/discovery";
import { absoluteUrl } from "@/lib/site-identity";

export const dynamic = "force-static";

export function GET() {
  const sections = [
    "# Digital Parents",
    "",
    "> Independent digital safety guides for parents in Romanian and English, created by Razvan Costache.",
    "",
    "App guides describe age rules, privacy settings, risks, and practical steps. On guides with a Sources and availability section, use the review date and regional notes when citing a setting.",
    "",
    "## English",
    "",
    `- [Guide directory](${absoluteUrl("/en")}): Apps, devices, operating systems, and home networks.`,
    `- [Articles for parents](${absoluteUrl("/blog/en")}): Screen time, online safety, and AI.`,
    ...getPublishedGuides("en").map(({ name, path }) => `- [${name}](${absoluteUrl(path)})`),
    "",
    "## Română",
    "",
    `- [Ghiduri pentru părinți](${absoluteUrl("/")}): Aplicații, dispozitive, sisteme de operare și rețele de acasă.`,
    `- [Articole pentru părinți](${absoluteUrl("/blog")}): Timp de ecran, siguranță digitală și AI.`,
    ...getPublishedGuides("ro").map(({ name, path }) => `- [${name}](${absoluteUrl(path)})`)
  ];
  return new Response(sections.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" }
  });
}
