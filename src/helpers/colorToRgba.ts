const HEX_6 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
const HEX_3 = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
const RGB = /^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/i;

const inRange = (n: number) => Number.isFinite(n) && n >= 0 && n <= 255;

/**
 * Converts `#rgb`, `#rrggbb` or `rgb(r, g, b)` to `rgba(r, g, b, alpha)`.
 * `rgba(...)` values are returned untouched. Returns undefined for anything else.
 */
export const colorToRgba = (color: string, alpha = 0.2): string | undefined => {
  const value = color.trim();

  if (value.toLowerCase().startsWith('rgba')) {
    return value;
  }

  let channels: number[] | undefined;

  const hex6 = HEX_6.exec(value);
  const hex3 = HEX_3.exec(value);
  const rgb = RGB.exec(value);

  if (hex6) {
    channels = hex6.slice(1, 4).map(c => parseInt(c, 16));
  } else if (hex3) {
    channels = hex3.slice(1, 4).map(c => parseInt(c + c, 16));
  } else if (rgb) {
    channels = rgb.slice(1, 4).map(c => Math.round(parseFloat(c)));
  }

  if (!channels || !channels.every(inRange)) {
    return undefined;
  }

  const [r, g, b] = channels;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
