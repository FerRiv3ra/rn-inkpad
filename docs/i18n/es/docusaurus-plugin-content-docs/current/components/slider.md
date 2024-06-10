---
sidebar_position: 14
title: Slider
---

# Slider

El componente **Slider** de nuestra biblioteca es un elemento de la interfaz de usuario que se utiliza para permitir a los usuarios seleccionar un valor de un rango continuo. Por lo general, aparece como una barra horizontal con un pulgar arrastrable que los usuarios pueden deslizar a lo largo de la barra para ajustar el valor. Los controles deslizantes se usan comúnmente en aplicaciones para configuraciones como el control de volumen, el ajuste de brillo o la selección de un rango de precios.

## Uso

### Uso básico

```jsx
import {Slider} from 'rn-inkpad';

const MyComponent = () => {
  return <Slider />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306865/packages/sliders/slider-simple_st1zd6.gif" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| maxValue | `number` | 100 | Valor máximo que el slider puede alcanzar. |
| minValue | `number` | 0 | Valor mínimo del slider. |
| thumbStyles | [ThumbStyles](#thumbstyles-props) | Predeterminado de ThumbStyles | Estilos personalizados del punto deslizante. |
| trackStyles | [TrackStyles](#trackstyles-props) | Predeterminado de TrackStyles | Estilos personalizados de la línea de seguimiento. |
| value | `number` | 0 | Valor actual del Slider. |
| onChange | `(value: number) => void` | | Función que se ejecuta al mover el control deslizante y esta retorna el nuevo valor del control deslizante. |
</div>

### ThumbStyles props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| backgroundColor | `string` | #FFFFFF | Color de fondo del punto deslizante. |
| borderRadius | `number` | 50 | Bordes redondeados del punto deslizante. |
| height | `number` | 40 | Altura del punto deslizante. |
| icon | `string` | | Icono del punto deslizante. |
| iconColor | `string` | #4D67FF | Color del icono del punto deslizante. |
| iconSize | `number` | 20 | Tamaño del icono del control deslizante. |
| shadow | `boolean` | true | Mostrar u ocultar la sombra en el control deslizante. |
| width | `number` | 40 | Anchura del punto deslizante. |
</div>

### TrackStyles props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| borderRadius | `number` | | Bordes redondeados de la línea de seguimiento. |
| height | `number` | 5 | Altura de la línea de seguimiento. |
| trackColor | `string` | #CECECE | Color de la línea de seguimiento. |
| trackCompletedColor | `string` | #4D67FF | Color de la linea de seguimiento que esta completado. |
</div>

## Uso con props

```jsx
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Slider} from 'rn-inkpad';

const MyComponent = () => {
  const [value, setValue] = useState(false);

  return (
    <View>
      <Slider
        thumbStyles={{
          icon: 'analytics',
          iconColor: '#DB504A',
        }}
        trackStyles={{
          height: 10,
          borderRadius: 5,
          trackCompletedColor: '#DB504A',
        }}
        value={value}
        onChange={setValue}
      />

      <Text style={styles.text}>{value}</Text>
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

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306868/packages/sliders/slider-props_trqmpk.gif" />
