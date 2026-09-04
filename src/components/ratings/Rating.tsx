import type {StyleProp, ViewStyle} from 'react-native';
import {View} from 'react-native';
import {Icon} from '..';
import type {IconName} from '../../types';

type Props = {
  color?: string;
  icon?: 'heart' | 'star';
  rating?: number;
  size?: number;
  style?: StyleProp<ViewStyle>;
  total?: number;
};

export const Rating = ({
  color = '#FFD700',
  icon = 'star',
  rating = 3,
  size = 35,
  style,
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
    <View style={style}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        {icons.map((name, idx) => (
          <Icon name={name} size={size} color={color} key={idx} />
        ))}
      </View>
    </View>
  );
};
