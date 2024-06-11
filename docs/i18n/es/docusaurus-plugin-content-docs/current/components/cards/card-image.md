---
sidebar_position: 5.2
title: CardImage
---

# CardImage

El componente **CardImage** de nuestra biblioteca es un elemento especializado dentro de un diseño de tarjeta diseñado para mostrar de forma destacada una imagen como punto focal de la tarjeta. Este componente es ideal para mostrar contenido visual como fotografías, ilustraciones o gráficos dentro de un formato de tarjeta estructurado.

## Uso

### Uso básico

```jsx
import React from 'react';
import {CardImage} from 'rn-inkpad';

import Landscape from './assets/landscape.jpeg';

const MyComponent = () => {
  return <CardImage source={Landscape} />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306866/packages/cards/cardimage-simple_spu1he.gif" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Requerido | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| source | ImageSourcePropType | **SI** | Fuente de la imagen.|
| loadTime | `number` | _NO_ | Tiempo de carga de la imagen. |
| text | `string` | _NO_ | Texto de descripción. |
| theme | [Theme](#theme-props) | _NO_ | Personaliza la tarjeta. |
</div>

:::tip[Información]

La imagen comienza con un efecto de desenfoque y disminuye a medida que avanza el tiempo de carga.

:::
:::note[Nota]

Si no desea ese efecto, puede enviar un tiempo de carga de 0 milisegundos.

:::

### Theme props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| backgroundColor | `string` |  | Color de fondo de la tarjeta.|
| fontSize | `number` |  | Tamaño del texto de información. |
| fontColor | `string` |  | Color del texto de información. |
| fontWeight | `string` |  | Grosor de la fuente. |
| radius | `number` | 15 | Bordes redondeados. |
| shadow | `boolean` |  | Activar o desactivar la sombra en la tarjeta. |
</div>

## Uso con tema personalizado

```jsx
import React from 'react';
import {CardImage} from 'rn-inkpad';

import Landscape from './assets/landscape.jpeg';

const MyComponent = () => {
  return (
    <CardImage
      source={Landscape}
      text="Landscape"
      loadTime={0}
      theme={{
        backgroundColor: '#EEEEEE',
        fontSize: 16,
        fontColor: '#DB504A',
        fontWeight: '700',
        shadow: true,
        radius: 0,
      }}
    />
  );
};
```

### Ejemplo con tema personalizado

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306865/packages/cards/cardimage-themed_iy7ppc.png" />
