import {useState} from 'react';
import {PinInput} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const PinInputDemo = () => {
  const [code, setCode] = useState('');
  const [done, setDone] = useState('');

  return (
    <>
      <Section
        title="4-digit code"
        description="Tap a cell to focus. Completes automatically.">
        <PinInput
          length={4}
          value={code}
          onChange={setCode}
          onComplete={setDone}
        />
        <Result
          label={done ? `Completed: ${done}` : `Typing: ${code || '-'}`}
        />
      </Section>
      <Section title="6 digits, underline, secure">
        <PinInput
          length={6}
          variant="underline"
          secure
          size={40}
          color={palette.red}
        />
      </Section>
      <Section title="Error and disabled">
        <PinInput length={4} defaultValue="1234" error />
        <PinInput
          length={4}
          defaultValue="12"
          disabled
          style={{marginTop: 16}}
        />
      </Section>
    </>
  );
};
