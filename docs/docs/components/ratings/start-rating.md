---
sidebar_position: 11.2
title: StarRating
---

# StarRating

The **StarRating** component in our library is a user-friendly interface element used to collect ratings from users. It typically presents a series of stars that users can click or tap to indicate their rating preference, ranging from one star (lowest) to five stars (highest). Star ratings are commonly used in various applications and websites to gather feedback on products, services, or content.

<Snack name="StarRating" code={`import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {StarRating} from 'rn-inkpad';

export default function App() {
const [value, setValue] = useState(3);
const color = value <= 2 ? '#EF4444' : value <= 4 ? '#FFD700' : '#22C55E';
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, gap: 24}}>
<StarRating
defaultRating={3}
iconColor={color}
textColor={color}
onChange={setValue}
reviews={['Terrible', 'Poor', 'Fair', 'Good', 'Excellent']}
size={40}
/>
<Text style={{textAlign: 'center'}}>Rating: {value}</Text>
<StarRating defaultRating={4} justRating readOnly size={28} />
</View>
);
}`} />

## Usage

### Basic usage

```jsx
import {StarRating} from 'rn-inkpad';

const MyComponent = () => {
  return <StarRating />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306851/packages/ratings/star-simple_yfdwgl.gif" />

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| defaultRating | `number` | 3 | Default selected rating. |
| iconColor | `string` | #FFD700 | Rating icon color. |
| justRating | `boolean` | false | Hide review. |
| readOnly | `boolean` | false | Turn on read-only. |
| reviews | `string[]` | ['Terrible', 'Bad', 'Okay', 'Good', 'Great'] | Array of reviews. |
| size | `number` | 35 | Icon size. |
| style | `StyleProp<ViewStyle>` | | Custom styles for your rating component. |
| textColor | `string` | #FFD700 | Review text color. |
| textSize | `number` | 30 | Review text size. |
| onChange | `(value: number) => void` |  | Function that returns the new rating value. |
</div>

:::tip[Information]

The number of reviews submitted in the array will define the number of stars that will appear.

:::

## Usage with props

```jsx
import React, {useState} from 'react';

import {StarRating} from 'rn-inkpad';

const MyComponent = () => {
  const [value, setValue] = useState(1);

  return (
    <StarRating
      defaultRating={1}
      iconColor={value <= 2 ? '#FF0000' : value <= 4 ? '#FFD700' : '#7EE081'}
      onChange={setValue}
      reviews={['Terrible', 'Poor', 'Fair', 'Good', 'Excellent', 'Fabulous']}
      size={40}
      textColor={value <= 2 ? '#FF0000' : value <= 4 ? '#FFD700' : '#7EE081'}
      textSize={35}
    />
  );
};
```

### Example with props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306851/packages/ratings/star-props_cnv5d5.gif" />

## Custom icons

```jsx
import {Star, StarOff} from 'lucide-react-native';

<StarRating icons={{full: Star, empty: StarOff}} />;
```

| Name  | Type                                | Default        | Description   |
| ----- | ----------------------------------- | -------------- | ------------- |
| icons | `{full: IconProp; empty: IconProp}` | built-in stars | Custom icons. |
