import React from 'react';
import {TouchableOpacity} from 'react-native';
import {buttonStyles} from '../../theme';

import Icon from 'react-native-vector-icons/Ionicons';
import {IconName} from '../../types';

type Props = {
  icon: IconName;
  backgroundColor?: string;
  bottom?: number;
  iconColor?: string;
  iconSize?: number;
  left?: number;
  padding?: number;
  onPress?: () => void;
};

export const ActionButton = ({
  onPress,
  padding,
  backgroundColor,
  bottom,
  icon,
  iconColor,
  iconSize,
  left,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        buttonStyles.fab,
        {
          padding: padding ?? 15,
          backgroundColor: backgroundColor ?? '#464EE5',
          bottom,
          left,
        },
      ]}>
      <Icon name={icon} color={iconColor ?? '#FFF'} size={iconSize ?? 22} />
    </TouchableOpacity>
  );
};
