import {Check, Tag} from 'lucide-react-native';
import {useState} from 'react';
import {Chip} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';
import {palette} from '../ui/theme';

const tags = ['React Native', 'iOS', 'Android', 'Web'];

export const ChipDemo = () => {
  const [selected, setSelected] = useState<string[]>(['iOS']);
  const [items, setItems] = useState(tags);

  const toggle = (tag: string) =>
    setSelected(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag],
    );

  return (
    <>
      <Section title="Selectable filters" row>
        {tags.map(tag => (
          <Chip
            key={tag}
            text={tag}
            icon={selected.includes(tag) ? Check : undefined}
            selected={selected.includes(tag)}
            onPress={() => toggle(tag)}
          />
        ))}
        <Result label={`Selected: ${selected.join(', ') || 'none'}`} />
      </Section>
      <Section title="Removable, outlined" row>
        {items.map(tag => (
          <Chip
            key={tag}
            text={tag}
            icon={Tag}
            variant="outlined"
            color={palette.red}
            onClose={() => setItems(prev => prev.filter(t => t !== tag))}
          />
        ))}
        {items.length === 0 && <Result label="All removed" />}
      </Section>
      <Section title="Sizes and disabled" row>
        <Chip text="Small" size="sm" selected />
        <Chip text="Medium" selected color={palette.green} textColor="#000" />
        <Chip text="Disabled" disabled />
      </Section>
    </>
  );
};
