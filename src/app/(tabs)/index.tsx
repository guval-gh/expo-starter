import { Image, Platform, StyleSheet } from 'react-native'

import { useTranslation } from 'react-i18next'

import PartialReactLogo from '@/assets/images/partial-react-logo.png'
import { HelloWave } from '@/components/HelloWave'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

export default function HomeScreen() {
  const { t } = useTranslation()

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image source={PartialReactLogo} style={styles.reactLogo} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t('home:welcome')}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('home:step1.title')}</ThemedText>
        <ThemedText>
          {t('home:step1.edit')}{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{' '}
          {t('home:step1.toSeeChanges')} {t('home:step1.press')}{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: t('home:step1.devTools.ios'),
              android: t('home:step1.devTools.android'),
              web: t('home:step1.devTools.web')
            })}
          </ThemedText>{' '}
          {t('home:step1.openDevTools')}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('home:step2.title')}</ThemedText>
        <ThemedText>{t('home:step2.description')}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{t('home:step3.title')}</ThemedText>
        <ThemedText>
          {t('home:step3.whenReady')}{' '}
          <ThemedText type="defaultSemiBold">{t('home:step3.command')}</ThemedText>{' '}
          {t('home:step3.getFresh')}{' '}
          <ThemedText type="defaultSemiBold">{t('home:step3.appDir')}</ThemedText>{' '}
          {t('home:step3.directory')}{' '}
          <ThemedText type="defaultSemiBold">{t('home:step3.appDir')}</ThemedText>{' '}
          {t('home:step3.to')}{' '}
          <ThemedText type="defaultSemiBold">{t('home:step3.exampleDir')}</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute'
  }
})
