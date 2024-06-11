---
sidebar_position: 4.2
title: FloatingActionButton
---

# FloatingActionButton

El **FloatingActionButton** es un componente prominente y dinámico dentro de nuestra biblioteca, diseñado para llamar la atención sobre una acción principal dentro de una aplicación. Por lo general, aparece como un botón circular que "flota" sobre el contenido, lo que proporciona un fácil acceso a funcionalidades importantes o acciones de uso frecuente.

## Uso

### Uso básico

```jsx
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {CircleAvatar, FloatingActionButton} from 'rn-inkpad';

import Avatar from './assets/james_hetfield.jpeg';

const MyComponent = () => {
  return (
    <View styles={styles.container}>
      <CircleAvatar size={80} defaultText="JH" />
      <CircleAvatar size={80} image={Avatar} />

      <FloatingActionButton />
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

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306848/packages/buttons/fab-simple_siubjx.png" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| actions | [Action[]](#action-props) |  | Botones de acción que aparecerán al presionar el FAB.|
| align | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | bottom-right | Posición del botón en la pantalla. |
| backgroundColor | `string` | #464EE5 | Color de fondo del FAB. |
| marginHorizontal | `number` | 20 | Separación horizontal entre los bordes y el botón. |
| marginVertical | `number` | 30 | Separación vertical entre el botón y las esquinas superior o inferior. |
| icon | `string` | add | Icono del botón. |
| iconColor | `string` | #FFFFFF | Color del icono. |
| iconSize | `number` | 22 | Tamaño del icono. |
| size | `number` | 50 | Tamaño del botón. |
| onPress | `() => void` | | Función que se ejecuta al presionar el botón. |
</div>

:::tip[Información]

Si envía onPress y acciones, onPress tiene mayor importancia, por lo tanto, solo se ejecutará la función onPress.

:::

### Action props

<div class="table-responsive">
| Nombre | Tipo | Requerido | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| icon | `string` | **SI** | Icono del botón de acción. |
| text | `string` | _NO_ | Texto de información |
| onPress | `() => void` | **SI** | Función que se ejecuta al presionar el botón. |
</div>

## Uso con props

```jsx
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {CircleAvatar, FloatingActionButton} from 'rn-inkpad';

import Avatar from './assets/james_hetfield.jpeg';

const MyComponent = () => {
  return (
    <View styles={styles.container}>
      <CircleAvatar size={80} defaultText="JH" />
      <CircleAvatar size={80} image={Avatar} />

      <FloatingActionButton
        icon="apps"
        backgroundColor="#DB504A"
        onPress={() => console.log('Hola mundo')}
      />
      <FloatingActionButton
        align="bottom-left"
        backgroundColor="#21295C"
        actions={[
          {
            icon: 'alert',
            text: 'Alert',
            onPress: () => console.log('Alert'),
          },
          {
            icon: 'warning',
            onPress: () => console.log('Warning'),
          },
          {
            icon: 'bag-add',
            text: 'Shopping',
            onPress: () => console.log('Shopping'),
          },
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

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/buttons/fab-props_nco2eu.png" />
