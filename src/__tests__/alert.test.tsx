import {act, fireEvent, render, screen} from '@testing-library/react-native';

import {Alert, AlertContainer} from '../index';
import {getListenerCount} from '../components/alert/helpers/subscribers';

describe('Alert', () => {
  it('subscribes once per container and cleans up on unmount', async () => {
    const view = await render(<AlertContainer />);
    expect(getListenerCount()).toBe(1);

    // Open and close several alerts: the listener count must not grow.
    for (let i = 0; i < 3; i++) {
      let promise: Promise<boolean> | undefined;
      await act(async () => {
        promise = Alert.alert('Title', 'Description');
      });
      await fireEvent.press(await screen.findByText('Ok'));
      await expect(promise).resolves.toBe(true);
    }
    expect(getListenerCount()).toBe(1);

    await view.unmount();
    expect(getListenerCount()).toBe(0);
  });

  it('resolves false when cancelled and runs onPress only when confirmed', async () => {
    await render(<AlertContainer />);
    const onPress = jest.fn();

    let cancelled: Promise<boolean> | undefined;
    await act(async () => {
      cancelled = Alert.alert({
        title: 'Delete?',
        showCancelButton: true,
        cancelText: 'Keep',
      });
    });
    await fireEvent.press(await screen.findByText('Keep'));
    await expect(cancelled).resolves.toBe(false);

    let confirmed: Promise<boolean> | undefined;
    await act(async () => {
      confirmed = Alert.alert('Save?', 'Sure?', onPress);
    });
    await fireEvent.press(await screen.findByText('Ok'));
    await expect(confirmed).resolves.toBe(true);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('prompt resolves with the typed text or undefined when cancelled', async () => {
    await render(<AlertContainer />);

    let result: Promise<string | undefined> | undefined;
    await act(async () => {
      result = Alert.prompt({title: 'Name', placeholder: 'Type'});
    });
    await fireEvent.changeText(
      await screen.findByPlaceholderText('Type'),
      'Fer',
    );
    await fireEvent.press(screen.getByText('Done'));
    await expect(result).resolves.toBe('Fer');

    let cancelled: Promise<string | undefined> | undefined;
    await act(async () => {
      cancelled = Alert.prompt('Name');
    });
    await fireEvent.press(await screen.findByText('Cancel'));
    await expect(cancelled).resolves.toBeUndefined();
  });

  it('a second request cancels the previous one', async () => {
    await render(<AlertContainer />);

    let first: Promise<boolean> | undefined;
    let second: Promise<boolean> | undefined;
    await act(async () => {
      first = Alert.alert('First', 'one');
    });
    await act(async () => {
      second = Alert.alert('Second', 'two');
    });
    await expect(first).resolves.toBe(false);
    await fireEvent.press(await screen.findByText('Ok'));
    await expect(second).resolves.toBe(true);
  });
});
