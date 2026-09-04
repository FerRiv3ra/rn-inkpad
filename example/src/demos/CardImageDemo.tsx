import {CardImage} from 'rn-inkpad';

import {Section} from '../ui/Section';
import {palette} from '../ui/theme';

const source = {
  uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
};

export const CardImageDemo = () => (
  <>
    <Section
      title="Basic"
      description="Image starts blurred and sharpens after loadTime.">
      <CardImage source={source} text="Landscape" />
    </Section>
    <Section title="Themed">
      <CardImage
        source={source}
        text="Landscape"
        loadTime={1500}
        theme={{
          backgroundColor: '#EEEEEE',
          fontSize: 16,
          fontColor: palette.red,
          fontWeight: '700',
          shadow: true,
          radius: 0,
        }}
      />
    </Section>
  </>
);
