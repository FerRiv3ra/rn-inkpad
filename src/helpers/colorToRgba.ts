export const colorToRgba = (color: string, alpha = 0.2): string | undefined => {
  const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  const rgbRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;

  let result;
  let r, g, b;

  if (color.startsWith('rgba')) {
    return color;
  }

  if (hexRegex.test(color)) {
    result = hexRegex.exec(color);
    if (result) {
      r = parseInt(result[1], 16);
      g = parseInt(result[2], 16);
      b = parseInt(result[3], 16);
    }
  } else if (rgbRegex.test(color)) {
    result = rgbRegex.exec(color);
    if (result) {
      r = parseInt(result[1]);
      g = parseInt(result[2]);
      b = parseInt(result[3]);
    }
  } else {
    return undefined;
  }

  if (r !== undefined && g !== undefined && b !== undefined) {
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};
