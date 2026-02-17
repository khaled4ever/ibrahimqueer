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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <section id="services" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
            خدماتنا المتخصصة
          </h1>
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
  );
}
