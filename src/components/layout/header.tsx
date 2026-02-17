'use client';
import Link from 'next/link';
import { Car, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { services } from '@/lib/data';

const navLinks = [
  { href: '/brands', label: 'الماركات' },
  { href: '/bodywork', label: 'السمكرة والدهان' },
  { href: '/contact', label: 'تواصل معنا' },
];

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300 border-b',
        hasScrolled
          ? 'bg-background/80 backdrop-blur-sm'
          : 'bg-background'
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Car className="w-8 h-8 text-primary" />
          <span className="font-headline text-xl sm:text-2xl font-bold text-primary">
            المركز الفني للسيارات
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/brands" className="font-semibold text-foreground/80 hover:text-primary transition-colors">الماركات</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-semibold text-foreground/80 hover:text-primary transition-colors focus:outline-none">
              <span>خدماتنا</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/services">جميع الخدمات</Link>
              </DropdownMenuItem>
              {services.map((service) => (
                <DropdownMenuItem key={service.title} asChild>
                  <Link href="/services">{service.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.filter(l => l.href !== '/brands').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <Button asChild className="hidden md:flex">
          <a href="tel:+966552076668">اتصل الآن</a>
        </Button>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">القائمة</SheetTitle>
              <div className="flex flex-col p-6">
                <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2 mb-8">
                      <Car className="w-8 h-8 text-primary" />
                      <span className="font-headline text-xl font-bold text-primary">
                        المركز الفني
                      </span>
                    </Link>
                </SheetClose>
                <nav className="flex flex-col gap-4">
                  <SheetClose asChild>
                    <Link href="/brands" className="text-lg font-semibold text-foreground/80 hover:text-primary transition-colors">
                      الماركات
                    </Link>
                  </SheetClose>

                  <div>
                    <SheetClose asChild>
                      <Link href="/services" className="text-lg font-semibold text-foreground/80 hover:text-primary transition-colors">
                        خدماتنا
                      </Link>
                    </SheetClose>
                    <div className="mt-3 flex flex-col gap-3 pr-4">
                      {services.map((service) => (
                        <SheetClose key={service.title} asChild>
                          <Link
                            href="/services"
                            className="text-base font-normal text-muted-foreground hover:text-primary transition-colors"
                          >
                            {service.title}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  <SheetClose asChild>
                    <Link href="/bodywork" className="text-lg font-semibold text-foreground/80 hover:text-primary transition-colors">
                      السمكرة والدهان
                    </Link>
                  </SheetClose>
                  
                  <SheetClose asChild>
                    <Link href="/contact" className="text-lg font-semibold text-foreground/80 hover:text-primary transition-colors">
                      تواصل معنا
                    </Link>
                  </SheetClose>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
