import { useRegisterSW } from "virtual:pwa-register/react"
import { useMount } from "react-use"
import { useTranslation } from "react-i18next"
import { useToast } from "./useToast"

export function usePWA() {
  const { t } = useTranslation()
  const toaster = useToast()
  const { updateServiceWorker, needRefresh: [needRefresh] } = useRegisterSW()

  useMount(async () => {
    const update = () => {
      updateServiceWorker().then(() => localStorage.setItem("updated", "1"))
    }
    await delay(1000)
    if (localStorage.getItem("updated")) {
      localStorage.removeItem("updated")
      toaster(t("updates.updateSuccess"), {
        action: {
          label: t("updates.viewUpdate"),
          onClick: () => {
            window.open(`${Homepage}/releases/tag/v${Version}`)
          },
        },
      })
    } else if (needRefresh) {
      if (!navigator) return

      if ("connection" in navigator && !navigator.onLine) return

      const resp = await myFetch("/latest")

      if (resp.v && resp.v !== Version) {
        toaster(t("updates.updateAvailable"), {
          action: {
            label: t("updates.updateNow"),
            onClick: update,
          },
          onDismiss: update,
        })
      }
    }
  })
}
