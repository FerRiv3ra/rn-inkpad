---
sidebar_position: 5.1
title: Card
---

# Card

El componente **Tarjeta** de nuestra biblioteca es un contenedor versátil diseñado para presentar el contenido de una manera visualmente atractiva y estructurada. Las tarjetas suelen presentar una combinación de texto, icono y botones.

## Uso

### Uso básico

```jsx
import React from 'react';
import {Card} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <Card
      buttons={[
        {text: 'Cancel', onPress: () => {}},
        {text: 'Ok', onPress: () => {}},
      ]}
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna arcu, vulputate ut pellentesque eget, fermentum ac tellus. Duis neque lorem, fermentum at suscipit ac, imperdiet vel sapien.'
      }
      icon={'book-sharp'}
      title={'Card'}
      theme={{
        themeColor: '#DB504A',
      }}
    />
  );
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/cards/card-basic_d4m7d1.png" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Requerido | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| buttons | [Button[]](#button-props) | **SI** | Botones que aparecen en la parte inferior de la tarjeta.|
| description | `string` | **SI** | Texto de descripción. |
| icon | `string` | **SI** | Icono de la tarjeta. |
| title | `string` | **SI** | Texto del título. |
| theme | [Theme](#theme-props) | _NO_ | Personaliza la tarjeta. |
</div>

### Button props

<div class="table-responsive">
| Nombre | Tipo | Requerido | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| text | `string` | **SI** | Texto del botón.|
| onPress | `() => void` | _NO_ | Función que se ejecuta al presionar el botón. |
</div>

### Theme props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| backgroundColor | `string` |  | Color de fondo de la tarjeta.|
| iconSize | `number` | 25 | Tamaño del icono. |
| themeColor | `string` |  | Color del icono y de los botones. |
| titleColor | `string` |  | Color del título. |
| titleSize | `number` | 16 | Tamaño del título. |
| shadow | `boolean` | false | Activa o desactiva la sombra en la tarjeta. |
</div>

## Uso de temas personalizados

```jsx
import React from 'react';

import {Card} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <Card
      buttons={[
        {text: 'Cancel', onPress: () => {}},
        {text: 'Ok', onPress: () => {}},
      ]}
      description={
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna arcu, vulputate ut pellentesque eget, fermentum ac tellus. Duis neque lorem, fermentum at suscipit ac, imperdiet vel sapien.'
      }
      icon={'book-sharp'}
      title={'Card'}
      theme={{
        backgroundColor: '#EEE',
        iconSize: 30,
        themeColor: '#DB504A',
        titleColor: '#21295C',
        titleSize: 18,
        shadow: true,
      }}
    />
  );
};
```

### Ejemplo de tema personalizado

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306848/packages/cards/card-themed_ncp8hh.png" />
