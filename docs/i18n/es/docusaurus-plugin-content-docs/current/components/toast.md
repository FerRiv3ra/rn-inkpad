---
sidebar_position: 17
title: Toast
---

# Toast

El componente **Toast** de nuestra biblioteca es un elemento de interfaz de usuario ligero y no intrusivo que se utiliza para mostrar mensajes breves o notificaciones a los usuarios. Por lo general, aparece como una pequeña ventana emergente rectangular que aparece en la parte superior o inferior de la pantalla durante un breve período antes de desaparecer automáticamente. Las notificaciones del sistema se usan normalmente para proporcionar a los usuarios comentarios rápidos, alertas o mensajes de confirmación después de completar una acción, como guardar un archivo, enviar un formulario o completar correctamente una tarea.

## Uso

### Uso básico

```jsx
import React, {useState} from 'react';
import {Button, Toast} from 'rn-inkpad';

const MyComponent = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <Toast
        visible={visible}
        text="Toast information"
        setVisible={setVisible}
      />
      <Button text="Show toast" onPress={() => setVisible(true)} />
    </View>
  );
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306861/packages/toast/toast-simple_hthryt.gif" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Requerido | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- | -------- |----------------------------------------------------- |
| text | `string` | **SI** | | Texto de la notificación. |
| visible | `boolean` | **SI** | | Mostrar u ocultar la notificación. |
| backgroundColor | `string` | _NO_ | rgba(0,0,0,0.7) | Color de fondo de la notificación. |
| bottom | `number` | _NO_ | 30 | Separación entre la parte inferior y el componente cuando la posición del componente es desde el inferior. |
| duration | `number` | _NO_ | 3000 | Tiempo en milisegundos en el que aparecerá la notificación. |
| fontSize | `number` | _NO_ | | Tamaño del texto de la notificación. |
| icon | `string` | _NO_ | | Icono de la notificación. |
| position | `'bottom' \| 'top'` | _NO_ | top | Determina la posición en la que aparecerá la notificación. |
| textColor | `string` | _NO_ | #FFFFFF | Color del texto de la notificación. |
| textStyles | `StyleProp<TextStyle>` | _NO_ |  | Estilos personalizados del texto. |
| top | `number` | _NO_ | 50 | Separación entre la parte superior y el componente cuando la posición del componente es desde la parte superior. |
| setVisible | `(visible: boolean) => void` | **SI** | | Función que controla la visibilidad de la notificación. |
</div>

## Uso con props

```jsx
import React, {useState} from 'react';
import {View} from 'react-native';

import {Buttom, Toast} from 'rn-inkpad';

const MyComponent = () => {
  const [visibleTop, setVisibleTop] = useState(false);
  const [visibleBottom, setVisibleBottom] = useState(false);

  return (
    <View>
      <Toast
        backgroundColor="#DB504A"
        fontSize={16}
        icon="information-circle-outline"
        text="Toast top information"
        visible={visibleTop}
        setVisible={setVisibleTop}
      />
      <Toast
        backgroundColor="#21295C"
        fontSize={16}
        icon="cafe"
        position="bottom"
        text="Toast bottom information"
        visible={visibleBottom}
        setVisible={setVisibleBottom}
      />
      <Button
        full
        rounded
        text="Show toast top"
        onPress={() => setVisibleTop(true)}
      />
      <Button
        full
        rounded
        style={{marginTop: 20}}
        text="Show toast bottom"
        onPress={() => setVisibleBottom(true)}
      />
    </View>
  );
};
```

### Ejemplo con props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306860/packages/toast/toast-props_yhsmwo.gif" />
