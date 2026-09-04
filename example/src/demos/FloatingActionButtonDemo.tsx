import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FloatingActionButton} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const FloatingActionButtonDemo = () => {
  const [last, setLast] = useState('Tap a button');

  return (
    <Section
      title="Single action and action menu"
      description="Buttons are absolutely positioned inside the container.">
      <View style={styles.stage}>
        <FloatingActionButton
          icon="apps"
          backgroundColor={palette.red}
          onPress={() => setLast('Single FAB pressed')}
        />
        <FloatingActionButton
          align="bottom-left"
          backgroundColor={palette.navy}
          actions={[
            {icon: 'alert', text: 'Alert', onPress: () => setLast('Alert')},
            {icon: 'warning', onPress: () => setLast('Warning')},
            {
              icon: 'bag-add',
              text: 'Shopping',
              onPress: () => setLast('Shopping'),
            },
          ]}
        />
      </View>
      <Result label={last} />
    </Section>
  );
};

const styles = StyleSheet.create({
  stage: {
    height: 320,
    borderRadius: 12,
    backgroundColor: palette.background,
    overflow: 'hidden',
  },
});
