---
sidebar_position: 13
title: SlideAction
---

# SlideAction

El componente **SlideAction** de nuestra biblioteca es un elemento interactivo diseñado para ejecutar acciones cuando los usuarios realizan un gesto de deslizamiento.

## Uso

### Uso básico

```jsx
import {ProgressBar} from 'rn-inkpad';

const MyComponent = () => {
  return <ProgressBar />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306859/packages/sliders/slideaction-simple_llomv3.gif" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| height | `number` | 56 | Altura del Slider. |
| icon | `string` | | Icono del punto deslizante. |
| iconColor | `string` | #F43F5D | Color del icono del punto deslizante. |
| iconCompletedColor | `string` | #4ADE80 | Color del icono del punto deslizante cuando se ha completado la acción. |
| iconOnCompleted | `string` | | Icono del punto deslizante cuando se completa la acción. |
| iconSize | `number` | 20 | Tamaño del icono. |
| padding | `number` | 8 | Padding entre el punto deslizante y las esquinas. |
| text | `string` | | Texto del Slider. |
| textOnCompleted | `string` | | Texto del Slider cuando se completa la acción. |
| textPosition | `'center' \| 'ends'` | center | Posición del texto. |
| textStyle | `StyleProp<TextStyle>` | | Estilos personalizados para el Slider. |
| thumbColor | `string` | #FFFFFF | Color del punto deslizante. |
| thumbCompletedColor | `string` | #FFFFFF | Color del punto deslizante cuando se completa la acción. |
| thumbWidth | `string` | 40 | Ancho del punto deslizante. |
| tintColor | `string` | #F43F5D | Color de fondo del Slider. |
| tintCompletedColor | `string` | #4ADE80 | Color de fondo del Slider cuando se completa la acción. |
| onCompleted | `() => void` | | Función que es llamada cuando se completa el deslizamiento. |
</div>

## Uso con props

```jsx
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SlideAction} from 'rn-inkpad';

const MyComponent = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <View>
      <SlideAction
        icon="lock-open"
        iconOnCompleted="lock-closed"
        text="Slide to confirm"
        textOnCompleted="Confirmed"
        onCompleted={() => setConfirmed(true)}
      />
      <Text style={styles.text}>
        {confirmed ? 'Confirmed' : 'Not confirmed'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
  },
});
```

### Ejemplo con props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306866/packages/sliders/slideaction-props_bmt4m9.gif" />
