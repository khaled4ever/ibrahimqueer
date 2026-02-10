'use client';
import { Wrench, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { services } from '@/lib/data';

const navLinks = [
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
          <span className="font-headline text-2xl font-bold text-primary">
            المركز الفني للسيارات
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
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

          {navLinks.map((link) => (
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
      </div>
    </header>
  );
}
