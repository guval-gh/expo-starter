import { Image, Platform, StyleSheet } from 'react-native'

import { useTranslation } from 'react-i18next'

import ReactLogo from '@/assets/images/react-logo.png'
import ReactLogoSVG from '@/assets/images/react.svg'
import { Collapsible } from '@/components/Collapsible'
import { ExternalLink } from '@/components/ExternalLink'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { IconSymbol } from '@/components/ui/IconSymbol'

export default function TabTwoScreen() {
  const { t } = useTranslation()

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
        <ThemedText type="title">{t('explore:title')}</ThemedText>
      </ThemedView>
      <ThemedText>{t('explore:description')}</ThemedText>
      <Collapsible title={t('explore:fileRouting.title')}>
        <ThemedText>
          {t('explore:fileRouting.text1', {
            screen1: 'app/(tabs)/index.tsx',
            screen2: 'app/(tabs)/tsx'
          })}
        </ThemedText>
        <ThemedText>
          {t('explore:fileRouting.text2', {
            layoutFile: 'app/(tabs)/_layout.tsx'
          })}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">{t('explore:fileRouting.learnMore')}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('explore:platformSupport.title')}>
        <ThemedText>
          {t('explore:platformSupport.text', {
            key: <ThemedText type="defaultSemiBold">w</ThemedText>
          })}
        </ThemedText>
      </Collapsible>
      <Collapsible title={t('explore:images.title')}>
        <ThemedText>
          {t('explore:images.text', {
            density2x: <ThemedText type="defaultSemiBold">@2x</ThemedText>,
            density3x: <ThemedText type="defaultSemiBold">@3x</ThemedText>
          })}
        </ThemedText>
        <Image source={ReactLogo} style={{ alignSelf: 'center' }} />
        <ReactLogoSVG style={{ alignSelf: 'center' }} width={100} height={100} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">{t('explore:images.learnMore')}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('explore:customFonts.title')}>
        <ThemedText>
          {t('explore:customFonts.text', {
            layoutFile: <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>,
            example: (
              <ThemedText style={{ fontFamily: 'SpaceMono' }}>
                {t('explore:customFonts.example')}
              </ThemedText>
            )
          })}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">{t('explore:customFonts.learnMore')}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('explore:themes.title')}>
        <ThemedText>
          {t('explore:themes.text', {
            hook: <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText>
          })}
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">{t('explore:themes.learnMore')}</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title={t('explore:animations.title')}>
        <ThemedText>
          {t('explore:animations.text', {
            component: <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText>,
            library: <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>
          })}
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              {t('explore:animations.iosText', {
                component: (
                  <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>
                )
              })}
            </ThemedText>
          )
        })}
      </Collapsible>
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
