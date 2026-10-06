'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail } from 'lucide-react'
import { LinkedInIcon, GitHubIcon } from '@/components/ui/SocialIcons'
import { navigationItems } from '@/config/navigation'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  // Trap focus & close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegación"
        >
          <div className="flex flex-col h-full" ref={menuRef}>
            <div className="flex items-center justify-between p-4 sm:px-6">
              <Link href="/" className="flex items-center gap-1" onClick={onClose} id="mobile-menu-logo">
                <span className="text-xl font-bold text-text-primary">{siteConfig.name}</span>
                
              </Link>
              <button
                id="mobile-menu-close"
                onClick={onClose}
                className="p-2 text-text-muted hover:text-text-primary transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 px-6 py-8 overflow-y-auto">
              <ul className="flex flex-col gap-6">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href
                  
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        id={`mobile-nav-link-${item.href.replace('/', '') || 'home'}`}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-4 text-lg font-medium transition-colors p-3 rounded-xl",
                          isActive 
                            ? "text-accent-cyan bg-surface/50 border-l-2 border-accent-cyan" 
                            : "text-text-muted hover:text-text-primary hover:bg-surface/30"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="p-6 border-t border-border">
              <p className="text-sm font-medium text-text-muted mb-4">Conecta</p>
              <div className="flex gap-4">
                <a 
                  href={siteConfig.links.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface text-text-muted hover:text-accent-cyan transition-colors"
                  aria-label="LinkedIn"
                  id="mobile-menu-linkedin"
                >
                  <LinkedInIcon size={20} />
                </a>
                <a 
                  href={siteConfig.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface text-text-muted hover:text-accent-cyan transition-colors"
                  aria-label="GitHub"
                  id="mobile-menu-github"
                >
                  <GitHubIcon size={20} />
                </a>
                <a 
                  href={siteConfig.links.email} 
                  className="p-2 rounded-full bg-surface text-text-muted hover:text-accent-cyan transition-colors"
                  aria-label="Email"
                  id="mobile-menu-email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
