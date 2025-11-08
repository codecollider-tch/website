'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const counters = [
  { id: 1, value: '100+', label: 'Projects Completed' },
  { id: 2, value: '95%', label: 'Client Satisfaction' },
  { id: 3, value: '$50M+', label: 'Revenue Generated' },
  { id: 4, value: '90%', label: 'Project Success Rate' },
];

function Counter({ counter, index }: { counter: typeof counters[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="counter-grid-col"
    >
      <h3 className="counter-title">
        <strong>{counter.value}</strong>
      </h3>
      <p className="paragraph-medium-lighter is-counter">{counter.label}</p>
    </motion.div>
  );
}

export default function Counters() {
  return (
    <section className="counters padding-section-medium">
      <div className="padding-global">
        <div className="container-large">
          <div className="counter-grid">
            {counters.map((counter, index) => (
              <Counter key={counter.id} counter={counter} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
