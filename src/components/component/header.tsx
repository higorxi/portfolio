import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center" prefetch={false}>
          <LogInIcon className="h-8 w-8" />
          <span className="ml-2 text-lg font-bold">Portfolio</span>
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
            prefetch={false}
          >
            Hire Me
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex flex-col items-start space-y-4 p-4">
              <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                Projects
              </Link>
              <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                Contact
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                prefetch={false}
              >
                Hire Me
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function LogInIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
