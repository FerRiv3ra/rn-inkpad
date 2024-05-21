---
sidebar_position: 1
title: ActionSheet
---

# ActionSheet

Una **ActionSheet** es un componente dinámico de nuestra biblioteca que ofrece a los usuarios un menú de opciones o acciones dentro de una aplicación. Por lo general, aparece como un modal o una ventana emergente, que presenta una lista de opciones relevantes para el contexto actual o la interacción del usuario. Las hojas de acción permiten a los usuarios tomar decisiones o iniciar acciones específicas de manera conveniente, mejorando la usabilidad y la eficiencia. Con un estilo personalizable y configuraciones flexibles, nuestro componente ActionSheet se integra a la perfección en diversas interfaces, lo que permite a los usuarios una navegación e interacción intuitivas.

## Uso

### Uso básico

```jsx
import React, {useState} from 'react';
import {ActionSheet} from 'rn-inkpad';

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return <ActionSheet setVisible={setIsVisible} visible={isVisible} />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/action-sheet/actionsheet-ios-simple_ud13jc.png" />
<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/action-sheet/actionsheet-android-simple_p0cuuw.png" />

## Props

<div class='table-responsive'>

| Nombre           | Tipo                                            | Requerido | Descripción                                        |
| ---------------- | ----------------------------------------------- | --------- | -------------------------------------------------- |
| visible          | `boolean`                                       | **SI**    | Muestra/Oculta el ActionSheet                      |
| setVisible       | `(visible: boolean) => void`                    | **SI**    | Función que controla la visibilidad del componente |
| actions          | **[Action[]](#action-props)**                   | _NO_      | Arreglo de acciones a mostrar                      |
| cancelText       | `string`                                        | _NO_      | Texto para el botón cancelar                       |
| description      | `string`                                        | _NO_      | Texto de descripción para el ActionSheet           |
| showCancelButton | `boolean`                                       | _NO_      | Muestra el botón cancelar button                   |
| showIconOnIos    | `boolean`                                       | _NO_      | Muestra el ícono en iOS                            |
| showCloseButton  | `boolean`                                       | _NO_      | Muestra el botón cerrar button                     |
| theme            | **[ActionSheetTheme](#actionsheettheme-props)** | _NO_      | Personaliza el tema de tu ActionSheet.             |
| title            | `string`                                        | _NO_      | Título para tu ActionSheet.                        |

</div>

### Action props

<div class='table-responsive'>
| Nombre | Tipo | Requerido | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| text | `string` | **SI** | Texto del botón. |
| icon | `string` | _NO_ | Ícono del botón. |
| iconColor | `string` | _NO_ | Color del ícono. |
| textStyle | `StyleProp<TextStyle>` | _NO_ | Estilos personalizados para el botón. |
| onPress | `() => void` | **SI** | Función que se ejecuta al presionar el botón. |
</div>

### ActionSheetTheme props

<div class='table-responsive'>
| Nombre | Tipo | Predeterminado iOS | Predeterminado Android |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| appearance | `'light' \| 'dark'` | Sistema | Sistema |
| backgroundColor | `string` | `Claro: '#F4F4F4'  Oscuro: '#171717'` | `Claro: '#FFFFFF'  Oscuro: '#171717'`|
| buttonColor | `string` | `Claro: '#FFFFFF'  Oscuro: '#242625'` | `Claro: '#FFFFFF'  Oscuro: '#171717'`|
| closeBackgroundColor | `string` | `Claro: '#ECECEC'  Oscuro: '#1C1E1D'` | `Claro: '#ECECEC'  Oscuro: '#1C1E1D'`|
| closeIconColor | `string` | `Claro: '#767779'  Oscuro: '#959394'` | `Claro: '#767779'  Oscuro: '#959394'`|
| separatorColor | `string` | `Claro: '#E4E4E4'  Oscuro: '#343434'` | _N/A_ |
| textColor | `string` | `Claro: '#0A0A0A'  Oscuro: '#FFFFFF'` | `Claro: '#0A0A0A'  Oscuro: '#FFFFFF'`|
| theme | `'cupertino' \| 'material'` | Sistema | Sistema |
</div>

## Uso con props

```jsx
import React, {useState} from 'react';
import {ActionSheet} from 'rn-inkpad';

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ActionSheet
      actions={[
        {
          text: 'Change profile picture',
          icon: 'ear',
          onPress: () => console.log('Change profile picture'),
        },
        {
          text: 'View profile picture',
          icon: 'eye',
          onPress: () => console.log('View profile picture'),
        },
        {
          text: 'View status',
          icon: 'bandage',
          onPress: () => console.log('View status'),
        },
      ]}
      setVisible={setIsVisible}
      description="Select any action below to proceed"
      title="Select an action"
      visible={isVisible}
    />
  );
};
```

## Ejemplos

### iOS

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/action-sheet/actionsheet-ios-light_fceujq.png" /> 
  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/action-sheet/actionsheet-ios-dark_vedcrl.png" />

### Android

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/action-sheet/actionsheet-android-light_n34v0f.png" /> 
  <img width="40%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/action-sheet/actionsheet-android-dark_vere4h.png" />
