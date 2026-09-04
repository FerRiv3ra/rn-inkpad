---
sidebar_position: 16
title: Stepper
---

# Stepper

Multi-step progress, horizontal or vertical, with numbers or icons.

<Snack name="Stepper" code={`import React, {useState} from 'react';
import {View} from 'react-native';
import {CreditCard, PackageCheck, Truck, User} from 'lucide-react-native';
import {Button, Stepper} from 'rn-inkpad';

const steps = [
{label: 'Account', icon: User},
{label: 'Payment', icon: CreditCard},
{label: 'Shipping', icon: Truck},
{label: 'Done', icon: PackageCheck},
];

export default function App() {
const [current, setCurrent] = useState(1);
return (
<View style={{flex: 1, justifyContent: 'center', padding: 24, gap: 24}}>
<Stepper steps={steps} current={current} onStepPress={setCurrent} />
<Button text="Next" onPress={() => setCurrent((current + 1) % steps.length)} />
</View>
);
}`} />

## Usage

```jsx
import {Stepper} from 'rn-inkpad';

<Stepper steps={[{label: 'Cart'}, {label: 'Payment'}, {label: 'Done'}]} current={1} />
<Stepper orientation="vertical" steps={steps} current={0} onStepPress={setCurrent} />
```

## Props

<div class="table-responsive">
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| steps | `{label?: string; icon?: IconProp}[]` | | Steps. |
| current | `number` | | Active step (0-based). Previous steps are completed. |
| orientation | `'horizontal' \| 'vertical'` | horizontal | Layout. |
| activeColor | `string` | theme primary | Active step color. |
| completedColor | `string` | activeColor | Completed steps color. |
| pendingColor | `string` | theme border | Pending steps color. |
| textColor | `string` | | Label color. |
| completedIcon | `IconProp` | built-in check | Icon drawn on completed steps. |
| onStepPress | `(index: number) => void` | | Makes the steps pressable. |
| size | `number` | 28 | Circle diameter. |
| style | `StyleProp<ViewStyle>` | | Container style. |
| labelStyle | `StyleProp<TextStyle>` | | Label style. |
</div>
