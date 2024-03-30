import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {buttonStyles} from '../../theme';

import Icon from 'react-native-vector-icons/Ionicons';
import {IconName} from '../../types';

type Props = {
  icon: IconName;
  align?: 'left' | 'right';
  backgroundColor?: string;
  iconColor?: string;
  iconSize?: number;
  size?: number;
  margin?: number;
  text?: string;
  onPress?: () => void;
};

export const ActionButton = ({
  align,
  backgroundColor,
  icon,
  iconColor,
  iconSize = 22,
  onPress,
  margin = 0,
  size = 50,
  text,
}: Props) => {
  return (
    <View
      style={[
        buttonStyles.btnContainer,
        {flexDirection: align === 'left' ? 'row-reverse' : 'row'},
      ]}>
      {!!text && (
        <View style={buttonStyles.textContainer}>
          <Text>{text}</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[
          buttonStyles.fab,
          {
            width: size,
            marginTop: 5,
            marginHorizontal: margin,
            height: size,
            backgroundColor: backgroundColor ?? '#464EE5',
          },
        ]}>
        <Icon name={icon} color={iconColor ?? '#FFF'} size={iconSize} />
      </TouchableOpacity>
    </View>
  );
};
