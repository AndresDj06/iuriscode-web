'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { profileData } from '@/lib/data';
import { siteConfig } from '@/config/site';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4">
            {profileData.valueStatement}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-text-muted mb-10">
            {profileData.headline}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/contacto">
              <Button variant="primary" size="lg">Contáctame</Button>
            </Link>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">Ver mi LinkedIn</Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
