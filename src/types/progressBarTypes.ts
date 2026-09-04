import type {A11yProps} from './commonTypes';
export type ProgressBarProps = A11yProps & {
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  height?: number;
  progressColor?: string;
  rounded?: boolean;
  showPercent?: boolean;
  textColor?: string;
  value?: number;
};
