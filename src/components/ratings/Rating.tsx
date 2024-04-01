import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {Icon} from '..';
import {IconName} from '../../types';

type Props = {
  color?: string;
  icon?: 'heart' | 'star';
  rating?: number;
  size?: number;
  style?: StyleProp<ViewStyle>;
  total?: number;
};

export const Rating = ({
  color = '#F0D74B',
  icon = 'star',
  rating = 3,
  size = 35,
  style,
  total = 5,
}: Props) => {
  if (rating > total) {
    rating = total;
  }

  const icons: IconName[] = [];

  for (let index = 0; index < total; index++) {
    if (index <= rating - 1) {
      icons.push(icon);
    } else {
      icons.push(`${icon}-outline`);
    }
  }

  if (rating.toString().includes('.')) {
    icons[icons.indexOf(`${icon}-outline`)] = `${icon}-half`;
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
