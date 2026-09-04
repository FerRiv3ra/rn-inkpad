---
sidebar_position: 2
title: Badge
---

# Badge

Small counter or dot, inline or attached to a corner of another element.

<Snack name="Badge" code={`import React from 'react';
import {View} from 'react-native';
import {Bell, Mail} from 'lucide-react-native';
import {Badge, Button} from 'rn-inkpad';

export default function App() {
return (
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: 24}}>
<Badge value={3}><Bell size={28} /></Badge>
<Badge value={150} max={99} color="#576DEC"><Mail size={28} /></Badge>
<Badge dot color="#22C55E"><Bell size={28} /></Badge>
<Badge value="NEW" position="top-left"><Button text="Updates" /></Badge>
<Badge value={7} />
</View>
);
}`} />

## Usage

```jsx
import {Bell} from 'lucide-react-native';
import {Badge} from 'rn-inkpad';

<Badge value={3}>
  <Bell size={28} />
</Badge>

<Badge value={150} max={99} />   // renders "99+"
<Badge dot color="#22C55E" />
```

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | `number \| string` | | Content. Numbers above `max` render as `max+`. `0`, empty or undefined hide the badge. |
| max | `number` | 99 | Cap for numeric values. |
| dot | `boolean` | false | Small dot without text. |
| color | `string` | theme secondary | Background color. |
| textColor | `string` | #FFFFFF | Text color. |
| size | `number` | 18 (10 for dots) | Height of the badge. |
| position | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | top-right | Corner used when wrapping children. |
| visible | `boolean` | true | Hide the badge but keep the children. |
| children | `ReactNode` | | Element the badge is attached to. |
| style | `StyleProp<ViewStyle>` | | Wrapper (or badge, when inline) style. |
</div>
