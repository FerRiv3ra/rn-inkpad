import {act, fireEvent, render, screen} from '@testing-library/react-native';
import {Text} from 'react-native';

import {
  Accordion,
  Badge,
  BottomSheet,
  Button,
  Chip,
  Dialog,
  Divider,
  PaginationDots,
  PinInput,
  Skeleton,
  SnackbarProvider,
  Stepper,
  ThemeProvider,
  useSnackbar,
  useTheme,
} from '../index';

describe('ThemeProvider', () => {
  it('overrides tokens and falls back to defaults without a provider', async () => {
    const Probe = () => {
      const {colors} = useTheme();
      return <Text>{colors.primary}</Text>;
    };
    await render(
      <>
        <Probe />
        <ThemeProvider theme={{colors: {primary: '#123456'}}}>
          <Probe />
          <ThemeProvider theme={{colors: {secondary: '#000000'}}}>
            <Probe />
          </ThemeProvider>
        </ThemeProvider>
      </>,
    );
    expect(screen.getByText('#464EE5')).toBeTruthy();
    expect(screen.getAllByText('#123456')).toHaveLength(2);
  });

  it('existing components read their default color from the theme', async () => {
    await render(
      <ThemeProvider theme={{colors: {primary: '#ABCDEF'}}}>
        <Button text="Go" testID="btn" />
      </ThemeProvider>,
    );
    expect(screen.getByTestId('btn')).toHaveStyle({backgroundColor: '#ABCDEF'});
  });
});

describe('Badge', () => {
  it('caps the value at max and hides zero', async () => {
    await render(
      <>
        <Badge value={150} max={99} testID="a" />
        <Badge value={0} testID="b" />
        <Badge dot testID="c" />
      </>,
    );
    expect(screen.getByText('99+')).toBeTruthy();
    expect(screen.queryByTestId('b-badge')).toBeNull();
    expect(screen.getByTestId('c-badge')).toBeTruthy();
  });

  it('wraps children', async () => {
    await render(
      <Badge value={2} testID="wrap">
        <Text>child</Text>
      </Badge>,
    );
    expect(screen.getByText('child')).toBeTruthy();
    expect(screen.getByTestId('wrap-badge')).toBeTruthy();
  });
});

