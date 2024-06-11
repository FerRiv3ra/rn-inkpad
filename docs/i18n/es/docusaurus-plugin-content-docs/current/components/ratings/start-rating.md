---
sidebar_position: 11.2
title: StarRating
---

# StarRating

El componente **StarRating** de nuestra biblioteca es un elemento de interfaz fácil de usar que se utiliza para recopilar las calificaciones de los usuarios. Por lo general, presenta una serie de estrellas en las que los usuarios pueden hacer clic o tocar para indicar su preferencia de calificación, que van desde una estrella (la más baja) hasta cinco estrellas (la más alta). Las clasificaciones por estrellas se utilizan comúnmente en varias aplicaciones y sitios web para recopilar comentarios sobre productos, servicios o contenido.

## Uso

### Uso básico

```jsx
import {StarRating} from 'rn-inkpad';

const MyComponent = () => {
  return <StarRating />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306851/packages/ratings/star-simple_yfdwgl.gif" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| defaultRating | `number` | 3 | Clasificación seleccionada por defecto. |
| iconColor | `string` | #FFD700 | Color del icono de clasificación. |
| justRating | `boolean` | false | Esconder reseña. |
| readOnly | `boolean` | false | Activar solo lectura. |
| reviews | `string[]` | ['Terrible', 'Bad', 'Okay', 'Good', 'Great'] | Arreglo de reseñas. |
| size | `number` | 35 | Tamaño del icono. |
| style | `StyleProp<ViewStyle>` | | Estilos personalizados para el componente. |
| textColor | `string` | #FFD700 | Color del texto de clasificación. |
| textSize | `number` | 30 | Tamaño del texto de clasificación. |
| onChange | `(value: number) => void` |  | Función que retorna el valor de la clasificación seleccionada. |
</div>

:::tip[Información]

El número de reseñas enviadas en el arreglo definirá el número de estrellas que aparecerán.

:::

## Uso con props

```jsx
import React, {useState} from 'react';

import {StarRating} from 'rn-inkpad';

const MyComponent = () => {
  const [value, setValue] = useState(1);

  return (
    <StarRating
      defaultRating={1}
      iconColor={value <= 2 ? '#FF0000' : value <= 4 ? '#FFD700' : '#7EE081'}
      onChange={setValue}
      reviews={['Terrible', 'Poor', 'Fair', 'Good', 'Excellent', 'Fabulous']}
      size={40}
      textColor={value <= 2 ? '#FF0000' : value <= 4 ? '#FFD700' : '#7EE081'}
      textSize={35}
    />
  );
};
```

### Ejemplo con props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306851/packages/ratings/star-props_cnv5d5.gif" />
