import {useEffect, useState} from 'react';

export const useProgressBar = (value: number) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (value > 100) {
      value = 100;
    }

    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 0.01;
        return newProgress >= value / 100 ? value / 100 : newProgress;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [value]);

  return {
    progress,
  };
};
