import {fireEvent, render, screen} from '@testing-library/react-native';
import {Text} from 'react-native';

import {
  Button,
  CheckBox,
  CircleAvatar,
  DotsLoading,
  Icon,
  Input,
  ProgressBar,
  Rating,
  SegmentedControl,
  Switch,
  Tooltip,
} from '../index';

describe('rn-inkpad smoke tests', () => {
  it('renders Button and fires onPress', async () => {
    const onPress = jest.fn();
    await render(<Button text="Press me" onPress={onPress} />);
    await fireEvent.press(screen.getByText('Press me'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('renders Icon from an element or a component', async () => {
    const Custom = ({size, color}: {size?: number; color?: string}) => (
      <Text testID="custom">{`${size}-${color}`}</Text>
    );
    await render(
      <>
        <Icon icon={<Text>element</Text>} />
        <Icon icon={Custom} size={12} color="red" />
      </>,
    );
    expect(screen.getByText('element')).toBeTruthy();
    expect(screen.getByTestId('custom').props.children).toBe('12-red');
  });

  it('renders Input with a label', async () => {
    await render(<Input label="Email" placeholder="you@mail.com" />);
    expect(screen.getByText('Email')).toBeTruthy();
    expect(screen.getByPlaceholderText('you@mail.com')).toBeTruthy();
  });

  it('renders Switch with text', async () => {
    await render(<Switch text="Notifications" />);
    expect(screen.getByText('Notifications')).toBeTruthy();
  });

  it('renders CheckBox with title', async () => {
    await render(<CheckBox title="Accept terms" />);
    expect(screen.getByText('Accept terms')).toBeTruthy();
  });

  it('renders SegmentedControl values', async () => {
    await render(
      <SegmentedControl
        values={[
          {key: 'One', value: 'one'},
          {key: 'Two', value: 'two'},
        ]}
        onChange={jest.fn()}
      />,
    );
    expect(screen.getByText('One')).toBeTruthy();
    expect(screen.getByText('Two')).toBeTruthy();
  });

  it('renders CircleAvatar initials', async () => {
    await render(<CircleAvatar defaultText="FR" />);
    expect(screen.getByText('FR')).toBeTruthy();
  });

  it('renders Tooltip children', async () => {
    await render(
      <Tooltip text="Help">
        <Text>Target</Text>
      </Tooltip>,
    );
    expect(screen.getByText('Target')).toBeTruthy();
  });

  it('renders ProgressBar, Rating and DotsLoading without crashing', async () => {
    await render(<ProgressBar value={50} />);
    await render(<Rating rating={3.5} />);
    await render(<DotsLoading />);
  });
});
