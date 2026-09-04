---
sidebar_position: 2
title: Temas
---

# Temas

Todos los componentes leen sus colores, radios y espaciados por defecto de un tema. **El provider
es opcional**: sin él se usa `defaultTheme`. Envuelve tu app para cambiar los valores una sola vez.

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

Las props de un componente siempre ganan sobre el tema (`<Button buttonColor="#000" />`).

## Tokens

```ts
type Theme = {
  colors: {
    primary: string; // botones, selecciones, estados activos
    secondary: string; // acentos (Badge, SlideAction)
    background: string;
    surface: string; // cards, sheets, segmented controls
    text: string;
    textMuted: string;
    border: string;
    disabled: string;
    success: string; // Switch encendido, estados completados
    warning: string;
    error: string;
    info: string;
    overlay: string; // fondo de Dialog, BottomSheet, ActionSheet
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

Pasa solo lo que quieras cambiar; el resto conserva el valor por defecto.

## Modo oscuro

`darkTheme` es un preset listo. Combínalo con `useColorScheme`:

```jsx
import {useColorScheme} from 'react-native';
import {ThemeProvider, darkTheme} from 'rn-inkpad';

const scheme = useColorScheme();

<ThemeProvider theme={scheme === 'dark' ? darkTheme : {}}>
  {children}
</ThemeProvider>;
```

## Providers anidados

Un `ThemeProvider` anidado extiende el tema superior, así puedes recolorear una sola pantalla:

```jsx
<ThemeProvider theme={{colors: {primary: '#21295C'}}}>
  <Checkout />
</ThemeProvider>
```

## Leer el tema

Usa los tokens en tus propios componentes para que combinen con la librería:

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

`createTheme(overrides, base?)` devuelve un `Theme` completo si lo necesitas fuera de React.
