import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

interface StyleProps {
  variant?: Variant;
  size?: Size;
  /** Flecha que se desplaza al pasar el cursor. */
  arrow?: boolean;
}

export function buttonStyles({ variant = 'primary', size = 'md' }: StyleProps = {}) {
  return cn(
    'group inline-flex items-center justify-center gap-2 rounded-md font-medium',
    'transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50',
    {
      primary: 'bg-accent text-on-accent hover:bg-accent-hover',
      secondary: 'border border-line-strong bg-canvas text-ink hover:border-ink',
      ghost: 'text-ink hover:bg-surface',
    }[variant],
    {
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-[15px]',
    }[size],
  );
}

function Arrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
    />
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyleProps {}

export function Button({ variant, size, arrow, className, children, type = 'button', ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonStyles({ variant, size }), className)} {...props}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, StyleProps {
  href: string;
  children: ReactNode;
}

/** Enlace con aspecto de botón. Usa next/link para rutas internas. */
export function ButtonLink({ href, variant, size, arrow, className, children, ...props }: ButtonLinkProps) {
  const classes = cn(buttonStyles({ variant, size }), className);
  const external = /^(https?:|mailto:|tel:)/.test(href);

  if (external) {
    const newTab = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
        {arrow && <Arrow />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

export default Button;
