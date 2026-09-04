import type {ComponentRef, ReactElement} from 'react';
import {useEffect, useRef, useState} from 'react';
import type {LayoutChangeEvent} from 'react-native';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {useAnimation} from '../../hooks';
import {Triangle} from './Triangle';

type Props = {
  text?: string;
  children: ReactElement;
};

export const Tooltip = ({text, children}: Props) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [layout, setLayout] = useState({x: 0, y: 0, width: 0, height: 0});
  const [translateX, setTranslateX] = useState(0);
  const [isUp, setIsUp] = useState(true);
  const [position, setPosition] = useState<{
    left?: number;
    bottom?: number;
    right?: number;
  }>({});

  const viewRef = useRef<ComponentRef<typeof View>>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, []);

  const {opacity, fadeIn, fadeOut} = useAnimation();

  const {width} = useWindowDimensions();

  const handleLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;

    if (viewRef.current) {
      viewRef.current.measureInWindow((x, y) => {
        setLayout({x, y, width, height});
      });
    }
  };

  const tooltipLayout = (event: LayoutChangeEvent) => {
    const lay = event.nativeEvent.layout;

    if (layout.y - lay.height < 30) {
      setPosition({
        bottom: -(layout.height + 12),
        left: lay.width,
      });
      setIsUp(false);
    } else {
      setPosition({
        bottom: layout.height + 12,
        left:
          width - 10 < layout.y
            ? layout.y - (lay.width + (layout.y - width) + 25)
            : lay.width - 15,
      });
      setIsUp(true);
    }

    setTranslateX(-lay.width + layout.width / 2);
  };

  const handleVisible = () => {
    if (tooltipVisible) {
      fadeOut(500);
      hideTimer.current = setTimeout(() => {
        hideTimer.current = null;
        setTooltipVisible(false);
      }, 500);
    } else {
      setTooltipVisible(true);
      fadeIn(500);
    }
  };

  return (
    <View style={styles.container} ref={viewRef} onLayout={handleLayout}>
      <TouchableOpacity onPress={handleVisible} activeOpacity={0.8}>
        {children}
      </TouchableOpacity>
      {tooltipVisible && (
        <Animated.View
          onLayout={tooltipLayout}
          style={{
            ...styles.tooltipContainer,
            maxWidth: width / 2,
            width:
              width / 2 > (text?.length ?? 0) * 5
                ? (text?.length ?? 0) * 5 + 35
                : width / 2,
            opacity,
            transform: [{translateX}],
            left: position.left,
            bottom: position.bottom,
          }}>
          <Text style={styles.tooltipText}>{text}</Text>
          <Triangle
            direction={isUp ? 'down' : 'up'}
            style={{
              position: 'absolute',
              top: isUp ? undefined : -12,
              bottom: isUp ? -12 : undefined,
              left: 5,
            }}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  tooltipContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    // minWidth: 300,
    borderRadius: 4,
    padding: 10,
    zIndex: 99,
    flex: 1,
  },
  tooltipText: {
    color: '#FFF',
  },
});
