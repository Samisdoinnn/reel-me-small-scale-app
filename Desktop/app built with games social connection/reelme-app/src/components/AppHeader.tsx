import { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { palette, typography } from '../theme';
import { Ionicons } from '@expo/vector-icons';

type AppHeaderProps = {
  title: string;
  subtitle?: string;
  rightAction?: {
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
  };
  leftAction?: {
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
  };
  accessory?: ReactNode;
};

export const AppHeader = ({
  title,
  subtitle,
  rightAction,
  leftAction,
  accessory,
}: AppHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        {leftAction ? (
          <TouchableOpacity onPress={leftAction.onPress} style={styles.iconButton}>
            <Ionicons name={leftAction.icon} size={24} color={palette.frostedWhite} />
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.side}>
        {accessory}
        {rightAction ? (
          <TouchableOpacity onPress={rightAction.onPress} style={styles.iconButton}>
            <Ionicons name={rightAction.icon} size={24} color={palette.frostedWhite} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  side: {
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 12,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  title: {
    ...typography.heading,
  },
  subtitle: {
    ...typography.caption,
    color: palette.softGray,
  },
  iconButton: {
    height: 36,
    width: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(244,247,251,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(13,27,42,0.6)',
  },
});

