import {render, screen} from '@testing-library/react-native';

import {colorToRgba} from '../helpers/colorToRgba';
import {Rating} from '../index';

describe('colorToRgba', () => {
  it.each([
    ['#DB504A', 'rgba(219, 80, 74, 0.2)'],
    ['DB504A', 'rgba(219, 80, 74, 0.2)'],
    ['#fff', 'rgba(255, 255, 255, 0.2)'],
    ['rgb(1, 2, 3)', 'rgba(1, 2, 3, 0.2)'],
    ['rgb(1.4,2.6,3)', 'rgba(1, 3, 3, 0.2)'],
    ['rgba(1, 2, 3, 0.5)', 'rgba(1, 2, 3, 0.5)'],
  ])('converts %s', (input, expected) => {
    expect(colorToRgba(input)).toBe(expected);
  });

  it('returns undefined for invalid colors', () => {
    expect(colorToRgba('red')).toBeUndefined();
    expect(colorToRgba('rgb(300, 0, 0)')).toBeUndefined();
    expect(colorToRgba('#12345')).toBeUndefined();
  });

  it('honours alpha', () => {
    expect(colorToRgba('#000', 0.9)).toBe('rgba(0, 0, 0, 0.9)');
  });
});

describe('Rating', () => {
  const names = () =>
    screen.getAllByText(/star/).map(node => node.props.children);

  it('renders a half icon for fractional ratings', async () => {
    await render(<Rating rating={3.5} />);
    expect(names()).toEqual([
      'star',
      'star',
      'star',
      'star-half',
      'star-outline',
    ]);
  });

  it('clamps out-of-range ratings', async () => {
    await render(<Rating rating={7.5} />);
    expect(names()).toEqual(['star', 'star', 'star', 'star', 'star']);
  });

  it('supports the heart icon and total', async () => {
    await render(<Rating icon="heart" rating={1} total={3} />);
    expect(screen.getAllByText(/heart/).map(n => n.props.children)).toEqual([
      'heart',
      'heart-outline',
      'heart-outline',
    ]);
  });
});
