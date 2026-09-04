import {render, screen} from '@testing-library/react-native';
import {Text} from 'react-native';

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
  const variants = (testID: string, total: number) =>
    Array.from({length: total}, (_, i) =>
      screen
        .getByTestId(new RegExp(`^${testID}-${i}-`))
        .props.testID.split('-')
        .pop(),
    );

  it('renders a half icon for fractional ratings', async () => {
    await render(<Rating rating={3.5} testID="r" />);
    expect(variants('r', 5)).toEqual(['full', 'full', 'full', 'half', 'empty']);
    expect(screen.getByTestId('r').props.accessibilityLabel).toBe('3.5 of 5');
  });

  it('clamps out-of-range ratings', async () => {
    await render(<Rating rating={7.5} testID="r" />);
    expect(variants('r', 5)).toEqual(['full', 'full', 'full', 'full', 'full']);
  });

  it('supports the heart shape and total', async () => {
    await render(<Rating icon="heart" rating={1} total={3} testID="r" />);
    expect(variants('r', 3)).toEqual(['full', 'empty', 'empty']);
    expect(screen.getAllByText('♥\uFE0E')).toHaveLength(1);
    expect(screen.getAllByText('♡\uFE0E')).toHaveLength(2);
  });

  it('renders custom icons per step', async () => {
    const Full = () => <Text>F</Text>;
    const Empty = () => <Text>E</Text>;
    await render(
      <Rating rating={2} total={3} icons={{full: Full, empty: Empty}} />,
    );
    expect(screen.getAllByText('F')).toHaveLength(2);
    expect(screen.getAllByText('E')).toHaveLength(1);
  });
});
