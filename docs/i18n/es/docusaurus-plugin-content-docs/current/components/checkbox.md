---
sidebar_position: 6
title: Checkbox
---

# Checkbox

El componente **Checkbox** de nuestra biblioteca es un elemento de la interfaz de usuario que se utiliza para permitir a los usuarios seleccionar o anular la selección de opciones. Por lo general, aparece como una pequeña casilla que se puede marcar o desmarcar, lo que indica el estado de la opción. Las casillas de verificación se utilizan habitualmente en formularios, configuraciones o elementos de lista en los que los usuarios necesitan realizar varias selecciones de una lista de opciones.

## Uso

### Uso básico

```jsx
import React from 'react';

import {CheckBox} from 'rn-inkpad';

const MyComponent = () => {
  return <CheckBox />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306848/packages/checkbox/checkbox-simple_xz2qb8.png" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
|checkedIcon| `string` | checkbox-outline | Ícono cuando esta seleccionado. |
|checked| `boolean` | false | Activar/desactivar selección. |
|iconColor| `string` | #464EE5 | Color del Checkbox. |
|iconSize| `number` | 20 | Tamaño del Checkbox. |
|style| `StyleProp<ViewStyle>` | | Estilos personalizados para el checkbox. |
|textColor| `string` |  | Color del texto. |
|textStyle| `StyleProp<TextStyle>` | | Estilos personalizados para el texto. |
|title| `string` | Item | Texto del Checkbox. |
|unCheckedIcon| `string` | square-outline | Ícono cuando NO esta seleccionado. |
|onChange| `(value: boolean) => void` | | Función que captura el valor actual del Checkbox. |
</div>

## Uso con props

```jsx
import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {CheckBox} from 'rn-inkpad';

const MyComponent = () => {
  const [checked, setIsChecked] = useState(false);

  return (
    <View>
      <CheckBox
        checked={checked}
        iconColor={'#DB504A'}
        iconSize={25}
        textStyle={{fontSize: 20}}
        onChange={setIsChecked}
        title={'Item 1'}
      />

      <Text style={{marginTop: 10, fontWeight: '700'}}>
        {checked ? 'Checked' : 'Unchecked'}
      </Text>
    </View>
  );
};
```

### Ejemplo con props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306848/packages/checkbox/checkbox-props_gyb5q6.gif" />
