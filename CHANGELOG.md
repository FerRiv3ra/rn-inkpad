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

### Changed

- **Switch**: `backgrounColor` (typo) is deprecated in favour of `backgroundColor`.
  The old prop still works and logs a one-time warning in development.
- **Alert.prompt** resolves `string | undefined` (undefined when cancelled), matching
  the runtime behaviour it always had.
- Exported `Tooltip`, all public prop types and `useAnimation` from the package root.

### Internal

- Migrated to `react-native-builder-bob`, Yarn 4 workspaces, an Expo example gallery
  and GitHub Actions CI (lint, typecheck, tests, build).
