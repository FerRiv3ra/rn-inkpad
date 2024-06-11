---
sidebar_position: 5.3
title: FloatingActionCard
---

# FloatingActionCard

La **FloatingActionCard** es un componente innovador de nuestra biblioteca, que combina la funcionalidad de un botón de acción flotante (FAB) con la versatilidad de una tarjeta. Este componente presenta una tarjeta visualmente atractiva que "flota" sobre el contenido, similar a un FAB, al tiempo que proporciona un diseño estructurado para mostrar información o acciones. Las FloatingActionCards son ideales para resaltar contenido importante o acciones clave dentro de una aplicación, combinando la accesibilidad con una estética de diseño elegante. Con estilos y configuraciones personalizables, nuestro componente FloatingActionCard mejora la participación del usuario y la eficiencia de la navegación en las interfaces de aplicaciones modernas.

## Uso

### Uso básico

```jsx
import React from 'react';
import {Image, View} from 'react-native';

import {FloatingActionCard} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://example.com/beach.webp',
        }}
        style={{width: '100%', height: '100%'}}
      />
      <FloatingActionCard title="Maldives hotel" />
    </View>
  );
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306872/packages/cards/floatingcard-simple_rsc1a8.png" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
|backgroundColor| `RGB \| RBGA \| HEX` | #FFFFFF | Color de fondo de la tarjeta. |
|bottom| `number` | 40 | Separación entre la parte inferior y el componente. |
|description| `string` | | Información extra. |
|decimals| `number` | 1 | Número de decimales que desea mostrar en la clasificación. |
|icon| `string` | | Icono que aparece junto a la clasificación. |
|iconColor| `string` | #FFD700 | Color del icono de clasificación. |
|image| `ImageSourcePropType` | | Imagen de la tarjeta |
|rating| `number` | | Clasificación. |
|textColor| `string` | | Color de texto. |
|title| `string` | | Título de la tarjeta. |
|width| `DimensionValue` | 90% | Ancho de la tarjeta. |
|onPress| `() => void` | | Función que se ejecuta al presionar la tarjeta. |
</div>

:::tip[Información]

Todos los colores serán convertidos a RGBA con una opacidad del 0.9

:::

## Uso con props

```jsx
import React, {useState} from 'react';
import {Image, View} from 'react-native';

import {FloatingActionCard} from 'rn-inkpad';

import Image1 from './assets/beach1';
import Image2 from './assets/beach2';

const MyComponent = () => {
  const [secondBackground, setSecondBackground] = useState(false);

  const handleChangeImage = () => {
    setSecondBackground(!secondBackground);
  };

  return (
    <View>
      <Image
        source={{
          uri: secondBackground ? Image2 : Image1,
        }}
        style={{width: '100%', height: '100%'}}
      />
      <FloatingActionCard
        title="Maldives hotel"
        icon="star"
        description="Lorem ipsum dolor"
        image={{
          uri: 'https://www.example.com/photo-beautiful-tropical-maldives-resort-hotel.jpg',
        }}
        rating={5}
        onPress={handleChangeImage}
      />
    </View>
  );
};
```

### Example with props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306866/packages/cards/floatingcard-props_qmhrkj.gif" />
