export const useButtonType = (
  bgColor: string = '#464EE5',
  color: string = '#FFFFFF',
  type: 'solid' | 'outline' | 'clear' = 'solid',
  disabled?: boolean,
) => {
  let backgroundColor: string | undefined;
  let borderColor: string | undefined;
  let borderWidth: number | undefined;
  let textColor = disabled ? '#AAAAAA' : type === 'outline' ? bgColor : color;

  if (type === 'solid') {
    backgroundColor = disabled ? '#DDDDDD' : bgColor;
    borderColor = undefined;
    borderWidth = undefined;
  } else if (type === 'outline') {
    backgroundColor = undefined;
    borderColor = disabled ? '#DDDDDD' : bgColor;
    borderWidth = 2.5;
  } else {
    backgroundColor = undefined;
    borderColor = undefined;
    borderWidth = undefined;
  }

  return {
    backgroundColor,
    borderColor,
    borderWidth,
    textColor,
  };
};
