---
sidebar_position: 3
title: Avatar
---

# Avatar

El componente **Avatar circular** de nuestra biblioteca es un elemento visualmente atractivo que se utiliza para representar usuarios o entidades dentro de una aplicación. Por lo general, muestra una imagen o icono circular, que a menudo representa la foto de perfil de una persona o una representación simbólica de una entidad. Los avatares circulares añaden un toque personal a las interfaces de usuario, lo que facilita la identificación y mejora el atractivo estético general. Con opciones personalizables de tamaño, borde y contenido, nuestro componente Circle Avatar ofrece flexibilidad para adaptarse a diversas preferencias de diseño y necesidades de aplicación.

## Uso

### Uso básico

```jsx
import React from 'react';
import {CircleAvatar} from 'rn-inkpad';

const MyComponent = () => {
  return <CircleAvatar />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/avatar/avatar-simple_atcnbs.png" />

## Propiedades

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
|backgroundColor | `string` | #373099 | Color de fondo para el avatar. |
|defaultText | `string` | 'AA' | Texto que aparecerá cuando no hay imagen. |
|fontSize | `number` | 26 | Tamaño del texto |
|image | `ImageSourcePropType` |  | Imagen del avatar |
|size | `number` | 50 | Tamaño del avatar |
|textColor | `string` | #FFFFFF | Color del texto |
|onPress | `() => void` |  | Función que se ejecuta cuando el avatar es presionado. |

</div>

## Uso con props

```jsx
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {CircleAvatar} from 'rn-inkpad';

import Avatar from './assets/james_hetfield.jpeg';

const MyComponent = () => {
  return (
    <View styles={styles.container}>
      <CircleAvatar size={80} defaultText="JH" />
      <CircleAvatar size={80} image={Avatar} />
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

### Ejemplo

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/avatar/avatar-props_sjnpmw.png" />
