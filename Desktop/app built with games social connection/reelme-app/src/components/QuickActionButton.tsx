import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette, typography } from '../theme';

type QuickActionButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
};

export const QuickActionButton = ({ icon, label, onPress }: QuickActionButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchArea}>
      <LinearGradient colors={[palette.electricViolet, palette.neonPink]} style={styles.button}>
        <Ionicons name={icon} size={22} color={palette.frostedWhite} />
      </LinearGradient>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchArea: {
    alignItems: 'center',
    gap: 8,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    ...{
      shadowColor: palette.neonPink,
      shadowOpacity: 0.4,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 6 },
      elevation: 10,
    },
  },
  label: {
    ...typography.caption,
  },
});

