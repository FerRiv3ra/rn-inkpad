import type {ReactNode} from 'react';
import {useEffect, useState} from 'react';
import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {renderIcon} from '../../helpers/renderIcon';
import {useTheme} from '../../theme/ThemeProvider';
import type {A11yProps, IconProp, IconProps} from '../../types';
import {ChevronGlyph} from '../glyphs/Glyphs';

export type AccordionItem = {
  title: string;
  content: ReactNode;
  icon?: IconProp;
  disabled?: boolean;
};

export type AccordionProps = A11yProps & {
  items: AccordionItem[];
  /** Allow several items open at once. */
  multiple?: boolean;
  /** Initially open indexes (uncontrolled). */
  defaultExpanded?: number[];
  /** Open indexes (controlled). */
  expanded?: number[];
  onChange?: (expanded: number[]) => void;
  expandIcon?: IconProp;
  collapseIcon?: IconProp;
  color?: string;
  borderColor?: string;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
};

const ExpandGlyph = (props: IconProps) => (
  <ChevronGlyph {...props} direction="down" />
);
const CollapseGlyph = (props: IconProps) => (
  <ChevronGlyph {...props} direction="up" />
);

export const Accordion = ({
  accessibilityLabel,
  borderColor,
  collapseIcon = CollapseGlyph,
  color,
  contentStyle,
  defaultExpanded = [],
  expandIcon = ExpandGlyph,
  expanded,
  items,
  multiple = false,
  onChange,
  style,
  testID,
  titleStyle,
}: AccordionProps) => {
  const {colors, radius} = useTheme();
  const [open, setOpen] = useState<number[]>(expanded ?? defaultExpanded);

  // Controlled mode follows the prop.
  useEffect(() => {
    if (expanded) {
      setOpen(expanded);
    }
  }, [expanded]);

  const toggle = (index: number) => {
    const isOpen = open.includes(index);
    const next = isOpen
      ? open.filter(i => i !== index)
      : multiple
        ? [...open, index]
        : [index];
    if (!expanded) {
      setOpen(next);
    }
    onChange?.(next);
  };

  const tint = color ?? colors.text;
  const line = borderColor ?? colors.border;

  return (
    <View
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={[
        styles.container,
        {borderColor: line, borderRadius: radius.md},
        style,
      ]}>
      {items.map((item, index) => {
        const isOpen = open.includes(index);
        return (
          <View
            key={index}
            style={
              index > 0 && {
                borderTopWidth: StyleSheet.hairlineWidth,
                borderTopColor: line,
              }
            }>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={item.title}
              accessibilityState={{expanded: isOpen, disabled: !!item.disabled}}
              testID={testID ? `${testID}-item-${index}` : undefined}
              disabled={item.disabled}
              onPress={() => toggle(index)}
              style={({pressed}) => [styles.header, pressed && styles.pressed]}>
              {renderIcon(item.icon, {size: 18, color: tint})}
              <Text
                style={[
                  styles.title,
                  {color: item.disabled ? colors.disabled : tint},
                  titleStyle,
                ]}>
                {item.title}
              </Text>
              {renderIcon(isOpen ? collapseIcon : expandIcon, {
                size: 18,
                color: item.disabled ? colors.disabled : colors.textMuted,
              })}
            </Pressable>
            {isOpen && (
              <View
                testID={testID ? `${testID}-content-${index}` : undefined}
                style={[styles.content, contentStyle]}>
                {typeof item.content === 'string' ? (
                  <Text style={{color: colors.textMuted}}>{item.content}</Text>
                ) : (
                  item.content
                )}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  pressed: {
    opacity: 0.7,
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
});
