export const palette = {
  midnight: '#050916',
  deepOcean: '#0D1B2A',
  electricViolet: '#7C3AED',
  neonPink: '#F472B6',
  sunriseOrange: '#FB923C',
  aquaBlue: '#2DD4BF',
  limeGlow: '#A3E635',
  frostedWhite: '#F4F7FB',
  softGray: '#94A3B8',
  overlay: 'rgba(5, 9, 22, 0.72)',
} as const;

export const gradients = {
  primary: ['#7C3AED', '#2DD4BF'],
  secondary: ['#F472B6', '#FB923C'],
  midnightGlow: ['rgba(124, 58, 237, 0.9)', 'rgba(5, 9, 22, 0.9)'],
} as const;

export const shadows = {
  card: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
} as const;

