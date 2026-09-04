---
sidebar_position: 9.1
title: BottomTabNavigation
---

# BottomTabNavigation

The **BottomTabNavigation** component in our library is a navigational element typically placed at the bottom of the screen in mobile applications. It provides users with quick access to different sections or views of the app, enhancing navigation efficiency. Each tab represents a specific category or feature, and users can switch between tabs to access different parts of the application seamlessly. BottomTabNavigation promotes intuitive exploration of app content and functionality, offering a consistent and familiar navigation pattern across screens.

<Snack name="BottomTabNavigation" code={`import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Bell, House, Plus, Search, Settings} from 'lucide-react-native';
import {BottomTabNavigation} from 'rn-inkpad';

const tabs = ['Home', 'Search', 'Add', 'Alerts', 'Settings'];

export default function App() {
const [tab, setTab] = useState(0);
return (
<View style={{flex: 1, backgroundColor: '#F4F5F7'}}>
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
<Text style={{fontSize: 24, fontWeight: '700'}}>{tabs[tab]}</Text>
</View>
<BottomTabNavigation
selectedIndex={0}
highlightedIconColor="#FFF"
values={[
{icon: House, text: 'Home', onPress: () => setTab(0)},
{icon: Search, text: 'Search', onPress: () => setTab(1)},
{icon: Plus, text: 'Add', highlighted: true, onPress: () => setTab(2)},
{icon: Bell, text: 'Alerts', onPress: () => setTab(3)},
{icon: Settings, text: 'Settings', onPress: () => setTab(4)},
]}
/>
</View>
);
}`} />

## Usage

### Basic usage

```jsx
import {View} from 'react-native';

import {BottomTabNavigation} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <View style={{flex: 1}}>
      <BottomTabNavigation />
    </View>
  );
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306850/packages/navigations/bottomtab-simple_f3aedl.png" />

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| backgroundColor | `string` | #FFFFFF | Background color. |
| highlightedBgColor | `string` | #DB504A | Background color of a highlighted element. |
| highlightedIconColor | `string` | | Icon color of a highlighted element. |
| iconColor | `string` | | Tab icon color. |
| iconSize | `number` | 25 | Tab icon size. |
| labelStyle | `StyleProp<TextStyle>` | | Custom styles for labels. |
| selectedColor | `string` | #DB504A | Color of the indicator of a selected tab. |
| selectedheight | `number` | 5 | Height of the indicator of a selected tab. |
| selectedIndex | `number` | | Selected index. |
| textColor | `string` | | Label color. |
| values | [NavigationItem[]](#navigationitem-props) | `[{icon: 'home', text: 'Home'}]` | Array of each of the tabs. |
</div>

### NavigationItem props

<div class="table-responsive">
| Name | Type | Required | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| highlighted | `boolean` | _NO_ | Activate element highlighting. |
| icon | `string` | _NO_ | Tab icon. |
| text | `string` | _NO_ | Tab label. |
| onPress | `() => void` | _NO_ | Callback that is called when tab is pressed. |
</div>

:::tip[Information]

This navigation only provides the style for your navigation, however to navigate to different screens you must install a navigation package.

:::

## Usage with props

```jsx
import {View} from 'react-native';

import {BottomTabNavigation} from 'rn-inkpad';

const MyComponent = () => {
  return (
    <View style={{flex: 1}}>
      <BottomTabNavigation
        selectedIndex={0}
        highlightedIconColor="#FFF"
        values={[
          {icon: 'home', text: 'Home', onPress: () => console.log('Home')},
          {
            icon: 'search',
            text: 'Search',
            onPress: () => console.log('Search'),
          },
          {
            icon: 'add',
            text: 'Add',
            highlighted: true,
            onPress: () => console.log('Add'),
          },
          {
            icon: 'notifications',
            text: 'Alerts',
            onPress: () => console.log('Alerts'),
          },
          {
            icon: 'cog',
            text: 'Settings',
            onPress: () => console.log('Settings'),
          },
        ]}
      />
    </View>
  );
};
```

### Example with props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306849/packages/navigations/bottomtab-props_gwwgsg.png" />
