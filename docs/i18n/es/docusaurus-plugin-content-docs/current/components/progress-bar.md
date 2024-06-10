---
sidebar_position: 10
title: ProgressBar
---

# ProgressBar

El componente **ProgressBar** de nuestra biblioteca es un elemento visual que se utiliza para indicar el progreso de una tarea o proceso dentro de una aplicación. Por lo general, aparece como una barra horizontal que se llena gradualmente a medida que avanza la tarea, lo que proporciona a los usuarios una indicación visual del estado de finalización. Las barras de progreso se utilizan normalmente para representar tareas como cargas de archivos, descargas, envíos de formularios o pantallas de carga.

## Uso

### Uso básico

```jsx
import {ProgressBar} from 'rn-inkpad';

const MyComponent = () => {
  return <ProgressBar />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306850/packages/progressbar/progress-simple_jqombo.png" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| backgroundColor | `string` | #FFFFFF | Color de fondo de la barra. |
| borderColor | `string` |  | Color del borde de la barra. |
| borderRadius | `number` | 0 | Redondeado de esquinas. |
| height | `number` | 20 | Altura de la barra. |
| progressColor | `string` | #00CC00 | Color del progreso. |
| rounded | `boolean` | false | Redondear todas las esquinas. |
| showPercent | `boolean` | false | Mostrar u ocultar el texto del progreso. |
| textColor | `string` | | Color del texto. |
| value | `number` | 0 | Valor del progreso. |
</div>

## Uso con props

```jsx
import React, {useState} from 'react';
import {View} from 'react-native';

import {Button, ProgressBar} from 'rn-inkpad';

const MyComponent = () => {
  const [value, setValue] = useState(0);

  const handlePress = () => {
    if (value === 100) {
      setValue(0);
    } else {
      setValue(value + 25);
    }
  };

  return (
    <View>
      <ProgressBar
        value={value}
        rounded
        progressColor="#DB504A"
        textColor="#21295C"
        showPercent
      />

      <Button
        text={value === 100 ? 'Reset' : 'Add 25%'}
        style={{marginTop: 20}}
        rounded
        buttonColor="#21295C"
        onPress={handlePress}
      />
    </View>
  );
};
```

### Ejemplo con props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306850/packages/progressbar/progress-props_vycrzf.gif" />
