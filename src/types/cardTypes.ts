import type {A11yProps} from './commonTypes';
import type {DimensionValue, ImageSourcePropType} from 'react-native';
import type {ValidColor} from './commonTypes';
import type {IconProp} from './iconTypes';

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
  fontColor?: string;
  fontSize?: number;
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
  radius?: number;
  shadow?: boolean;
};

export type FloatingActionCardProps = A11yProps & {
  backgroundColor?: ValidColor;
  bottom?: number;
  description?: string;
  decimals?: number;
  icon?: IconProp;
  iconColor?: string;
  image?: ImageSourcePropType;
  rating?: number;
  textColor?: string;
  title: string;
  width?: DimensionValue;
  onPress?: () => void;
};
