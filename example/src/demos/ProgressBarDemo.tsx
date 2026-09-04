import {useState} from 'react';
import {Button, ProgressBar} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const ProgressBarDemo = () => {
  const [value, setValue] = useState(25);

  return (
    <>
      <Section title="Rounded with percent">
        <ProgressBar
          value={value}
          rounded
          progressColor={palette.red}
          textColor={palette.navy}
          showPercent
        />
        <Button
          text={value === 100 ? 'Reset' : 'Add 25%'}
          style={{marginTop: 20}}
          rounded
          buttonColor={palette.navy}
          onPress={() => setValue(value === 100 ? 0 : value + 25)}
        />
      </Section>
      <Section title="Thick with border">
        <ProgressBar
          value={60}
          height={18}
          borderColor={palette.blue}
          progressColor={palette.blue}
          backgroundColor="#FFF"
          borderRadius={4}
        />
      </Section>
    </>
  );
};
