---
sidebar_position: 6
title: Checkbox
---

# Checkbox

The **Checkbox** component in our library is a user interface element used to enable users to select or deselect options. It typically appears as a small box that can be checked or unchecked, indicating the state of the option. Checkboxes are commonly used in forms, settings, or list items where users need to make multiple selections from a list of options.

<Snack name="CheckBox" code={`import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SquareCheckBig, Square} from 'lucide-react-native';
import {CheckBox} from 'rn-inkpad';

export default function App() {
const [checked, setChecked] = useState(false);
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, gap: 16}}>
<CheckBox title="Default glyph" />
<CheckBox title="Accept terms" checked={checked} onChange={setChecked} iconColor="#DB504A" iconSize={24} />
<Text>{checked ? 'Checked' : 'Unchecked'}</Text>
<CheckBox title="Custom lucide icons" checkedIcon={SquareCheckBig} unCheckedIcon={Square} iconColor="#22C55E" />
</View>
);
}`} />

## Usage

### Basic usage

```jsx
import React from 'react';

import {CheckBox} from 'rn-inkpad';

const MyComponent = () => {
  return <CheckBox />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306848/packages/checkbox/checkbox-simple_xz2qb8.png" />

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
|checkedIcon| `string` | checkbox-outline | Icon when selected. |
|checked| `boolean` | false | Enable/disable selection. |
|iconColor| `string` | #464EE5 | Checkbox color. |
|iconSize| `number` | 20 | Checkbox size. |
|style| `StyleProp<ViewStyle>` | | Personalized styles for your checkbox. |
|textColor| `string` |  | Text color. |
|textStyle| `StyleProp<TextStyle>` | | Personalized styles for checkbox text. |
|title| `string` | Item | Checkbox text. |
|unCheckedIcon| `string` | square-outline | Icon when unselected. |
|onChange| `(value: boolean) => void` | | Function that captures the current value of the checkbox. |
</div>

## Usage with props

```jsx
import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {CheckBox} from 'rn-inkpad';

const MyComponent = () => {
  const [checked, setIsChecked] = useState(false);

  return (
    <View>
      <CheckBox
        checked={checked}
        iconColor={'#DB504A'}
        iconSize={25}
        textStyle={{fontSize: 20}}
        onChange={setIsChecked}
        title={'Item 1'}
      />

      <Text style={{marginTop: 10, fontWeight: '700'}}>
        {checked ? 'Checked' : 'Unchecked'}
      </Text>
    </View>
  );
};
```

### Example with props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306848/packages/checkbox/checkbox-props_gyb5q6.gif" />
