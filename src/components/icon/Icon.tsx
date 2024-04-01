import React from 'react';

import Ioicon from 'react-native-vector-icons/Ionicons';
import {IconName} from '../../types';

type Props = {
  name: IconName;
  size?: number;
  color?: string;
};

export const Icon = ({name, size, color}: Props) => {
  return <Ioicon name={name} size={size} color={color} />;
};
