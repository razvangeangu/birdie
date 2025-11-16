// Required for CSS to work on Expo Web.
import './strict.css';
// Required for Fast Refresh to work on Expo Web
import '@expo/metro-runtime';

import 'react-native-reanimated';

import '@/i18n';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/ro';

import { ThemeProvider, useFonts } from '@birdie/design-system';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { css, html } from 'react-strict-dom';

dayjs.extend(duration);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

SplashScreen.preventAutoHideAsync();

const styles = css.create({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
  },
});

export default function RootLayout() {
  const { i18n } = useTranslation();
  const [fontsLoaded] = useFonts();

  dayjs.locale(i18n.language);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <html.div style={styles.root} data-layoutconformance="strict" lang={i18n.language}>
          <Slot />
        </html.div>
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
