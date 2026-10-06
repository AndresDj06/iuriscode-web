'use client';

import { motion, type Variants } from 'framer-motion';
import { profileData } from '@/lib/data';
import { siteConfig } from '@/config/site';
import { ButtonLink } from '@/components/ui/Button';
import { Portrait } from '@/components/ui/Portrait';
import { Headline } from '@/components/ui/Headline';

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="container-page pb-20 pt-28 sm:pb-28 sm:pt-40">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16"
      >
        <motion.div variants={item} className="lg:order-last">
          <Portrait eager className="size-24 sm:size-32 lg:size-72" />
        </motion.div>

        <div className="flex min-w-0 max-w-3xl flex-col items-start">
          <motion.p variants={item} className="eyebrow mb-5">
            {profileData.fullName} · {profileData.location}
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={item}
            className="font-serif text-[2.5rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-[4.25rem]"
          >
            {profileData.valueStatement}
          </motion.h1>

          <motion.div variants={item}>
            <Headline text={profileData.headline} className="mt-6 text-lg text-body sm:text-xl" />
          </motion.div>

          <motion.div variants={item} className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href="/contacto" size="lg" arrow>
              Contáctame
            </ButtonLink>
            <ButtonLink href={siteConfig.links.linkedin} variant="secondary" size="lg">
              Ver mi LinkedIn
            </ButtonLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
