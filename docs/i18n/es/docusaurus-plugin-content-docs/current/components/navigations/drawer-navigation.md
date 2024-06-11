---
sidebar_position: 9.2
title: DrawerNavigation
---

# DrawerNavigation

El componente **DrawerNavigation** de nuestra biblioteca es un elemento de navegación versátil que se utiliza habitualmente en aplicaciones móviles y web para proporcionar a los usuarios acceso a varias pantallas, funciones o configuraciones. Por lo general, aparece como un panel lateral que se puede deslizar desde el borde de la pantalla o alternar con un botón de menú. DrawerNavigation organiza el contenido y la funcionalidad de la aplicación en una estructura de menú jerárquica, lo que permite a los usuarios navegar entre diferentes secciones o vistas de manera eficiente. Ofrece una forma conveniente de acceder a funciones, configuraciones u opciones de navegación de uso menos frecuente sin saturar la interfaz principal.

## Uso

### Uso básico

```jsx
import {View} from 'react-native';

import {DrawerNavigation} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <View style={{flex: 1}}>
      <DrawerNavigation />
    </View>
  );
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306850/packages/navigations/drawer-simple_cmdhyt.gif" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| backgroundColor | `string` | #464EE5 | Color de fondo. |
| closeIcon | `string` | close | Icono para cerrar el drawer. |
| collapseIcon | `string` | chevron-up | Icono para contraer grupos del drawer. |
| expandIcon | `string` | chevron-down | Icono para expandir grupos de drawer. |
| fontSize | `number` | 18 | Tamaño de la fuente de cada elemento. |
| icon | `string` | menu | Icono para abrir el drawer. |
| iconColor | `string` | | Color del icono de control del drawer. |
| iconSize | `number` | 35 | Tamaño del icono de control del drawer. |
| iconTop | `number` | 50 | Separación entre la parte superior y el icono de control del drawer. |
| image | `ImageSourcePropType` | | Por lo general, es el logotipo de la aplicación el que va en la parte superior del drawer. |
| imageStyles | `StyleProp<ImageStyle>` | | Estilos personalizados para la imagen. |
| itemIconSize | `number` | 19 | Tamaño del icono de cada elemento. |
| items | [Item[]](#item) | | Arreglo de elementos o grupo de elementos en el drawer. |
| textColor | `string` | | Color de texto de los elementos. |
| textStyles | `StyleProp<TextStyle>` | | Estilos personalizados para el texto de los elementos. |
| widthPercent | `number` | 65 | Porcentaje de ancho que el drawer ocupará en la pantalla. |
</div>

### Item

:::tip[Información]

En el arreglo de elementos puedes enviar elementos del tipo [DrawerItem](#draweritem-props) o [DrawerGroup](#drawergroup-props).

:::
:::note[Nota]

Si envías un [DrawerGroup](#drawergroup-props) se mostrará como una lista desplegable en el DrawerNavigation.

:::

### DrawerGroup props

<div class="table-responsive">
| Nombre | Tipo | Requerido | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| icon | `string` | **SI** | Icono del elemento. |
| items | [DrawerItem[]](#draweritem-props) | **SI** | Lista de elementos desplegables. |
| text | `string` | **SI** | Texto del elemento. |
</div>

### DrawerItem props

<div class="table-responsive">
| Nombre | Tipo | Requerido | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| icon | `string` | **SI** | Icono del elemento. |
| text | `string` | **SI** | Texto del elemento. |
| onPress | `() => void` | _NO_ | Función que es llamada al presionar el elemento. |
</div>

:::tip[Información]

Esta navegación solo proporciona el estilo para su navegación, sin embargo, para navegar a diferentes pantallas debe instalar un paquete de navegación.

:::

## Uso con props

```jsx
import {View} from 'react-native';

import {BottomTabNavigation} from 'rn-inkpad';

import Logo from './assets/rn-logo.png';

const MyComponent = () => {
  return (
    <View style={{flex: 1}}>
      <DrawerNavigation
        backgroundColor="#BEF0F3"
        image={Logo}
        items={[
          {icon: 'home', text: 'Home', onPress: () => console.log('Home')},
          {
            text: 'User',
            icon: 'person',
            items: [
              {
                icon: 'person',
                text: 'Profile',
                onPress: () => console.log('Profile'),
              },
              {
                icon: 'time',
                text: 'History',
                onPress: () => console.log('History'),
              },
              {
                icon: 'star',
                text: 'Starred',
                onPress: () => console.log('Starred'),
              },
            ],
          },
          {
            icon: 'cog',
            text: 'Settings',
            onPress: () => console.log('Settings'),
          },
        ]}
      />
    </View>
  );
};
```

### Ejemplo con props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306850/packages/navigations/drawer-props_idiebk.gif" />
