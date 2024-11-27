import { MMKV } from 'react-native-mmkv'
import { StateStorage } from 'zustand/middleware'

export const storage = new MMKV({
  id: 'settings-store'
  // encryptionKey: ''
})

export const zustandStorage: StateStorage = {
  setItem: (key, value) => storage.set(key, value),
  getItem: key => storage.getString(key) ?? null,
  removeItem: key => storage.delete(key)
}
