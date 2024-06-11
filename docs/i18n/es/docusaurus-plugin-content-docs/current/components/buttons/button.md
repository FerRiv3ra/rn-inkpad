---
sidebar_position: 4.1
title: Button
---

# Button

El componente **Botón** de nuestra biblioteca es un elemento fundamental para la interacción del usuario dentro de las aplicaciones. Los botones sirven como elementos en los que se puede hacer clic que desencadenan acciones o guían a los usuarios a través de diferentes partes de la aplicación. Son versátiles y se pueden diseñar para que coincidan con el tema visual de la aplicación, lo que proporciona coherencia en el diseño de la interfaz de usuario. Con propiedades personalizables como el tamaño, el color y la forma, nuestro componente Button ofrece flexibilidad para adaptarse a diversos requisitos de diseño y mejorar la experiencia del usuario.

## Uso

### Uso básico

```jsx
import React from 'react';
import {Button} from 'rn-inkpad';

const MyComponent = () => {
  return <Button />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/buttons/button-simple_jinf3a.png" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| activeOpacity | `number` | 0.6 | Determina cuál debe ser la opacidad de la vista ajustada cuando la función táctil está activa.|
| buttonColor | `string` | #464EE5 | Color de fondo del botón. |
| buttonType | `'solid' \| 'outline' \| 'clear'` | solid | Tipo de botón a mostrar. |
| color | `string` | #FFFFFF | Color del texto. |
| disabled | `boolean` | | Activar o desactivar el botón. |
| full | `boolean` | | Activa ancho completo. |
| icon | `string` | | Icono a mostrar en el botón. |
| iconPosition | `'left' \| 'right'` | left | Posición del icono. |
| iconSize | `number` | | Tamaño del icono |
| loading | `boolean` | | Mostrar spinner si esta cargando. |
| rounded | `boolean` | | Redondear las esquinas. |
| spinnerSize | `number \| 'small' \| 'large'` | | Tamaño del spinner. |
| style | `StyleProp<ViewStyle>` | | Estilos personalizados para el botón. |
| text | `string` | Button | Texto del botón |
| textStyle | `StyleProp<TextStyle>` | | Estilos personalizados para el texto del botón. |
| onPress | `() => void` | | Función que se ejecuta al presionar el botón. |
</div>

## Uso con props

```jsx
import React from 'react';
import {View} from 'react-native';

import {Button} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <View>
      <Button
        text="Green solid button"
        icon="alert-circle"
        color="#000"
        onPress={() => console.log('Press')}
        buttonColor="#7EE081"
        style={{marginBottom: 10}}
      />
      <Button
        text="Clear right icon button"
        icon="save"
        onPress={() => console.log('Press')}
        buttonType="clear"
        iconPosition="right"
        color="#576DEC"
        style={{marginBottom: 10}}
      />
      <Button
        text="Loading button..."
        loading
        onPress={() => console.log('Press')}
        buttonColor="#C3F3C0"
        style={{marginBottom: 10}}
      />
      <Button
        text="Blue outline rounded button"
        icon="airplane"
        onPress={() => console.log('Press')}
        buttonType="outline"
        buttonColor="#576DEC"
        rounded
      />
    </View>
  );
};
```

### Ejemplo con props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/buttons/button-props_htxk3y.png" />
