import {Bell, Mail} from 'lucide-react-native';
import {Badge, Button} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

export const BadgeDemo = () => (
  <>
    <Section title="Attached to an element" row>
      <Badge value={3}>
        <Bell size={28} color={palette.navy} />
      </Badge>
      <Badge value={120} max={99} color={palette.blue}>
        <Mail size={28} color={palette.navy} />
      </Badge>
      <Badge dot color={palette.green}>
        <Bell size={28} color={palette.navy} />
      </Badge>
      <Badge value="NEW" position="top-left" color={palette.navy}>
        <Button text="Updates" buttonColor={palette.mint} color="#000" />
      </Badge>
    </Section>
    <Section title="Inline" row>
      <Badge value={7} />
      <Badge value="Beta" color={palette.blue} />
      <Badge value={0} />
      <Badge value={42} size={24} color={palette.green} textColor="#000" />
    </Section>
  </>
);
