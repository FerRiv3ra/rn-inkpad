---
sidebar_position: 2
title: Theming
---

# Theming

Every component reads its default colors, radii and spacing from a theme. **The provider is
optional**: without it, `defaultTheme` is used. Wrap your app to change the defaults once.

```jsx
import {ThemeProvider} from 'rn-inkpad';

export default function App() {
  return (
    <ThemeProvider theme={{colors: {primary: '#DB504A'}}}>
      <Navigation />
    </ThemeProvider>
  );
}
```

Props on a component always win over the theme (`<Button buttonColor="#000" />`).

## Tokens

```ts
type Theme = {
  colors: {
    primary: string; // buttons, selections, active states
    secondary: string; // accents (Badge, SlideAction)
    background: string;
    surface: string; // cards, sheets, segmented controls
    text: string;
    textMuted: string;
    border: string;
    disabled: string;
    success: string; // Switch on-color, completed states
    warning: string;
    error: string;
    info: string;
    overlay: string; // backdrop of Dialog, BottomSheet, ActionSheet
  };
  radius: {sm: number; md: number; lg: number; full: number};
  spacing: {xs: number; sm: number; md: number; lg: number; xl: number};
  typography: {
    fontFamily?: string;
    sizes: {xs: number; sm: number; md: number; lg: number; xl: number};
    weights: {regular: '400'; medium: '500' | '600'; bold: '700' | '800'};
  };
};
```

Only pass what you want to change; everything else keeps the default value.

## Dark mode

`darkTheme` is a ready-made preset. Combine it with `useColorScheme`:

```jsx
import {useColorScheme} from 'react-native';
import {ThemeProvider, darkTheme} from 'rn-inkpad';

const scheme = useColorScheme();

<ThemeProvider theme={scheme === 'dark' ? darkTheme : {}}>
  {children}
</ThemeProvider>;
```

## Nested providers

A nested `ThemeProvider` extends the theme above it, so you can re-color a single screen or
section:

```jsx
<ThemeProvider theme={{colors: {primary: '#21295C'}}}>
  <Checkout />
</ThemeProvider>
```

## Reading the theme

Use the tokens in your own components so they match the library:

```jsx
import {useTheme} from 'rn-inkpad';

const Title = ({children}) => {
  const {colors, typography} = useTheme();
  return (
    <Text style={{color: colors.text, fontSize: typography.sizes.lg}}>
      {children}
    </Text>
  );
};
```

`createTheme(overrides, base?)` returns a full `Theme` object if you need one outside React.
