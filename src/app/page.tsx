'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-banner');

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <section className="relative w-full h-[calc(100vh-5rem)] flex items-center justify-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white p-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold font-headline">
            صيانة متخصصة للسيارات الألمانية والأوروبية والصينية
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            الجودة والخبرة التي تستحقها سيارتك في الرياض. نقدم خدمات شاملة من الميكانيكا والكهرباء إلى البرمجة والسمكرة بأعلى جودة.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                  <Link href="/services">استكشف خدماتنا</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                  <Link href="/contact">اتصل بنا الآن</Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
