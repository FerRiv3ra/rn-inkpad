import {Heart, House, Rocket, Star} from 'lucide-react-native';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';
import type {IconProps} from 'rn-inkpad';
import {Button, CheckBox, Icon, Rating} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

/** A hand-made SVG component: anything accepting size/color works. */
const Logo = ({size = 24, color = '#000'}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" />
    <Path d="M8 12l3 3 5-6" stroke={color} strokeWidth="2" fill="none" />
  </Svg>
);

export const IconDemo = () => (
  <>
    <Section
      title="Pass a component"
      description="The library sizes and colors it to match the component state."
      row>
      <Button text="Home" icon={House} buttonColor={palette.navy} />
      <Button text="Disabled" icon={Rocket} disabled />
      <Button
        text="Outline"
        icon={Star}
        buttonType="outline"
        buttonColor={palette.red}
      />
    </Section>
    <Section
      title="Pass an element"
      description="Rendered exactly as given, ignoring the component's own color."
      row>
      <Button
        text="Custom"
        icon={<Heart size={18} color={palette.red} fill={palette.red} />}
        buttonColor={palette.mint}
        color="#000"
      />
      <CheckBox
        title="SVG element"
        checked
        checkedIcon={<Logo size={22} color={palette.green} />}
      />
    </Section>
    <Section title="Your own SVG component" row>
      <Icon icon={Logo} size={32} color={palette.blue} />
      <Icon icon={Logo} size={48} color={palette.red} />
      <Rating
        rating={3.5}
        icons={{full: Logo, empty: Rocket}}
        color={palette.navy}
        size={26}
      />
    </Section>
    <Section
      title="No icon library at all"
      description="Built-in glyphs cover the defaults.">
      <View style={styles.row}>
        <CheckBox title="Checked" checked />
        <CheckBox title="Unchecked" />
      </View>
      <Rating rating={4.5} />
      <Text style={styles.hint}>
        Radio, check, chevrons, eye, search, star and heart are drawn with Views
        and text.
      </Text>
    </Section>
  </>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 24,
    marginBottom: 12,
  },
  hint: {
    marginTop: 8,
    fontSize: 12,
    color: palette.muted,
  },
});
