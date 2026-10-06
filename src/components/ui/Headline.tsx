import { Fragment } from 'react';
import { cn } from '@/lib/utils';

/**
 * Titular profesional ("A | B | C"): apilado en móvil,
 * separado por barras desde sm. Los lectores de pantalla oyen comas.
 */
export function Headline({ text, className }: { text: string; className?: string }) {
  const parts = text.split(' | ');
  return (
    <p className={cn('flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-2', className)}>
      {parts.map((part, i) => (
        <Fragment key={part}>
          {i > 0 && <span aria-hidden="true" className="hidden text-line-strong sm:inline">/</span>}
          <span>
            {part}
            {i < parts.length - 1 && <span className="sr-only">,</span>}
          </span>
        </Fragment>
      ))}
    </p>
  );
}

export default Headline;
