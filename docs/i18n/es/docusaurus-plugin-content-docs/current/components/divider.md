---
sidebar_position: 5
title: Divider
---

# Divider

Separador fino, horizontal o vertical, con etiqueta centrada opcional.

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
