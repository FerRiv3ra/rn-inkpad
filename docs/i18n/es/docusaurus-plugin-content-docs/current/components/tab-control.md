---
sidebar_position: 16
title: TabControl
---

# TabControl

El componente **TabControl** de nuestra biblioteca es un elemento de navegación versátil que se utiliza para organizar y presentar varias vistas o secciones dentro de una aplicación. Por lo general, aparece como un conjunto de pestañas dispuestas horizontal o verticalmente, y cada pestaña representa un área de contenido o entidad distinta. Los usuarios pueden cambiar entre pestañas para acceder a diferentes partes de la aplicación de forma rápida e intuitiva. Los TabControls se usan normalmente en aplicaciones con estructuras de navegación complejas, como pantallas de configuración, procesos de varios pasos o interfaces ricas en contenido.

## Uso

### Uso básico

```js
import {TabControl} from 'rn-inkpad';

import {FormUser, Users} from './components';

const App = () => {
  const values = [
    {key: 'Add user', renderItem: FormUser},
    {key: 'Users', renderItem: Users},
  ];

  return <TabControl values={values} />;
};
```

### Propiedades

| Nombre                   | Descripción                                              | Tipo                                       | Requerido | Predeterminado |
| ------------------------ | -------------------------------------------------------- | ------------------------------------------ | --------- | -------------- |
| **`values`**             | Arreglo de llave y componente para generar cada pestaña. | `{key: string; renderItem: JSX.Element}[]` | **SI**    |                |
| **`label`**              | Texto de la etiqueta del componente.                     | `string`                                   | No        |                |
| **`labelStyle`**         | Estilos personalizados para la etiqueta.                 | `StyleProp<TextStyle>`                     | No        |                |
| **`selectedIndex`**      | Valor inicial seleccionado.                              | `number`                                   | No        | `0`            |
| **`backgroundTabColor`** | Color de fondo del componente.                           | `string`                                   | No        | `'#CCCCCC'`    |
| **`tabTintColor`**       | Color de la pestaña seleccionada.                        | `string`                                   | No        | `'#FFFFFF'`    |
| **`textColor`**          | Color del texto en las pestañas.                         | `string`                                   | No        | `'#000000'`    |
| **`selectedTextColor`**  | Color del texto en la pestaña seleccionada.              | `string`                                   | No        | `'#000000'`    |
| **`containerStyle`**     | Estilos personalizados para el componente renderizado.   | `StyleProp<ViewStyle>`                     | No        |                |
| **`style`**              | Estilos para el contenedor.                              | `StyleProp<ViewStyle>`                     | No        |                |

### Ejemplo

<p align="center" width="100%">
    <img width="33%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1709313674/GitHub/tabControl_jntf6i.gif" /> 
</p>
