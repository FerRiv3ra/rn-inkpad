import {CircleAvatar} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const CircleAvatarDemo = () => (
  <>
    <Section title="Initials" row>
      <CircleAvatar size={80} defaultText="JHF" fontSize={28} />
      <CircleAvatar
        size={60}
        defaultText="FR"
        fontSize={22}
        backgroundColor={palette.red}
      />
      <CircleAvatar
        size={40}
        defaultText="A"
        fontSize={16}
        backgroundColor={palette.green}
        textColor="#000"
      />
    </Section>
    <Section title="Image" row>
      <CircleAvatar size={80} image={require('../../assets/icon.png')} />
      <CircleAvatar
        size={60}
        image={{
          uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200',
        }}
      />
    </Section>
  </>
);
