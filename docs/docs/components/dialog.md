---
sidebar_position: 4
title: Dialog
---

# Dialog

Centered modal with a title, content and footer buttons. For quick confirmations without
markup use [Alert](./alert).

<Snack name="Dialog" code={`import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Dialog} from 'rn-inkpad';

export default function App() {
const [visible, setVisible] = useState(false);
const [result, setResult] = useState('');
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, gap: 16}}>
<Button text="Delete project" onPress={() => setVisible(true)} />
<Text style={{textAlign: 'center'}}>{result}</Text>
<Dialog
visible={visible}
title="Delete project?"
showCloseButton
onClose={() => setVisible(false)}
buttons={[
{text: 'Cancel', onPress: () => { setResult('Cancelled'); setVisible(false); }},
{text: 'Delete', variant: 'solid', color: '#EF4444', onPress: () => { setResult('Deleted'); setVisible(false); }},
]}>
This action cannot be undone.
</Dialog>
</View>
);
}`} />

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| visible | `boolean` | | Shows the dialog. |
| onClose | `() => void` | | Called from the backdrop, close button and back button. |
| title | `string` | | Title. |
| children | `ReactNode` | | Body. Strings are wrapped in a Text. |
| buttons | `{text: string; onPress: () => void; variant?: 'text' \| 'solid'; color?: string}[]` | | Footer buttons, right aligned. |
| closeOnBackdrop | `boolean` | true | Tap the backdrop to close. |
| showCloseButton | `boolean` | false | Close button in the header. |
| closeIcon | `IconProp` | built-in cross | Close button icon. |
| animationType | `'none' \| 'fade' \| 'slide'` | fade | Modal animation. |
| width | `DimensionValue` | 85% | Card width (max 480). |
| backgroundColor | `string` | theme background | Card color. |
| backdropColor | `string` | theme overlay | Backdrop color. |
| radius | `number` | theme radius lg | Card radius. |
| style | `StyleProp<ViewStyle>` | | Card style. |
| titleStyle | `StyleProp<TextStyle>` | | Title style. |
</div>
