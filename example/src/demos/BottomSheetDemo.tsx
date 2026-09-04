import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BottomSheet, Button, Divider} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const BottomSheetDemo = () => {
  const [auto, setAuto] = useState(false);
  const [fixed, setFixed] = useState(false);

  return (
    <Section
      title="Bottom sheet"
      description="Drag down or tap the backdrop to close.">
      <Button
        text="Open (auto height)"
        buttonColor={palette.navy}
        onPress={() => setAuto(true)}
      />
      <Button
        text="Open (fixed 400)"
        buttonColor={palette.red}
        style={styles.spaced}
        onPress={() => setFixed(true)}
      />

      <BottomSheet visible={auto} onClose={() => setAuto(false)}>
        <View style={styles.content}>
          <Text style={styles.title}>Share</Text>
          <Text style={styles.body}>
            Sized to its content. Supports any children.
          </Text>
          <Divider />
          <Button
            text="Close"
            buttonColor={palette.navy}
            onPress={() => setAuto(false)}
          />
        </View>
      </BottomSheet>

      <BottomSheet
        visible={fixed}
        height={400}
        onClose={() => setFixed(false)}
        backgroundColor={palette.mint}>
        <View style={styles.content}>
          <Text style={styles.title}>Fixed height</Text>
          <Text style={styles.body}>
            400 points tall. Backdrop and drag still close it.
          </Text>
        </View>
      </BottomSheet>
    </Section>
  );
};

const styles = StyleSheet.create({
  spaced: {
    marginTop: 12,
  },
  content: {
    paddingHorizontal: 20,
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  body: {
    color: palette.muted,
  },
});
