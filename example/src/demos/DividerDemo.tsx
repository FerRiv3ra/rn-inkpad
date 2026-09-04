import {StyleSheet, Text, View} from 'react-native';
import {Divider} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const DividerDemo = () => (
  <>
    <Section title="Horizontal">
      <Text>Above</Text>
      <Divider />
      <Text>Between</Text>
      <Divider text="OR" />
      <Text>Below</Text>
      <Divider color={palette.red} thickness={3} spacing={16} />
    </Section>
    <Section title="Vertical">
      <View style={styles.row}>
        <Text>Left</Text>
        <Divider orientation="vertical" spacing={16} />
        <Text>Middle</Text>
        <Divider
          orientation="vertical"
          color={palette.blue}
          thickness={2}
          spacing={16}
        />
        <Text>Right</Text>
      </View>
    </Section>
  </>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
  },
});
