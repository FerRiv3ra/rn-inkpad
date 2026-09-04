---
sidebar_position: 10
title: PaginationDots
---

# PaginationDots

Indicador de página para carruseles y onboarding.

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
