import type {ReactNode} from 'react';
import {useEffect, useMemo, useRef, useState} from 'react';
import type {
  PanResponderGestureState,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {
  Animated,
  Modal,
  PanResponder,
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {useTheme} from '../../theme/ThemeProvider';
import type {A11yProps} from '../../types';

export type BottomSheetProps = A11yProps & {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Fixed height. Omit to size to the content. */
  height?: number;
  backgroundColor?: string;
  backdropColor?: string;
  radius?: number;
  showHandle?: boolean;
  handleColor?: string;
  closeOnBackdrop?: boolean;
  /** Drag the sheet down to dismiss it. */
  dragToClose?: boolean;
  style?: StyleProp<ViewStyle>;
};

const OPEN_MS = 280;
const CLOSE_MS = 220;

export const BottomSheet = ({
  accessibilityLabel,
  backdropColor,
  backgroundColor,
  children,
  closeOnBackdrop = true,
  dragToClose = true,
  handleColor,
  height,
  onClose,
  radius,
  showHandle = true,
  style,
  testID,
  visible,
}: BottomSheetProps) => {
  const {colors, radius: themeRadius} = useTheme();
  const {height: screenHeight} = useWindowDimensions();
  const [mounted, setMounted] = useState(visible);
  const translateY = useRef(new Animated.Value(screenHeight)).current;
  const backdrop = useRef(new Animated.Value(0)).current;
  const sheetHeight = useRef(height ?? screenHeight);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const animateClosed = (then?: () => void) => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: sheetHeight.current,
        duration: CLOSE_MS,
        useNativeDriver: true,
      }),
      Animated.timing(backdrop, {
        toValue: 0,
        duration: CLOSE_MS,
        useNativeDriver: true,
      }),
    ]).start(({finished}) => {
      if (finished) {
        then?.();
      }
    });
  };

  const animateOpen = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: OPEN_MS,
        useNativeDriver: true,
      }),
      Animated.timing(backdrop, {
        toValue: 1,
        duration: OPEN_MS,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (visible) {
      setMounted(true);
      // Start below the screen; the layout callback positions and opens it.
      translateY.setValue(sheetHeight.current);
      if (height) {
        animateOpen();
      }
    } else if (mounted) {
      animateClosed(() => setMounted(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  const requestClose = () => {
    onCloseRef.current();
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gesture) =>
          dragToClose &&
          gesture.dy > 4 &&
          Math.abs(gesture.dy) > Math.abs(gesture.dx),
        onPanResponderMove: (_, gesture: PanResponderGestureState) => {
          translateY.setValue(Math.max(gesture.dy, 0));
        },
        onPanResponderRelease: (_, gesture) => {
          const shouldClose =
            gesture.dy > sheetHeight.current * 0.3 || gesture.vy > 0.8;
          if (shouldClose) {
            requestClose();
          } else {
            Animated.spring(translateY, {
              toValue: 0,
              useNativeDriver: true,
              bounciness: 2,
            }).start();
          }
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dragToClose],
  );

  if (!mounted) {
    return null;
  }

  return (
    <Modal
      visible
      transparent
      statusBarTranslucent
      animationType="none"
      onRequestClose={requestClose}>
      <View style={styles.root}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: backdropColor ?? colors.overlay,
              opacity: backdrop,
            },
          ]}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close"
            testID={testID ? `${testID}-backdrop` : undefined}
            disabled={!closeOnBackdrop}
            onPress={requestClose}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
        <Animated.View
          accessibilityViewIsModal
          accessibilityLabel={accessibilityLabel}
          testID={testID}
          onLayout={event => {
            if (!height) {
              const measured = event.nativeEvent.layout.height;
              const firstLayout = sheetHeight.current === screenHeight;
              sheetHeight.current = measured;
              if (firstLayout) {
                translateY.setValue(measured);
                animateOpen();
              }
            }
          }}
          style={[
            styles.sheet,
            {
              backgroundColor: backgroundColor ?? colors.background,
              borderTopLeftRadius: radius ?? themeRadius.lg,
              borderTopRightRadius: radius ?? themeRadius.lg,
              maxHeight: screenHeight * 0.9,
              transform: [{translateY}],
            },
            !!height && {height},
            style,
          ]}
          {...panResponder.panHandlers}>
          {showHandle && (
            <View style={styles.handleArea}>
              <View
                style={[
                  styles.handle,
                  {backgroundColor: handleColor ?? colors.border},
                ]}
              />
            </View>
          )}
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sheet: {
    width: '100%',
    paddingBottom: 24,
    overflow: 'hidden',
  },
  handleArea: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
  },
});
