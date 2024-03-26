export type ButtonType = {
  text: string;
  onPress?: () => void;
};

type RGBColor = `rgb(${number}, ${number}, ${number})`;
type HexColor = `#${string}`;

export type ValidColor = RGBColor | HexColor;
