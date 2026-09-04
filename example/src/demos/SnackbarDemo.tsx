import {CircleCheck, WifiOff} from 'lucide-react-native';
import {Button, SnackbarProvider, useSnackbar} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

const Triggers = () => {
  const snackbar = useSnackbar();

  return (
    <>
      <Button
        text="Simple"
        buttonColor={palette.navy}
        onPress={() => snackbar.show('Saved')}
      />
      <Button
        text="With action"
        buttonColor={palette.red}
        style={{marginTop: 12}}
        onPress={() =>
          snackbar.show({
            text: 'Message deleted',
            icon: CircleCheck,
            action: {text: 'Undo', onPress: () => snackbar.show('Restored')},
          })
        }
      />
      <Button
        text="Queue three"
        buttonColor={palette.blue}
        style={{marginTop: 12}}
        onPress={() => {
          snackbar.show({text: 'First', duration: 1500});
          snackbar.show({text: 'Second', duration: 1500});
          snackbar.show({
            text: 'Third',
            icon: WifiOff,
            backgroundColor: palette.red,
            duration: 1500,
          });
        }}
      />
    </>
  );
};

export const SnackbarDemo = () => (
  <SnackbarProvider offset={40}>
    <Section
      title="Queue of messages"
      description="Shown one at a time, in order.">
      <Triggers />
    </Section>
  </SnackbarProvider>
);
