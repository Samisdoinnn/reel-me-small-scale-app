import { TextStyle } from 'react-native';

const baseFont = 'System';

const weights = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

const createTextStyle = (
  fontSize: number,
  lineHeight: number,
  fontWeight: keyof typeof weights,
): TextStyle => ({
  fontFamily: baseFont,
  fontSize,
  lineHeight,
  fontWeight: weights[fontWeight] as TextStyle['fontWeight'],
  color: '#F4F7FB',
});

export const typography = {
  display: createTextStyle(32, 40, 'bold'),
  heading: createTextStyle(24, 32, 'semibold'),
  title: createTextStyle(18, 24, 'semibold'),
  body: createTextStyle(16, 22, 'regular'),
  caption: createTextStyle(14, 18, 'medium'),
  micro: createTextStyle(12, 16, 'regular'),
};

