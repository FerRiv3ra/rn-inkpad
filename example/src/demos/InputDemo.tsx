import {useState} from 'react';
import {Input} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const InputDemo = () => {
  const [text, setText] = useState('');

  return (
    <>
      <Section title="Filled with search">
        <Input
          borderColor={palette.red}
          search
          label="Search"
          icon="airplane"
          iconColor={palette.red}
          onChangeText={setText}
        />
        <Result label={text ? `Typed: ${text}` : 'Type something'} />
      </Section>
      <Section title="Bordered with password toggle">
        <Input
          borderColor={palette.navy}
          password
          label="Password"
          icon="key"
          type="bordered"
          borderRadius={10}
          iconColor={palette.navy}
          rightIconColor={palette.navy}
        />
      </Section>
      <Section title="Outlined">
        <Input
          borderColor={palette.blue}
          label="Email"
          icon="at"
          type="outlined"
          labelColor={palette.blue}
          borderRadius={10}
          iconColor={palette.blue}
          keyboardType="email-address"
        />
      </Section>
    </>
  );
};
