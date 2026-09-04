---
sidebar_position: 10
title: PaginationDots
---

# PaginationDots

Indicador de página para carruseles y onboarding.

<Snack name="PaginationDots" code={`import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, PaginationDots} from 'rn-inkpad';

export default function App() {
const [page, setPage] = useState(0);
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, gap: 16}}>
<PaginationDots count={5} index={page} onChange={setPage} />
<Text style={{textAlign: 'center'}}>Page {page + 1} of 5</Text>
<Button text="Next" rounded onPress={() => setPage((page + 1) % 5)} />
<PaginationDots count={4} index={1} expanding={false} activeColor="#DB504A" />
<PaginationDots count={6} index={3} size={12} gap={10} activeColor="#22C55E" />
</View>
);
}`} />

## Uso

```jsx
import {PaginationDots} from 'rn-inkpad';

<PaginationDots count={5} index={page} onChange={setPage} />
<PaginationDots count={4} index={1} expanding={false} activeColor="#DB504A" />
```

## Props

<div class="table-responsive">
| Nombre | Tipo | Por defecto | Descripción |
| --- | --- | --- | --- |
| count | `number` | | Number of pages. |
| index | `number` | | Active page (0-based). |
| onChange | `(index: number) => void` | | Makes the dots pressable. |
| activeColor | `string` | theme primary | Active dot color. |
| color | `string` | theme border | Inactive dot color. |
| size | `number` | 8 | Dot diameter. |
| gap | `number` | 6 | Space between dots. |
| expanding | `boolean` | true | Active dot stretches to 2.5x its width. |
| style | `StyleProp<ViewStyle>` | | Container style. |
</div>
