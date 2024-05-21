---
sidebar_position: 1
title: ActionSheet
---

# ActionSheet

An **ActionSheet** is a dynamic component in our library that offers users a menu of options or actions within an application. It typically appears as a modal or popover, presenting a list of choices relevant to the current context or user interaction. ActionSheets enable users to make decisions or initiate specific actions conveniently, enhancing usability and efficiency. With customizable styling and flexible configurations, our ActionSheet component seamlessly integrates into diverse interfaces, empowering users with intuitive navigation and interaction.

## Usage

### Basic usage

```jsx
import React, {useState} from 'react';
import {ActionSheet} from 'rn-inkpad';

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return <ActionSheet setVisible={setIsVisible} visible={isVisible} />;
};
```

<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/action-sheet/actionsheet-ios-simple_ud13jc.png" />
<img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/action-sheet/actionsheet-android-simple_p0cuuw.png" />

## Props

<div class='table-responsive'>

| Name             | Type                                            | Required | Description                                            |
| ---------------- | ----------------------------------------------- | -------- | ------------------------------------------------------ |
| visible          | `boolean`                                       | **YES**  | Show/Hide ActionSheet                                  |
| setVisible       | `(visible: boolean) => void`                    | **YES**  | Function that controls the visibility of the component |
| actions          | **[Action[]](#action-props)**                   | _NO_     | Array of actions to show                               |
| cancelText       | `string`                                        | _NO_     | Text for cancel button                                 |
| description      | `string`                                        | _NO_     | Description text for your ActionSheet                  |
| showCancelButton | `boolean`                                       | _NO_     | Show cancel button                                     |
| showIconOnIos    | `boolean`                                       | _NO_     | Show action icon on iOS                                |
| showCloseButton  | `boolean`                                       | _NO_     | Show close button                                      |
| theme            | **[ActionSheetTheme](#actionsheettheme-props)** | _NO_     | Customize your ActionSheet theme.                      |
| title            | `string`                                        | _NO_     | Title for your ActionSheet.                            |

</div>

### Action props

<div class='table-responsive'>
| Name | Type | Required | Description |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| text | `string` | **YES** | Action button text. |
| icon | `string` | _NO_ | Icon to show in the action. |
| iconColor | `string` | _NO_ | Personalized icon color. |
| textStyle | `StyleProp<TextStyle>` | _NO_ | Personalized styles for your text button. |
| onPress | `() => void` | **YES** | Function that is executed when the button is pressed. |
</div>

### ActionSheetTheme props

<div class='table-responsive'>
| Name | Type | Default iOS | Default Android |
| --------------- | ---------------------- | -------- |----------------------------------------------------- |
| appearance | `'light' \| 'dark'` | System | System |
| backgroundColor | `string` | `Light: '#F4F4F4'  Dark: '#171717'` | `Light: '#FFFFFF'  Dark: '#171717'`|
| buttonColor | `string` | `Light: '#FFFFFF'  Dark: '#242625'` | `Light: '#FFFFFF'  Dark: '#171717'`|
| closeBackgroundColor | `string` | `Light: '#ECECEC'  Dark: '#1C1E1D'` | `Light: '#ECECEC'  Dark: '#1C1E1D'`|
| closeIconColor | `string` | `Light: '#767779'  Dark: '#959394'` | `Light: '#767779'  Dark: '#959394'`|
| separatorColor | `string` | `Light: '#E4E4E4'  Dark: '#343434'` | _N/A_ |
| textColor | `string` | `Light: '#0A0A0A'  Dark: '#FFFFFF'` | `Light: '#0A0A0A'  Dark: '#FFFFFF'`|
| theme | `'cupertino' \| 'material'` | System | System |
</div>

## Usage with props

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

## Examples

### iOS

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/action-sheet/actionsheet-ios-light_fceujq.png" /> 
  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/action-sheet/actionsheet-ios-dark_vedcrl.png" />

### Android

  <img width="40%"  src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/action-sheet/actionsheet-android-light_n34v0f.png" /> 
  <img width="40%" src="https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/action-sheet/actionsheet-android-dark_vere4h.png" />
