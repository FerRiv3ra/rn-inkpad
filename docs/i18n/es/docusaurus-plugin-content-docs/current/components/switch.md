---
sidebar_position: 15
title: Switch
---

# Switch

The **Switch** component in our library is a user interface element used to toggle between two states, typically representing an "on" and "off" state. It appears as a small sliding button that users can tap or drag to change its position, thereby toggling between the two states. Switches are commonly used in applications for settings such as enabling or disabling a feature, activating or deactivating notifications, or switching between light and dark modes.

## Usage

### Basic usage

```jsx
import {Switch} from 'rn-inkpad';

const MyComponent = () => {
  return <Switch />;
};
```

<img width="40%"  src="/img/switch/switch-simple.gif" />

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| isOn | `boolean` | false | Set on or off. |
| backgrounColor | `string` | #1DFF56 | Activated background color. |
| border | `boolean` | false | Turn the border on or off. |
| borderColor | `string` | | Border color. |
| borderWidth | `number` | 2 | Border width. |
| fullWidth | `boolean` | false | Acctivate full width. |
| justifyContent | `FlexStyle.justifyContent` | | Horizontal alignment. |
| text | `string` | | Switch text. |
| textStyle | `StyleProp<TextStyle>` | | Custom styles for your switch. |
| onChange | `(value: boolean) => void` | | Function that returns the boolean value of the switch. |
</div>

## Usage props

```jsx
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import {Switch} from 'rn-inkpad';

const MyComponent = () => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <Switch
      backgrounColor="#DB504A"
      border
      borderColor="#DB504A"
      fullWidth
      isOn={confirmed}
      justifyContent="space-between"
      onChange={setConfirmed}
      text="Turn on notifications"
      textStyle={styles.text}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
```

### Example with props

<img width="40%"  src="/img/switch/switch-props.gif" />
