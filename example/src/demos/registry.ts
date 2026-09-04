import type {ComponentType} from 'react';
import type {IconName} from 'rn-inkpad';

import {ActionSheetDemo} from './ActionSheetDemo';
import {AlertDemo} from './AlertDemo';
import {BottomTabNavigationDemo} from './BottomTabNavigationDemo';
import {ButtonDemo} from './ButtonDemo';
import {CardDemo} from './CardDemo';
import {CardImageDemo} from './CardImageDemo';
import {CheckBoxDemo} from './CheckBoxDemo';
import {CircleAvatarDemo} from './CircleAvatarDemo';
import {DotsLoadingDemo} from './DotsLoadingDemo';
import {DrawerNavigationDemo} from './DrawerNavigationDemo';
import {FloatingActionButtonDemo} from './FloatingActionButtonDemo';
import {FloatingActionCardDemo} from './FloatingActionCardDemo';
import {IconDemo} from './IconDemo';
import {InputDemo} from './InputDemo';
import {LongPressButtonDemo} from './LongPressButtonDemo';
import {ProgressBarDemo} from './ProgressBarDemo';
import {RadioButtonsDemo} from './RadioButtonsDemo';
import {RatingDemo} from './RatingDemo';
import {SegmentedControlDemo} from './SegmentedControlDemo';
import {SlideActionDemo} from './SlideActionDemo';
import {SliderDemo} from './SliderDemo';
import {StarRatingDemo} from './StarRatingDemo';
import {SwitchDemo} from './SwitchDemo';
import {TabControlDemo} from './TabControlDemo';
import {ToastDemo} from './ToastDemo';
import {TooltipDemo} from './TooltipDemo';

export type Demo = {
  key: string;
  title: string;
  description: string;
  icon: IconName;
  Component: ComponentType;
};

export type DemoSection = {
  title: string;
  data: Demo[];
};

/**
 * Every component of the library with its demo screen.
 * Add a new entry here (and a `XxxDemo.tsx` file) when adding a component.
 */
export const demoSections: DemoSection[] = [
  {
    title: 'Buttons',
    data: [
      {
        key: 'button',
        title: 'Button',
        description: 'Solid, outline and clear variants',
        icon: 'radio-button-on',
        Component: ButtonDemo,
      },
      {
        key: 'fab',
        title: 'FloatingActionButton',
        description: 'Single action or expandable menu',
        icon: 'add-circle',
        Component: FloatingActionButtonDemo,
      },
      {
        key: 'long-press',
        title: 'LongPressButton',
        description: 'Hold to confirm with progress fill',
        icon: 'hourglass',
        Component: LongPressButtonDemo,
      },
      {
        key: 'slide-action',
        title: 'SlideAction',
        description: 'Slide to confirm',
        icon: 'swap-horizontal',
        Component: SlideActionDemo,
      },
    ],
  },
  {
    title: 'Forms & controls',
    data: [
      {
        key: 'input',
        title: 'Input',
        description: 'Filled, bordered and outlined text inputs',
        icon: 'create',
        Component: InputDemo,
      },
      {
        key: 'checkbox',
        title: 'CheckBox',
        description: 'Checkbox with custom icons',
        icon: 'checkbox',
        Component: CheckBoxDemo,
      },
      {
        key: 'radio',
        title: 'RadioButtons',
        description: 'Radio group, vertical or horizontal',
        icon: 'radio-button-off',
        Component: RadioButtonsDemo,
      },
      {
        key: 'switch',
        title: 'Switch',
        description: 'Toggle with optional label',
        icon: 'toggle',
        Component: SwitchDemo,
      },
      {
        key: 'segmented',
        title: 'SegmentedControl',
        description: 'iOS-style segmented selector',
        icon: 'options',
        Component: SegmentedControlDemo,
      },
      {
        key: 'slider',
        title: 'Slider',
        description: 'Draggable value slider',
        icon: 'git-commit',
        Component: SliderDemo,
      },
      {
        key: 'star-rating',
        title: 'StarRating',
        description: 'Interactive rating with review labels',
        icon: 'star-half',
        Component: StarRatingDemo,
      },
    ],
  },
  {
    title: 'Cards & media',
    data: [
      {
        key: 'card',
        title: 'Card',
        description: 'Icon, title, description and buttons',
        icon: 'document-text',
        Component: CardDemo,
      },
      {
        key: 'card-image',
        title: 'CardImage',
        description: 'Image card with progressive blur',
        icon: 'image',
        Component: CardImageDemo,
      },
      {
        key: 'floating-card',
        title: 'FloatingActionCard',
        description: 'Floating card with image and rating',
        icon: 'albums',
        Component: FloatingActionCardDemo,
      },
      {
        key: 'avatar',
        title: 'CircleAvatar',
        description: 'Avatar with image or initials',
        icon: 'person-circle',
        Component: CircleAvatarDemo,
      },
      {
        key: 'icon',
        title: 'Icon',
        description: 'Typed Ionicons wrapper',
        icon: 'shapes',
        Component: IconDemo,
      },
      {
        key: 'rating',
        title: 'Rating',
        description: 'Read-only stars or hearts',
        icon: 'star',
        Component: RatingDemo,
      },
    ],
  },
  {
    title: 'Feedback',
    data: [
      {
        key: 'alert',
        title: 'Alert',
        description: 'Imperative alert and prompt dialogs',
        icon: 'alert-circle',
        Component: AlertDemo,
      },
      {
        key: 'action-sheet',
        title: 'ActionSheet',
        description: 'Bottom sheet with actions',
        icon: 'list',
        Component: ActionSheetDemo,
      },
      {
        key: 'toast',
        title: 'Toast',
        description: 'Auto-hiding message, top or bottom',
        icon: 'chatbox',
        Component: ToastDemo,
      },
      {
        key: 'tooltip',
        title: 'Tooltip',
        description: 'Contextual help bubble',
        icon: 'help-circle',
        Component: TooltipDemo,
      },
      {
        key: 'progress',
        title: 'ProgressBar',
        description: 'Animated progress with percent',
        icon: 'speedometer',
        Component: ProgressBarDemo,
      },
      {
        key: 'dots',
        title: 'DotsLoading',
        description: 'Bouncing dots spinner',
        icon: 'ellipsis-horizontal',
        Component: DotsLoadingDemo,
      },
    ],
  },
  {
    title: 'Navigation',
    data: [
      {
        key: 'bottom-tabs',
        title: 'BottomTabNavigation',
        description: 'Bottom bar with highlighted tab',
        icon: 'apps',
        Component: BottomTabNavigationDemo,
      },
      {
        key: 'drawer',
        title: 'DrawerNavigation',
        description: 'Side drawer with collapsible groups',
        icon: 'menu',
        Component: DrawerNavigationDemo,
      },
      {
        key: 'tab-control',
        title: 'TabControl',
        description: 'Tabs rendering their own content',
        icon: 'browsers',
        Component: TabControlDemo,
      },
    ],
  },
];

export const demoCount = demoSections.reduce((n, s) => n + s.data.length, 0);
