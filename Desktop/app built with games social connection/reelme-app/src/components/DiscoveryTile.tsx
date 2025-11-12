import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { palette, typography } from '../theme';

type DiscoveryTileProps = {
  label: string;
  category: string;
  media: string;
};

export const DiscoveryTile = ({ label, category, media }: DiscoveryTileProps) => {
  return (
    <ImageBackground source={{ uri: media }} style={styles.tile} imageStyle={styles.image}>
      <LinearGradient colors={['rgba(5,9,22,0.1)', 'rgba(5,9,22,0.75)']} style={styles.overlay}>
        <View>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.label}>{label}</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  tile: {
    height: 160,
    borderRadius: 22,
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    borderRadius: 22,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  category: {
    ...typography.micro,
    color: palette.softGray,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  label: {
    ...typography.title,
  },
});

