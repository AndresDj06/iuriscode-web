'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

/** true hasta que la primera página termina de montarse. */
let isFirstLoad = true;

/**
 * Transición entre páginas: fade corto del contenido.
 * El template se vuelve a montar en cada navegación; el header y el footer
 * viven en el layout y no parpadean. En la primera carga no se anima,
 * para no ocultar el HTML del servidor mientras llega el JavaScript.
 */
export default function Template({ children }: { children: ReactNode }) {
  const [animate] = useState(() => !isFirstLoad);

  useEffect(() => {
    isFirstLoad = false;
  }, []);

  return (
    <motion.div
      initial={animate ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
