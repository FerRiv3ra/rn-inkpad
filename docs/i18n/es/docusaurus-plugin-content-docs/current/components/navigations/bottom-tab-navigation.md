---
sidebar_position: 9.1
title: BottomTabNavigation
---

# BottomTabNavigation

El componente **BottomTabNavigation** de nuestra biblioteca es un elemento de navegación que normalmente se coloca en la parte inferior de la pantalla en las aplicaciones móviles. Proporciona a los usuarios un acceso rápido a diferentes secciones o vistas de la aplicación, lo que mejora la eficiencia de la navegación. Cada pestaña representa una categoría o característica específica, y los usuarios pueden cambiar entre pestañas para acceder a diferentes partes de la aplicación sin problemas. BottomTabNavigation promueve la exploración intuitiva del contenido y la funcionalidad de la aplicación, ofreciendo un patrón de navegación coherente y familiar en todas las pantallas.

## Uso

### Uso básico

```jsx
import {View} from 'react-native';

import {BottomTabNavigation} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <View style={{flex: 1}}>
      <BottomTabNavigation />
    </View>
  );
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306850/packages/navigations/bottomtab-simple_f3aedl.png" />

## Props

<div class="table-responsive">
| Nombre | Tipo | Predeterminado | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| backgroundColor | `string` | #FFFFFF | Color de fondo. |
| highlightedBgColor | `string` | #DB504A | Color de fondo del elemento resaltado. |
| highlightedIconColor | `string` | | Color del icono del elemento resaltado. |
| iconColor | `string` | | Color del icono de las pestañas. |
| iconSize | `number` | 25 | Tamaño del icono de las pestañas. |
| labelStyle | `StyleProp<TextStyle>` | | Estilo personalizado para las etiquetas. |
| selectedColor | `string` | #DB504A | Color del indicador de la pestaña seleccionada. |
| selectedheight | `number` | 5 | Alto del inidicador de la pestaña seleccionada. |
| selectedIndex | `number` | | Índice seleccionado. |
| textColor | `string` | | Color de la etiqueta. |
| values | [NavigationItem[]](#navigationitem-props) | `[{icon: 'home', text: 'Home'}]` | Arreglo de cada una de las pestañas. |
</div>

### NavigationItem props

<div class="table-responsive">
| Nombre | Tipo | Requerido | Descripción |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| highlighted | `boolean` | _NO_ | Activa el resaltado del elemento. |
| icon | `string` | _NO_ | Icono de la pestaña. |
| text | `string` | _NO_ | Etiqueta de la pestaña. |
| onPress | `() => void` | _NO_ | Función que es llamada al presionar en la pestaña. |
</div>

:::tip[Información]

Esta navegación solo proporciona el estilo para su navegación, sin embargo, para navegar a diferentes pantallas debe instalar un paquete de navegación.

:::

## Uso con props

```jsx
import {View} from 'react-native';

import {BottomTabNavigation} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <View style={{flex: 1}}>
      <BottomTabNavigation
        selectedIndex={0}
        highlightedIconColor="#FFF"
        values={[
          {icon: 'home', text: 'Home', onPress: () => console.log('Home')},
          {
            icon: 'search',
            text: 'Search',
            onPress: () => console.log('Search'),
          },
          {
            icon: 'add',
            text: 'Add',
            highlighted: true,
            onPress: () => console.log('Add'),
          },
          {
            icon: 'notifications',
            text: 'Alerts',
            onPress: () => console.log('Alerts'),
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

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306849/packages/navigations/bottomtab-props_gwwgsg.png" />
