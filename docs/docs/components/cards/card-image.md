---
sidebar_position: 5.2
title: CardImage
---

# CardImage

The **CardImage** component in our library is a specialized element within a card layout designed to prominently display an image as the focal point of the card. This component is ideal for showcasing visual content such as photographs, illustrations, or graphics within a structured card format.

## Usage

### Basic usage

```jsx
import React from 'react';
import {CardImage} from 'rn-inkpad';

import Landscape from './assets/landscape.jpeg';

const MyComponent = () => {
  return <CardImage source={Landscape} />;
};
```

<img width="40%"  src="/img/cards/cardimage-simple.gif" />

## Props

<div class="table-responsive">
| Name | Type | Required | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| source | ImageSourcePropType | **YES** | Image source.|
| loadTime | `number` | _NO_ | Image loading time. |
| text | `string` | _NO_ | Description text. |
| theme | [Theme](#theme-props) | _NO_ | Personalize your card. |
</div>

:::tip[Information]

The image starts with a blur effect and decreases as the loading time progresses.

:::
:::note[Note]

If you don't want that effect, you can submit a load time of 0 milliseconds.

:::

### Theme props

<div class="table-responsive">
| Name | Type | Default | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| backgroundColor | `string` |  | Card background color.|
| fontSize | `number` |  | Text information font size. |
| fontColor | `string` |  | Text information color. |
| fontWeight | `string` |  | Font weight. |
| radius | `number` | 15 | Border radius. |
| shadow | `boolean` |  | Turn shadow on or off. |
</div>

## Usage with personalized theme

```jsx
import React from 'react';
import {CardImage} from 'rn-inkpad';

import Landscape from './assets/landscape.jpeg';

const MyComponent = () => {
  return (
    <CardImage
      source={Landscape}
      text="Landscape"
      loadTime={0}
      theme={{
        backgroundColor: '#EEEEEE',
        fontSize: 16,
        fontColor: '#DB504A',
        fontWeight: '700',
        shadow: true,
        radius: 0,
      }}
    />
  );
};
```

### Example with personalized theme

<img width="40%"  src="/img/cards/cardimage-themed.png" />
