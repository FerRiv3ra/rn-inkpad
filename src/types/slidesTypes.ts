import type {A11yProps} from './commonTypes';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import type {IconProp} from './iconTypes';

export type SlideActionProps = A11yProps & {
  height?: number;
  icon?: IconProp;
  iconColor?: string;
  iconCompletedColor?: string;
  iconOnCompleted?: IconProp;
  iconSize?: number;
  isCompleted?: boolean;
  padding?: number;
  readonly?: boolean;
  style?: StyleProp<ViewStyle>;
  text?: string;
  textOnCompleted?: string;
  textPosition?: 'center' | 'ends';
  textStyle?: StyleProp<TextStyle>;
  thumbBorderColor?: string;
  thumbBorderWidth?: number;
  thumbColor?: string;
  thumbCompletedColor?: string;
  thumbWidth?: number;
  tintColor?: string;
  tintCompletedColor?: string;
  onCompleted?: () => void;
};

type TrackStyles = {
  borderRadius?: number;
  height?: number;
  trackColor?: string;
  trackCompletedColor?: string;
};

type ThumbStyles = {
  backgroundColor?: string;
  borderRadius?: number;
  height?: number;
  icon?: IconProp;
  iconColor?: string;
  iconSize?: number;
  shadow?: boolean;
  width?: number;
};

export type SliderProps = A11yProps & {
  maxValue?: number;
  minValue?: number;
  thumbStyles?: ThumbStyles;
  trackStyles?: TrackStyles;
  value?: number;
  onChange?: (value: number) => void;
};
