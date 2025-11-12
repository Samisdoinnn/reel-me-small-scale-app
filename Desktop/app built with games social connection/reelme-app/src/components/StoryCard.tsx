import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { palette, typography } from '../theme';
import { Ionicons } from '@expo/vector-icons';

type StoryCardProps = {
  title: string;
  author: string;
  views: string;
  expiry: string;
  media: string;
};

export const StoryCard = ({ title, author, views, expiry, media }: StoryCardProps) => {
  return (
    <ImageBackground source={{ uri: media }} style={styles.card} imageStyle={styles.image}>
      <LinearGradient colors={['rgba(5,9,22,0.2)', 'rgba(5,9,22,0.75)']} style={styles.overlay}>
        <View style={styles.topRow}>
          <View style={styles.badge}>
            <Ionicons name="flame" size={18} color={palette.sunriseOrange} />
            <Text style={styles.badgeText}>{expiry}</Text>
          </View>
          <View style={styles.badge}>
            <Ionicons name="eye" size={18} color={palette.aquaBlue} />
            <Text style={styles.badgeText}>{views}</Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>by {author}</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 220,
    borderRadius: 28,
    overflow: 'hidden',
    marginRight: 18,
  },
  image: {
    borderRadius: 28,
  },
  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom: {
    gap: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(5,9,22,0.7)',
    borderRadius: 16,
  },
  badgeText: {
    ...typography.caption,
    color: palette.frostedWhite,
  },
  title: {
    ...typography.heading,
  },
  author: {
    ...typography.body,
    color: palette.softGray,
  },
});

