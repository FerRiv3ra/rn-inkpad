import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type TabControlProps = {
  values: value[];
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  selectedIndex?: number;
  backgroundTabColor?: string;
  tabTintColor?: string;
  textColor?: string;
  selectedTextColor?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

type value = {
  key: string;
  renderItem: React.JSXElementConstructor<any>;
};
