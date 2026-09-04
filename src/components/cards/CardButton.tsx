import {useState} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {Pressable, Text} from 'react-native';
import {colorToRgba} from '../../helpers/colorToRgba';
import type {ButtonType, ValidColor} from '../../types/commonTypes';

type Props = {
  button: ButtonType;
  color?: ValidColor;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

export const CardButton = ({button, color, style, testID}: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  let rgbaColor: string | undefined;

  if (color) {
    rgbaColor = colorToRgba(color);
  }

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={button.text}
      testID={testID}
      style={[style, isPressed && {backgroundColor: rgbaColor}]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={button.onPress}>
      <Text style={{color, fontWeight: '600'}}>{button.text}</Text>
    </Pressable>
  );
};
