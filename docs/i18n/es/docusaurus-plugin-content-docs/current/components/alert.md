---
sidebar_position: 2
title: Alert
---

# Alert

Es un componente versátil de nuestra biblioteca diseñado para mejorar la interacción y la comunicación del usuario dentro de las aplicaciones. Las alertas (**Alerts** )proporcionan notificaciones inmediatas sobre eventos o actualizaciones importantes, lo que garantiza que los usuarios se mantengan informados. Ingreso rápido (**Prompt**) guían a los usuarios a través de acciones o decisiones mediante la presentación de mensajes y opciones claras, lo que facilita la fluidez de los recorridos de los usuarios. Con estilos y funcionalidades personalizables, nuestros componentes Alert y Prompt ofrecen una experiencia de usuario perfecta en varias interfaces.

## Configuración y personalización

1. Importa y usa AlertContainer

Necesitamos importar el componente AlertContainer. Normalmente, haría esto en su archivo principal, como App.js o App.tsx.

```js title="App.tsx"
import {AlertContainer} from 'rn-inkpad';

export const App = () => {
  return (
    <View>
      <AlertContainer />
      {/* Resto del código de la aplicación */}
    </View>
  );
};
```

### Propiedades

Puede enviar algunas propiedades opcionales para personalizar sus alertas.

