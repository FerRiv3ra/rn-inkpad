---
sidebar_position: 15
title: Switch
---

# Switch

El componente **Switch** de nuestra biblioteca es un elemento de la interfaz de usuario que se utiliza para alternar entre dos estados, que normalmente representa un estado de "encendido" y "apagado". Aparece como un pequeño botón deslizante que los usuarios pueden tocar o arrastrar para cambiar su posición, alternando así entre los dos estados. Los interruptores se utilizan habitualmente en aplicaciones para ajustes como la activación o desactivación de una función, la activación o desactivación de notificaciones o el cambio entre los modos claro y oscuro.

<Snack name="Switch" code={`import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Switch} from 'rn-inkpad';

export default function App() {
const [on, setOn] = useState(false);
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, gap: 24}}>
<Switch />
<Switch
fullWidth
border
borderColor="#DB504A"
backgroundColor="#DB504A"
isOn={on}
onChange={setOn}
justifyContent="space-between"
text="Turn on notifications"
textStyle={{fontSize: 16, fontWeight: '600'}}
/>
<Text style={{textAlign: 'center'}}>{on ? 'On' : 'Off'}</Text>
</View>
);
}`} />

## Uso

### Uso básico

```jsx
import {Switch} from 'rn-inkpad';

const MyComponent = () => {
  return <Switch />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306859/packages/switch/switch-simple_mexil0.gif" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| isOn | `boolean` | false | Establecer encendido o apagado. |
| backgroundColor | `string` | #1DFF56 | Color de fondo cuando esta activado. |
| border | `boolean` | false | Activar o desactivar el borde. |
| borderColor | `string` | | Color del borde. |
| borderWidth | `number` | 2 | Ancho del borde. |
| fullWidth | `boolean` | false | Activar el ancho completo. |
| justifyContent | `FlexStyle.justifyContent` | | Alineación horizontal. |
| text | `string` | | Texto del Switch. |
| textStyle | `StyleProp<TextStyle>` | | Estilos personalizados para el switch. |
| onChange | `(value: boolean) => void` | | Función que se ejecuta al cambiar el switch, retorna un valor booleano con el valor actual del switch. |
</div>

## Uso con props

```jsx
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {Switch} from 'rn-inkpad';

const MyComponent = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <Switch
      backgroundColor="#DB504A"
      border
      borderColor="#DB504A"
      fullWidth
      isOn={confirmed}
      justifyContent="space-between"
      onChange={setConfirmed}
      text="Turn on notifications"
      textStyle={styles.text}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
```

### Ejemplo con props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306859/packages/switch/switch-props_whiq24.gif" />
