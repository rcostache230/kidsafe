import { BrandMarkSvg } from "@/components/brand";
import { getRiskMeta, type Entry } from "@/data/entries";
import { getCopy } from "@/lib/copy";
import { type Locale } from "@/lib/locale";
import { SITE_NAME } from "@/lib/site";

export const OG_SIZE = {
  width: 1200,
  height: 630
};

export const OG_CONTENT_TYPE = "image/png";

const baseText = "#0f172a";
const mutedText = "#5f6b7a";
const brandColor = "#1e293b";

function legendDot(color: string) {
  return (
    <span
      style={{
        width: 12,
        height: 12,
        borderRadius: 999,
        background: color,
        display: "flex"
      }}
    />
  );
}

function riskTone(level: Entry["riskLevel"], locale: Locale) {
  const meta = getRiskMeta(level, locale);

  return {
    label: meta.label,
    dot: meta.hexColor,
    background:
      level === "critical"
        ? "rgba(220, 38, 38, 0.10)"
        : level === "high"
          ? "rgba(234, 88, 12, 0.10)"
          : level === "medium"
            ? "rgba(217, 119, 6, 0.10)"
            : "rgba(5, 150, 105, 0.10)"
  };
}

export function OgBrand({ compact = false }: { compact?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        color: brandColor
      }}
    >
      <BrandMarkSvg size={compact ? 42 : 52} />
      {!compact ? (
        <span
          style={{
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: -0.6,
            color: brandColor
          }}
        >
          {SITE_NAME}
        </span>
      ) : null}
    </div>
  );
}

export function HomeOgCard({ locale = "en" }: { locale?: Locale }) {
  const copy = getCopy(locale);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#ffffff",
        padding: "56px 64px",
        color: baseText,
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}
    >
      <OgBrand />
      <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 860 }}>
        <div
          style={{
            fontSize: 62,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: -1.8
          }}
        >
          {copy.og.homeTitle}
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.4,
            color: mutedText,
            maxWidth: 780
          }}
        >
          {copy.og.homeSubtitle}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 30,
          fontSize: 22,
          color: mutedText
        }}
      >
        {[
          [getCopy(locale).riskBar.critical, "#DC2626"],
          [getCopy(locale).riskBar.high, "#EA580C"],
          [getCopy(locale).riskBar.medium, "#D97706"],
          [getCopy(locale).riskBar.low, "#059669"]
        ].map(([label, color]) => (
          <div
            key={label}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            {legendDot(color)}
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EntryOgCard({
  entry,
  locale = "en"
}: {
  entry: Entry;
  locale?: Locale;
}) {
  const copy = getCopy(locale);
  const tone = riskTone(entry.riskLevel, locale);
  const categoryLabel =
    entry.category === "devices"
      ? locale === "ro"
        ? "Dispozitive"
        : "Devices"
      : entry.category === "os"
        ? locale === "ro"
          ? "Sisteme de operare"
          : "Operating systems"
        : locale === "ro"
          ? "Aplicatii"
          : "Apps";

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#ffffff",
        padding: "52px 60px",
        color: baseText,
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}
    >
      <OgBrand compact />
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 900 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            color: mutedText
          }}
        >
          <span>{categoryLabel}</span>
          <span>→</span>
          <span>{entry.name}</span>
        </div>
        <div
          style={{
            fontSize: 66,
            lineHeight: 1.02,
            fontWeight: 700,
            letterSpacing: -2
          }}
        >
          {entry.name}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            gap: 12,
            borderRadius: 999,
            background: tone.background,
            padding: "12px 18px",
            fontSize: 24,
            fontWeight: 600,
            color: baseText
          }}
        >
          {legendDot(tone.dot)}
          <span>{entry.riskLabelText}</span>
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.35,
            color: mutedText,
            maxWidth: 840
          }}
        >
          {entry.summary}
        </div>
      </div>

      {entry.category === "apps" && entry.riskBarPosition !== undefined ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 820 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 18,
              color: mutedText
            }}
          >
            <span>{copy.og.riskLevel}</span>
            <span>{entry.riskBarPosition}%</span>
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              width: "100%",
              height: 18,
              borderRadius: 999,
              overflow: "hidden",
              border: "1px solid #d7dee7"
            }}
          >
            <span style={{ flex: 1, background: "#E1F5EE" }} />
            <span style={{ flex: 1, background: "#FAEEDA" }} />
            <span style={{ flex: 1, background: "#FCEBEB" }} />
            <span style={{ flex: 1, background: "#FCEBEB" }} />
            <span
              style={{
                position: "absolute",
                top: 1,
                left: `calc(${entry.riskBarPosition}% - 10px)`,
                width: 16,
                height: 16,
                borderRadius: 999,
                background: brandColor,
                border: "2px solid #ffffff"
              }}
            />
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 20,
            color: mutedText
          }}
        >
          <span>{copy.og.parentGuide}</span>
        </div>
      )}
    </div>
  );
}
