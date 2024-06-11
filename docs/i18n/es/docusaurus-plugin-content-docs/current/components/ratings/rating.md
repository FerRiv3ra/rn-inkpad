---
sidebar_position: 11.1
title: Rating
---

# Rating

El componente **Rating** de nuestra biblioteca es un elemento de la interfaz de usuario que se utiliza para mostrar la calificación que los usuarios han asignado a un producto, servicio o contenido. Por lo general, aparece como una serie de estrellas u otros símbolos que puede personalizar, generalmente que van desde una estrella (la más baja) hasta cinco estrellas (la más alta). Las calificaciones proporcionan información valiosa sobre la satisfacción y las preferencias de los usuarios, lo que ayuda a los desarrolladores y a las empresas a mejorar sus productos o servicios.

:::tip[Información]

Este es un componente de solo lectura, con el propósito de mostrar la clasificación.

:::

## Uso

### Uso básico

```jsx
import {Rating} from 'rn-inkpad';

const MyComponent = () => {
  return <Rating />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306851/packages/ratings/rating-simple_isph7t.png" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| color | `string` | '#FFD700' | Color del icono de clasificación. |
| icon | `'heart' \| 'star'` | star | Icono de clasificación. |
| rating | `number` | 3 | Clasificación. |
| size | `number` | 35 | Tamaño del icono de clasificación. |
| style | `StyleProp<ViewStyle>` | | Estilos personalizados para el componente. |
| total | `number` | 5 | Clasificación máxima. |
</div>

## Uso con props

```jsx
import {Rating} from 'rn-inkpad';

const MyComponent = () => {
  return <Rating color="#FF0000" icon="heart" rating={4.5} />;
};
```

### Ejemplo con props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306850/packages/ratings/rating-props_nyrl3h.png" />
