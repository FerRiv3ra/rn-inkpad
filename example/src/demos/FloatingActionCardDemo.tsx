import {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {FloatingActionCard} from 'rn-inkpad';

import {Result, Section} from '../ui/Section';

export const FloatingActionCardDemo = () => {
  const [presses, setPresses] = useState(0);

  return (
    <Section
      title="Card over an image"
      description="Floats at the bottom of its container.">
      <View style={styles.stage}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
          }}
          style={styles.image}
        />
        <FloatingActionCard
          title="Maldives hotel"
          icon="star"
          description="Lorem ipsum dolor"
          image={{
            uri: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400',
          }}
          rating={4.5}
          onPress={() => setPresses(p => p + 1)}
        />
      </View>
      <Result label={`Pressed ${presses} times`} />
    </Section>
  );
};

const styles = StyleSheet.create({
  stage: {
    height: 420,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
