import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IconName} from '.';

export type SlideActionProps = {
  height?: number;
  icon?: IconName;
  iconColor?: string;
  iconCompletedColor?: string;
  iconOnCompleted?: IconName;
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
  icon?: IconName;
  iconColor?: string;
  iconSize?: number;
  shadow?: boolean;
  width?: number;
};

export type SliderProps = {
  maxValue?: number;
  minValue?: number;
  thumbStyles?: ThumbStyles;
  trackStyles?: TrackStyles;
  value?: number;
  onChange?: (value: number) => void;
};
