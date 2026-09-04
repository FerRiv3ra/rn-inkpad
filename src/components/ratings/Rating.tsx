import type {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {renderIcon} from '../../helpers/renderIcon';
import type {A11yProps, IconProp} from '../../types';
import type {RatingVariant} from '../glyphs/Glyphs';
import {RatingGlyph} from '../glyphs/Glyphs';

export type RatingIcons = {
  /** Icon for a full step. */
  full: IconProp;
  /** Icon for an empty step. */
  empty: IconProp;
  /** Icon for a half step. Falls back to `empty` when omitted. */
  half?: IconProp;
};

type Props = A11yProps & {
  color?: string;
  /** Built-in shape used when `icons` is not provided. */
  icon?: 'heart' | 'star';
  /** Custom icons (elements or components) for each step state. */
  icons?: RatingIcons;
  rating?: number;
  size?: number;
  style?: StyleProp<ViewStyle>;
  total?: number;
};

export const Rating = ({
  accessibilityLabel,
  color = '#FFD700',
  icon = 'star',
  icons,
  rating = 3,
  size = 35,
  style,
  testID,
  total = 5,
}: Props) => {
  const clamped = Math.min(Math.max(rating, 0), total);
  const full = Math.floor(clamped);
  const hasHalf = clamped - full > 0;

  const variants: RatingVariant[] = [];

  for (let index = 0; index < total; index++) {
    if (index < full) {
      variants.push('full');
    } else if (index === full && hasHalf) {
      variants.push('half');
    } else {
      variants.push('empty');
    }
  }

  const renderStep = (variant: RatingVariant, idx: number) => {
    const stepTestID = testID ? `${testID}-${idx}-${variant}` : undefined;

    if (icons) {
      const custom =
        variant === 'half' ? (icons.half ?? icons.empty) : icons[variant];
      return (
        <View key={idx} testID={stepTestID}>
          {renderIcon(custom, {size, color})}
        </View>
      );
    }

    return (
      <RatingGlyph
        key={idx}
        shape={icon}
        variant={variant}
        size={size}
        color={color}
        testID={stepTestID}
      />
    );
  };

  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel ?? `${clamped} of ${total}`}
      testID={testID}
      style={style}>
      <View style={styles.row}>{variants.map(renderStep)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
