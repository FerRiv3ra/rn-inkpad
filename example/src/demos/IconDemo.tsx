import {StyleSheet, Text, View} from 'react-native';
import type {ValidName} from 'rn-inkpad';
import {Icon} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

const icons: ValidName[] = [
  'airplane',
  'alarm',
  'analytics',
  'bag-add',
  'cafe',
  'heart',
  'home',
  'key',
  'notifications',
  'star',
];

export const IconDemo = () => (
  <>
    <Section title="Filled" row>
      {icons.map(name => (
        <View key={name} style={styles.item}>
          <Icon name={name} size={28} color={palette.navy} />
          <Text style={styles.label}>{name}</Text>
        </View>
      ))}
    </Section>
    <Section title="Outline" row>
      {icons.map(name => (
        <View key={name} style={styles.item}>
          <Icon name={`${name}-outline`} size={28} color={palette.red} />
        </View>
      ))}
    </Section>
    <Section title="Sharp" row>
      {icons.map(name => (
        <View key={name} style={styles.item}>
          <Icon name={`${name}-sharp`} size={28} color={palette.blue} />
        </View>
      ))}
    </Section>
  </>
);

const styles = StyleSheet.create({
  item: {
    width: 64,
    alignItems: 'center',
  },
  label: {
    marginTop: 4,
    fontSize: 10,
    color: palette.muted,
  },
});
