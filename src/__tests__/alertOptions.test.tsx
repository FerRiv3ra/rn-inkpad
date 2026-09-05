import {act, fireEvent, render, screen} from '@testing-library/react-native';

import {Alert, AlertContainer} from '../index';

// Returns the pending promise wrapped in an object: returning it directly
// would make `await open()` wait for the alert itself.
const open = async (run: () => Promise<unknown>) => {
  let promise: Promise<unknown> | undefined;
  await act(async () => {
    promise = run();
  });
  return {promise: promise!};
};

describe('Prompt options', () => {
  it('pre-fills defaultValue and submits from the keyboard', async () => {
    await render(<AlertContainer />);
    const onPress = jest.fn();

    const {promise} = await open(() =>
      Alert.prompt({title: 'Email', defaultValue: 'a@b.com'}),
    );
    const input = await screen.findByTestId('prompt-input');
    expect(input.props.value).toBe('a@b.com');
    await fireEvent.press(screen.getByText('Done'));
    await expect(promise).resolves.toBe('a@b.com');

    const {promise: second} = await open(() =>
      Alert.prompt('Email', undefined, onPress),
    );
    const again = await screen.findByTestId('prompt-input');
    expect(again.props.value).toBe('');
    await fireEvent.changeText(again, 'c@d.com');
    await fireEvent(again, 'submitEditing');
    await expect(second).resolves.toBe('c@d.com');
    expect(onPress).toHaveBeenCalledWith('c@d.com');
  });

  it('forwards keyboardType, secureTextEntry, autoCapitalize and maxLength', async () => {
    await render(<AlertContainer />);

    await open(() =>
      Alert.prompt({
        title: 'PIN',
        keyboardType: 'number-pad',
        secureTextEntry: true,
        autoCapitalize: 'none',
        maxLength: 4,
      }),
    );
    const input = await screen.findByTestId('prompt-input');
    expect(input.props.keyboardType).toBe('number-pad');
    expect(input.props.secureTextEntry).toBe(true);
    expect(input.props.autoCapitalize).toBe('none');
    expect(input.props.maxLength).toBe(4);
    await fireEvent.press(screen.getByText('Cancel'));
  });

  it('spreads inputProps but keeps the managed props', async () => {
    await render(<AlertContainer />);

    const {promise} = await open(() =>
      Alert.prompt({
        title: 'Email',
        placeholder: 'you@example.com',
        inputProps: {autoCorrect: false, returnKeyType: 'send'},
      }),
    );
    const input = await screen.findByPlaceholderText('you@example.com');
    expect(input.props.autoCorrect).toBe(false);
    expect(input.props.returnKeyType).toBe('send');
    await fireEvent.changeText(input, 'a@b.c');
    await fireEvent(input, 'submitEditing');
    await expect(promise).resolves.toBe('a@b.c');
  });
});

describe('Dismissing', () => {
  it('Alert.dismiss closes the current request as cancelled', async () => {
    await render(<AlertContainer />);

    const {promise} = await open(() => Alert.alert('Wait', 'for it'));
    await screen.findByText('Wait');
    await act(async () => {
      Alert.dismiss();
    });
    await expect(promise).resolves.toBe(false);
    expect(screen.queryByText('Wait')).toBeNull();

    // No-op when nothing is open.
    Alert.dismiss();
  });

  it('the hardware back button cancels the request', async () => {
    await render(<AlertContainer />);

    const {promise} = await open(() => Alert.alert('Back', 'press'));
    await screen.findByText('Back');
    await fireEvent(screen.getByText('Back'), 'requestClose');
    await expect(promise).resolves.toBe(false);
  });

  it('backdrop does not dismiss by default', async () => {
    await render(<AlertContainer />);

    await open(() => Alert.alert('Stay', 'put'));
    await screen.findByText('Stay');
    await fireEvent.press(
      screen.getByTestId('alert-backdrop', {includeHiddenElements: true}),
    );
    expect(screen.getByText('Stay')).toBeTruthy();
    await fireEvent.press(screen.getByText('Ok'));
  });

  it('backdrop dismisses as cancelled with dismissOnBackdropPress', async () => {
    await render(<AlertContainer dismissOnBackdropPress />);

    const {promise} = await open(() => Alert.prompt('Name'));
    await screen.findByText('Name');
    await fireEvent.press(
      screen.getByTestId('alert-backdrop', {includeHiddenElements: true}),
    );
    await expect(promise).resolves.toBeUndefined();
    expect(screen.queryByText('Name')).toBeNull();
  });
});
