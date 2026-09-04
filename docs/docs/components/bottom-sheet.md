---
sidebar_position: 3
title: BottomSheet
---

# BottomSheet

Sheet that slides from the bottom. Drag it down or tap the backdrop to close.

<Snack name="BottomSheet" code={`import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {BottomSheet, Button, Divider} from 'rn-inkpad';

export default function App() {
const [visible, setVisible] = useState(false);
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24}}>
<Button text="Open sheet" onPress={() => setVisible(true)} />
<BottomSheet visible={visible} onClose={() => setVisible(false)}>
<View style={{padding: 20, gap: 12}}>
<Text style={{fontSize: 20, fontWeight: '700'}}>Share</Text>
<Text>Sized to its content. Drag down to dismiss.</Text>
<Divider />
<Button text="Close" onPress={() => setVisible(false)} />
</View>
</BottomSheet>
</View>
);
}`} />

## Usage

```jsx
import {BottomSheet} from 'rn-inkpad';

<BottomSheet visible={visible} onClose={() => setVisible(false)}>
  <Content />
</BottomSheet>

<BottomSheet visible={visible} height={400} onClose={close} backgroundColor="#F3F4F6" />
```

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| visible | `boolean` | | Shows the sheet. |
| onClose | `() => void` | | Called when the user asks to close (backdrop, drag, back button). Set `visible` to false in it. |
| children | `ReactNode` | | Content. |
| height | `number` | content height | Fixed height. |
| backgroundColor | `string` | theme background | Sheet color. |
| backdropColor | `string` | theme overlay | Backdrop color. |
| radius | `number` | theme radius lg | Top corners radius. |
| showHandle | `boolean` | true | Drag handle at the top. |
| handleColor | `string` | theme border | Handle color. |
| closeOnBackdrop | `boolean` | true | Tap the backdrop to close. |
| dragToClose | `boolean` | true | Drag the sheet down to close. |
| style | `StyleProp<ViewStyle>` | | Sheet style. |
</div>
