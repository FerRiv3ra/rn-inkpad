import {StyleSheet, Text, View} from 'react-native';

/**
 * Minimal icons drawn with Views and text glyphs. They are the defaults used
 * when a component needs an icon and none was provided, so the library works
 * without any icon dependency. Every one of them can be replaced through the
 * corresponding `IconProp`.
 */
export type GlyphProps = {
  size?: number;
  color?: string;
  testID?: string;
};

const box = (size: number) => ({
  width: size,
  height: size,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
});

export const CheckGlyph = ({size = 20, color = '#000', testID}: GlyphProps) => (
  <View testID={testID} style={box(size)}>
    <View
      style={{
        width: size * 0.32,
        height: size * 0.58,
        borderRightWidth: Math.max(size * 0.12, 1.5),
        borderBottomWidth: Math.max(size * 0.12, 1.5),
        borderColor: color,
        marginTop: -size * 0.12,
        transform: [{rotate: '45deg'}],
      }}
    />
  </View>
);

export const CloseGlyph = ({size = 20, color = '#000', testID}: GlyphProps) => {
  const bar = {
    position: 'absolute' as const,
    width: size * 0.8,
    height: Math.max(size * 0.12, 1.5),
    borderRadius: size,
    backgroundColor: color,
  };
  return (
    <View testID={testID} style={box(size)}>
      <View style={[bar, styles.rotate45]} />
      <View style={[bar, styles.rotateMinus45]} />
    </View>
  );
};

export const PlusGlyph = ({size = 20, color = '#000', testID}: GlyphProps) => {
  const bar = {
    position: 'absolute' as const,
    width: size * 0.7,
    height: Math.max(size * 0.12, 1.5),
    borderRadius: size,
    backgroundColor: color,
  };
  return (
    <View testID={testID} style={box(size)}>
      <View style={bar} />
      <View style={[bar, styles.rotate90]} />
    </View>
  );
};

export const MenuGlyph = ({size = 20, color = '#000', testID}: GlyphProps) => {
  const bar = {
    width: size * 0.8,
    height: Math.max(size * 0.1, 1.5),
    borderRadius: size,
    backgroundColor: color,
    marginVertical: size * 0.09,
  };
  return (
    <View testID={testID} style={box(size)}>
      <View style={bar} />
      <View style={bar} />
      <View style={bar} />
    </View>
  );
};

type ChevronProps = GlyphProps & {direction?: 'up' | 'down' | 'left' | 'right'};

const CHEVRON_ROTATION = {
  right: '45deg',
  down: '135deg',
  left: '225deg',
  up: '315deg',
};

export const ChevronGlyph = ({
  size = 20,
  color = '#000',
  direction = 'right',
  testID,
}: ChevronProps) => (
  <View testID={testID} style={box(size)}>
    <View
      style={{
        width: size * 0.4,
        height: size * 0.4,
        borderTopWidth: Math.max(size * 0.12, 1.5),
        borderRightWidth: Math.max(size * 0.12, 1.5),
        borderColor: color,
        transform: [{rotate: CHEVRON_ROTATION[direction]}],
        marginLeft: direction === 'right' ? -size * 0.1 : 0,
        marginRight: direction === 'left' ? -size * 0.1 : 0,
        marginTop: direction === 'down' ? -size * 0.15 : 0,
        marginBottom: direction === 'up' ? -size * 0.15 : 0,
      }}
    />
  </View>
);

export const SearchGlyph = ({
  size = 20,
  color = '#000',
  testID,
}: GlyphProps) => (
  <View testID={testID} style={box(size)}>
    <View
      style={{
        width: size * 0.55,
        height: size * 0.55,
        borderRadius: size,
        borderWidth: Math.max(size * 0.11, 1.5),
        borderColor: color,
        marginTop: -size * 0.1,
        marginLeft: -size * 0.1,
      }}
    />
    <View
      style={{
        position: 'absolute',
        width: size * 0.3,
        height: Math.max(size * 0.12, 1.5),
        backgroundColor: color,
        borderRadius: size,
        right: size * 0.1,
        bottom: size * 0.2,
        transform: [{rotate: '45deg'}],
      }}
    />
  </View>
);

type EyeProps = GlyphProps & {off?: boolean};

export const EyeGlyph = ({
  size = 20,
  color = '#000',
  off,
  testID,
}: EyeProps) => (
  <View testID={testID} style={box(size)}>
    <View
      style={{
        width: size * 0.95,
        height: size * 0.6,
        borderRadius: size,
        borderWidth: Math.max(size * 0.1, 1.5),
        borderColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: size * 0.28,
          height: size * 0.28,
          borderRadius: size,
          backgroundColor: color,
        }}
      />
    </View>
    {off && (
      <View
        style={{
          position: 'absolute',
          width: size * 1.05,
          height: Math.max(size * 0.1, 1.5),
          backgroundColor: color,
          borderRadius: size,
          transform: [{rotate: '-40deg'}],
        }}
      />
    )}
  </View>
);

type CheckedProps = GlyphProps & {checked?: boolean};

export const CheckBoxGlyph = ({
  size = 20,
  color = '#000',
  checked,
  testID,
}: CheckedProps) => (
  <View
    testID={testID}
    style={[
      box(size),
      {
        borderRadius: size * 0.2,
        borderWidth: Math.max(size * 0.1, 1.5),
        borderColor: color,
        backgroundColor: checked ? color : 'transparent',
      },
    ]}>
    {checked && <CheckGlyph size={size * 0.8} color="#FFF" />}
  </View>
);

export const RadioGlyph = ({
  size = 20,
  color = '#000',
  checked,
  testID,
}: CheckedProps) => (
  <View
    testID={testID}
    style={[
      box(size),
      {
        borderRadius: size,
        borderWidth: Math.max(size * 0.1, 1.5),
        borderColor: color,
      },
    ]}>
    {checked && (
      <View
        style={{
          width: size * 0.5,
          height: size * 0.5,
          borderRadius: size,
          backgroundColor: color,
        }}
      />
    )}
  </View>
);

export type RatingVariant = 'full' | 'half' | 'empty';

type ShapeProps = GlyphProps & {
  variant?: RatingVariant;
  shape?: 'star' | 'heart';
};

// U+FE0E forces text presentation so browsers do not swap the glyph for an emoji.
const SHAPES = {
  star: {full: '★\uFE0E', empty: '☆\uFE0E'},
  heart: {full: '♥\uFE0E', empty: '♡\uFE0E'},
};

/** Star or heart drawn with text glyphs; `half` overlays a clipped full shape. */
export const RatingGlyph = ({
  size = 20,
  color = '#000',
  variant = 'full',
  shape = 'star',
  testID,
}: ShapeProps) => {
  const glyphStyle = {
    fontSize: size,
    lineHeight: size * 1.15,
    color,
    includeFontPadding: false,
  };
  const {full, empty} = SHAPES[shape];

  return (
    <View
      testID={testID}
      accessibilityLabel={variant}
      style={{width: size * 1.05, height: size * 1.15}}>
      <Text style={glyphStyle}>{variant === 'full' ? full : empty}</Text>
      {variant === 'half' && (
        <View
          style={[
            StyleSheet.absoluteFill,
            {width: size * 0.52, overflow: 'hidden'},
          ]}>
          <Text style={glyphStyle}>{full}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rotate45: {transform: [{rotate: '45deg'}]},
  rotateMinus45: {transform: [{rotate: '-45deg'}]},
  rotate90: {transform: [{rotate: '90deg'}]},
});
