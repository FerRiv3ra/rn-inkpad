---
sidebar_position: 1
title: Accordion
---

# Accordion

Collapsible sections. Single or multiple open, controlled or uncontrolled.

<Snack name="Accordion" code={`import React from 'react';
import {View, Text} from 'react-native';
import {CircleHelp, Wallet} from 'lucide-react-native';
import {Accordion} from 'rn-inkpad';

const items = [
{title: 'What is rn-inkpad?', icon: CircleHelp, content: 'A dependency-free UI kit for React Native.'},
{title: 'Is it free?', icon: Wallet, content: 'Yes, MIT licensed.'},
{title: 'Custom content', content: <Text style={{color: 'tomato'}}>Any React node.</Text>},
];

export default function App() {
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24}}>
<Accordion items={items} defaultExpanded={[0]} />
</View>
);
}`} />

## Usage

```jsx
import {Accordion} from 'rn-inkpad';

<Accordion
  items={[
    {title: 'Shipping', content: 'Free over $50.'},
    {title: 'Returns', content: <ReturnsPolicy />},
  ]}
  defaultExpanded={[0]}
/>

// controlled, several open at once
<Accordion items={items} multiple expanded={open} onChange={setOpen} />
```

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| items | `{title: string; content: ReactNode; icon?: IconProp; disabled?: boolean}[]` | | Sections. String content is wrapped in a Text. |
| multiple | `boolean` | false | Allow several open sections. |
| defaultExpanded | `number[]` | [] | Initially open indexes (uncontrolled). |
| expanded | `number[]` | | Open indexes (controlled). |
| onChange | `(expanded: number[]) => void` | | Called with the new open indexes. |
| expandIcon | `IconProp` | chevron down | Icon of closed sections. |
| collapseIcon | `IconProp` | chevron up | Icon of open sections. |
| color | `string` | theme text | Title and icon color. |
| borderColor | `string` | theme border | Border color. |
| style | `StyleProp<ViewStyle>` | | Container style. |
| titleStyle | `StyleProp<TextStyle>` | | Title style. |
| contentStyle | `StyleProp<ViewStyle>` | | Content wrapper style. |
</div>
