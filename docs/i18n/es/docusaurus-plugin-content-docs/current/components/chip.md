---
sidebar_position: 3
title: Chip
---

# Chip

Etiqueta compacta para filtros, selecciones y elementos eliminables.

<Snack name="Chip" code={`import React, {useState} from 'react';
import {View} from 'react-native';
import {Check} from 'lucide-react-native';
import {Chip} from 'rn-inkpad';

const tags = ['React Native', 'iOS', 'Android', 'Web'];

export default function App() {
const [selected, setSelected] = useState(['iOS']);
const toggle = tag =>
setSelected(prev => (prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]));

return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, flexDirection: 'row', flexWrap: 'wrap', gap: 8}}>
{tags.map(tag => (
<Chip
key={tag}
text={tag}
icon={selected.includes(tag) ? Check : undefined}
selected={selected.includes(tag)}
onPress={() => toggle(tag)}
/>
))}
<Chip text="Removable" variant="outlined" onClose={() => {}} />
</View>
);
}`} />

## Uso

```jsx
import {Tag} from 'lucide-react-native';
import {Chip} from 'rn-inkpad';

<Chip text="iOS" selected onPress={() => {}} />
<Chip text="Removable" icon={Tag} variant="outlined" onClose={() => {}} />
<Chip text="Disabled" disabled />
```

## Props

<div class="table-responsive">
| Nombre | Tipo | Por defecto | Descripción |
| --- | --- | --- | --- |
| text | `string` | | Label. |
| icon | `IconProp` | | Leading icon. |
| selected | `boolean` | false | Selected state. |
| disabled | `boolean` | false | Disables presses and greys the chip. |
| variant | `'filled' \| 'outlined'` | filled | Visual style. |
| color | `string` | theme primary | Chip color. |
| textColor | `string` | | Overrides the computed text color. |
| size | `'sm' \| 'md'` | md | Size. |
| closeIcon | `IconProp` | built-in cross | Icon of the close button. |
| onPress | `() => void` | | Press handler. Without it the chip is not pressable. |
| onClose | `() => void` | | Renders a close button and handles its press. |
| style | `StyleProp<ViewStyle>` | | Container style. |
| textStyle | `StyleProp<TextStyle>` | | Label style. |
</div>
