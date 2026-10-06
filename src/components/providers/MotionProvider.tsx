'use client';

import { MotionConfig } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Configuración global de Framer Motion.
 * reducedMotion="user": si el sistema pide menos movimiento,
 * se omiten las transformaciones (desplazamientos, escalas).
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
