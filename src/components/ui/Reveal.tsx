'use client';

import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;
const OFFSET = 16;

/** Entrada suave al hacer scroll: fade + 16 px, una sola vez. */
export function Reveal({ delay = 0, ...props }: HTMLMotionProps<'div'> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: OFFSET }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...props}
    />
  );
}

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: OFFSET },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/** Contenedor de entradas escalonadas para listas y tarjetas. */
export function Stagger({ as = 'div', ...props }: HTMLMotionProps<'div'> & { as?: 'div' | 'ul' | 'ol' }) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={listVariants}
      {...props}
    />
  );
}

export function StaggerItem({ as = 'div', ...props }: HTMLMotionProps<'div'> & { as?: 'div' | 'li' }) {
  const Component = motion[as] as typeof motion.div;
  return <Component variants={itemVariants} {...props} />;
}

export default Reveal;
