import {useTheme} from '../../theme/ThemeProvider';
import {View} from 'react-native';

type Props = {
  height?: number;
  color?: string;
};

export const SelectedTab = ({height = 5, color}: Props) => {
  const {colors} = useTheme();
  const tint = color ?? colors.primary;
  return (
    <View
      style={{
        borderTopColor: tint,
        borderTopWidth: height,
        position: 'absolute',
        zIndex: 10,
        width: '100%',
        top: 0,
      }}
    />
  );
};
