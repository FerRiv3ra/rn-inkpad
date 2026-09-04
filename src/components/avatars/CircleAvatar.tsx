import type {A11yProps} from '../../types';
import type {ImageSourcePropType} from 'react-native';
import {Image, Pressable, Text} from 'react-native';

type Props = A11yProps & {
  backgroundColor?: string;
  defaultText?: string;
  fontSize?: number;
  image?: ImageSourcePropType;
  size?: number;
  textColor?: string;
  onPress?: () => void;
};

export const CircleAvatar = ({
  accessibilityHint,
  accessibilityLabel,
  backgroundColor = '#373099',
  defaultText = 'AA',
  fontSize = 26,
  image,
  onPress,
  size = 50,
  testID,
  textColor = '#FFFFFF',
}: Props) => {
  return (
    <Pressable
      accessibilityRole={onPress ? 'button' : 'image'}
      accessibilityLabel={accessibilityLabel ?? defaultText}
      accessibilityHint={accessibilityHint}
      testID={testID}
      disabled={!onPress}
      onPress={onPress}
      style={{
        height: size,
        width: size,
        backgroundColor: backgroundColor,
        borderRadius: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {image ? (
        <Image
          style={{height: size, width: size, borderRadius: size}}
          source={image}
        />
      ) : (
        <Text style={{color: textColor, fontSize, fontWeight: '600'}}>
          {defaultText.slice(0, 2)}
        </Text>
      )}
    </Pressable>
  );
};
