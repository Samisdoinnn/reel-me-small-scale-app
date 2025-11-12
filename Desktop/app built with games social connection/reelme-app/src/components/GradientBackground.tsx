import { LinearGradient } from 'expo-linear-gradient';
import { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';
import { gradients, palette } from '../theme';

type GradientBackgroundProps = PropsWithChildren<{
  variant?: keyof typeof gradients;
  style?: ViewStyle;
  overlay?: boolean;
}>;

export const GradientBackground = ({
  children,
  variant = 'midnightGlow',
  style,
  overlay = true,
}: GradientBackgroundProps) => {
  return (
    <LinearGradient
      colors={gradients[variant]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[{ flex: 1 }, style]}
    >
      {overlay ? (
        <View
          style={{
            flex: 1,
            backgroundColor: palette.overlay,
          }}
        >
          {children}
        </View>
      ) : (
        children
      )}
    </LinearGradient>
  );
};

