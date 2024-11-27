import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import i18n from '@/i18n'
import { zustandStorage } from '@/stores/settings'
import { storage } from '@/stores/settings'
import { LocalesType } from '@/types/locales'

interface SettingsState {
  language: LocalesType | null
  setLanguage: (newLanguage: LocalesType) => void
  clearStorage: () => void
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, _get) => ({
      language: null,
      setLanguage: (language: LocalesType) => {
        i18n.changeLanguage(language)
        set({ language })
      },
      clearStorage: () => storage.clearAll()
    }),
    {
      name: 'settings-store',
      storage: createJSONStorage(() => zustandStorage)
    }
  )
)
