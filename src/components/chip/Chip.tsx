import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Pressable, StyleSheet, Text} from 'react-native';
import {renderIcon} from '../../helpers/renderIcon';
import {useTheme} from '../../theme/ThemeProvider';
import type {A11yProps, IconProp} from '../../types';
import {CloseGlyph} from '../glyphs/Glyphs';

export type ChipProps = A11yProps & {
  text: string;
  icon?: IconProp;
  selected?: boolean;
  disabled?: boolean;
  variant?: 'filled' | 'outlined';
  /** Chip color. Defaults to the theme primary. */
  color?: string;
  textColor?: string;
  size?: 'sm' | 'md';
  /** Renders a close button. Defaults to a built-in cross. */
  closeIcon?: IconProp;
  onPress?: () => void;
  onClose?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Chip = ({
  accessibilityHint,
  accessibilityLabel,
  closeIcon = CloseGlyph,
  color,
  disabled,
  icon,
  onClose,
  onPress,
  selected,
  size = 'md',
  style,
  testID,
  text,
  textColor,
  textStyle,
  variant = 'filled',
}: ChipProps) => {
  const {colors, radius} = useTheme();
  const chipColor = disabled ? colors.disabled : (color ?? colors.primary);
  const isFilled = variant === 'filled';
  const active = selected || variant === 'outlined' ? false : true;

  // Filled + selected: solid color with white text.
  // Filled + unselected: surface with dark text. Outlined: border in color.
  const backgroundColor = isFilled
    ? selected
      ? chipColor
      : colors.surface
    : selected
      ? `${chipColor}22`
      : 'transparent';
  const foreground =
    textColor ??
    (isFilled && selected ? '#FFFFFF' : active ? colors.text : chipColor);
  const fontSize = size === 'sm' ? 12 : 14;
  const iconSize = size === 'sm' ? 14 : 16;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? text}
      accessibilityHint={accessibilityHint}
      accessibilityState={{selected: !!selected, disabled: !!disabled}}
      testID={testID}
      disabled={disabled || !onPress}
      onPress={onPress}
      style={({pressed}) => [
        styles.chip,
        {
          backgroundColor,
          borderColor: isFilled ? 'transparent' : chipColor,
          borderRadius: radius.full,
          paddingVertical: size === 'sm' ? 4 : 6,
          paddingHorizontal: size === 'sm' ? 10 : 12,
          opacity: pressed ? 0.7 : 1,
        },
        style,
      ]}>
      {renderIcon(icon, {size: iconSize, color: foreground})}
      <Text
        style={[
          {color: foreground, fontSize, fontWeight: '600'},
          disabled && {color: colors.disabled},
          textStyle,
        ]}>
        {text}
      </Text>
      {!!onClose && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={`Remove ${text}`}
          testID={testID ? `${testID}-close` : undefined}
          disabled={disabled}
          hitSlop={8}
          onPress={onClose}>
          {renderIcon(closeIcon, {size: iconSize - 2, color: foreground})}
        </Pressable>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    borderWidth: 1.5,
  },
});
