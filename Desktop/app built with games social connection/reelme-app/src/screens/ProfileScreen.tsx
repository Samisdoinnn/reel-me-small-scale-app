import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../components/GradientBackground';
import { AppHeader } from '../components/AppHeader';
import { DiscoveryTile } from '../components/DiscoveryTile';
import { palette, typography } from '../theme';
import { discoveries } from '../data/mockData';
import { LinearGradient } from 'expo-linear-gradient';

export const ProfileScreen = () => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader
          title="Profile & discovery"
          subtitle="Craft your presence wisely"
          rightAction={{ icon: 'qr-code-outline', onPress: () => undefined }}
        />
        <View style={styles.hero}>
          <LinearGradient colors={['rgba(124,58,237,0.2)', 'rgba(5,9,22,0.8)']} style={styles.heroInner}>
            <Text style={styles.heroTitle}>Invite-only beta</Text>
            <Text style={styles.heroSubtitle}>Share 5 codes • Earn visibility boosts</Text>
            <View style={styles.heroFooter}>
              <Text style={styles.heroTag}>Authenticity score</Text>
              <Text style={styles.heroValue}>92</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Discover circles</Text>
          {discoveries.map((item) => (
            <DiscoveryTile key={item.id} label={item.label} category={item.category} media={item.media} />
          ))}
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 120,
    gap: 32,
  },
  hero: {
    paddingHorizontal: 20,
  },
  heroInner: {
    padding: 22,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(45,212,191,0.25)',
    gap: 12,
  },
  heroTitle: {
    ...typography.heading,
  },
  heroSubtitle: {
    ...typography.caption,
    color: palette.softGray,
  },
  heroFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  heroTag: {
    ...typography.caption,
    color: palette.aquaBlue,
  },
  heroValue: {
    ...typography.heading,
    color: palette.neonPink,
  },
  section: {
    paddingHorizontal: 20,
    gap: 18,
  },
  sectionTitle: {
    ...typography.title,
  },
});

