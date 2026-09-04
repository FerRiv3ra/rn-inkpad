---
sidebar_position: 18
title: Tooltip
---

# Tooltip

Burbuja con información extra, visible al pulsar el elemento envuelto. Se coloca debajo cuando no hay espacio arriba.
below the element when there is no room above.

## Uso

```jsx
import {Info} from 'lucide-react-native';
import {Tooltip} from 'rn-inkpad';

<Text>
  Information{' '}
  <Tooltip text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
    <Info size={20} />
  </Tooltip>
</Text>;
```

## Props

<div class="table-responsive">
| Nombre | Tipo | Por defecto | Descripción |
| --- | --- | --- | --- |
| text | `string` | | Tooltip content. |
| children | `ReactElement` | | Element that toggles the tooltip. |
</div>
