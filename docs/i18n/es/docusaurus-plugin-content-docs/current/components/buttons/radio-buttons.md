---
sidebar_position: 4.4
title: RadioButtons
---

# RadioButtons

Los **RadioButtons** son elementos esenciales en nuestra biblioteca, ya que facilitan la entrada del usuario en escenarios de selección en los que los usuarios pueden elegir solo una opción de una lista. Cuando se selecciona un RadioButton, cualquier RadioButton seleccionado previamente en el mismo grupo se anula automáticamente, lo que garantiza la exclusividad mutua.

## Uso

### Uso básico

```jsx
import {RadioButtons} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <RadioButtons
      values={[
        {text: 'Option 1', value: 1},
        {text: 'Option 2', value: 2},
      ]}
    />
  );
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306848/packages/buttons/radio-simple_ar3aew.png" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| values | [RadioValue[]](#radiovalue-props) |  | Listado de opciones para los Radio buttons.|
| border | `boolean` |  | Agrega borde. |
| borderColor | `string` | #464EE5 | Color del borde. |
| defaultChecked | `number` |  | Índice del valor seleccionado por defecto. |
| disabled | `boolean` | | Activar o desactivar que se pueda presionar. |
| fullWidth | `boolean` |  | Activa ancho completo. |
| gap | `number` | | Separación entre el texto y el icono cuando la orientación vertical esta seleccionada. |
| gapHorizontal | `number` | 10 | Separación entre el texto y el icono cuando la orientación horizontal esta seleccionada. |
| iconColor | `string` | #464EE5 | Color del icono. |
| iconPosition | `'left' \| 'bottom' \| 'top' \| 'right'` |  | Posición del icono. |
| iconSize | `number` | 20 | Tamaño del icono. |
| marginVertical | `DimensionValue` | 8 | Margen entre los radio buttons y los demás componentes. |
| orientation | `'horizontal' \| 'vertical'` | vertical | Orientación de los radio buttons. |
| style | `StyleProp<ViewStyle>` |  | Estilos personalizados para el componente. |
| textColor | `string` |  | Color del texto. |
| textStyle | `StyleProp<TextStyle>` |  | Estilos personalizados para el texto. |
| onChange | `(value: string \| number) => void` | | Función que retorna el valor seleccionado. |
</div>

### RadioValue props

<div class="table-responsive">
| Nombre | Tipo | Requerido | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| text | `string` | _NO_ | Texto de información |
| value | `string` | **SI** | Valor de la opción. |
</div>

:::tip[Información]

Si no se envía un texto, 'value' aparecerá como texto por defecto.

:::

## Uso con props

```jsx
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {RadioButtons} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <View styles={styles.container}>
      <RadioButtons
        border
        onChange={value => console.log(value)}
        values={[
          {text: 'Option 1', value: 1},
          {text: 'Option 2', value: 2},
        ]}
      />
      <RadioButtons
        defaultChecked={1}
        gapHorizontal={80}
        iconColor="#DB504A"
        iconPosition="bottom"
        onChange={value => console.log(value)}
        orientation="horizontal"
        values={[
          {text: 'Option 1', value: 1},
          {text: 'Option 2', value: 2},
        ]}
      />
      <RadioButtons
        iconPosition="right"
        defaultChecked={0}
        fullWidth
        iconColor="#7EE081"
        borderColor="#7EE081"
        border
        onChange={value => console.log(value)}
        values={[
          {text: 'Option 1', value: 1},
          {text: 'Option 2', value: 2},
        ]}
      />
      <RadioButtons
        iconPosition="top"
        orientation="horizontal"
        defaultChecked={0}
        border
        borderColor="#DB504A"
        iconColor="#DB504A"
        onChange={value => console.log(value)}
        values={[
          {text: 'Option 1', value: 1},
          {text: 'Option 2', value: 2},
        ]}
      />
      <RadioButtons
        disabled
        border
        iconSize={30}
        values={[
          {text: 'Option 1', value: 1},
          {text: 'Option 2', value: 2},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
```

### Ejemplo con props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306860/packages/buttons/radio-props_pmrlcx.png" />
