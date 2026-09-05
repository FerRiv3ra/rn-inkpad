# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project follows
[Semantic Versioning](https://semver.org/).

## [Unreleased]

### Changed

- Releases are published from CI through npm trusted publishing (OIDC). `yarn release`
  no longer publishes locally; it bumps, tags and creates the GitHub release.

## [2.0.0] - 2026-09-04

### BREAKING: bring your own icons

- `react-native-vector-icons` is no longer a dependency. rn-inkpad now has **zero dependencies**.
- Every icon prop (`icon`, `rightIcon`, `checkedIcon`, `unCheckedIcon`, `iconOnCompleted`,
  `closeIcon`, `collapseIcon`, `expandIcon`, action and navigation item `icon`s, alert `icon`,
  `thumbStyles.icon`) accepts an `IconProp`: a React element rendered as is, or a component that
  the library renders with the size and color matching its state. Works with lucide, @expo/vector-icons,
  react-native-svg and SVGR components.
- `Icon` now takes `icon` (an `IconProp`) instead of `name`. `IconName` and `ValidName` are gone.
  `renderIcon` and the `IconProps` / `IconProp` types are exported.
- Defaults that used Ionicons (checkbox, radio, star/heart ratings, password eye, search, chevrons,
  close, plus, menu) are now tiny built-in glyphs drawn with views and text. All replaceable.
- `Rating` accepts `icons={{full, half, empty}}`; `StarRating` accepts `icons={{full, empty}}`;
  `Input` accepts `showPasswordIcon` / `hidePasswordIcon`; `RadioButtons` accepts `checkedIcon` /
  `unCheckedIcon`; `ActionSheet` accepts `closeIcon` / `cancelIcon`; `FloatingActionButton` accepts
  `openIcon` / `closeIcon`. `Card.icon` is now optional.
- Migration: replace `icon="home"` with `icon={House}` (component) or `icon={<House size={18} />}` (element).

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

### Added

- **ThemeProvider** with design tokens (`colors`, `radius`, `spacing`, `typography`), `useTheme`,
  `createTheme`, `defaultTheme` and `darkTheme`. Optional: without a provider components use the
  defaults. Nested providers extend the parent theme.
- Existing components take their default colors from the theme (`primary`, `secondary`, `success`,
  `surface`, `background`, `border`, `text`). Defaults changed slightly: one unified primary
  (`#464EE5`) instead of several close blues and reds; Switch on-color is the theme `success`.
- New components: **Badge**, **Chip**, **Divider**, **Skeleton**, **PaginationDots**, **Stepper**,
  **Accordion**, **BottomSheet** (drag to close), **Dialog**, **PinInput** (OTP), and
  **SnackbarProvider** + `useSnackbar` (queued messages with actions). All accept `IconProp`s,
  `testID` and accessibility props.

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

### Fixed (release candidates)

- Removed the `react-native` package.json field pointing at TypeScript sources: bundlers that honour it
  (Expo Snack, some web setups) could not compile the library. Apps now always get the built `lib/`.

### Docs

- Live Expo Snack embeds (`<Snack code=... />`) that work across Docusaurus client-side navigation.
- New pages: Theming, Accessibility & testing, and one per new component; DotsLoading and Tooltip
  pages added; Icons page rewritten for `IconProp`; Spanish translations for all of them.
- Docusaurus 3.10.

### Internal

- Migrated to `react-native-builder-bob`, Yarn 4 workspaces, an Expo example gallery
  and GitHub Actions CI (lint, typecheck, tests, build).
