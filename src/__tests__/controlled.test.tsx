import {fireEvent, render, screen} from '@testing-library/react-native';
import {Text} from 'react-native';

import {
  CheckBox,
  RadioButtons,
  SegmentedControl,
  StarRating,
  Switch,
  TabControl,
} from '../index';

const values = [
  {key: 'A', value: 'a'},
  {key: 'B', value: 'b'},
];

describe('controlled props stay in sync after mount', () => {
  it('Switch follows isOn and reports changes', async () => {
    const onChange = jest.fn();
    const view = await render(<Switch isOn={false} onChange={onChange} />);
    const toggle = screen.getByRole('switch');
    expect(toggle.props.value).toBe(false);

    await view.rerender(<Switch isOn onChange={onChange} />);
    expect(screen.getByRole('switch').props.value).toBe(true);

    await fireEvent(screen.getByRole('switch'), 'valueChange', false);
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it('Switch warns once about the deprecated backgrounColor prop', async () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const view = await render(<Switch backgrounColor="#F00" />);
    await view.rerender(<Switch backgrounColor="#F00" text="again" />);
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0]?.[0]).toMatch(/backgrounColor/);
    warn.mockRestore();
  });

  it('CheckBox follows checked', async () => {
    const view = await render(
      <CheckBox checked={false} title="Terms" testID="cb" />,
    );
    expect(screen.getByTestId('cb').props.accessibilityState.checked).toBe(
      false,
    );

    await view.rerender(<CheckBox checked title="Terms" testID="cb" />);
    expect(screen.getByTestId('cb').props.accessibilityState.checked).toBe(
      true,
    );
  });

  it('SegmentedControl follows selectedIndex', async () => {
    const onChange = jest.fn();
    const view = await render(
      <SegmentedControl
        values={values}
        selectedIndex={0}
        onChange={onChange}
        selectedTextColor="#123456"
      />,
    );
    await view.rerender(
      <SegmentedControl
        values={values}
        selectedIndex={1}
        onChange={onChange}
        selectedTextColor="#123456"
      />,
    );
    expect(screen.getByText('B')).toHaveStyle({color: '#123456'});
  });

  it('TabControl follows selectedIndex and survives an empty list', async () => {
    const One = () => <Text>one</Text>;
    const Two = () => <Text>two</Text>;
    const tabs = [
      {key: 'One', renderItem: One},
      {key: 'Two', renderItem: Two},
    ];

    const view = await render(<TabControl values={tabs} selectedIndex={0} />);
    expect(screen.getByText('one')).toBeTruthy();

    await view.rerender(<TabControl values={tabs} selectedIndex={1} />);
    expect(screen.getByText('two')).toBeTruthy();

    await view.rerender(<TabControl values={tabs} selectedIndex={9} />);
    expect(screen.getByText('one')).toBeTruthy();

    await view.rerender(<TabControl values={[]} />);
    expect(screen.queryByText('one')).toBeNull();
  });

  it('RadioButtons ignores an out-of-range defaultChecked', async () => {
    await render(
      <RadioButtons
        defaultChecked={5}
        values={[
          {text: 'One', value: 1},
          {text: 'Two', value: 2},
        ]}
      />,
    );
    screen
      .getAllByRole('radio')
      .forEach(radio =>
        expect(radio.props.accessibilityState.checked).toBe(false),
      );
  });

  it('StarRating keeps the selection when the parent re-renders', async () => {
    const view = await render(
      <StarRating defaultRating={2} reviews={['a', 'b', 'c', 'd', 'e']} />,
    );
    await fireEvent.press(screen.getAllByRole('radio')[4]!);
    expect(screen.getByText('e')).toBeTruthy();

    // Inline array: a new reference every render must not reset the rating.
    await view.rerender(
      <StarRating defaultRating={2} reviews={['a', 'b', 'c', 'd', 'e']} />,
    );
    expect(screen.getByText('e')).toBeTruthy();
  });
});
