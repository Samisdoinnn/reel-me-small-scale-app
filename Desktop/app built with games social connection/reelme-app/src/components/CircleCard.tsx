import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import { palette, typography } from '../theme';
import { Ionicons } from '@expo/vector-icons';

type CircleCardProps = {
  name: string;
  members: number;
  activeStories: number;
  privacy: 'Private' | 'Invite';
};

export const CircleCard = ({ name, members, activeStories, privacy }: CircleCardProps) => {
  return (
    <LinearGradient colors={['rgba(124,58,237,0.35)', 'rgba(13,27,42,0.9)']} style={styles.card}>
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.meta}>
            {members} members • {activeStories} live stories
          </Text>
        </View>
        <View style={styles.badge}>
          <Ionicons name="lock-closed" size={16} color={palette.frostedWhite} />
          <Text style={styles.badgeText}>{privacy}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(124,58,237,0.35)',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    ...typography.title,
  },
  meta: {
    ...typography.caption,
    color: palette.softGray,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: 'rgba(5,9,22,0.6)',
    borderWidth: 1,
    borderColor: 'rgba(45,212,191,0.4)',
  },
  badgeText: {
    ...typography.caption,
  },
});

