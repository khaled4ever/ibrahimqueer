'use client';
import { Card } from '@/components/ui/card';
import { Phone, MapPin, Clock } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ContactPage() {
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
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    <section id="contact" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
            تواصل معنا
          </h1>
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
    </>
  );
}
