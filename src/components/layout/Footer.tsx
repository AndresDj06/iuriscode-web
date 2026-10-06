import Link from 'next/link'
import { footerItems } from '@/config/navigation'
import { siteConfig } from '@/config/site'

const contactLinks = [
  { label: siteConfig.author.email, href: siteConfig.links.email },
  { label: `WhatsApp ${siteConfig.author.phoneDisplay}`, href: siteConfig.links.whatsapp },
  { label: 'LinkedIn', href: siteConfig.links.linkedin },
  { label: 'GitHub', href: siteConfig.links.github },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <Link href="/" className="w-fit font-serif text-xl font-medium text-ink">
            {siteConfig.name}
          </Link>
          <p className="max-w-sm text-sm text-body">{siteConfig.author.headline}</p>
          <p className="text-sm text-mute">{siteConfig.author.location}</p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-mute">Secciones</h2>
          <ul className="flex flex-col gap-2.5">
            {footerItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline text-sm text-body hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-mute">Contacto</h2>
          <ul className="flex flex-col gap-2.5">
            {contactLinks.map((link) => {
              const newTab = link.href.startsWith('http')
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline break-all text-sm text-body hover:text-ink"
                    {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="container-page py-6 text-xs text-mute">
          © {currentYear} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}

export default Footer
