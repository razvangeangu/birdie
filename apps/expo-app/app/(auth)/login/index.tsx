import { Button, Divider, Link, SocialButton, TextField, Typography, View } from '@birdie/design-system';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Trans, useTranslation } from 'react-i18next';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { css } from 'react-strict-dom';
import { spacing } from '../../../../../packages/design-system/src/theme/tokens.css';

export default function Page() {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={safeAreaViewStyle.root}>
      <View style={styles.root}>
        <Typography variant="h1">{t('login.title')}</Typography>

        <View style={styles.login}>
          <TextField
            startIcon={<MaterialIcons name="alternate-email" size={16} color="inherit" />}
            placeholder={t('login.email')}
            type="email"
            autoCapitalize="none"
          />

          <TextField
            startIcon={<MaterialIcons name="key" size={16} color="inherit" />}
            placeholder={t('login.password')}
            type="password"
          />
        </View>

        <View style={styles.forgotPassword}>
          <Link href="/forgot-password">{t('login.forgotPassword')}</Link>
        </View>

        <Button fullWidth>{t('login.login')}</Button>

        <Typography as="span" style={styles.textAlignCenter}>
          <Trans i18nKey="login.disclaimer" components={{ a: <Link target="_blank" /> }} />
        </Typography>

        <View style={styles.or}>
          <Divider />
          <Typography>{t('login.or')}</Typography>
          <Divider />
        </View>

        <View style={styles.social}>
          <SocialButton variant="google" />
          <SocialButton variant="apple" />
        </View>

        <Typography as="span">
          <Trans i18nKey="login.noAccount" components={{ a: <Link /> }} />
        </Typography>
      </View>
    </SafeAreaView>
  );
}

const styles = css.create({
  root: {
    alignItems: 'center',
    gap: spacing.large,
    padding: spacing.large,
    maxWidth: 480,
  },
  login: {
    gap: spacing.large,
    width: '100%',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  forgotPassword: {
    alignItems: 'flex-end',
    width: '100%',
  },
  social: {
    gap: spacing.large,
    flexDirection: 'row',
  },
  or: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.large,
    width: '100%',
  },
});

const safeAreaViewStyle = StyleSheet.create({
  root: {
    alignItems: Platform.select({ web: 'center' }),
    display: 'flex',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
});
