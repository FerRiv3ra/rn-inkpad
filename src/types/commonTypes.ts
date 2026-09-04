export type ButtonType = {
  text: string;
  onPress?: () => void;
};

type RGBColor =
  `rgb(${number}, ${number}, ${number})` | `rgb(${number},${number},${number})`;
type RGBAColor =
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `rgba(${number},${number},${number},${number})`;
type HexColor = `#${string}`;

export type ValidColor = RGBColor | HexColor | RGBAColor;

/** Props shared by every interactive component for testing and assistive tech. */
export type A11yProps = {
  /** Identifier for end-to-end tests. Sub elements append a suffix, e.g. `${testID}-thumb`. */
  testID?: string;
  /** Read by screen readers. Defaults to the visible text when the component has one. */
  accessibilityLabel?: string;
  /** Extra guidance for screen readers. */
  accessibilityHint?: string;
};
