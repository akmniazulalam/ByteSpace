"use client";

import { useEffect, useRef, useState } from "react";

interface CounterUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const CounterUp = ({
  end,
  suffix = "",
  duration = 1800,
  className = "",
}: CounterUpProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrame: number;
    const startTime = performance.now();

    const easeOut = (progress: number) => {
      return 1 - Math.pow(1 - progress, 4);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeOut(progress);
      const currentValue = Math.floor(easedProgress * end);

      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return (
    <h4
      ref={counterRef}
      className={`font-poppins text-3xl font-medium leading-10 text-secondary sm:text-4xl sm:leading-11 ${className}`}
    >
      {count.toLocaleString()}
      {suffix}
    </h4>
  );
};

export default CounterUp;