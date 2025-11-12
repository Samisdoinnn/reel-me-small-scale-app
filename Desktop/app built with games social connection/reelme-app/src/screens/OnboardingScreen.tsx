import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GradientBackground } from '../components/GradientBackground';
import { palette, typography } from '../theme';

type OnboardingScreenProps = {
  onGetStarted?: () => void;
};

export const OnboardingScreen = ({ onGetStarted }: OnboardingScreenProps) => {
  return (
    <GradientBackground overlay={false} variant="primary">
      <View style={styles.overlay} />
      <View style={styles.container}>
        <LinearGradient colors={['rgba(5,9,22,0.35)', 'rgba(5,9,22,0.8)']} style={styles.card}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Invite-only beta</Text>
          </View>
          <Text style={styles.title}>Real moments, real control</Text>
          <Text style={styles.subtitle}>
            ReelMe blends ephemeral storytelling, private circles, and creator-grade analytics—so you share boldly without second
            thoughts.
          </Text>
          <TouchableOpacity style={styles.button} onPress={onGetStarted}>
            <Text style={styles.buttonText}>Enter ReelMe</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.footerText}>✔ Encrypted chats</Text>
            <Text style={styles.footerText}>✔ Auto-expiring stories</Text>
            <Text style={styles.footerText}>✔ Circle-level control</Text>
          </View>
        </LinearGradient>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(5, 9, 22, 0.45)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  card: {
    padding: 28,
    borderRadius: 32,
    gap: 18,
    borderWidth: 1,
    borderColor: 'rgba(45,212,191,0.35)',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: 'rgba(244,247,251,0.2)',
  },
  badgeText: {
    ...typography.micro,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    ...typography.display,
  },
  subtitle: {
    ...typography.body,
    color: palette.frostedWhite,
    opacity: 0.85,
  },
  button: {
    marginTop: 10,
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    backgroundColor: palette.aquaBlue,
    shadowColor: palette.aquaBlue,
    shadowOpacity: 0.45,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 12,
  },
  buttonText: {
    ...typography.title,
    color: palette.midnight,
  },
  footer: {
    marginTop: 12,
    gap: 6,
  },
  footerText: {
    ...typography.caption,
    color: palette.softGray,
  },
});

