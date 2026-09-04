import type {PropsWithChildren} from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {renderIcon} from '../../helpers/renderIcon';
import {useTheme} from '../../theme/ThemeProvider';
import type {IconProp} from '../../types';

export type SnackbarOptions = {
  text: string;
  /** Milliseconds before auto-hide. `0` keeps it until dismissed. */
  duration?: number;
  action?: {text: string; onPress: () => void};
  icon?: IconProp;
  backgroundColor?: string;
  textColor?: string;
  actionColor?: string;
};

type Queued = SnackbarOptions & {id: number};

type SnackbarContextValue = {
  /** Enqueue a snackbar. Returns its id. */
  show: (options: SnackbarOptions | string) => number;
  /** Hide the current snackbar (or the one with `id`). */
  hide: (id?: number) => void;
  /** Drop every queued snackbar and hide the current one. */
  clear: () => void;
};

const SnackbarContext = createContext<SnackbarContextValue | null>(null);

export type SnackbarProviderProps = PropsWithChildren<{
  position?: 'top' | 'bottom';
  /** Distance from the screen edge. */
  offset?: number;
  /** Default duration for snackbars without one. */
  duration?: number;
  testID?: string;
}>;

const ANIMATION_MS = 220;

/**
 * Hosts a queue of snackbars. Mount it once near the root and use
 * `useSnackbar()` anywhere below to show messages one after another.
 */
export const SnackbarProvider = ({
  children,
  duration = 3000,
  offset = 24,
  position = 'bottom',
  testID,
}: SnackbarProviderProps) => {
  const {colors, radius} = useTheme();
  const [queue, setQueue] = useState<Queued[]>([]);
  const [current, setCurrent] = useState<Queued | null>(null);
  const progress = useRef(new Animated.Value(0)).current;
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const nextId = useRef(1);

  const clearTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  const dismissCurrent = useCallback(() => {
    clearTimer();
    Animated.timing(progress, {
      toValue: 0,
      duration: ANIMATION_MS,
      useNativeDriver: true,
    }).start(({finished}) => {
      if (finished) {
        setCurrent(null);
      }
    });
  }, [progress]);

  // Promote the next queued snackbar once the stage is empty.
  useEffect(() => {
    if (current || queue.length === 0) {
      return;
    }
    const [next, ...rest] = queue;
    setQueue(rest);
    setCurrent(next ?? null);
  }, [current, queue]);

  // Animate in and arm the auto-hide timer for the current snackbar.
  useEffect(() => {
    if (!current) {
      return undefined;
    }
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: ANIMATION_MS,
      useNativeDriver: true,
    }).start();
    const ms = current.duration ?? duration;
    if (ms > 0) {
      timer.current = setTimeout(dismissCurrent, ms);
    }
    return clearTimer;
  }, [current, duration, dismissCurrent, progress]);

  const value = useMemo<SnackbarContextValue>(
    () => ({
      show: options => {
        const id = nextId.current++;
        const entry =
          typeof options === 'string' ? {text: options, id} : {...options, id};
        setQueue(prev => [...prev, entry]);
        return id;
      },
      hide: id => {
        if (id === undefined) {
          dismissCurrent();
          return;
        }
        setQueue(prev => prev.filter(item => item.id !== id));
        setCurrent(prev => {
          if (prev?.id === id) {
            dismissCurrent();
          }
          return prev;
        });
      },
      clear: () => {
        setQueue([]);
        dismissCurrent();
      },
    }),
    [dismissCurrent],
  );

  const translateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [position === 'bottom' ? 40 : -40, 0],
  });

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      {current && (
        <Animated.View
          pointerEvents="box-none"
          accessibilityRole="alert"
          accessibilityLiveRegion="polite"
          testID={testID}
          style={[
            styles.host,
            position === 'bottom' ? {bottom: offset} : {top: offset},
            {opacity: progress, transform: [{translateY}]},
          ]}>
          <View
            style={[
              styles.snackbar,
              {
                backgroundColor: current.backgroundColor ?? '#1F2937',
                borderRadius: radius.md,
              },
            ]}>
            {renderIcon(current.icon, {
              size: 18,
              color: current.textColor ?? '#FFFFFF',
            })}
            <Text
              style={[styles.text, {color: current.textColor ?? '#FFFFFF'}]}>
              {current.text}
            </Text>
            {!!current.action && (
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={current.action.text}
                testID={testID ? `${testID}-action` : undefined}
                hitSlop={8}
                onPress={() => {
                  current.action?.onPress();
                  dismissCurrent();
                }}>
                <Text
                  style={[
                    styles.action,
                    {color: current.actionColor ?? colors.primary},
                  ]}>
                  {current.action.text}
                </Text>
              </Pressable>
            )}
          </View>
        </Animated.View>
      )}
    </SnackbarContext.Provider>
  );
};

/** Access the snackbar queue. Must be used below a `SnackbarProvider`. */
export const useSnackbar = (): SnackbarContextValue => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used inside a <SnackbarProvider />');
  }
  return context;
};

const styles = StyleSheet.create({
  host: {
    position: 'absolute',
    left: 16,
    right: 16,
    alignItems: 'center',
    zIndex: 1000,
  },
  snackbar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
    maxWidth: 560,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    elevation: 6,
  },
  text: {
    flex: 1,
    fontSize: 14,
  },
  action: {
    fontWeight: '700',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});
