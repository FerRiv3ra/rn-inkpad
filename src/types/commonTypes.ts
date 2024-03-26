export type ButtonType = {
  text: string;
  onPress?: () => void;
};

type RGBColor = `rgb(${number}, ${number}, ${number})`;
type HexColor = `#${string}`;

export type ValidColor = RGBColor | HexColor;

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
