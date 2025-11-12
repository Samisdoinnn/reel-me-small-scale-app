import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { palette, typography } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';

type StoryBubbleProps = {
  label: string;
  image: string;
  active?: boolean;
};

export const StoryBubble = ({ label, image, active = false }: StoryBubbleProps) => {
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={active ? [palette.neonPink, palette.aquaBlue] : ['rgba(148,163,184,0.6)', 'rgba(148,163,184,0.2)']}
        style={styles.gradientRing}
      >
        <ImageBackground source={{ uri: image }} style={styles.image} imageStyle={styles.imageStyle}>
          {active ? <View style={styles.liveBadge} /> : null}
        </ImageBackground>
      </LinearGradient>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    width: 70,
    gap: 8,
  },
  gradientRing: {
    height: 64,
    width: 64,
    borderRadius: 32,
    padding: 3,
  },
  image: {
    flex: 1,
  },
  imageStyle: {
    borderRadius: 29,
  },
  label: {
    ...typography.micro,
    color: palette.frostedWhite,
    textAlign: 'center',
  },
  liveBadge: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: palette.sunriseOrange,
    borderWidth: 2,
    borderColor: palette.frostedWhite,
  },
});

