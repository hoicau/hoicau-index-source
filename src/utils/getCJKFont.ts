type Weight = 400 | 700;

/**
 * Fetch a subsetted Noto Sans SC font (TTF) covering only the characters in
 * `text`, for Satori-based OG image generation. The bundled "Google Sans Code"
 * font has no CJK glyphs, so Chinese renders as tofu boxes without this.
 *
 * An old User-Agent is sent so Google Fonts returns a TTF (`format('truetype')`)
 * rather than woff2, which Satori cannot parse. Returns null on any failure so
 * the build degrades gracefully instead of crashing.
 */
export async function getCJKFont(
  text: string,
  weight: Weight = 400
): Promise<ArrayBuffer | null> {
  const chars = Array.from(new Set(text)).join("");
  if (!chars) return null;

  try {
    const api = `https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@${weight}&text=${encodeURIComponent(
      chars
    )}`;
    const css = await fetch(api, {
      headers: {
        // Old WebKit UA → Google serves a plain TTF (Satori needs TTF).
        // NOTE: an MSIE UA returns EOT instead, which Satori cannot parse.
        "User-Agent":
          "Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebKit/534.30",
      },
    }).then(res => res.text());

    const match = css.match(/src:\s*url\((https:\/\/[^)]+)\)/);
    if (!match) return null;

    return await fetch(match[1]).then(res => res.arrayBuffer());
  } catch {
    return null;
  }
}
