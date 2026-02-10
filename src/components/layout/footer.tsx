export function Footer() {
  return (
    <footer className="w-full bg-secondary border-t border-border/50">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} المركز الفني للسيارات. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
