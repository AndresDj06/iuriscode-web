'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { navigationItems } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { cn, isActivePath } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const EASE = [0.22, 1, 0.36, 1] as const

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const panelRef = useRef<HTMLDivElement>(null)

  // Escape para cerrar, bloqueo de scroll y foco en el primer enlace
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          ref={panelRef}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-canvas lg:hidden"
        >
          <nav aria-label="Principal (móvil)" className="container-page py-6">
            <motion.ul
              className="flex flex-col"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } }}
            >
              {navigationItems.map((item) => {
                const active = isActivePath(pathname, item.href)
                return (
                  <motion.li
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
                    }}
                    className="border-b border-line"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center justify-between py-4 font-serif text-2xl',
                        active ? 'text-accent' : 'text-ink',
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                )
              })}
            </motion.ul>

            <div className="mt-8 flex flex-col gap-3 text-sm">
              <a href={siteConfig.links.email} className="link-underline w-fit text-body">
                {siteConfig.author.email}
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline w-fit text-body"
              >
                LinkedIn
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
