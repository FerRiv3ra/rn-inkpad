# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project follows
[Semantic Versioning](https://semver.org/).

## [Unreleased]

### Fixed

- **Alert / prompt**: the container subscribed a new listener on every alert and never
  unsubscribed (memory leak, duplicated callbacks). Subscriptions are now created once and
  removed on unmount. Opening a second alert cancels the first instead of breaking the
  container. `Alert.alert(title, description, onPress)` now runs `onPress` when confirmed.
- **ProgressBar**: the 10 ms interval kept running forever after reaching the target;
  it now stops, and the bar also animates down when `value` decreases.
- **LongPressButton**: intervals leaked on unmount and on fast repeated presses;
  `onFinish` could fire twice in StrictMode.
- **Toast**: the timer restarted on every parent render and the animation kept running
  after unmount.
- **Tooltip**: hide timer leaked on unmount; screen width now follows rotation
  (`useWindowDimensions`); removed stray `console.log` calls.
- **DotsLoading**: the loop is stopped on unmount and dots follow `dotCount` changes.
- **CardImage**: the blur animation restarts when `source` changes.
- **Switch, CheckBox, SegmentedControl, TabControl**: changing `isOn` / `checked` /
  `selectedIndex` after mount now updates the component (controlled usage).
- **Switch (web)**: the visual state followed the prop instead of the internal state.
- **RadioButtons**: out-of-range `defaultChecked` crashed; selection was reset on every
  `defaultChecked` change.
- **TabControl**: empty `values` or an out-of-range `selectedIndex` crashed.
- **StarRating**: passing an inline `reviews` array reset the rating on every render.
- **Rating**: fractional ratings lost the half icon when `rating >= total`; values are clamped.
- **Slider**: the initial thumb position was always 0 (layout width shadowed the thumb width);
  `minValue` is now honoured when placing the thumb; the thumb follows the controlled `value`.
- **SlideAction**: the completed position was never applied after layout.
- **Button**: the loading spinner used the raw `color` prop instead of the resolved text color.
- **FloatingActionButton**: passing both `actions` and `onPress` hid the actions menu.
  Actions now open and `onPress` is still called.
- **Input**: toggling the `password` prop at runtime now updates the visibility state.
- **Alert / ActionSheet**: the Android back button closes the modal (`onRequestClose`);
  tapping the ActionSheet backdrop closes it.
- **colorToRgba**: accepts 3-digit hex (`#fff`) and `rgb()` with spaces or decimals.

### Performance

- **Slider, SlideAction**: thumb position is now an `Animated.Value` driven by the native
  driver; dragging no longer re-renders the component. The `PanResponder` is created once.
- **ProgressBar**: width animates with `Animated.timing` instead of a 10 ms `setState` loop;
  the percent label updates only when the integer changes.
- **LongPressButton**: progress fill animates with `Animated.timing` instead of a 20 ms
  `setState` loop.
- **BottomTabNavigation, DrawerNavigation, RadioButtons, SegmentedControl, TabControl**:
  list items are memoized with stable callbacks and stable keys.
- Replaced `{...styleSheetObj}` spreads with style arrays so StyleSheet ids are preserved.

### Accessibility

- Every component accepts `testID`, `accessibilityLabel` and `accessibilityHint`
  (see `A11yProps`). Sub elements derive ids from the root one, e.g. `${testID}-thumb`.
- Roles and states: Button (button, disabled/busy), CheckBox (checkbox, checked), RadioButtons
  (radiogroup / radio), Switch (switch), SegmentedControl and TabControl (tablist / tab, selected),
  BottomTabNavigation (tablist / tab), DrawerNavigation (menu / menuitem, expanded),
  Slider (adjustable with `accessibilityValue` and increment/decrement actions), SlideAction
  (button with an `activate` action), ProgressBar and DotsLoading (progressbar), Rating (image with
  "x of y" label), StarRating (radiogroup / radio), Toast (alert, live region), Tooltip, Input
  (labelled field, "Show/Hide password" toggle), ActionSheet and Alert buttons, cards and avatar.
- **Button**: pressing is disabled while `loading`.
- **CardButton**: `onPress` fires on press instead of on press-out, so a cancelled touch no longer triggers it.

### Changed

- **Switch**: `backgrounColor` (typo) is deprecated in favour of `backgroundColor`.
  The old prop still works and logs a one-time warning in development.
- **Alert.prompt** resolves `string | undefined` (undefined when cancelled), matching
  the runtime behaviour it always had.
- Exported `Tooltip`, all public prop types and `useAnimation` from the package root.

### Internal

- Migrated to `react-native-builder-bob`, Yarn 4 workspaces, an Expo example gallery
  and GitHub Actions CI (lint, typecheck, tests, build).
