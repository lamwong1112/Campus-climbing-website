export function SiteFooter() {
  return (
    <footer className="border-t py-8 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-muted-foreground flex items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Campus Climbing</p>
        <p>Made with ❤️ in Jordan</p>
      </div>
    </footer>
  );
}


