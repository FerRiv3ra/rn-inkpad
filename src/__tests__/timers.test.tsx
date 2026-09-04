import {act, fireEvent, render, screen} from '@testing-library/react-native';
import {Text} from 'react-native';

import {
  DotsLoading,
  LongPressButton,
  ProgressBar,
  Toast,
  Tooltip,
} from '../index';

type TimerFn = typeof setTimeout | typeof setInterval;
type ClearFn = typeof clearTimeout | typeof clearInterval;

/**
 * Asserts that every timer created through `create` with the given delay was
 * later cancelled through `clear`. Filtering by delay keeps Animated's
 * requestAnimationFrame polyfill (also a setTimeout) out of the check.
 */
const expectTimersCleared = (
  create: jest.SpyInstance<ReturnType<TimerFn>, Parameters<TimerFn>>,
  clear: jest.SpyInstance<void, Parameters<ClearFn>>,
  delay: number,
) => {
  const ids = create.mock.calls
    .map((call, index) => ({
      delay: call[1],
      id: create.mock.results[index]?.value,
    }))
    .filter(entry => entry.delay === delay)
    .map(entry => entry.id);
  const cleared = clear.mock.calls.map(call => call[0]);

  expect(ids.length).toBeGreaterThan(0);
  ids.forEach(id => expect(cleared).toContain(id));
};

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});

describe('timers are cleaned up', () => {
  it('ProgressBar stops ticking once the target is reached', async () => {
    const setSpy = jest.spyOn(globalThis, 'setInterval');
    const clearSpy = jest.spyOn(globalThis, 'clearInterval');

    await render(<ProgressBar value={20} showPercent />);
    await act(async () => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByText('20%')).toBeTruthy();
    expectTimersCleared(setSpy, clearSpy, 10);
  });

  it('ProgressBar can go down', async () => {
    const view = await render(<ProgressBar value={50} showPercent />);
    await act(async () => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText('50%')).toBeTruthy();

    await view.rerender(<ProgressBar value={10} showPercent />);
    await act(async () => {
      jest.advanceTimersByTime(2000);
    });
    expect(screen.getByText('10%')).toBeTruthy();
  });

  it('LongPressButton fires onFinish once and clears intervals on unmount', async () => {
    const setSpy = jest.spyOn(globalThis, 'setInterval');
    const clearSpy = jest.spyOn(globalThis, 'clearInterval');
    const onFinish = jest.fn();
    const view = await render(
      <LongPressButton text="Hold" longPressTime={1000} onFinish={onFinish} />,
    );

    await fireEvent(screen.getByText('Hold'), 'pressIn');
    await act(async () => {
      jest.advanceTimersByTime(1500);
    });
    expect(onFinish).toHaveBeenCalledTimes(1);

    // Press again and unmount while the interval is running.
    await fireEvent(screen.getByText('Hold'), 'pressIn');
    await view.unmount();
    expectTimersCleared(setSpy, clearSpy, 10);
  });

  it('Toast hides after duration and clears the timer on unmount', async () => {
    const setSpy = jest.spyOn(globalThis, 'setTimeout');
    const clearSpy = jest.spyOn(globalThis, 'clearTimeout');
    const setVisible = jest.fn();
    const view = await render(
      <Toast visible text="Hi" duration={1000} setVisible={setVisible} />,
    );

    // A new callback identity must not restart the timer.
    await view.rerender(
      <Toast visible text="Hi" duration={1000} setVisible={setVisible} />,
    );
    await act(async () => {
      jest.advanceTimersByTime(1000);
    });
    expect(setVisible).toHaveBeenCalledTimes(1);
    expect(setVisible).toHaveBeenCalledWith(false);

    await view.rerender(
      <Toast
        visible={false}
        text="Hi"
        duration={1000}
        setVisible={setVisible}
      />,
    );
    await view.rerender(
      <Toast visible text="Hi" duration={1000} setVisible={setVisible} />,
    );
    await view.unmount();
    expectTimersCleared(setSpy, clearSpy, 1000);
  });

  it('Tooltip clears its hide timer on unmount', async () => {
    const setSpy = jest.spyOn(globalThis, 'setTimeout');
    const clearSpy = jest.spyOn(globalThis, 'clearTimeout');
    const view = await render(
      <Tooltip text="Help">
        <Text>target</Text>
      </Tooltip>,
    );

    await fireEvent.press(screen.getByText('target'));
    await fireEvent.press(screen.getByText('target'));
    await view.unmount();
    expectTimersCleared(setSpy, clearSpy, 500);
  });

  it('DotsLoading unmounts and changes dotCount without errors', async () => {
    const view = await render(<DotsLoading dotCount={3} />);
    await view.rerender(<DotsLoading dotCount={5} />);
    await act(async () => {
      jest.advanceTimersByTime(1000);
    });
    await view.unmount();
  });
});
