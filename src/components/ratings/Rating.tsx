import type {A11yProps} from '../../types';
import type {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {Icon} from '..';
import type {IconName} from '../../types';

type Props = A11yProps & {
  color?: string;
  icon?: 'heart' | 'star';
  rating?: number;
  size?: number;
  style?: StyleProp<ViewStyle>;
  total?: number;
};

export const Rating = ({
  accessibilityLabel,
  color = '#FFD700',
  icon = 'star',
  rating = 3,
  size = 35,
  style,
  testID,
  total = 5,
}: Props) => {
  const clamped = Math.min(Math.max(rating, 0), total);
  const full = Math.floor(clamped);
  const hasHalf = clamped - full > 0;

  const icons: IconName[] = [];

  for (let index = 0; index < total; index++) {
    if (index < full) {
      icons.push(icon);
    } else if (index === full && hasHalf) {
      icons.push(`${icon}-half`);
    } else {
      icons.push(`${icon}-outline`);
    }
  }

  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel ?? `${clamped} of ${total}`}
      testID={testID}
      style={style}>
      <View style={styles.row}>
        {icons.map((name, idx) => (
          <Icon name={name} size={size} color={color} key={idx} />
        ))}
      </View>
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
