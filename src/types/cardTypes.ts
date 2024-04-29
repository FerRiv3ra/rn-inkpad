import {DimensionValue, ImageSourcePropType} from 'react-native';
import {ValidColor} from './commonTypes';
import {IconName} from './iconType';

export type cardTheme = {
  backgroundColor?: string;
  iconSize?: number;
  themeColor?: ValidColor;
  titleColor?: string;
  titleSize?: number;
  shadow?: boolean;
};

export type imageCardTheme = {
  backgroundColor?: string;
  fontSize?: number;
  fontColor?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  shadow?: boolean;
  radius?: number;
};

export type FloatingActionCardProps = {
  backgroundColor?: ValidColor;
  bottom?: number;
  description?: string;
  decimals?: number;
  icon?: IconName;
  iconColor?: string;
  image?: ImageSourcePropType;
  rating?: number;
  textColor?: string;
  title: string;
  width?: DimensionValue;
  onPress?: () => void;
};
