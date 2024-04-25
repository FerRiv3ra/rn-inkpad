import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import {Button as ButtonType, ValidPlatforms} from '../types/alertTypes';

type Props = {
  button: ButtonType;
  buttons?: number;
  isFirst?: boolean;
  theme?: ValidPlatforms;
  appearance?: 'light' | 'dark';
  onPress?: () => void;
};

export const Button = ({
  button,
  buttons = 2,
  isFirst,
  theme,
  appearance,
  onPress: customPress,
}: Props) => {
  const {text, onPress, textStyle} = button;
  const {styles, ios} = useTheme({theme, appearance});

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {borderLeftWidth: ios ? (isFirst ? 0 : buttons <= 2 ? 1 : 0) : 0},
        ios && buttons <= 2 ? styles.flex : null,
      ]}
      activeOpacity={0.6}
      onPress={!!customPress ? customPress : onPress}>
      <Text style={[{textAlign: ios ? 'center' : 'right'}, textStyle]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
