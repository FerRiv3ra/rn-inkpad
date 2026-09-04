---
sidebar_position: 3
title: Accessibility & testing
---

# Accessibility & testing

Every component accepts three extra props:

| Name               | Type     | Description                                                                      |
| ------------------ | -------- | -------------------------------------------------------------------------------- |
| testID             | `string` | Identifier for end-to-end and unit tests.                                        |
| accessibilityLabel | `string` | Read by screen readers. Defaults to the visible text when the component has one. |
| accessibilityHint  | `string` | Extra guidance for screen readers.                                               |

Components expose the right roles and states out of the box: `button`, `checkbox` and `radio`
with `checked`, `switch`, `tab` with `selected`, `adjustable` sliders with `accessibilityValue`
and increment/decrement actions, `progressbar`, `alert` live regions for Toast and Snackbar, and
`expanded` for accordions, drawers and tooltips.

## Sub element ids

When a component has several touchable parts, their ids derive from the root `testID`:

| Component            | Ids                                                           |
| -------------------- | ------------------------------------------------------------- |
| Slider, SlideAction  | `${testID}-thumb`                                             |
| ProgressBar          | `${testID}-fill`                                              |
| LongPressButton      | `${testID}-progress`                                          |
| RadioButtons         | `${testID}-option-N`, `${testID}-icon`                        |
| SegmentedControl     | `${testID}-segment-N`                                         |
| TabControl           | `${testID}-tab-N`                                             |
| BottomTabNavigation  | `${testID}-item-N`                                            |
| DrawerNavigation     | `${testID}-toggle`                                            |
| StarRating           | `${testID}-star-N`                                            |
| Rating               | `${testID}-N-full`, `-half`, `-empty`                         |
| Input                | `${testID}-right-button`                                      |
| ActionSheet          | `${testID}-close`, `${testID}-action-N`, `${testID}-cancel`   |
| FloatingActionButton | `${testID}-action-N`                                          |
| Card                 | `${testID}-button-N`                                          |
| Tooltip              | `${testID}-bubble`                                            |
| Badge                | `${testID}-badge`                                             |
| Chip                 | `${testID}-close`                                             |
| Skeleton             | `${testID}-line-N`                                            |
| PaginationDots       | `${testID}-dot-N`                                             |
| Stepper              | `${testID}-step-N`                                            |
| Accordion            | `${testID}-item-N`, `${testID}-content-N`                     |
| BottomSheet, Dialog  | `${testID}-backdrop`, `${testID}-close`, `${testID}-button-N` |
| PinInput             | `${testID}-cell-N`, `${testID}-input`                         |
| SnackbarProvider     | `${testID}-action`                                            |

## Testing with React Native Testing Library

```jsx
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Switch} from 'rn-inkpad';

it('toggles', async () => {
  const onChange = jest.fn();
  await render(<Switch text="Wifi" onChange={onChange} testID="wifi" />);
  await fireEvent(
    screen.getByRole('switch', {name: 'Wifi'}),
    'valueChange',
    true,
  );
  expect(onChange).toHaveBeenCalledWith(true);
});
```
