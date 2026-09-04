---
sidebar_position: 3
title: Accesibilidad y testing
---

# Accesibilidad y testing

Todos los componentes aceptan tres props extra:

| Nombre             | Tipo     | Descripción                                                                   |
| ------------------ | -------- | ----------------------------------------------------------------------------- |
| testID             | `string` | Identificador para tests end-to-end y unitarios.                              |
| accessibilityLabel | `string` | Leído por lectores de pantalla. Por defecto, el texto visible del componente. |
| accessibilityHint  | `string` | Ayuda adicional para lectores de pantalla.                                    |

Los componentes exponen roles y estados correctos de serie: `button`, `checkbox` y `radio` con
`checked`, `switch`, `tab` con `selected`, sliders `adjustable` con `accessibilityValue` y acciones
de incremento/decremento, `progressbar`, regiones `alert` para Toast y Snackbar, y `expanded` en
acordeones, drawers y tooltips.

## Ids de sub elementos

Cuando un componente tiene varias partes tocables, sus ids derivan del `testID` raíz:

| Componente           | Ids                                                           |
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

## Tests con React Native Testing Library

```jsx
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Switch} from 'rn-inkpad';

it('cambia de estado', async () => {
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
