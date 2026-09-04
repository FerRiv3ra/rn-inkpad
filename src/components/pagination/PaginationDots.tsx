import type {StyleProp, ViewStyle} from 'react-native';
import {Pressable, StyleSheet, View} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';
import type {A11yProps} from '../../types';

export type PaginationDotsProps = A11yProps & {
  count: number;
  /** Active index (0-based). */
  index: number;
  /** Makes the dots pressable. */
  onChange?: (index: number) => void;
  activeColor?: string;
  color?: string;
  size?: number;
  gap?: number;
  /** Active dot stretches to 2.5x its width. */
  expanding?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const PaginationDots = ({
  accessibilityLabel = 'Pagination',
  activeColor,
  color,
  count,
  expanding = true,
  gap = 6,
  index,
  onChange,
  size = 8,
  style,
  testID,
}: PaginationDotsProps) => {
  const {colors} = useTheme();
  const active = activeColor ?? colors.primary;
  const inactive = color ?? colors.border;

  return (
    <View
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={[styles.row, {gap}, style]}>
      {Array.from({length: count}, (_, i) => {
        const isActive = i === index;
        return (
          <Pressable
            key={i}
            accessibilityRole="button"
            accessibilityLabel={`Page ${i + 1} of ${count}`}
            accessibilityState={{selected: isActive}}
            testID={testID ? `${testID}-dot-${i}` : undefined}
            disabled={!onChange}
            hitSlop={6}
            onPress={() => onChange?.(i)}
            style={{
              width: isActive && expanding ? size * 2.5 : size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: isActive ? active : inactive,
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
