import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"

export const supportedLanguages = ["en", "zh"] as const
export type SupportedLanguage = typeof supportedLanguages[number]

export const defaultLanguage: SupportedLanguage = "en"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,

    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },

    ns: ["translation"],
    defaultNS: "translation",

    interpolation: {
      escapeValue: false, // React already escapes
    },

    react: {
      useSuspense: true,
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "newsnow-language",
    },
  })

export default i18n
