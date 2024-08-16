import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { LogInIcon, MenuIcon } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#inicio" className="flex items-center" prefetch={false}>
          <LogInIcon className="h-8 w-8" />
          <span className="ml-2 text-lg font-bold hover:text-primary transition-transform duration-200 transform hover:scale-105">
            Portfólio
          </span>
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          <Link href="#inicio" className="group relative text-sm font-medium hover:text-primary transition-transform duration-200 transform hover:scale-105" prefetch={false}>
            Início
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="#sobre" className="group relative text-sm font-medium hover:text-primary transition-transform duration-200 transform hover:scale-105" prefetch={false}>
            Sobre
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="#projetos" className="group relative text-sm font-medium hover:text-primary transition-transform duration-200 transform hover:scale-105" prefetch={false}>
            Projetos
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="#contato" className="group relative text-sm font-medium hover:text-primary transition-transform duration-200 transform hover:scale-105" prefetch={false}>
            Contato
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link
            href="#contato"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform duration-200 transform hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
            prefetch={false}
          >
            Contrate-me
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Alternar navegação</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex flex-col items-start space-y-4 p-4">
              <Link href="#inicio" className="group relative text-sm font-medium hover:text-primary transition-transform duration-200 transform hover:scale-105" prefetch={false}>
                Início
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link href="#sobre" className="group relative text-sm font-medium hover:text-primary transition-transform duration-200 transform hover:scale-105" prefetch={false}>
                Sobre
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link href="#projetos" className="group relative text-sm font-medium hover:text-primary transition-transform duration-200 transform hover:scale-105" prefetch={false}>
                Projetos
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link href="#contato" className="group relative text-sm font-medium hover:text-primary transition-transform duration-200 transform hover:scale-105" prefetch={false}>
                Contato
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform duration-200 transform hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
                prefetch={false}
              >
                Contrate-me
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
