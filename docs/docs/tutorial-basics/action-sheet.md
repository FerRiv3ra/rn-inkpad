---
sidebar_position: 1
title: ActionSheet
---

# ActionSheet

An **ActionSheet** is a modal view that presents choices related to an action people initiate.

## Usage

### Basic usage

```jsx
import React, {useState} from 'react';
import {ActionSheet} from 'rn-inkpad';

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ActionSheet
      actions={[
        {
          text: 'Change profile picture',
          icon: 'ear',
          onPress: () => console.log('Change profile picture'),
        },
        {
          text: 'View profile picture',
          icon: 'eye',
          onPress: () => console.log('View profile picture'),
        },
        {
          text: 'View status',
          icon: 'bandage',
          onPress: () => console.log('View status'),
        },
      ]}
      setVisible={setIsVisible}
      description="Select any action below to proceed"
      title="Select an action"
      visible={isVisible}
    />
  );
};
```

## Props

<div class='table-responsive'>

| Name               | Type                                            | Required | Description                                            |
| ------------------ | ----------------------------------------------- | -------- | ------------------------------------------------------ |
| `visible`          | boolean                                         | **YES**  | Show/Hide ActionSheet                                  |
| `setVisible`       | (visible: boolean) => void                      | **YES**  | Function that controls the visibility of the component |
| `actions`          | **[Action[]](#action-props)**                   | _NO_     | Array of actions to show                               |
| `cancelText`       | string                                          | _NO_     | Text for cancel button                                 |
| `description`      | string                                          | _NO_     | Description text for your ActionSheet                  |
| `showCancelButton` | boolean                                         | _NO_     | Show cancel button                                     |
| `showIconOnIos`    | boolean                                         | _NO_     | Show action icon on iOS                                |
| `showCloseButton`  | boolean                                         | _NO_     | Show close button                                      |
| `theme`            | **[ActionSheetTheme](#actionsheettheme-props)** | _NO_     | Customize your ActionSheet theme.                      |
| `title`            | string                                          | _NO_     | Title for your ActionSheet.                            |

</div>

### Action props

<div class='table-responsive'>
| Name | Type | Required | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| text | string | **YES** | Action button text. |
| icon | string | _NO_ | Icon to show in the action. |
| iconColor | string | _NO_ | Personalized icon color. |
| textStyle | `StyleProp<TextStyle>` | _NO_ | Personalized styles for your text button. |
| onPress | `() => void` | **YES** | Function that is executed when the button is pressed. |
</div>

### ActionSheetTheme props

<div class='table-responsive'>
| Name | Type | Default iOS | Default Android |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| appearance | `'light' \| 'dark'` | System | System |
| backgroundColor | string | `Light: '#F4F4F4'  Dark: '#171717'` | `Light: '#FFFFFF'  Dark: '#171717'`|
| buttonColor | string | `Light: '#FFFFFF'  Dark: '#242625'` | `Light: '#FFFFFF'  Dark: '#171717'`|
| closeBackgroundColor | string | `Light: '#ECECEC'  Dark: '#1C1E1D'` | `Light: '#ECECEC'  Dark: '#1C1E1D'`|
| closeIconColor | string | `Light: '#767779'  Dark: '#959394'` | `Light: '#767779'  Dark: '#959394'`|
| separatorColor | string | `Light: '#E4E4E4'  Dark: '#343434'` | _N/A_ |
| textColor | string | `Light: '#0A0A0A'  Dark: '#FFFFFF'` | `Light: '#0A0A0A'  Dark: '#FFFFFF'`|
| theme | `'cupertino' \| 'material'` | System | System |
</div>

## Examples

### iOS

  <img width="40%"  src="/img/action-sheet/actionsheet-ios-light.png" /> 
   <img width="40%"  src="/img/action-sheet/actionsheet-ios-dark.png" />

### Android

  <img width="40%"  src="/img/action-sheet/actionsheet-android-light.png" /> 
  <img width="40%" src="/img/action-sheet/actionsheet-android-dark.png" />
