import {ArrowRight, Plane, Save, TriangleAlert} from 'lucide-react-native';
import {Button} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

const noop = () => {};

export const ButtonDemo = () => (
  <>
    <Section title="Solid" description="Default type, icon on the left.">
      <Button
        text="Green solid button"
        icon={TriangleAlert}
        color="#000"
        buttonColor={palette.green}
        onPress={noop}
      />
    </Section>
    <Section title="Outline & rounded">
      <Button
        text="Blue outline rounded button"
        icon={Plane}
        buttonType="outline"
        buttonColor={palette.blue}
        rounded
        onPress={noop}
      />
    </Section>
    <Section
      title="Clear, icon on the right"
      description="This one passes a pre-styled element instead of a component.">
      <Button
        text="Clear right icon button"
        icon={<Save size={18} color={palette.blue} />}
        buttonType="clear"
        iconPosition="right"
        color={palette.blue}
        onPress={noop}
      />
    </Section>
    <Section title="Loading & full width">
      <Button
        text="Saving"
        icon={Save}
        loading
        buttonColor={palette.mint}
        color="#000"
        onPress={noop}
      />
      <Button
        text="Full width"
        icon={ArrowRight}
        full
        iconPosition="right"
        buttonColor={palette.navy}
        style={{marginTop: 12}}
        onPress={noop}
      />
    </Section>
    <Section title="Disabled">
      <Button text="Disabled" disabled onPress={noop} />
    </Section>
  </>
);
