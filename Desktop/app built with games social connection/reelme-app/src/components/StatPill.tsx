import { StyleSheet, Text, View } from 'react-native';
import { palette, typography } from '../theme';

type StatPillProps = {
  label: string;
  value: string;
  accent?: string;
};

export const StatPill = ({ label, value, accent = palette.aquaBlue }: StatPillProps) => {
  return (
    <View style={[styles.pill, { borderColor: accent }]}>
      <Text style={[styles.value, { color: accent }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(5,9,22,0.4)',
  },
  value: {
    ...typography.title,
  },
  label: {
    ...typography.micro,
    color: palette.softGray,
  },
});

