import i18n, { InitOptions, Module } from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'react-native-localize'

import { zustandStorage } from '@/stores/settings'
import { LocalesEnum, LocalesType, availableLocales } from '@/types/locales'

import commonEn from './locales/en/common.json'
import exploreEn from './locales/en/explore.json'
import homeEn from './locales/en/home.json'
import settingsEn from './locales/en/settings.json'
import commonFr from './locales/fr/common.json'
import exploreFr from './locales/fr/explore.json'
import homeFr from './locales/fr/home.json'
import settingsFr from './locales/fr/settings.json'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async (callback: (language: LocalesType) => void) => {
    try {
      const savedLanguage = await zustandStorage.getItem('language')

      if (savedLanguage) {
        callback(savedLanguage as LocalesType)
        return
      }

      callback(getLocales()[0].languageCode === 'fr' ? 'fr' : 'en')
    } catch {
      callback('en')
    }
  },
  cacheUserLanguage: async (language: LocalesType) => {
    try {
      zustandStorage.setItem('language', language)
    } catch {}
  }
}

const i18nConfig: InitOptions = {
  resources: {
    en: {
      common: commonEn,
      home: homeEn,
      explore: exploreEn,
      settings: settingsEn
    },
    fr: {
      common: commonFr,
      home: homeFr,
      explore: exploreFr,
      settings: settingsFr
    }
  },
  supportedLngs: availableLocales,
  fallbackLng: LocalesEnum.en,
  ns: ['common', 'home', 'explore', 'settings'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false
  },
  returnNull: false
}

i18n
  .use(languageDetector as Module)
  .use(initReactI18next)
  .init(i18nConfig)

export default i18n
