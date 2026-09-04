import type {PropsWithChildren} from 'react';
import {createContext, useContext, useMemo} from 'react';

export type ThemeColors = {
  /** Main brand color: buttons, active states, selections. */
  primary: string;
  /** Accent color for secondary actions. */
  secondary: string;
  background: string;
  /** Slightly elevated surfaces: cards, sheets, segmented controls. */
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  disabled: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  /** Backdrop behind modals, sheets and dialogs. */
  overlay: string;
};

export type ThemeRadius = {sm: number; md: number; lg: number; full: number};
export type ThemeSpacing = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};
export type ThemeTypography = {
  fontFamily?: string;
  sizes: {xs: number; sm: number; md: number; lg: number; xl: number};
  weights: {regular: '400'; medium: '500' | '600'; bold: '700' | '800'};
};

export type Theme = {
  colors: ThemeColors;
  radius: ThemeRadius;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
};

/** Every field optional, at any depth, for `ThemeProvider` and `createTheme`. */
export type PartialTheme = {
  colors?: Partial<ThemeColors>;
  radius?: Partial<ThemeRadius>;
  spacing?: Partial<ThemeSpacing>;
  typography?: {
    fontFamily?: string;
    sizes?: Partial<ThemeTypography['sizes']>;
    weights?: Partial<ThemeTypography['weights']>;
  };
};

export const defaultTheme: Theme = {
  colors: {
    primary: '#464EE5',
    secondary: '#DB504A',
    background: '#FFFFFF',
    surface: '#F3F4F6',
    text: '#111827',
    textMuted: '#6B7280',
    border: '#D1D5DB',
    disabled: '#9CA3AF',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    overlay: 'rgba(0, 0, 0, 0.45)',
  },
  radius: {sm: 4, md: 8, lg: 16, full: 999},
  spacing: {xs: 4, sm: 8, md: 12, lg: 16, xl: 24},
  typography: {
    sizes: {xs: 12, sm: 14, md: 16, lg: 18, xl: 24},
    weights: {regular: '400', medium: '600', bold: '700'},
  },
};

/** Merges `overrides` on top of `base` (defaults to `defaultTheme`). */
export const createTheme = (
  overrides: PartialTheme = {},
  base: Theme = defaultTheme,
): Theme => ({
  colors: {...base.colors, ...overrides.colors},
  radius: {...base.radius, ...overrides.radius},
  spacing: {...base.spacing, ...overrides.spacing},
  typography: {
    fontFamily: overrides.typography?.fontFamily ?? base.typography.fontFamily,
    sizes: {...base.typography.sizes, ...overrides.typography?.sizes},
    weights: {...base.typography.weights, ...overrides.typography?.weights},
  },
});

export const darkTheme: Theme = createTheme({
  colors: {
    primary: '#818CF8',
    secondary: '#F87171',
    background: '#111827',
    surface: '#1F2937',
    text: '#F9FAFB',
    textMuted: '#9CA3AF',
    border: '#374151',
    disabled: '#4B5563',
    overlay: 'rgba(0, 0, 0, 0.6)',
  },
});

const ThemeContext = createContext<Theme>(defaultTheme);

type Props = PropsWithChildren<{
  /** Full theme or partial overrides. Nested providers extend the parent theme. */
  theme?: PartialTheme;
}>;

/**
 * Provides design tokens to every rn-inkpad component. Optional: without a
 * provider components fall back to `defaultTheme`.
 */
export const ThemeProvider = ({theme, children}: Props) => {
  const parent = useContext(ThemeContext);
  const value = useMemo(() => createTheme(theme, parent), [theme, parent]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

/** Current theme tokens (`defaultTheme` when no provider is mounted). */
export const useTheme = () => useContext(ThemeContext);
