// Type-safe translation keys
export interface TranslationResources {
  navbar: {
    more: string
  }
  columns: {
    china: string
    world: string
    tech: string
    finance: string
    focus: string
    realtime: string
    hottest: string
    uncategorized: string
  }
  card: {
    updated: string
    fetchFailed: string
    loading: string
    dragging: string
  }
  search: {
    placeholder: string
    noResults: string
    swipeHint: string
  }
  menu: {
    logout: string
    githubLogin: string
    starOnGithub: string
  }
  auth: {
    loginRequired: string
    login: string
    authFailed: string
  }
  updates: {
    updateSuccess: string
    viewUpdate: string
    updateAvailable: string
    updateNow: string
  }
  relativeTime: {
    justNow: string
    minutesAgo: string
    hoursAgo: string
    monthDay: string
  }
}

declare module "i18next" {
  interface CustomTypeOptions {
    resources: TranslationResources
    defaultNS: "translation"
    ns: "translation"
  }
}
