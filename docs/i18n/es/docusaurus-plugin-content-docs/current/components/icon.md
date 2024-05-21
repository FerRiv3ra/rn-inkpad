---
sidebar_position: 7
title: Icon
---

# Icon

El componente **Icon** de nuestra biblioteca es un elemento versátil que se utiliza para representar símbolos visuales o glifos dentro de la interfaz de usuario de una aplicación. Los iconos sirven para varios propósitos, como indicar acciones, transmitir información o representar objetos o conceptos.

:::tip[Información]

Puedes ver y buscar tus iconos en la página oficial de [Ionicons](https://ionic.io/ionicons).

:::

## Uso

### Uso básico

```jsx
import React from 'react';

import {CheckBox} from 'rn-inkpad';

const MyComponent = () => {
  return <Icon name="airplane" size={28} />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306849/packages/icon/icon-simple_drhciv.png" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Requerido | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| name | `string` | **SI** | Identificador del ícono a usar. |
| color | `string` | _NO_ | Color del ícono. |
| size | `number` | _NO_ | Tamaño del ícono. |
| style | `StyleProp<TextStyle>` | _NO_ | Estilos personalizados para tu ícono. |
</div>

:::tip[Información]

No todas las propiedades de texto funcionan en iconos, por ejemplo la propiedad fontWeight no funciona, puedes ver este [issue](https://github.com/oblador/react-native-vector-icons/issues/1188) en el paquete oficial [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons/).

:::

:::note[¿Por qué usar este componente y no el del paquete?]

El uso de este componente en lugar del que ya proporciona el paquete [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons/) le ofrece una ventaja única y es el tipo en el nombre de los iconos para evitar errores de escritura.

:::
