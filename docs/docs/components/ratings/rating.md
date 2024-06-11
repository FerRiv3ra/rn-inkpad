---
sidebar_position: 11.1
title: Rating
---

# Rating

The **Rating** component of our library is a user interface element used to display the rating that users have assigned to a product, service, or content. It usually appears as a series of stars or other symbols that you can customize, usually ranging from one star (lowest) to five stars (highest). Ratings provide valuable information about user satisfaction and preferences, helping developers and companies improve their products or services.

:::tip[Information]

This is a read-only component for the purpose of displaying the rating.

:::

## Usage

### Basic usage

```jsx
import {Rating} from 'rn-inkpad';

const MyComponent = () => {
  return <Rating />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306851/packages/ratings/rating-simple_isph7t.png" />

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| color | `string` | '#FFD700' | Rating icon color. |
| icon | `'heart' \| 'star'` | star | Rating icon. |
| rating | `number` | 3 | Rating. |
| size | `number` | 35 | Rating icon size. |
| style | `StyleProp<ViewStyle>` | | Custom styles for your rating component. |
| total | `number` | 5 | Rating max value. |
</div>

## Usage with props

```jsx
import {Rating} from 'rn-inkpad';

const MyComponent = () => {
  return <Rating color="#FF0000" icon="heart" rating={4.5} />;
};
```

### Example with props

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306850/packages/ratings/rating-props_nyrl3h.png" />
