---
sidebar_position: 16
title: TabControl
---

# TabControl

The **TabControl** component in our library is a versatile navigational element used to organize and present multiple views or sections within an application. It typically appears as a set of tabs arranged horizontally or vertically, with each tab representing a distinct content area or feature. Users can switch between tabs to access different parts of the application quickly and intuitively. TabControls are commonly used in applications with complex navigation structures, such as settings screens, multi-step processes, or content-rich interfaces.

<Snack name="TabControl" code={`import React from 'react';
import {View, Text} from 'react-native';
import {TabControl} from 'rn-inkpad';

const Tab = ({label}) => (
<View style={{height: 120, alignItems: 'center', justifyContent: 'center'}}>
<Text style={{fontWeight: '600'}}>{label}</Text>
</View>
);
const First = () => <Tab label="First tab content" />;
const Second = () => <Tab label="Second tab content" />;
const Third = () => <Tab label="Third tab content" />;

export default function App() {
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, gap: 16}}>
<TabControl values={[{key: 'First', renderItem: First}, {key: 'Second', renderItem: Second}, {key: 'Third', renderItem: Third}]} />
<TabControl label="Custom colors" selectedIndex={1} backgroundTabColor="#C3F3C0" tabTintColor="#21295C" selectedTextColor="#FFF" values={[{key: 'First', renderItem: First}, {key: 'Second', renderItem: Second}]} />
</View>
);
}`} />

## Usage

### Basic usage

```js
import {TabControl} from 'rn-inkpad';

import {FormUser, Users} from './components';

const App = () => {
  const values = [
    {key: 'Add user', renderItem: FormUser},
    {key: 'Users', renderItem: Users},
  ];

  return <TabControl values={values} />;
};
```

### Properties

| Prop                     | Description                                               | Type                                       | Required | Default     |
| ------------------------ | --------------------------------------------------------- | ------------------------------------------ | -------- | ----------- |
| **`values`**             | Key and renderItem array to generate each tab.            | `{key: string; renderItem: JSX.Element}[]` | **Yes**  | _None_      |
| **`label`**              | The label with which you want to identify the tabControl. | `string`                                   | No       | _None_      |
| **`labelStyle`**         | Styles for label.                                         | `StyleProp<TextStyle>`                     | No       | _None_      |
| **`selectedIndex`**      | Selected initial value.                                   | `number`                                   | No       | `0`         |
| **`backgroundTabColor`** | TabControl background color.                              | `string`                                   | No       | `'#CCCCCC'` |
| **`tabTintColor`**       | Tint color for the selected tab.                          | `string`                                   | No       | `'#FFFFFF'` |
| **`textColor`**          | Text color in the TabControl.                             | `string`                                   | No       | `'#000000'` |
| **`selectedTextColor`**  | Text color en the selected tab.                           | `string`                                   | No       | `'#000000'` |
| **`containerStyle`**     | Styles for the rendered component.                        | `StyleProp<ViewStyle>`                     | No       | _None_      |
| **`style`**              | Styles for the component container.                       | `StyleProp<ViewStyle>`                     | No       | _None_      |

### Example

<p align="center" width="100%">
    <img width="33%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1709313674/GitHub/tabControl_jntf6i.gif" /> 
</p>
