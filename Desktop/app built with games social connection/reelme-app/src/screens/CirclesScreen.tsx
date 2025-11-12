import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../components/GradientBackground';
import { AppHeader } from '../components/AppHeader';
import { CircleCard } from '../components/CircleCard';
import { StatPill } from '../components/StatPill';
import { palette, typography } from '../theme';
import { circles } from '../data/mockData';

export const CirclesScreen = () => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader
          title="Private circles"
          subtitle="Curate who sees your world"
          leftAction={{ icon: 'add-outline', onPress: () => undefined }}
          rightAction={{ icon: 'settings-outline', onPress: () => undefined }}
        />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pulse overview</Text>
          <View style={styles.statsRow}>
            <StatPill label="Circles" value="5" />
            <StatPill label="Invites" value="12 pending" accent={palette.neonPink} />
            <StatPill label="Auto-expiry" value="12h avg" accent={palette.aquaBlue} />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active circles</Text>
          {circles.map((circle) => (
            <CircleCard
              key={circle.id}
              name={circle.name}
              members={circle.members}
              activeStories={circle.activeStories}
              privacy={circle.privacy}
            />
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
  section: {
    paddingHorizontal: 20,
    gap: 18,
  },
  sectionTitle: {
    ...typography.title,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