describe('Chip', () => {
  it('reports selection state and close presses', async () => {
    const onPress = jest.fn();
    const onClose = jest.fn();
    await render(
      <Chip
        text="Tag"
        selected
        onPress={onPress}
        onClose={onClose}
        testID="chip"
      />,
    );
    expect(
      screen.getByRole('button', {name: 'Tag'}).props.accessibilityState,
    ).toEqual({
      selected: true,
      disabled: false,
    });
    await fireEvent.press(screen.getByTestId('chip'));
    await fireEvent.press(screen.getByTestId('chip-close'));
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('Divider, Skeleton, PaginationDots, Stepper', () => {
  it('render their variants', async () => {
    const onChange = jest.fn();
    await render(
      <>
        <Divider text="OR" testID="div" />
        <Divider orientation="vertical" />
        <Skeleton lines={3} testID="sk" />
        <PaginationDots count={3} index={1} onChange={onChange} testID="pg" />
        <Stepper
          steps={[{label: 'A'}, {label: 'B'}, {label: 'C'}]}
          current={1}
          testID="st"
        />
      </>,
    );
    expect(screen.getByText('OR')).toBeTruthy();
    expect(screen.getByTestId('sk-line-2')).toBeTruthy();
    expect(
      screen.getByTestId('pg-dot-1').props.accessibilityState.selected,
    ).toBe(true);
    await fireEvent.press(screen.getByTestId('pg-dot-2'));
    expect(onChange).toHaveBeenCalledWith(2);
    expect(
      screen.getByTestId('st-step-1').props.accessibilityState.selected,
    ).toBe(true);
    expect(screen.getByText('3')).toBeTruthy();
  });
});

describe('Accordion', () => {
  it('opens one item at a time unless multiple', async () => {
    const onChange = jest.fn();
    const items = [
      {title: 'One', content: 'one body'},
      {title: 'Two', content: 'two body'},
    ];
    const view = await render(
      <Accordion items={items} onChange={onChange} testID="acc" />,
    );
    expect(screen.queryByText('one body')).toBeNull();

    await fireEvent.press(screen.getByTestId('acc-item-0'));
    expect(screen.getByText('one body')).toBeTruthy();
    await fireEvent.press(screen.getByTestId('acc-item-1'));
    expect(screen.queryByText('one body')).toBeNull();
    expect(screen.getByText('two body')).toBeTruthy();
    expect(onChange).toHaveBeenLastCalledWith([1]);

    // Fresh mount: defaultExpanded only applies on first render.
    await view.unmount();
    await render(<Accordion items={items} multiple defaultExpanded={[0, 1]} />);
    expect(screen.getByText('one body')).toBeTruthy();
    expect(screen.getByText('two body')).toBeTruthy();
  });
});

describe('Dialog and BottomSheet', () => {
  it('Dialog renders buttons and closes from the backdrop', async () => {
    const onClose = jest.fn();
    const onDelete = jest.fn();
    await render(
      <Dialog
        visible
        title="Delete?"
        onClose={onClose}
        testID="dlg"
        buttons={[{text: 'Delete', onPress: onDelete, variant: 'solid'}]}>
        Body text
      </Dialog>,
    );
    expect(screen.getByText('Delete?')).toBeTruthy();
    expect(screen.getByText('Body text')).toBeTruthy();
    await fireEvent.press(screen.getByTestId('dlg-button-0'));
    expect(onDelete).toHaveBeenCalledTimes(1);
    await fireEvent.press(
      screen.getByTestId('dlg-backdrop', {includeHiddenElements: true}),
    );
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('BottomSheet mounts when visible and closes from the backdrop', async () => {
    const onClose = jest.fn();
    await render(
      <BottomSheet visible height={300} onClose={onClose} testID="sheet">
        <Text>Sheet body</Text>
      </BottomSheet>,
    );
    expect(screen.getByText('Sheet body')).toBeTruthy();
    await fireEvent.press(
      screen.getByTestId('sheet-backdrop', {includeHiddenElements: true}),
    );
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('PinInput', () => {
  it('filters to digits, reports changes and completion', async () => {
    const onChange = jest.fn();
    const onComplete = jest.fn();
    await render(
      <PinInput
        length={4}
        onChange={onChange}
        onComplete={onComplete}
        testID="pin"
      />,
    );
    await fireEvent.changeText(screen.getByTestId('pin-input'), '12a3');
    expect(onChange).toHaveBeenLastCalledWith('123');
    expect(onComplete).not.toHaveBeenCalled();
    await fireEvent.changeText(screen.getByTestId('pin-input'), '123456');
    expect(onChange).toHaveBeenLastCalledWith('1234');
    expect(onComplete).toHaveBeenCalledWith('1234');
    expect(screen.getByText('4')).toBeTruthy();
  });

  it('masks digits when secure', async () => {
    await render(<PinInput length={3} defaultValue="12" secure />);
    expect(screen.getAllByText('•')).toHaveLength(2);
  });
});

describe('Snackbar', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  const Trigger = () => {
    const {show} = useSnackbar();
    return (
      <>
        <Button
          text="one"
          onPress={() => show({text: 'First', duration: 1000})}
        />
        <Button
          text="two"
          onPress={() =>
            show({
              text: 'Second',
              duration: 1000,
              action: {text: 'Undo', onPress: jest.fn()},
            })
          }
        />
      </>
    );
  };

  it('shows messages one after another and hides them after duration', async () => {
    await render(
      <SnackbarProvider testID="snack">
        <Trigger />
      </SnackbarProvider>,
    );
    await fireEvent.press(screen.getByText('one'));
    await fireEvent.press(screen.getByText('two'));
    expect(screen.getByText('First')).toBeTruthy();
    expect(screen.queryByText('Second')).toBeNull();

    await act(async () => {
      jest.advanceTimersByTime(1500);
    });
    expect(screen.queryByText('First')).toBeNull();
    expect(screen.getByText('Second')).toBeTruthy();
    expect(screen.getByTestId('snack-action')).toBeTruthy();

    await fireEvent.press(screen.getByTestId('snack-action'));
    await act(async () => {
      jest.advanceTimersByTime(500);
    });
    expect(screen.queryByText('Second')).toBeNull();
  });

  it('useSnackbar throws outside the provider', async () => {
    const Broken = () => {
      useSnackbar();
      return null;
    };
    const error = jest.spyOn(console, 'error').mockImplementation(() => {});
    await expect(() => render(<Broken />)).rejects.toThrow(/SnackbarProvider/);
    error.mockRestore();
  });
});
