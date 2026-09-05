import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import type {Button as ButtonType, ValidPlatforms} from '../types/alertTypes';

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
  const inline = ios && buttons <= 2;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={text}
      style={[
        styles.button,
        inline && !isFirst ? local.separator : local.noSeparator,
        inline ? styles.flex : null,
      ]}
      activeOpacity={0.6}
      onPress={customPress ? customPress : onPress}>
      <Text style={[ios ? local.center : local.right, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const local = StyleSheet.create({
  separator: {borderLeftWidth: 1},
  noSeparator: {borderLeftWidth: 0},
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
});
