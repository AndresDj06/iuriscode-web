import Link from 'next/link'
import { Mail } from 'lucide-react'
import { LinkedInIcon, GitHubIcon, WhatsAppIcon } from '@/components/ui/SocialIcons'
import { footerItems } from '@/config/navigation'
import { siteConfig } from '@/config/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-1 w-fit" id="footer-logo">
              <span className="text-2xl font-bold text-text-primary">{siteConfig.name}</span>
            </Link>
            <p className="text-text-muted text-sm max-w-sm">
              {siteConfig.author.headline}
            </p>
            <p className="text-accent-violet font-medium text-sm">
              {siteConfig.author.location}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-primary font-semibold text-lg tracking-wide">Navegación</h3>
            <ul className="flex flex-col gap-3">
              {footerItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    id={`footer-nav-link-${item.href.replace('/', '') || 'home'}`}
                    className="text-text-muted hover:text-accent-cyan transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-primary font-semibold text-lg tracking-wide">Conecta</h3>
            <div className="flex gap-4">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-cyan transition-colors"
                aria-label="LinkedIn"
                id="footer-linkedin"
              >
                <LinkedInIcon size={24} />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-cyan transition-colors"
                aria-label="GitHub"
                id="footer-github"
              >
                <GitHubIcon size={24} />
              </a>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-cyan transition-colors"
                aria-label="WhatsApp"
                id="footer-whatsapp"
              >
                <WhatsAppIcon size={24} />
              </a>
              <a
                href={siteConfig.links.email}
                className="text-text-muted hover:text-accent-cyan transition-colors"
                aria-label="Email"
                id="footer-email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
