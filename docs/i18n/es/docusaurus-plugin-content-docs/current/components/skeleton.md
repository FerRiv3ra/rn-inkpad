---
sidebar_position: 14
title: Skeleton
---

# Skeleton

Placeholder con pulso que se muestra mientras carga el contenido.

<Snack name="Skeleton" code={`import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, CircleAvatar, Skeleton} from 'rn-inkpad';

export default function App() {
const [loading, setLoading] = useState(true);
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, gap: 16}}>
<View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
{loading ? <Skeleton circle height={48} /> : <CircleAvatar size={48} defaultText="FR" />}
<View style={{flex: 1}}>
{loading ? <Skeleton lines={3} height={12} /> : <Text style={{fontWeight: '700'}}>Fernando Rivera{'\n'}Loaded from the network.</Text>}
</View>
</View>
<Skeleton height={120} radius={12} />
<Button text={loading ? 'Finish loading' : 'Load again'} onPress={() => setLoading(!loading)} />
</View>
);
}`} />

## Uso

```jsx
import {Skeleton} from 'rn-inkpad';

<Skeleton circle height={48} />
<Skeleton lines={3} height={12} />
<Skeleton height={120} radius={12} />
```

## Props

<div class="table-responsive">
| Nombre | Tipo | Por defecto | Descripción |
| --- | --- | --- | --- |
| width | `DimensionValue` | 100% | Block width. |
| height | `number` | 16 | Block height (diameter for circles). |
| radius | `number` | theme radius sm | Corner radius. |
| circle | `boolean` | false | Renders a circle. |
| lines | `number` | 1 | Number of stacked lines; the last one is 60% wide. |
| gap | `number` | 8 | Space between lines. |
| color | `string` | theme border | Block color. |
| animated | `boolean` | true | Pulse animation. |
| speed | `number` | 1000 | Pulse cycle in milliseconds. |
| style | `StyleProp<ViewStyle>` | | Container style. |
</div>
