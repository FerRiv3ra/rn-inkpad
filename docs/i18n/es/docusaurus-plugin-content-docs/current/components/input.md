---
sidebar_position: 8
title: Input
---

# Input

El componente **Input** de nuestra biblioteca es un elemento fundamental que se utiliza para capturar la entrada del usuario dentro de formularios o interfaces interactivas. Permite a los usuarios ingresar y enviar varios tipos de datos, como texto o números.

## Uso

### Uso básico

```jsx
import {Input} from 'rn-inkpad';

const MyComponent = () => {
  return <Input />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306849/packages/input/input-simple_feq3py.png" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| autoComplete | `autoComplete` | | Especifica sugerencias de autocompletar para el sistema, de modo que pueda proporcionar autocompletar. |
| borderColor | `string` | | Color del borde. |
| borderRadius | `number` | | Establece los bordes redondeados. |
| icon | `string` | | Ícono del input. |
| iconColor | `string` | | Color del ícono del input. |
| iconSize | `number` | 15 | Tamaño del icono del input. |
| keyboardType | `KeyboardTypeOptions` | | Determina el tipo de teclado a abrir, ejem.numeric. |
| label | `string` | | Etiqueta del input. |
| labelColor | `string` | | Color de la etiqueta. |
| password | `boolean` | false | El modo de contraseña agrega un icono para mostrar u ocultar la contraseña. |
| placeholder | `string` | Input | Texto de ayuda del input. |
| placeholderColor | `string` | | Color del texto de ayuda del input. |
| rightIcon | `string` | | Agregue un icono a la derecha, en dicho icono puede agregar una función. |
| rightIconColor | `string` | | Color del ícono de la derecha. |
| rightIconSize | `number` | | Tamaño del ícono de la derecha. |
| search | `boolean` | false | Activar el modo de búsqueda para añadir un icono de búsqueda. |
| style | `StyleProp<ViewStyle>` | | Estilos personalizados para el input. |
| textColor | `string` | | Color del texto del input. |
| textContentType | `textContentType` | | Proporcione al teclado y al sistema información sobre el significado semántico esperado para el contenido que escriben los usuarios. |
| textStyle | `StyleProp<TextStyle>` | | Estilos personalizados para el texto del input. |
| type | `'filled' \| 'bordered' \| 'outlined'` | filled | Selecciona el estilo del input. |
| value | `string` | | El valor que se va a mostrar para la entrada de texto. TextInput es un componente controlado, lo que significa que el valor nativo se verá obligado a coincidir con esta propiedad de valor si se proporciona. |
| onChangeText | `(text: string) => void` | | Función a la que se llama cuando cambia el texto de la entrada de texto. El texto modificado se pasa como argumento al controlador de función. |
| onEndEditing | `() => void` | | Función que se llama cuando se termina de escribir. |
| onPress | `() => void` | | Función que se llama cuando el ícono de la derecha es presionado. |
</div>

## Uso con props

```jsx
import {View} from 'react-native';

import {Input} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <View>
      <Input
        borderColor="#DB504A"
        icon="airplane"
        iconColor="#DB504A"
        label="Search"
        search
      />
      <Input
        borderColor="#21295C"
        borderRadius={10}
        icon="key"
        iconColor="#21295C"
        label="Password"
        password
        rightIconColor="#21295C"
        type="bordered"
      />
      <Input
        borderColor="#576DEC"
        borderRadius={10}
        icon="at"
        iconColor="#576DEC"
        label="Email"
        labelColor="#576DEC"
        type="outlined"
      />
    </View>
  );
};
```

### Ejemplo con props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306860/packages/input/input-props_vofom0.png" />
