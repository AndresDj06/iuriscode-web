import Image from 'next/image';
import { profileData } from '@/lib/data';
import { cn } from '@/lib/utils';

/** Retrato circular. El recorte deja fuera el fondo gris de la foto original. */
export function Portrait({ className, eager = false }: { className?: string; eager?: boolean }) {
  return (
    <div className={cn('relative aspect-square shrink-0 overflow-hidden rounded-full bg-ink ring-1 ring-line', className)}>
      <Image
        src={profileData.avatarUrl}
        alt={`Retrato de ${profileData.fullName}`}
        width={640}
        height={640}
        sizes="(min-width: 1024px) 288px, 160px"
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        className="size-full object-cover"
      />
    </div>
  );
}

export default Portrait;
