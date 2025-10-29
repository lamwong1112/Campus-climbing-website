export function SiteFooter() {
  return (
    <footer className="relative block h-[100svh] w-full border-t snap-start snap-stop-always flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-4 md:px-6 lg:px-8 w-full text-sm text-muted-foreground flex items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Campus Climbing</p>
        <p>Made with ❤️ in Jordan</p>
      </div>
    </footer>
  );
}



