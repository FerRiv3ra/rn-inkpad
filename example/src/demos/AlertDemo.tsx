import {useState} from 'react';
import {Trash2} from 'lucide-react-native';
import {Alert, AlertContainer, Button} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const AlertDemo = () => {
  const [result, setResult] = useState('Waiting');

  return (
    <>
      <AlertContainer theme="ios" />
      <Section
        title="Alert"
        description="Imperative API: Alert.alert returns a promise.">
        <Button
          text="Simple alert"
          buttonColor={palette.navy}
          onPress={async () => {
            const ok = await Alert.alert('Title', 'This is a simple alert');
            setResult(`Alert closed with ${ok}`);
          }}
        />
        <Button
          text="Confirm with icon"
          buttonColor={palette.red}
          style={{marginTop: 12}}
          onPress={async () => {
            const ok = await Alert.alert({
              title: 'Delete item?',
              description: 'This action cannot be undone.',
              icon: Trash2,
              iconColor: palette.red,
              showCancelButton: true,
              confirmText: 'Delete',
              cancelText: 'Keep',
            });
            setResult(ok ? 'Deleted' : 'Kept');
          }}
        />
      </Section>
      <Section title="Prompt">
        <Button
          text="Ask for a name"
          buttonColor={palette.blue}
          onPress={async () => {
            const name = await Alert.prompt({
              title: 'Your name',
              description: 'We will use it to greet you.',
              placeholder: 'Type your name',
            });
            setResult(name ? `Hello, ${name}!` : 'Prompt cancelled');
          }}
        />
        <Result label={result} />
      </Section>
    </>
  );
};
