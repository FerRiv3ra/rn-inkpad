import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import IoiconImport from 'react-native-vector-icons/Ionicons';
import {IconName} from '../../types';

type Props = {
  name: IconName;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
};

// Type assertion to ensure correct typing
const Ioicon = IoiconImport as unknown as React.ComponentType<IconProps>;

export const Icon: React.FC<Props> = ({name, size, color, style}) => {
  return <Ioicon style={style} name={name} size={size} color={color} />;
};
