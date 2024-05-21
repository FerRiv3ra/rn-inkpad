---
sidebar_position: 7
title: Icon
---

# Icon

The **Icon** component in our library is a versatile element used to represent visual symbols or glyphs within an application's user interface. Icons serve various purposes, such as indicating actions, conveying information, or representing objects or concepts.

:::tip[Information]

You can see and search your icons on the official [Ionicons](https://ionic.io/ionicons) page.

:::

## Usage

### Basic usage

```jsx
import React from 'react';

import {CheckBox} from 'rn-inkpad';

const MyComponent = () => {
  return <Icon name="airplane" size={28} />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306849/packages/icon/icon-simple_drhciv.png" />

## Props

<div class="table-responsive">
| Name | Type | Required | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| name | `string` | **YES** | Icon identifier to use. |
| color | `string` | _NO_ | Icon color. |
| size | `number` | _NO_ | Icon size. |
| style | `StyleProp<TextStyle>` | _NO_ | Personalized styles for your icon. |
</div>

:::tip[Information]

Not all text properties work on icons, for example the fontWeight property does not work, you can see this [issue](https://github.com/oblador/react-native-vector-icons/issues/1188) in the official [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons/) package.

:::

:::note[Why use this component and not the one in the package?]

Using this component instead of the one already provided by the [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons/) package offers you a unique advantage and that is the type in the name of the icons to avoid typing errors.

:::
