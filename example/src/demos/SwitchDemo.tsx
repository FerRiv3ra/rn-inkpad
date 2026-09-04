import {useState} from 'react';
import {Switch} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const SwitchDemo = () => {
  const [on, setOn] = useState(false);

  return (
    <>
      <Section title="Basic">
        <Switch />
      </Section>
      <Section title="Full width with text and border">
        <Switch
          backgrounColor={palette.red}
          border
          borderColor={palette.red}
          fullWidth
          isOn={on}
          justifyContent="space-between"
          onChange={setOn}
          text="Turn on notifications"
          textStyle={{fontSize: 16, fontWeight: '600'}}
        />
        <Result label={on ? 'On' : 'Off'} />
      </Section>
    </>
  );
};
