'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services, brands, bodyworkImages } from '@/lib/data';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-banner');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'المركز الفني للسيارات',
    image: heroImage?.imageUrl,
    url: 'https://auto-repair-center-sa.com', // Placeholder URL
    telephone: '+966552076668',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 شارع الصناعية',
      addressLocality: 'الرياض',
      addressCountry: 'SA',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
      ],
      opens: '08:00',
      closes: '19:00',
    },
    sameAs: ['https://wa.me/966552076668'],
  };

  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative w-full h-[60vh] md:h-[80vh]">
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
      </section>

      <section id="brands" className="w-full py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="font-headline text-3xl font-bold text-center mb-8 text-primary">
              نتخصص في أرقى الماركات العالمية والصينية
            </h2>
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

      <section id="services" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
              خدماتنا المتخصصة
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
              نقدم حلولاً شاملة لسيارتك بأيدي خبراء وباستخدام أحدث
              التقنيات.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const serviceImage = PlaceHolderImages.find(
                (img) => img.id === service.image
              );
              return (
                <div key={service.title}>
                  <Card
                    className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
                  >
                    <CardHeader className="p-0">
                      {serviceImage && (
                        <div className="aspect-video overflow-hidden">
                          <Image
                            src={serviceImage.imageUrl}
                            alt={serviceImage.description}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={serviceImage.imageHint}
                          />
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="flex-grow p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <service.icon className="w-8 h-8 text-primary" />
                        <CardTitle className="font-headline text-xl font-bold">
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription>{service.shortDescription}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-0 px-6 pb-6">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-b-0">
                          <AccordionTrigger className="text-primary hover:no-underline">
                            اقرأ المزيد
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {service.aiExplanation}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section id="bodywork" className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
              قسم السمكرة والدهان
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
              نعيد لسيارتك بريقها ومظهرها الأصلي بأعلى معايير الدقة والجودة.
            </p>
          </div>
          <div>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {bodyworkImages.map((imgInfo, index) => {
                  const image = PlaceHolderImages.find(i => i.id === imgInfo.id);
                  return (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden">
                        {image && (
                           <div className="aspect-video relative">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                            />
                             <div className="absolute top-2 left-2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">{imgInfo.label}</div>
                           </div>
                        )}
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="translate-x-12 sm:translate-x-16" />
              <CarouselNext className="-translate-x-12 sm:-translate-x-16"/>
            </Carousel>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
              تواصل معنا
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
              نسعد بخدمتكم. تفضلوا بزيارتنا أو تواصلوا معنا لأي استفسار.
            </p>
          </div>
          <div>
            <Card className="max-w-4xl mx-auto p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
                <div className="flex flex-col items-center md:items-start">
                  <Phone className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-headline text-lg font-bold">الهاتف</h3>
                  <a href="tel:+966552076668" className="text-muted-foreground hover:text-primary transition-colors">
                    +966 55 207 6668
                  </a>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <MapPin className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-headline text-lg font-bold">العنوان</h3>
                  <p className="text-muted-foreground">
                    123 شارع الصناعية، الرياض، المملكة العربية السعودية
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <Clock className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-headline text-lg font-bold">أوقات العمل</h3>
                  <p className="text-muted-foreground">
                    السبت - الخميس: 8:00 ص - 7:00 م
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
