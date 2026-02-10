import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FloatingActionButtons() {
  const buttonClasses =
    'flex items-center gap-2 rounded-full shadow-lg h-14 pr-6 pl-5 text-lg font-semibold transition-transform hover:scale-105';

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-4">
      <a href="https://wa.me/966555123456" target="_blank" rel="noopener noreferrer">
        <Button
          className={cn(
            buttonClasses,
            'bg-[#25D366] hover:bg-[#1DAA50] text-white'
          )}
        >
          <MessageCircle className="h-6 w-6" />
          <span>راسلنا واتس اب</span>
        </Button>
      </a>
      <a href="tel:+966555123456">
        <Button
          className={cn(
            buttonClasses,
            'bg-primary hover:bg-primary/90 text-primary-foreground'
          )}
        >
          <Phone className="h-6 w-6" />
          <span>اتصل بنا</span>
        </Button>
      </a>
    </div>
  );
}
