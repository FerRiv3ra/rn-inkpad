import {StyleProp, TextStyle} from 'react-native';
import {IconName} from '../../../types';

export type Icon = 'error' | 'info' | 'success' | 'question';

export type Button = {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

export type PromptData = {
  title: string;
  cancelColorText?: string;
  cancelText?: string;
  confirmColorText?: string;
  confirmText?: string;
  description?: string;
  label?: string;
  placeholder?: string;
};

export interface AlertData extends PromptData {
  buttons?: Button[];
  icon?: IconName;
  iconColor?: string;
  showCancelButton?: boolean;
}

type Alpha = 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;

export type PersonalTheme = {
  backgroundColor?: `rgba(${number},${number},${number},${Alpha})`;
  backgroundInputColor?: string;
  cardBackgroundColor?: string;
  descriptionColor?: string;
  inputBorderColor?: string;
  inputColor?: string;
  lineColor?: string;
  placeholderColor?: string;
  textButtonColor?: string;
  titleColor?: string;
};

export type ValidPlatforms = 'ios' | 'android';

export type Appearances = 'light' | 'dark';
