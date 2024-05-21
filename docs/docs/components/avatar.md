---
sidebar_position: 3
title: Avatar
---

# Avatar

The **Circle Avatar** component in our library is a visually appealing element used to represent users or entities within an application. It typically displays a circular image or icon, often depicting a person's profile picture or a symbolic representation of an entity. Circle Avatars add a personal touch to user interfaces, facilitating easy identification and enhancing the overall aesthetic appeal. With customizable size, border, and content options, our Circle Avatar component offers flexibility to suit various design preferences and application needs.

## Usage

### Basic usage

```jsx
import React from 'react';
import {CircleAvatar} from 'rn-inkpad';

const MyComponent = () => {
  return <CircleAvatar />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/avatar/avatar-simple_atcnbs.png" />

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
|backgroundColor | `string` | #373099 | Background color around your Avatar. |
|defaultText | `string` | 'AA' | Text that appears by default if there is no image. |
|fontSize | `number` | 26 | Default text size |
|image | `ImageSourcePropType` |  | Avatar image |
|size | `number` | 50 | Avatar size |
|textColor | `string` | #FFFFFF | Default text color |
|onPress | `() => void` |  | Function that is executed when the avatar is pressed. |

</div>

## Usage with props

```jsx
import React from 'react';
import {View, StyleSheet} from 'react-native';

import {CircleAvatar} from 'rn-inkpad';

import Avatar from './assets/james_hetfield.jpeg';

const MyComponent = () => {
  return (
    <View styles={styles.container}>
      <CircleAvatar size={80} defaultText="JH" />
      <CircleAvatar size={80} image={Avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
```

### Example

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/avatar/avatar-props_sjnpmw.png" />
