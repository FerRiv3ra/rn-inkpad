---
sidebar_position: 5
title: Divider
---

# Divider

Separador fino, horizontal o vertical, con etiqueta centrada opcional.

<Snack name="Divider" code={`import React from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'rn-inkpad';

export default function App() {
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, gap: 16}}>
<Text>Above</Text>
<Divider />
<Text>Between</Text>
<Divider text="OR" />
<Text>Below</Text>
<Divider color="#DB504A" thickness={3} />
<View style={{flexDirection: 'row', alignItems: 'center', height: 32}}>
<Text>Left</Text>
<Divider orientation="vertical" spacing={16} />
<Text>Right</Text>
</View>
</View>
);
}`} />

## Uso

```jsx
import {Divider} from 'rn-inkpad';

<Divider />
<Divider text="OR" />
<Divider orientation="vertical" spacing={16} />
<Divider color="#DB504A" thickness={3} />
```

## Props

<div class="table-responsive">
| Nombre | Tipo | Por defecto | Descripción |
| --- | --- | --- | --- |
| orientation | `'horizontal' \| 'vertical'` | horizontal | Direction. |
| color | `string` | theme border | Line color. |
| thickness | `number` | hairline | Line thickness. |
| text | `string` | | Centered label (horizontal only). |
| textStyle | `StyleProp<TextStyle>` | | Label style. |
| spacing | `number` | 8 | Margin around the divider. |
| style | `StyleProp<ViewStyle>` | | Container style. |
</div>
