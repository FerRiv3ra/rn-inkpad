import React, {useState} from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {colorToRgba} from '../helpers/colorToRgba';
import {ButtonType, ValidColor} from '../types/commonTypes';

type Props = {
  button: ButtonType;
  color?: ValidColor;
  style?: StyleProp<ViewStyle>;
};

export const Button = ({button, color, style}: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  let rgbaColor: string | undefined;

  if (!!color) {
    rgbaColor = colorToRgba(color);
  }

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);

    if (!!button.onPress) {
      button.onPress();
    }
  };

  return (
    <Pressable
      style={[style, isPressed && {backgroundColor: rgbaColor}]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Text style={{color, fontWeight: '600'}}>{button.text}</Text>
    </Pressable>
  );
};
