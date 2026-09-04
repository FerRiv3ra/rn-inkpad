---
sidebar_position: 11
title: PinInput
---

# PinInput

One-time-code / PIN entry with separate cells and a single hidden input, so paste and
autofill work.

<Snack name="PinInput" code={`import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {PinInput} from 'rn-inkpad';

export default function App() {
const [code, setCode] = useState('');
const [done, setDone] = useState('');
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, gap: 24}}>
<PinInput length={4} value={code} onChange={setCode} onComplete={setDone} autoFocus />
<Text style={{textAlign: 'center'}}>{done ? 'Completed: ' + done : 'Typing: ' + code}</Text>
<PinInput length={6} variant="underline" secure size={40} />
</View>
);
}`} />

## Usage

```jsx
import {PinInput} from 'rn-inkpad';

<PinInput length={6} onComplete={verify} autoFocus />
<PinInput length={4} secure variant="underline" />
<PinInput length={4} defaultValue="1234" error />
```

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| length | `number` | 4 | Number of cells. |
| value | `string` | | Controlled value. |
| defaultValue | `string` | '' | Initial value (uncontrolled). |
| onChange | `(value: string) => void` | | Called on every change. |
| onComplete | `(value: string) => void` | | Called once all cells are filled. |
| secure | `boolean` | false | Masks the digits. |
| numeric | `boolean` | true | Accept digits only. |
| keyboardType | `KeyboardTypeOptions` | number-pad | Keyboard. |
| autoFocus | `boolean` | false | Focus on mount. |
| disabled | `boolean` | false | Disables input. |
| error | `boolean` | false | Error state (red border). |
| variant | `'box' \| 'underline'` | box | Cell style. |
| size | `number` | 48 | Cell size. |
| gap | `number` | 10 | Space between cells. |
| radius | `number` | theme radius md | Cell radius (box). |
| color | `string` | theme primary | Focused cell color. |
| borderColor | `string` | theme border | Idle cell color. |
| focusedColor | `string` | color | Focused cell color. |
| errorColor | `string` | theme error | Error color. |
| textColor | `string` | theme text | Digit color. |
| backgroundColor | `string` | theme surface (box) | Cell background. |
| style, cellStyle, textStyle | `StyleProp` | | Custom styles. |
</div>
