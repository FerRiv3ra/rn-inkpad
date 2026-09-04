import type {ReactNode} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';
import type {A11yProps} from '../../types';

export type BadgeProps = A11yProps & {
  /** Number or short text. Numbers above `max` render as `${max}+`. */
  value?: number | string;
  max?: number;
  /** Small dot without text. */
  dot?: boolean;
  color?: string;
  textColor?: string;
  /** Height of the badge (and diameter of the dot). */
  size?: number;
  /** Corner used when wrapping `children`. */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  /** Hide the badge but keep the children. */
  visible?: boolean;
  style?: StyleProp<ViewStyle>;
  /** Element the badge is attached to. Without children the badge renders inline. */
  children?: ReactNode;
};

export const Badge = ({
  accessibilityLabel,
  children,
  color,
  dot,
  max = 99,
  position = 'top-right',
  size,
  style,
  testID,
  textColor = '#FFFFFF',
  value,
  visible = true,
}: BadgeProps) => {
  const {colors} = useTheme();
  const badgeColor = color ?? colors.secondary;
  const badgeSize = size ?? (dot ? 10 : 18);

  const label =
    typeof value === 'number' && value > max ? `${max}+` : value?.toString();
  const shouldShow =
    visible && (dot || (label !== undefined && label !== '' && label !== '0'));

  const badge = shouldShow ? (
    <View
      accessibilityLabel={accessibilityLabel ?? label}
      testID={testID ? `${testID}-badge` : undefined}
      style={[
        styles.badge,
        {
          backgroundColor: badgeColor,
          height: badgeSize,
          minWidth: badgeSize,
          borderRadius: badgeSize / 2,
          paddingHorizontal: dot ? 0 : badgeSize * 0.3,
        },
        !!children && [
          styles.attached,
          position.includes('top')
            ? {top: -badgeSize / 3}
            : {bottom: -badgeSize / 3},
          position.includes('right')
            ? {right: -badgeSize / 3}
            : {left: -badgeSize / 3},
        ],
        !children && style,
      ]}>
      {!dot && (
        <Text
          numberOfLines={1}
          style={{
            color: textColor,
            fontSize: badgeSize * 0.62,
            fontWeight: '700',
            lineHeight: badgeSize,
          }}>
          {label}
        </Text>
      )}
    </View>
  ) : null;

  if (!children) {
    return badge;
  }

  return (
    <View testID={testID} style={[styles.wrapper, style]}>
      {children}
      {badge}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
  },
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  attached: {
    position: 'absolute',
    zIndex: 1,
  },
});
