import type {A11yProps} from './commonTypes';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type SegmentedControlProps = A11yProps & {
  values: value[];
  onChange: (value: string) => void;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  selectedIndex?: number;
  backgroundColor?: string;
  tintColor?: string;
  textColor?: string;
  selectedTextColor?: string;
  style?: StyleProp<ViewStyle>;
};

type value = {
  key: string;
  value: string;
};
