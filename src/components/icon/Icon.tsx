import {renderIcon} from '../../helpers/renderIcon';
import type {IconProp, IconProps} from '../../types';

type Props = Pick<IconProps, 'size' | 'color'> & {
  /** Element (rendered as is) or component (rendered with `size`/`color`). */
  icon: IconProp;
};

/**
 * Convenience wrapper around `renderIcon`. Handy when you want the library to
 * size and color an icon component the same way its other components do.
 */
export const Icon = ({icon, size, color}: Props) => (
  <>{renderIcon(icon, {size, color})}</>
);
