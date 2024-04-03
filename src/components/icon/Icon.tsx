import React from 'react';

import {StyleProp, TextStyle} from 'react-native';
import Ioicon from 'react-native-vector-icons/Ionicons';
import {IconName} from '../../types';

type Props = {
  name: IconName;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
};

export const Icon = ({name, size, color}: Props) => {
  return <Ioicon style={{}} name={name} size={size} color={color} />;
};
