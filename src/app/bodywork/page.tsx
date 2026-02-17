'use client';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { bodyworkImages } from '@/lib/data';

export default function BodyworkPage() {
  return (
    <section id="bodywork" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
            قسم السمكرة والدهان
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
            نعيد لسيارتك بريقها ومظهرها الأصلي بأعلى معايير الدقة والجودة.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {bodyworkImages.map((imgInfo, index) => {
            const image = PlaceHolderImages.find(i => i.id === imgInfo.id);
            return (
              <Card key={index} className="overflow-hidden group">
                {image && (
                   <div className="aspect-video relative">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={image.imageHint}
                    />
                   </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
