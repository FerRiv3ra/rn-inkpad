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
        <Button
          text="Edit an email (default value)"
          buttonColor={palette.blue}
          style={{marginTop: 12}}
          onPress={async () => {
            const email = await Alert.prompt({
              title: 'Email',
              label: 'Email',
              defaultValue: 'pre-filled@example.com',
              keyboardType: 'email-address',
              autoCapitalize: 'none',
            });
            setResult(email ?? 'Prompt cancelled');
          }}
        />
        <Button
          text="PIN (secure, numeric, 4 digits)"
          buttonColor={palette.blue}
          style={{marginTop: 12}}
          onPress={async () => {
            const pin = await Alert.prompt({
              title: 'PIN',
              description: 'Numeric keyboard, hidden text, max 4 characters',
              keyboardType: 'number-pad',
              secureTextEntry: true,
              maxLength: 4,
            });
            setResult(
              pin ? `PIN has ${pin.length} digits` : 'Prompt cancelled',
            );
          }}
        />
        <Button
          text="Auto dismiss after 2s"
          buttonColor={palette.navy}
          style={{marginTop: 12}}
          onPress={async () => {
            setTimeout(() => Alert.dismiss(), 2000);
            const ok = await Alert.alert(
              'Wait',
              'Closes itself in two seconds',
            );
            setResult(`Dismissed, resolved ${ok}`);
          }}
        />
        <Result label={result} />
      </Section>
    </>
  );
};
