---
sidebar_position: 15
title: Snackbar
---

# Snackbar

Mensajes en cola abajo (o arriba) con acción opcional. Monta `SnackbarProvider` una vez y usa `useSnackbar()` debajo. Se muestran uno tras otro.
call `useSnackbar()` anywhere below it. Messages are shown one after another.

<Snack name="Snackbar" code={`import React from 'react';
import {View} from 'react-native';
import {Button, SnackbarProvider, useSnackbar} from 'rn-inkpad';

const Screen = () => {
const snackbar = useSnackbar();
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, gap: 12}}>
<Button text="Simple" onPress={() => snackbar.show('Saved')} />
<Button
text="With action"
onPress={() =>
snackbar.show({
text: 'Message deleted',
action: {text: 'Undo', onPress: () => snackbar.show('Restored')},
})
}
/>
</View>
);
};

export default function App() {
return (
<SnackbarProvider>
<Screen />
</SnackbarProvider>
);
}`} />

## API

```ts
const {show, hide, clear} = useSnackbar();

show('Saved'); // returns an id
show({text: 'Deleted', action: {text: 'Undo', onPress}, duration: 5000});
hide(); // hides the current one
hide(id); // removes a specific one (queued or shown)
clear(); // drops the queue
```

### SnackbarProvider props

<div class="table-responsive">
| Nombre | Tipo | Por defecto | Descripción |
| --- | --- | --- | --- |
| position | `'top' \| 'bottom'` | bottom | Where snackbars appear. |
| offset | `number` | 24 | Distance from the screen edge. |
| duration | `number` | 3000 | Default auto-hide in milliseconds. |
| testID | `string` | | Root testID (`${testID}-action` for the action). |
</div>

### show() options

<div class="table-responsive">
| Nombre | Tipo | Por defecto | Descripción |
| --- | --- | --- | --- |
| text | `string` | | Message. |
| duration | `number` | provider duration | Auto-hide. `0` keeps it until dismissed. |
| action | `{text: string; onPress: () => void}` | | Action button. Pressing it hides the snackbar. |
| icon | `IconProp` | | Leading icon. |
| backgroundColor | `string` | #1F2937 | Background. |
| textColor | `string` | #FFFFFF | Text color. |
| actionColor | `string` | theme primary | Action text color. |
</div>
