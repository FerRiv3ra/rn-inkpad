import type {ComponentType} from 'react';
import type {LucideIcon} from 'lucide-react-native';
import {
  ArrowLeftRight,
  CircleDot,
  CircleHelp,
  CircleUser,
  Ellipsis,
  FileText,
  Gauge,
  Image,
  LayoutGrid,
  List,
  Menu,
  MessageSquare,
  Pencil,
  Plus,
  Shapes,
  SlidersHorizontal,
  SquareCheck,
  Star,
  StarHalf,
  Timer,
  ToggleLeft,
  TriangleAlert,
  LayoutPanelTop,
  GalleryVertical,
  BadgeCheck,
  Tag,
  Minus,
  LayoutTemplate,
  MoreHorizontal,
  ListOrdered,
  ChevronsDownUp,
  PanelBottom,
  MessageSquareWarning,
  KeyRound,
  Palette,
} from 'lucide-react-native';

import {AccordionDemo} from './AccordionDemo';
import {ActionSheetDemo} from './ActionSheetDemo';
import {BadgeDemo} from './BadgeDemo';
import {BottomSheetDemo} from './BottomSheetDemo';
import {ChipDemo} from './ChipDemo';
import {DialogDemo} from './DialogDemo';
import {DividerDemo} from './DividerDemo';
import {PaginationDotsDemo} from './PaginationDotsDemo';
import {PinInputDemo} from './PinInputDemo';
import {SkeletonDemo} from './SkeletonDemo';
import {SnackbarDemo} from './SnackbarDemo';
import {StepperDemo} from './StepperDemo';
import {ThemeDemo} from './ThemeDemo';
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
  icon: LucideIcon;
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
    title: 'New in 2.0',
    data: [
      {
        key: 'theme',
        title: 'ThemeProvider',
        description: 'Design tokens for every component',
        icon: Palette,
        Component: ThemeDemo,
      },
      {
        key: 'badge',
        title: 'Badge',
        description: 'Counters and dots attached to anything',
        icon: BadgeCheck,
        Component: BadgeDemo,
      },
      {
        key: 'chip',
        title: 'Chip',
        description: 'Selectable, removable tags',
        icon: Tag,
        Component: ChipDemo,
      },
      {
        key: 'divider',
        title: 'Divider',
        description: 'Lines with optional label',
        icon: Minus,
        Component: DividerDemo,
      },
      {
        key: 'skeleton',
        title: 'Skeleton',
        description: 'Pulsing loading placeholders',
        icon: LayoutTemplate,
        Component: SkeletonDemo,
      },
      {
        key: 'pagination',
        title: 'PaginationDots',
        description: 'Carousel page indicator',
        icon: MoreHorizontal,
        Component: PaginationDotsDemo,
      },
      {
        key: 'stepper',
        title: 'Stepper',
        description: 'Multi-step progress',
        icon: ListOrdered,
        Component: StepperDemo,
      },
      {
        key: 'accordion',
        title: 'Accordion',
        description: 'Collapsible sections',
        icon: ChevronsDownUp,
        Component: AccordionDemo,
      },
      {
        key: 'bottom-sheet',
        title: 'BottomSheet',
        description: 'Draggable sheet from the bottom',
        icon: PanelBottom,
        Component: BottomSheetDemo,
      },
      {
        key: 'dialog',
        title: 'Dialog',
        description: 'Centered modal with buttons',
        icon: MessageSquareWarning,
        Component: DialogDemo,
      },
      {
        key: 'pin-input',
        title: 'PinInput',
        description: 'OTP / verification code cells',
        icon: KeyRound,
        Component: PinInputDemo,
      },
      {
        key: 'snackbar',
        title: 'Snackbar',
        description: 'Queued messages with actions',
        icon: MessageSquare,
        Component: SnackbarDemo,
      },
    ],
  },
  {
    title: 'Buttons',
    data: [
      {
        key: 'button',
        title: 'Button',
        description: 'Solid, outline and clear variants',
        icon: CircleDot,
        Component: ButtonDemo,
      },
      {
        key: 'fab',
        title: 'FloatingActionButton',
        description: 'Single action or expandable menu',
        icon: Plus,
        Component: FloatingActionButtonDemo,
      },
      {
        key: 'long-press',
        title: 'LongPressButton',
        description: 'Hold to confirm with progress fill',
        icon: Timer,
        Component: LongPressButtonDemo,
      },
      {
        key: 'slide-action',
        title: 'SlideAction',
        description: 'Slide to confirm',
        icon: ArrowLeftRight,
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
        icon: Pencil,
        Component: InputDemo,
      },
      {
        key: 'checkbox',
        title: 'CheckBox',
        description: 'Checkbox with custom icons',
        icon: SquareCheck,
        Component: CheckBoxDemo,
      },
      {
        key: 'radio',
        title: 'RadioButtons',
        description: 'Radio group, vertical or horizontal',
        icon: CircleDot,
        Component: RadioButtonsDemo,
      },
      {
        key: 'switch',
        title: 'Switch',
        description: 'Toggle with optional label',
        icon: ToggleLeft,
        Component: SwitchDemo,
      },
      {
        key: 'segmented',
        title: 'SegmentedControl',
        description: 'iOS-style segmented selector',
        icon: SlidersHorizontal,
        Component: SegmentedControlDemo,
      },
      {
        key: 'slider',
        title: 'Slider',
        description: 'Draggable value slider',
        icon: SlidersHorizontal,
        Component: SliderDemo,
      },
      {
        key: 'star-rating',
        title: 'StarRating',
        description: 'Interactive rating with review labels',
        icon: StarHalf,
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
        icon: FileText,
        Component: CardDemo,
      },
      {
        key: 'card-image',
        title: 'CardImage',
        description: 'Image card with progressive blur',
        icon: Image,
        Component: CardImageDemo,
      },
      {
        key: 'floating-card',
        title: 'FloatingActionCard',
        description: 'Floating card with image and rating',
        icon: GalleryVertical,
        Component: FloatingActionCardDemo,
      },
      {
        key: 'avatar',
        title: 'CircleAvatar',
        description: 'Avatar with image or initials',
        icon: CircleUser,
        Component: CircleAvatarDemo,
      },
      {
        key: 'icon',
        title: 'Icons',
        description: 'Bring your own icons: lucide, SVG or any component',
        icon: Shapes,
        Component: IconDemo,
      },
      {
        key: 'rating',
        title: 'Rating',
        description: 'Read-only stars or hearts',
        icon: Star,
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
        icon: TriangleAlert,
        Component: AlertDemo,
      },
      {
        key: 'action-sheet',
        title: 'ActionSheet',
        description: 'Bottom sheet with actions',
        icon: List,
        Component: ActionSheetDemo,
      },
      {
        key: 'toast',
        title: 'Toast',
        description: 'Auto-hiding message, top or bottom',
        icon: MessageSquare,
        Component: ToastDemo,
      },
      {
        key: 'tooltip',
        title: 'Tooltip',
        description: 'Contextual help bubble',
        icon: CircleHelp,
        Component: TooltipDemo,
      },
      {
        key: 'progress',
        title: 'ProgressBar',
        description: 'Animated progress with percent',
        icon: Gauge,
        Component: ProgressBarDemo,
      },
      {
        key: 'dots',
        title: 'DotsLoading',
        description: 'Bouncing dots spinner',
        icon: Ellipsis,
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
        icon: LayoutGrid,
        Component: BottomTabNavigationDemo,
      },
      {
        key: 'drawer',
        title: 'DrawerNavigation',
        description: 'Side drawer with collapsible groups',
        icon: Menu,
        Component: DrawerNavigationDemo,
      },
      {
        key: 'tab-control',
        title: 'TabControl',
        description: 'Tabs rendering their own content',
        icon: LayoutPanelTop,
        Component: TabControlDemo,
      },
    ],
  },
];

export const demoCount = demoSections.reduce((n, s) => n + s.data.length, 0);
