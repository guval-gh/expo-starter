import i18n, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonEn from './locales/en/common.json'
import exploreEn from './locales/en/explore.json'
import homeEn from './locales/en/home.json'
import settingsEn from './locales/en/settings.json'
import commonFr from './locales/fr/common.json'
import exploreFr from './locales/fr/explore.json'
import homeFr from './locales/fr/home.json'
import settingsFr from './locales/fr/settings.json'

export const availableLocales = ['en', 'fr']
export type LocalesType = 'en' | 'fr'
export enum LocalesEnum {
  EN = 'en',
  FR = 'fr'
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
  fallbackLng: LocalesEnum.EN,
  ns: ['common', 'home', 'explore', 'settings'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false
  },
  returnNull: false
}

i18n.use(initReactI18next).init(i18nConfig)

export default i18n
