import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  LayoutGrid,
  Plus,
  ShoppingBag,
  TriangleAlert,
  X,
} from 'lucide-react-native';
import {FloatingActionButton} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const FloatingActionButtonDemo = () => {
  const [last, setLast] = useState('Tap a button');

  return (
    <Section
      title="Single action and action menu"
      description="Absolutely positioned. The menu button has no icon prop: built-in plus/close glyphs.">
      <View style={styles.stage}>
        <FloatingActionButton
          icon={LayoutGrid}
          backgroundColor={palette.red}
          onPress={() => setLast('Single FAB pressed')}
        />
        <FloatingActionButton
          align="bottom-left"
          backgroundColor={palette.navy}
          openIcon={Plus}
          closeIcon={X}
          actions={[
            {
              icon: TriangleAlert,
              text: 'Alert',
              onPress: () => setLast('Alert'),
            },
            {icon: TriangleAlert, onPress: () => setLast('Warning')},
            {
              icon: ShoppingBag,
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