<div class='table-responsive'>
| Propiedad                | Descripción                                              | Tipo                                  | Requerido | Predeterminado                  |
| ------------------- | -------------------------------------------------------- | ------------------------------------- | -------- | ------------------------ |
| **`animationType`** | Elige la animación con la que aparecerá tu alerta.  | `'none' \| 'fade' \| 'slide'`         | **NO**   | _'none'_                 |
| **`appearance`**    | Elige la apariencia entre claro y oscuro para tu alerta. | `'light' \| 'dark'`                   | **NO**   | _Apariencia del dispositivo_      |
| **`personalTheme`** | Personaliza completamente la apariencia de tu alerta.         | [PersonalTheme](#personaltheme-props) | **NO**   | _PersonalTheme predeterminado_ |
| **`theme`**         | Elige el tema entre Android e iOS para tu alerta. | `'ios' \| 'android'`                  | **NO**   | _Determinado por el sistema_         |
</div>

### PersonalTheme Props

<div class='table-responsive'>
| Propiedad                       | DEscripción                                              | Tipo         | Requerido | Predeterminado iOS                           | Predeterminado Android                               |
| -------------------------- | -------------------------------------------------------- | ------------ | -------- | ------------------------------------- | --------------------------------------------- |
| **`backgroundColor`**      | Color de fondo al rededor de la alerta.                      | `rgba color` | **NO**   | _rgba(0,0,0,0.4)_                     | _rgba(0,0,0,0.4)_                             |
| **`backgroundInputColor`** | Color de fondo para el input.        | `string`     | **NO**   | `Claro: '#1C1C1E' \| Oscuro: '#FFFFFF'` | `Claro: 'transparent' \| Oscuro: 'transparent'` |
| **`cardBackgroundColor`**  | Color de la alerta.                                             | `string`     | **NO**   | `Claro: '#EEEEEE' \| Oscuro: '#222222'` | `Claro: '#282F2C'\| Oscuro: '#FFFFFF'`          |
| **`descriptionColor`**     | Color de la descripción de la alerta.                         | `string`     | **NO**   | `Claro: '#000000' \| Oscuro: '#FFFFFF'` | `Claro: '#000000'\| Oscuro: '#FFFFFF'`          |
| **`inputBorderColor`**     | Color del borde para el input.                      | `string`     | **NO**   | `Claro: '#C3C3C3' \| Oscuro: '#616161'` | `Claro: '#00D982'\| Oscuro: '#00D982'`          |
| **`inputColor`**           | Color del texto en el input.                   | `string`     | **NO**   | `Claro: '#000000' \| Oscuro: '#FFFFFF'` | `Claro: '#000000' \| Oscuro: '#FFFFFF'`         |
| **`lineColor`**            | Color del separador de botones -Solo iOS-. | `string`     | **NO**   | `Claro: '#C3C3C3' \| Oscuro: '#616161'` | `N/A`                                         |
| **`placeholderColor`**     | Color del texto de marcador de posición en el input.                  | `string`     | **NO**   | `Claro: '#C3C3C3' \| Oscuro: '#666666'` | `Claro: '#C3C3C3' \| Oscuro: '#666666'`         |
| **`textButtonColor`**      | Color del texto en los botones.                        | `string`     | **NO**   | `Claro: '#4F87FF' \| Oscuro: '#4F87FF'` | `Claro: '#00D982' \| Oscuro: '#00D982'`         |
| **`titleColor`**           | Color del título de la alerta.                               | `string`     | **NO**   | `Claro: '#000000' \| Oscuro: '#FFFFFF'` | `Claro: '#000000' \| Oscuro: '#FFFFFF'`         |
</div>

## Uso

3. Uso de componente

## Componente `Alert`

Esta es la típica alerta del sistema con la gran diferencia de que podemos personalizarla y devuelve una promesa con la respuesta del usuario.

### Uso Básico

```js
import {Text, TouchableOpacity, View} from  'react-native';
import {Alert} from  'rn-inkpad';

const  MyComponent  = () => {

 const handlePress = () => {
   Alert.alert('Title', 'Description')
 }

 return (
   <View>
	  <TouchableOpacity onPress={handlePress} >
        <Text>Open Alert</Text>
      </TouchableOpacity>
   </View>
 )
```

### Ejemplos

> iOS

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.54.03_war8fz.png" />
  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.54.09_holx24.png" />

> Android

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.53.54_marhwv.png" /> 
  <img width="40%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.53.39_relzf6.png" />

### Con propiedades

```js
import {Text, TouchableOpacity, View} from  'react-native';
import {Alert} from  'rn-inkpad';

const  MyComponent  = () => {

 const handlePress = async () => {
   const response = await Alert.alert({
     title: 'Alert',
     description: 'Would you like to continue learning how to use React Native alerts?',
     showCancelButton: true,
   })

   console.log(response) // true or false
 }

 return (
   <View>
	  <TouchableOpacity onPress={handlePress} >
        <Text>Open Alert</Text>
      </TouchableOpacity>
   </View>
 )
```

### Alert props

<div class='table-responsive'>
| Propiedad                   | Descripción                          | Tipo                                           | Requerido |
| ---------------------- | ------------------------------------ | ---------------------------------------------- | -------- |
| **`title`**            | Título para la alerta.                | `string`                                       | **SI**  |
| **`buttons`**          | Botones personalizados para la alerta. | [Button[]](#button-props)                      | _No_     |
| **`cancelColorText`**  | Color para el texto del botón cancelar.            | `string`                                       | _No_     |
| **`cancelText`**       | Texto para el botón cancelar.                  | `string`                                       | _No_     |
| **`confirmColorText`** | Color para el texto del botón confirmar.           | `string`                                       | _No_     |
| **`confirmText`**      | Texto para el botón confirmar.                 | `string`                                       | _No_     |
| **`icon`**             | Ícono de la alerta.                          | `'error' \| 'info' \| 'success' \| 'question'` | _No_     |
| **`iconColor`**        | Color del ícono.                          | `string`                                       | _No_     |
| **`showCancelButton`** | Muestra el botón cancelar.             | `boolean`                                      | _No_     |
</div>

### Button props

<div class='table-responsive'>
| Propiedad            | Descripción                                           | Tipo                   | Requerido |
| --------------- | ----------------------------------------------------- | ---------------------- | -------- |
| **`text`**      | Texto del botón.                                          | `string`               | **SI**  |
| **`textStyle`** | Estilos personalizados para el botón.             | `StyleProp<TextStyle>` | _No_     |
| **`onPress`**   | Función que se ejecuta al presionar el botón. | `function`             | _No_     |
</div>

### Ejemplos con propiedades

> iOS

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435469/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-13_at_19.35.28_ldufyq.png" />
  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435473/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-13_at_19.35.43_q71kqg.png" />

> Android

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435467/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-13_at_19.34.52_infgig.png" /> 
  <img width="40%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435468/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-13_at_19.35.12_uldf9z.png" />

> Con ícono

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710872843/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-19_at_18.26.06_auvp7s.png" /> 
  <img width="40%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1710872843/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-19_at_18.24.04_l3n8em.png" />

## Prompt

### `Prompt` component

Este es el prompt del sistema que podemos usar en iOS, con la gran diferencia de que podemos personalizarlo y devuelve una promesa con el texto introducido por el usuario.

### Uso básico

```js
import {Text, TouchableOpacity, View} from  'react-native';
import {Alert} from  'rn-inkpad';

const  MyComponent  = () => {

 const handlePress = () => {
   const response = await  Alert.prompt('Email', 'Please enter your email');

   console.log(response) // string | undefined
 }

 return (
   <View>
	  <TouchableOpacity onPress={handlePress} >
        <Text>Open Prompt</Text>
      </TouchableOpacity>
   </View>
 )
```

### Ejemplos

> iOS

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710438064/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.40.08_ude9cj.png" />
  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710438061/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.39.59_iu9c2z.png" />

> Android

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710438067/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.40.14_q0h4xf.png" /> 
  <img width="40%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1710438070/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.40.22_khhpvr.png" />

### With props

```js
import {Text, TouchableOpacity, View} from  'react-native';
import {Alert} from  'rn-inkpad';

const  MyComponent  = () => {

 const handlePress = async () => {
   const response = await Alert.prompt({
     title: 'Prompt',
     description: 'Enter your email to continue learning how to use React Native alerts!',
     label: 'Email',
     placeholder: 'example@example.com',
   })

   console.log(response) // string | undefined
 }

 return (
   <View>
	  <TouchableOpacity onPress={handlePress} >
        <Text>Open Prompt</Text>
      </TouchableOpacity>
   </View>
 )
```

### Prompt props

<div class='table-responsive'>
| Propiedad                   | Descripción                                   | Tipo     | Requerido |
| ---------------------- | --------------------------------------------- | -------- | -------- |
| **`title`**            | Título para la alerta.                         | `string` | **SI**  |
| **`cancelColorText`**  | Color del texto del botón cancelar.                     | `string` | _No_     |
| **`cancelText`**       | Texto del botón cancelar.                           | `string` | _No_     |
| **`confirmColorText`** | Color del texto del botón confirmar.                    | `string` | _No_     |
| **`confirmText`**      | Texto del botón confirmar.                          | `string` | _No_     |
| **`label`**            | Etiqueta para el input -Solo Android-.               | `string` | _No_     |
| **`placeholder`**      | Texto de ayuda para el input. **predeterminado:** _texto del título_ | `string` | _No_     |
</div>

### Ejemplo con props

> iOS

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435470/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-13_at_19.35.35_tgfexi.png" />
  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435473/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-13_at_19.35.45_tjsxhh.png" />

> Android

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435468/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-13_at_19.34.56_qxssok.png" /> 
  <img width="40%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1710435468/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-13_at_19.35.15_hs7gk3.png" />
