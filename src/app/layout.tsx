import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingActionButtons } from '@/components/floating-action-buttons';
import { Toaster } from '@/components/ui/toaster';

const siteUrl = 'https://auto-repair-center-sa.com'; // Placeholder URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'المركز الفني للسيارات | صيانة سيارات ألمانية، أوروبية، وصينية بالرياض',
    template: `%s | المركز الفني للسيارات`,
  },
  description:
    'المركز الفني للسيارات هو ورشتك الموثوقة لصيانة وإصلاح السيارات الألمانية والأوروبية والصينية في الرياض. نقدم خدمات شاملة من الميكانيكا والكهرباء إلى البرمجة والسمكرة بأعلى جودة.',
  keywords: [
    'صيانة سيارات',
    'ورشة سيارات',
    'الرياض',
    'سيارات ألمانية',
    'سيارات أوروبية',
    'سيارات صينية',
    'ميكانيكا سيارات',
    'كهرباء سيارات',
    'برمجة سيارات',
    'سمكرة ودهان',
    'توضيب مكائن',
    'ورشة متنقلة',
  ],
  openGraph: {
    title: 'المركز الفني للسيارات | خبراؤك في صيانة السيارات بالرياض',
    description:
      'نقدم خدمات صيانة وإصلاح متخصصة للسيارات الألمانية والأوروبية والصينية. جودة، دقة، وموثوقية.',
    url: siteUrl,
    siteName: 'المركز الفني للسيارات',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1632733711679-529326f6db12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxhdXRvJTIwcmVwYWlyfGVufDB8fHx8MTc3MDY0Nzc5MXww&ixlib=rb-4.1.0&q=80&w=1080',
        width: 1200,
        height: 630,
        alt: 'ورشة المركز الفني للسيارات',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'المركز الفني للسيارات | صيانة متخصصة بالرياض',
    description:
      'ورشة متكاملة لصيانة السيارات الألمانية، الأوروبية، والصينية. خدماتنا تشمل الميكانيكا، الكهرباء، البرمجة، والسمكرة.',
    images: [
      'https://images.unsplash.com/photo-1632733711679-529326f6db12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxhdXRvJTIwcmVwYWlyfGVufDB8fHx8MTc3MDY0Nzc5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
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
