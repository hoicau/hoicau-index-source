import en from "@/i18n/lang/en";
import zh from "@/i18n/lang/zh";

const LANG_KEY = "lang";
const SUPPORTED = ["zh", "en"] as const;
type Lang = (typeof SUPPORTED)[number];
const DEFAULT_LANG: Lang = "zh";

const DICTS: Record<Lang, typeof en> = { en, zh };

function getByPath(obj: unknown, path: string): string | undefined {
  const value = path.split(".").reduce<unknown>(
    (acc, key) =>
      acc && typeof acc === "object"
        ? (acc as Record<string, unknown>)[key]
        : undefined,
    obj
  );
  return typeof value === "string" ? value : undefined;
}

function getLang(): Lang {
  const stored = localStorage.getItem(LANG_KEY);
  return stored && (SUPPORTED as readonly string[]).includes(stored)
    ? (stored as Lang)
    : DEFAULT_LANG;
}

function applyTranslations(lang: Lang): void {
  const dict = DICTS[lang] ?? DICTS[DEFAULT_LANG];

  document.documentElement.lang = lang;
  document.documentElement.setAttribute("data-lang", lang);

  // Swap text content for any element tagged with a dot-path key.
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (!key) return;
    const value = getByPath(dict, key);
    if (value !== undefined) el.textContent = value;
  });

  // Swap attributes, e.g. data-i18n-attr="aria-label:a11y.toggleTheme;title:nav.archives"
  document.querySelectorAll<HTMLElement>("[data-i18n-attr]").forEach(el => {
    const spec = el.dataset.i18nAttr;
    if (!spec) return;
    for (const pair of spec.split(";")) {
      const [attr, key] = pair.split(":").map(s => s.trim());
      if (!attr || !key) continue;
      const value = getByPath(dict, key);
      if (value !== undefined) el.setAttribute(attr, value);
    }
  });

  // Show/hide whole blocks by language, for prose that contains markup
  // (e.g. embedded links) and can't be swapped via textContent.
  document.querySelectorAll<HTMLElement>("[data-lang-show]").forEach(el => {
    el.classList.toggle("hidden", el.dataset.langShow !== lang);
  });

  // Reflect state on the toggle button: show the language you'd switch TO.
  const btn = document.querySelector("#lang-btn");
  if (btn) {
    btn.setAttribute(
      "aria-label",
      lang === "en" ? "切换到中文" : "Switch to English"
    );
    const label = btn.querySelector<HTMLElement>("[data-lang-label]");
    if (label) label.textContent = lang === "en" ? "中" : "EN";
  }
}

function setup(): void {
  applyTranslations(getLang());

  document.querySelector("#lang-btn")?.addEventListener("click", () => {
    const next: Lang = getLang() === "en" ? "zh" : "en";
    localStorage.setItem(LANG_KEY, next);
    applyTranslations(next);
  });
}

setup();

// Re-run after View Transitions navigation (DOM is swapped each time).
document.addEventListener("astro:after-swap", setup);
