import {useEffect, useRef, useState} from 'react';

const STEP = 0.01;
const TICK_MS = 10;

/**
 * Animates `progress` (0..1) towards `value` (0..100), up or down.
 * The interval stops once the target is reached and on unmount.
 */
export const useProgressBar = (value: number) => {
  const [progress, setProgress] = useState(0);
  // Mirror of `progress` readable inside the interval without stale closures.
  const progressRef = useRef(0);

  useEffect(() => {
    const target = Math.min(Math.max(value, 0), 100) / 100;

    const interval = setInterval(() => {
      const diff = target - progressRef.current;
      let next: number;

      if (Math.abs(diff) <= STEP) {
        next = target;
        clearInterval(interval);
      } else {
        next = progressRef.current + Math.sign(diff) * STEP;
      }

      progressRef.current = next;
      setProgress(next);
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [value]);

  return {
    progress,
  };
};
