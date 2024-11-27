import { Pressable, StyleSheet } from 'react-native'

import { useTranslation } from 'react-i18next'

import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { IconSymbol } from '@/components/ui/IconSymbol'

export default function SettingsScreen() {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t('settings:title')}</ThemedText>
      </ThemedView>

      <ThemedText>{t('settings:language')}</ThemedText>
      <Pressable
        onPress={toggleLanguage}
        style={{ padding: 5, alignSelf: 'center', backgroundColor: 'lightgray', borderRadius: 5 }}>
        <ThemedText>{i18n.language === 'en' ? t('languages.fr') : t('languages.en')}</ThemedText>
      </Pressable>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8
  }
})
