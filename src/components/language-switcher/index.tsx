import { useTranslation } from "react-i18next"
import { type SupportedLanguage, supportedLanguages } from "~/i18n"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: SupportedLanguage) => {
    i18n.changeLanguage(lang)
  }

  const currentLanguage = i18n.language as SupportedLanguage

  return (
    <div className="flex items-center gap-1">
      {supportedLanguages.map(lang => (
        <button
          key={lang}
          type="button"
          onClick={() => changeLanguage(lang)}
          className={$(
            "px-2 py-1 rounded text-sm transition-all",
            "hover:(bg-primary/10 op-100)",
            currentLanguage === lang
              ? "bg-primary/20 color-primary font-bold"
              : "op-70",
          )}
        >
          {lang === "en" ? "EN" : "中"}
        </button>
      ))}
    </div>
  )
}
