export const useDirection = (
  iconPosition: 'left' | 'bottom' | 'top' | 'right' = 'left',
  gap?: number,
) => {
  let flexDirection:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | undefined;
  let spacing: number = 0;

  switch (iconPosition) {
    case 'bottom':
      flexDirection = 'column-reverse';
      spacing = 5;
      break;
    case 'left':
      flexDirection = 'row';
      spacing = 10;
      break;
    case 'right':
      flexDirection = 'row-reverse';
      spacing = 10;
      break;
    case 'top':
      flexDirection = 'column';
      spacing = 5;
      break;
  }

  return {
    flexDirection,
    spacing,
  };
};
