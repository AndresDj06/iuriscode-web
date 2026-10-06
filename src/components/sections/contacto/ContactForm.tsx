'use client';

import { useRef, useState, type FormEvent } from 'react';
import { Mail } from 'lucide-react';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/SocialIcons';
import { siteConfig } from '@/config/site';

type Field = 'name' | 'email' | 'subject' | 'message';
type Errors = Partial<Record<Field, string>>;
type Channel = 'email' | 'whatsapp';

const MAX_MESSAGE = 1500; // los enlaces mailto: largos fallan en algunos clientes

function validate(data: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (!data.name) errors.name = 'Escribe tu nombre.';
  if (!data.email) errors.email = 'Escribe tu correo.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Revisa el formato del correo.';
  if (!data.subject) errors.subject = 'Escribe un asunto.';
  if (!data.message) errors.message = 'Escribe tu mensaje.';
  return errors;
}

/**
 * Formulario de contacto para sitio estático: no envía a ningún servidor.
 * Abre el cliente de correo (mailto:) o WhatsApp con el mensaje redactado.
 */
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Channel | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel: Channel = submitter?.value === 'whatsapp' ? 'whatsapp' : 'email';

    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(
      (['name', 'email', 'subject', 'message'] as Field[]).map((f) => [f, String(form.get(f) ?? '').trim()]),
    ) as Record<Field, string>;

    const found = validate(data);
    setErrors(found);
    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      setStatus(null);
      return;
    }

    const body = `${data.message}\n\n—\n${data.name}\n${data.email}`;
    const url =
      channel === 'email'
        ? `${siteConfig.links.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`
        : `${siteConfig.links.whatsapp}?text=${encodeURIComponent(`*${data.subject}*\n\n${body}`)}`;

    if (channel === 'email') window.location.href = url;
    else window.open(url, '_blank', 'noopener,noreferrer');
    setStatus(channel);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5" aria-describedby="form-note">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="Nombre" name="name" autoComplete="name" required error={errors.name} />
        <Input label="Correo" name="email" type="email" autoComplete="email" inputMode="email" required error={errors.email} />
      </div>
      <Input label="Asunto" name="subject" required error={errors.subject} />
      <Textarea label="Mensaje" name="message" rows={6} maxLength={MAX_MESSAGE} required error={errors.message} />

      <p id="form-note" className="text-sm text-mute">
        El formulario no guarda tus datos: abre tu aplicación de correo o WhatsApp con el mensaje listo para enviar.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" name="channel" value="email" size="lg">
          <Mail aria-hidden="true" className="size-4" />
          Enviar por correo
        </Button>
        <Button type="submit" name="channel" value="whatsapp" variant="secondary" size="lg">
          <WhatsAppIcon size={16} />
          Enviar por WhatsApp
        </Button>
      </div>

      <p role="status" aria-live="polite" className="min-h-6 text-sm text-success">
        {status === 'email' && (
          <>
            Se abrió tu aplicación de correo. Si no se abrió, escríbeme a{' '}
            <a href={siteConfig.links.email} className="font-medium underline underline-offset-2">
              {siteConfig.author.email}
            </a>
            .
          </>
        )}
        {status === 'whatsapp' && 'Se abrió WhatsApp en otra pestaña con tu mensaje.'}
      </p>
    </form>
  );
}
