import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Button,
  CheckBox,
  Chip,
  ProgressBar,
  Switch,
  ThemeProvider,
  darkTheme,
  useTheme,
} from 'rn-inkpad';

import {Section} from '../ui/Section';

const Sample = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.sample, {backgroundColor: colors.background}]}>
      <Text style={{color: colors.text, fontWeight: '700'}}>
        Primary: {colors.primary}
      </Text>
      <Button text="Themed button" />
      <CheckBox title="Themed checkbox" checked />
      <Chip text="Themed chip" selected />
      <ProgressBar value={60} rounded />
      <Switch text="Themed switch" isOn />
    </View>
  );
};

export const ThemeDemo = () => {
  const [dark, setDark] = useState(false);

  return (
    <>
      <Section title="Default theme">
        <Sample />
      </Section>
      <Section title="Custom primary color">
        <ThemeProvider
          theme={{colors: {primary: '#DB504A', success: '#7EE081'}}}>
          <Sample />
        </ThemeProvider>
      </Section>
      <Section title="Dark preset">
        <Switch text="Use darkTheme" isOn={dark} onChange={setDark} />
        <ThemeProvider theme={dark ? darkTheme : {}}>
          <Sample />
        </ThemeProvider>
      </Section>
    </>
  );
};

const styles = StyleSheet.create({
  sample: {
    gap: 12,
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
});
