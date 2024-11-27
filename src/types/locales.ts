export enum LocalesEnum {
  en = 'en',
  fr = 'fr'
}
export type LocalesType = keyof typeof LocalesEnum
export const availableLocales: LocalesType[] = ['en', 'fr']
