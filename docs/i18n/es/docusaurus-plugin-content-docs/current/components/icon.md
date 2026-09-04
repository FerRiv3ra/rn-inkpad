---
sidebar_position: 8
title: Iconos
---

# Iconos

**rn-inkpad no depende de ninguna librería de iconos.** Cada prop que espera un icono (`icon`,
`rightIcon`, `checkedIcon`, `iconOnCompleted`, `closeIcon`, los `icon` de las acciones…) acepta
un `IconProp`:

```ts
type IconProp = React.ReactElement | React.ComponentType<IconProps>;

type IconProps = {
  size?: number;
  color?: string;
  width?: number; // espejo de size, para componentes SVG planos
  height?: number;
};
```

Usa el set de iconos que ya tengas: [lucide-react-native](https://lucide.dev/guide/packages/lucide-react-native),
`@expo/vector-icons`, `react-native-vector-icons`, un componente SVG de `react-native-svg` o
SVGR, o cualquier cosa que renderice.

## Pasar un componente

La librería lo renderiza con el tamaño y color que corresponden al estado del componente
(color del texto, deshabilitado, seleccionado, completado…). Es la forma recomendada.

```jsx
import {House} from 'lucide-react-native';
import {Button} from 'rn-inkpad';

<Button text="Inicio" icon={House} />;
```

## Pasar un elemento

El elemento se renderiza exactamente como lo escribiste. Úsalo cuando quieras control total.

```jsx
import {Heart} from 'lucide-react-native';

<Button
  text="Me gusta"
  icon={<Heart size={18} color="#DB504A" fill="#DB504A" />}
/>;
```

## Tu propio SVG

Cualquier componente que acepte `size`/`color` (o `width`/`height`) funciona, incluidos los
generados por `react-native-svg-transformer`.

```jsx
import Svg, {Path} from 'react-native-svg';

const Logo = ({size = 24, color = '#000'}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path d="M8 12l3 3 5-6" stroke={color} strokeWidth="2" fill="none" />
  </Svg>
);

<Input label="Email" icon={Logo} />;
```

## El helper `Icon`

`Icon` renderiza un `IconProp` igual que lo hace la librería por dentro. Útil para mantener
tamaños consistentes en tus pantallas.

```jsx
import {Icon} from 'rn-inkpad';

<Icon icon={Logo} size={32} color="#576DEC" />;
```

`renderIcon(icon, {size, color})` también se exporta, para componentes propios.

## Iconos por defecto

Cuando un componente necesita un icono y no le pasas ninguno, usa un pequeño glyph dibujado
con vistas: checkbox, radio, chevrons, cerrar, más, menú, ojo, lupa, estrella y corazón.
Todos se pueden reemplazar con la prop correspondiente:

| Componente           | Props                                               |
| -------------------- | --------------------------------------------------- |
| CheckBox             | `checkedIcon`, `unCheckedIcon`                      |
| RadioButtons         | `checkedIcon`, `unCheckedIcon`                      |
| Rating               | `icons={{full, half, empty}}`                       |
| StarRating           | `icons={{full, empty}}`                             |
| Input                | `showPasswordIcon`, `hidePasswordIcon`, `rightIcon` |
| FloatingActionButton | `icon`, `openIcon`, `closeIcon`                     |
| ActionSheet          | `closeIcon`, `cancelIcon`                           |
| DrawerNavigation     | `icon`, `closeIcon`, `expandIcon`, `collapseIcon`   |

## Migrar desde 1.x

La versión 1.x aceptaba nombres de Ionicons (`icon="home"`). Sustituye el string por un
componente o un elemento de tu librería de iconos. `react-native-vector-icons` ya no se
instala; si quieres seguir usando Ionicons:

```jsx
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = props => <Ionicons name="home" {...props} />;

<Button text="Inicio" icon={Home} />;
```
