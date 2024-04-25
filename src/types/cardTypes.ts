import {DimensionValue, ImageSourcePropType} from 'react-native';
import {ValidColor} from './commonTypes';

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

export type RatingCardProps = {
  backgroundColor?: ValidColor;
  bottom?: number;
  description?: string;
  image?: ImageSourcePropType;
  rating?: number;
  textColor?: string;
  title: string;
  width?: DimensionValue;
  onPress?: () => void;
};
