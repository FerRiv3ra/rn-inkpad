import {StyleSheet, Text} from 'react-native';
import {Icon, Tooltip} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const TooltipDemo = () => (
  <Section title="Tap the icon" description="Tooltip flips when near the top.">
    <Text style={styles.text}>
      Information{' '}
      <Tooltip text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna arcu, vulputate ut pellentesque eget.">
        <Icon name="information-circle" size={20} color={palette.blue} />
      </Tooltip>
    </Text>
  </Section>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 40,
    textAlign: 'center',
  },
});
