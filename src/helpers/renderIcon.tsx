import type {ReactNode} from 'react';
import {isValidElement} from 'react';
import type {IconProp, IconProps} from '../types/iconTypes';

/**
 * Renders an `IconProp`. Elements are returned untouched; components receive
 * the size and color the library resolved for the current state.
 */
export const renderIcon = (
  icon: IconProp | null | undefined,
  props: Pick<IconProps, 'size' | 'color'> = {},
): ReactNode => {
  if (!icon) {
    return null;
  }

  if (isValidElement(icon)) {
    return icon;
  }

  const Component = icon;

  return (
    <Component
      size={props.size}
      color={props.color}
      width={props.size}
      height={props.size}
    />
  );
};
