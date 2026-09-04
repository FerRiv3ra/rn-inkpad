---
sidebar_position: 6
title: DotsLoading
---

# DotsLoading

Indicador de carga ligero hecho de puntos que rebotan.

<Snack name="DotsLoading" code={`import React from 'react';
import {View} from 'react-native';
import {DotsLoading} from 'rn-inkpad';

export default function App() {
return (
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 32}}>
<DotsLoading />
<DotsLoading size={6} color="#DB504A" dotCount={5} speed={400} />
<DotsLoading size={14} color="#21295C" speed={900} />
</View>
);
}`} />

## Uso

```jsx
import {DotsLoading} from 'rn-inkpad';

<DotsLoading />
<DotsLoading size={6} color="#DB504A" dotCount={5} speed={400} />
```

## Props

<div class="table-responsive">
| Nombre | Tipo | Por defecto | Descripción |
| --- | --- | --- | --- |
| size | `number` | 10 | Dot diameter. |
| color | `string` | theme primary | Dot color. |
| dotCount | `number` | 3 | Number of dots. |
| speed | `number` | 600 | Duration of one cycle in milliseconds. |
| style | `ViewStyle` | | Container style. |
</div>
