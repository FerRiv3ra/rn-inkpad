import type {ComponentType, ReactElement} from 'react';

/**
 * Props the library passes when it renders an icon *component* for you.
 * Compatible with lucide-react-native, @expo/vector-icons, react-native-svg
 * components (SVGR) and any component accepting `size`/`color`.
 */
export type IconProps = {
  size?: number;
  color?: string;
  /** Mirrors `size`, for plain SVG components that only understand width/height. */
  width?: number;
  height?: number;
};

/**
 * Anything the library accepts wherever an icon is expected:
 *
 * - A React element, rendered exactly as given: `icon={<Home size={18} color="#FFF" />}`
 * - A component, rendered by the library with its own size and color so it
 *   follows the component state (text color, disabled, selected…): `icon={Home}`
 */
export type IconProp = ReactElement | ComponentType<IconProps>;
