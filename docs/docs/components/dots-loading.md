---
sidebar_position: 6
title: DotsLoading
---

# DotsLoading

Lightweight loading indicator made of bouncing dots.

## Usage

```jsx
import {DotsLoading} from 'rn-inkpad';

<DotsLoading />
<DotsLoading size={6} color="#DB504A" dotCount={5} speed={400} />
```

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| size | `number` | 10 | Dot diameter. |
| color | `string` | theme primary | Dot color. |
| dotCount | `number` | 3 | Number of dots. |
| speed | `number` | 600 | Duration of one cycle in milliseconds. |
| style | `ViewStyle` | | Container style. |
</div>
