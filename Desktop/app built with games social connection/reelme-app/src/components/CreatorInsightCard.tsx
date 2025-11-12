import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { palette, typography } from '../theme';

type CreatorInsightCardProps = {
  metric: string;
  value: string;
  trend: 'up' | 'down' | 'steady';
  change: string;
};

const trendColors: Record<CreatorInsightCardProps['trend'], string> = {
  up: palette.aquaBlue,
  down: palette.neonPink,
  steady: palette.softGray,
};

export const CreatorInsightCard = ({ metric, value, trend, change }: CreatorInsightCardProps) => {
  return (
    <LinearGradient colors={['rgba(124,58,237,0.4)', 'rgba(13,27,42,0.9)']} style={styles.card}>
      <Text style={styles.metric}>{metric}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.trendRow}>
        <View style={[styles.trendBadge, { borderColor: trendColors[trend] }]}>
          <Text style={[styles.trendText, { color: trendColors[trend] }]}>{trend === 'down' ? '▼' : trend === 'up' ? '▲' : '■'}</Text>
        </View>
        <Text style={[styles.change, { color: trendColors[trend] }]}>{change}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 22,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(124,58,237,0.45)',
  },
  metric: {
    ...typography.caption,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: palette.softGray,
  },
  value: {
    ...typography.heading,
    fontSize: 28,
    lineHeight: 34,
  },
  trendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  trendBadge: {
    height: 28,
    width: 28,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trendText: {
    ...typography.caption,
  },
  change: {
    ...typography.caption,
  },
});

