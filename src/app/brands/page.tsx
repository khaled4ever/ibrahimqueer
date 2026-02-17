'use client';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { brands } from '@/lib/data';

export default function BrandsPage() {
  return (
    <section id="brands" className="w-full py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
            نتخصص في أرقى الماركات العالمية والصينية
          </h1>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 items-center justify-center">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="flex items-center justify-center p-4 h-28 bg-card hover:bg-card/90 transition-colors"
            >
              {brand.type === 'image' && brand.src && (
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={100}
                  height={100}
                  className="h-full w-auto object-contain"
                />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
