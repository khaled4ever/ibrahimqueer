'use client';
import { Wrench, ChevronDown, Menu } from 'lucide-react';
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
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { services } from '@/lib/data';

const navLinks = [
  { href: '#brands', label: 'الماركات' },
  { href: '#bodywork', label: 'السمكرة والدهان' },
  { href: '#contact', label: 'تواصل معنا' },
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
        'sticky top-0 z-40 w-full transition-all duration-300',
        hasScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Wrench className="w-8 h-8 text-primary" />
          <span className="font-headline text-xl sm:text-2xl font-bold text-primary">
            المركز الفني للسيارات
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#brands" className="font-semibold text-foreground/80 hover:text-primary transition-colors">الماركات</a>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-semibold text-foreground/80 hover:text-primary transition-colors focus:outline-none">
              <span>خدماتنا</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {services.map((service) => (
                <DropdownMenuItem key={service.title} asChild>
                  <a href="#services">{service.title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.filter(l => l.href.startsWith('#') && l.href !== '#brands').map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <Button asChild className="hidden md:flex">
          <a href="tel:+966555123456">اتصل الآن</a>
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
              <div className="flex flex-col p-6">
                <SheetClose asChild>
                    <a href="#" className="flex items-center gap-2 mb-8">
                      <Wrench className="w-8 h-8 text-primary" />
                      <span className="font-headline text-xl font-bold text-primary">
                        المركز الفني
                      </span>
                    </a>
                </SheetClose>
                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <a
                        href={link.href}
                        className="text-lg font-semibold text-foreground/80 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                  
                  <Accordion type="single" collapsible className="w-full text-lg font-semibold text-foreground/80">
                      <AccordionItem value="services" className="border-b-0">
                        <AccordionTrigger className="py-2 hover:no-underline hover:text-primary transition-colors">
                          خدماتنا
                        </AccordionTrigger>
                        <AccordionContent className="pr-4">
                          <div className="flex flex-col gap-2 mt-3">
                            {services.map((service) => (
                              <SheetClose key={service.title} asChild>
                                <a
                                  href="#services"
                                  className="font-normal text-muted-foreground hover:text-primary"
                                >
                                  {service.title}
                                </a>
                              </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                  </Accordion>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
