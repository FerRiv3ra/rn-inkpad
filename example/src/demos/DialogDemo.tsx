import {useState} from 'react';
import {Button, Dialog} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const DialogDemo = () => {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState('No answer yet');

  return (
    <Section title="Dialog">
      <Button
        text="Open dialog"
        buttonColor={palette.navy}
        onPress={() => setVisible(true)}
      />
      <Result label={result} />
      <Dialog
        visible={visible}
        title="Delete project?"
        showCloseButton
        onClose={() => setVisible(false)}
        buttons={[
          {
            text: 'Cancel',
            onPress: () => {
              setResult('Cancelled');
              setVisible(false);
            },
          },
          {
            text: 'Delete',
            variant: 'solid',
            color: palette.red,
            onPress: () => {
              setResult('Deleted');
              setVisible(false);
            },
          },
        ]}>
        This action cannot be undone. All files in the project will be removed.
      </Dialog>
    </Section>
  );
};
