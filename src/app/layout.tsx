import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingActionButtons } from '@/components/floating-action-buttons';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'AutoKraft Zentrum',
  description:
    'مركز اوتو كرافت هو ورشة صيانة متخصصة في السيارات الألمانية والأوروبية والصينية، نقدم خدمات ميكانيكا، كهرباء، برمجة، سمكرة، وصيانة دورية بأعلى معايير الجودة.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingActionButtons />
        <Toaster />
      </body>
    </html>
  );
}
