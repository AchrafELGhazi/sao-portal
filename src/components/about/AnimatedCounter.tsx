import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2,
}) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    let start = 0;
    const end = Math.min(numericValue, 9999);
    const incrementTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [numericValue, duration]);

  // Handle values with "+" or other characters
  const suffix = value.includes('+') ? '+' : '';
  const prefix = value.startsWith('$') ? '$' : '';

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
