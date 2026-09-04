import {fireEvent, render, screen} from '@testing-library/react-native';
import {Text} from 'react-native';

import {
  BottomTabNavigation,
  Button,
  CheckBox,
  Input,
  RadioButtons,
  SegmentedControl,
  SlideAction,
  Slider,
  StarRating,
  TabControl,
  Toast,
} from '../index';

describe('accessibility and testID', () => {
  it('Button exposes role, label, disabled and busy state', async () => {
    await render(<Button text="Save" testID="save" loading />);
    const button = screen.getByTestId('save');
    expect(button.props.accessibilityRole).toBe('button');
    expect(button.props.accessibilityLabel).toBe('Save');
    // Loading disables the touchable; RN merges `disabled` into the state.
    expect(button.props.accessibilityState).toMatchObject({
      disabled: true,
      busy: true,
    });
    expect(screen.getByRole('button', {name: 'Save'})).toBeTruthy();
  });

  it('CheckBox is a checkbox with checked state', async () => {
    await render(<CheckBox title="Terms" checked testID="terms" />);
    expect(screen.getByRole('checkbox', {name: 'Terms'})).toBeTruthy();
    expect(screen.getByTestId('terms').props.accessibilityState).toEqual({
      checked: true,
    });
  });

  it('RadioButtons render a radiogroup with one checked radio', async () => {
    await render(
      <RadioButtons
        testID="radios"
        defaultChecked={1}
        values={[
          {text: 'One', value: 1},
          {text: 'Two', value: 2},
        ]}
      />,
    );
    expect(screen.getByTestId('radios').props.accessibilityRole).toBe(
      'radiogroup',
    );
    expect(screen.getAllByRole('radio')).toHaveLength(2);
    expect(
      screen.getByRole('radio', {name: 'Two'}).props.accessibilityState,
    ).toEqual({checked: true, disabled: false});
    expect(screen.getByTestId('radios-option-0')).toBeTruthy();
  });

  it('SegmentedControl and TabControl expose tabs with selected state', async () => {
    const One = () => <Text>one</Text>;
    await render(
      <>
        <SegmentedControl
          testID="seg"
          values={[
            {key: 'A', value: 'a'},
            {key: 'B', value: 'b'},
          ]}
          onChange={jest.fn()}
        />
        <TabControl testID="tabs" values={[{key: 'First', renderItem: One}]} />
      </>,
    );
    expect(screen.getByTestId('seg').props.accessibilityRole).toBe('tablist');
    expect(
      screen.getByRole('tab', {name: 'A'}).props.accessibilityState,
    ).toEqual({selected: true});
    expect(
      screen.getByRole('tab', {name: 'B'}).props.accessibilityState,
    ).toEqual({selected: false});
    expect(screen.getByTestId('tabs-tab-0')).toBeTruthy();
  });

  it('BottomTabNavigation tabs update the selected state', async () => {
    await render(
      <BottomTabNavigation
        testID="nav"
        values={[
          {icon: 'home', text: 'Home'},
          {icon: 'cog', text: 'Settings'},
        ]}
      />,
    );
    await fireEvent.press(screen.getByRole('tab', {name: 'Settings'}));
    expect(
      screen.getByTestId('nav-item-1').props.accessibilityState.selected,
    ).toBe(true);
  });

  it('Slider is adjustable and reacts to increment/decrement actions', async () => {
    const onChange = jest.fn();
    await render(
      <Slider
        testID="slider"
        value={50}
        onChange={onChange}
        minValue={0}
        maxValue={100}
      />,
    );
    const slider = screen.getByTestId('slider');
    expect(slider.props.accessibilityRole).toBe('adjustable');
    expect(slider.props.accessibilityValue).toEqual({
      min: 0,
      max: 100,
      now: 50,
    });

    await fireEvent(slider, 'accessibilityAction', {
      nativeEvent: {actionName: 'increment'},
    });
    expect(onChange).toHaveBeenLastCalledWith(60);
    await fireEvent(slider, 'accessibilityAction', {
      nativeEvent: {actionName: 'decrement'},
    });
    expect(onChange).toHaveBeenLastCalledWith(40);
    expect(screen.getByTestId('slider-thumb')).toBeTruthy();
  });

  it('SlideAction completes through the activate action', async () => {
    const onCompleted = jest.fn();
    await render(
      <SlideAction
        testID="slide"
        text="Slide"
        textOnCompleted="Done"
        onCompleted={onCompleted}
      />,
    );
    await fireEvent(screen.getByTestId('slide'), 'accessibilityAction', {
      nativeEvent: {actionName: 'activate'},
    });
    expect(onCompleted).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Done')).toBeTruthy();
    expect(screen.getByTestId('slide').props.accessibilityState.checked).toBe(
      true,
    );
  });

  it('Input labels the field and the password toggle', async () => {
    await render(<Input label="Password" password testID="pwd" />);
    expect(screen.getByTestId('pwd').props.accessibilityLabel).toBe('Password');
    expect(screen.getByRole('button', {name: 'Show password'})).toBeTruthy();
    await fireEvent.press(screen.getByTestId('pwd-right-button'));
    expect(screen.getByRole('button', {name: 'Hide password'})).toBeTruthy();
  });

  it('StarRating stars are radios with a position label', async () => {
    await render(<StarRating testID="stars" defaultRating={2} justRating />);
    expect(screen.getAllByRole('radio')).toHaveLength(5);
    expect(
      screen.getByRole('radio', {name: '2 of 5'}).props.accessibilityState
        .checked,
    ).toBe(true);
    expect(screen.getByTestId('stars-star-4')).toBeTruthy();
  });

  it('Toast announces itself as an alert', async () => {
    await render(
      <Toast visible text="Saved" setVisible={jest.fn()} testID="toast" />,
    );
    const toast = screen.getByTestId('toast');
    expect(toast.props.accessibilityRole).toBe('alert');
    expect(toast.props.accessibilityLiveRegion).toBe('polite');
  });
});
