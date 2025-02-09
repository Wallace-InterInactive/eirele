import i18n from "./i18n.ts";

export async function toggleLanguage(): Promise<void> {
  console.log(`toggle: ${i18n.language}`);
  await i18n.changeLanguage(i18n.language === "en" ? "ie" : "en");
}
