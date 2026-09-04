---
sidebar_position: 14
title: Skeleton
---

# Skeleton

Placeholder con pulso que se muestra mientras carga el contenido.

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
