---
sidebar_position: 12
title: SegmentedControl
---

# SegmentedControl

El componente **SegmentedControl** de nuestra biblioteca es un elemento de la interfaz de usuario que se utiliza para permitir a los usuarios realizar selecciones de un conjunto predefinido de opciones. Por lo general, aparece como una fila horizontal de botones segmentados, cada uno de los cuales representa una opción distinta. Los usuarios pueden alternar entre segmentos para indicar su preferencia de selección, con solo un segmento activo a la vez. Los SegmentedControls se usan habitualmente en las aplicaciones para proporcionar a los usuarios una forma clara e intuitiva de cambiar entre diferentes vistas, filtros o categorías.

## Usage

### Basic usage

```js
import {SegmentedControl} from 'rn-inkpad';

const App = () => {
  const [value, setValue] = useState('tab1');

  const values = [
    {key: 'Tab 1', value: 'tab1'},
    {key: 'Tab 2', value: 'tab2'},
  ];

  return (
    <SegmentedControl
      label="Segmented Control"
      values={values}
      onChange={value => setValue(value)}
    />
  );
};
```

### Props

| Prop                    | Descripción                                                | Tipo                             | Requerido | Predeterminado |
| ----------------------- | ---------------------------------------------------------- | -------------------------------- | --------- | -------------- |
| **`values`**            | Arreglo de llave y valor para generar cada pestaña.        | `{key: string; value: string}[]` | **Yes**   | _None_         |
| **`onChange`**          | Función que retorna el valor seleccionado.                 | `(value: string) => void`        | **Yes**   | None\_         |
| **`label`**             | Etiqueta con la que desea identificar el segmentedControl. | `string`                         | No        | _None_         |
| **`labelStyle`**        | Estilos personalizados para la etiqueta.                   | `StyleProp<TextStyle>`           | No        | _None_         |
| **`selectedIndex`**     | Valor inicial seleccionado.                                | `number`                         | No        | `0`            |
| **`backgroundColor`**   | Color de fondo del SegmentedControl.                       | `string`                         | No        | `'#CCCCCC'`    |
| **`tintColor`**         | Color de la pestaña seleccionada.                          | `string`                         | No        | `'#FFFFFF'`    |
| **`textColor`**         | Color de texto en segmentedControl.                        | `string`                         | No        | `'#000000'`    |
| **`selectedTextColor`** | Color de texto en la pestaña seleccionada.                 | `string`                         | No        | `'#000000'`    |
| **`style`**             | Estilos personalizados para el contenedor del componente.  | `StyleProp<ViewStyle>`           | No        | _None_         |

### Example

<p align="center" width="100%">
    <img width="33%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1709313673/GitHub/segmentedControl_dul8fq.gif" />
</p>
