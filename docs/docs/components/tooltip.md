---
sidebar_position: 18
title: Tooltip
---

# Tooltip

Small bubble with extra information, shown when the wrapped element is pressed. It flips
below the element when there is no room above.

## Usage

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
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | `string` | | Tooltip content. |
| children | `ReactElement` | | Element that toggles the tooltip. |
</div>
