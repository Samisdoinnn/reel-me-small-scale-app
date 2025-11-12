import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GradientBackground } from '../components/GradientBackground';
import { AppHeader } from '../components/AppHeader';
import { CreatorInsightCard } from '../components/CreatorInsightCard';
import { palette, typography } from '../theme';
import { insights } from '../data/mockData';
import { StatPill } from '../components/StatPill';

export const CreatorStudioScreen = () => {
  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader
          title="Creator studio"
          subtitle="Evolve your community"
          rightAction={{ icon: 'options-outline', onPress: () => undefined }}
        />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>This week</Text>
          <View style={styles.summaryRow}>
            <StatPill label="Engagement rate" value="24%" accent={palette.aquaBlue} />
            <StatPill label="Saved stories" value="946" accent={palette.neonPink} />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Momentum insights</Text>
          <View style={styles.grid}>
            {insights.map((insight) => (
              <CreatorInsightCard key={insight.id} metric={insight.metric} value={insight.value} trend={insight.trend} change={insight.change} />
            ))}
          </View>
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
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  grid: {
    gap: 18,
  },
});

