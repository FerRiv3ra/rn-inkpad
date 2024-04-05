import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export const useInputStyles = (
  type: 'filled' | 'bordered' | 'outlined',
  isFocused: boolean,
  hasTitle: boolean,
  borderColor = '#333',
  borderRadius?: number,
) => {
  let inputStyle: StyleProp<ViewStyle>;
  let titleStyle: StyleProp<TextStyle>;

  switch (type) {
    case 'bordered':
      inputStyle = {
        borderColor,
        borderWidth: 1,
        marginTop: hasTitle ? 4 : 0,
        borderRadius,
        borderBottomWidth: isFocused ? 2 : 1,
      };
      break;
    case 'filled':
      inputStyle = {
        borderBottomWidth: isFocused ? 2 : 1,
        borderBottomColor: borderColor,
      };
      break;
    case 'outlined':
      inputStyle = {
        borderColor,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: hasTitle ? 0 : 1,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        borderBottomWidth: isFocused ? 2 : 1,
      };
      titleStyle = {
        fontSize: 12,
        marginTop: -6,
        marginHorizontal: 3,
      };
      break;
  }

  return {inputStyle, titleStyle};
};
