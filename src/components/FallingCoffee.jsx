import React, { useMemo } from 'react';

const NUM_BEANS = 9;

function random(min, max) {
  return Math.random() * (max - min) + min;
}

const FallingCoffee = () => {
  const beans = useMemo(() => {
    return Array.from({ length: NUM_BEANS }).map((_, i) => ({
      id: i,
      left: `${random(0, 100)}%`,
      size: `${random(19, 40)}px`,
      duration: `${random(15, 21)}s`,
      delay: `${random(-12, 0)}s`,
      rotate: `${random(-30, 30)}deg`,
      opacity: random(0.7, 0.9),
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {beans.map((b) => (
        <img
          key={b.id}
          src="/images/fallcoffee.png"
          alt="coffee bean"
          className="absolute animate-coffee-fall will-change-transform"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: b.duration,
            animationDelay: b.delay,
            transform: `rotate(${b.rotate})`,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default FallingCoffee;
