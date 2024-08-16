import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { LogInIcon, MenuIcon } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#inicio" className="flex items-center" prefetch={false}>
          <LogInIcon className="h-8 w-8 text-[#C79D2A]" />
          <span className="ml-2 text-lg font-bold text-[#FFFFFF] hover:text-[#C79D2A] transition-transform duration-200 transform hover:scale-105">
            Portfólio
          </span>
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          <Link href="#inicio" className="group relative text-sm font-medium text-[#FFFFFF] hover:text-[#C79D2A] transition-transform duration-200 transform hover:scale-105" prefetch={false}>
            Início
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#C79D2A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="#sobre" className="group relative text-sm font-medium text-[#FFFFFF] hover:text-[#C79D2A] transition-transform duration-200 transform hover:scale-105" prefetch={false}>
            Sobre
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#C79D2A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="#projetos" className="group relative text-sm font-medium text-[#FFFFFF] hover:text-[#C79D2A] transition-transform duration-200 transform hover:scale-105" prefetch={false}>
            Projetos
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#C79D2A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="#contato" className="group relative text-sm font-medium text-[#FFFFFF] hover:text-[#C79D2A] transition-transform duration-200 transform hover:scale-105" prefetch={false}>
            Contato
            <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#C79D2A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </nav>
        <div className="hidden md:block">
          <Link
            href="#contato"
            className="inline-flex items-center justify-center rounded-md bg-[#C79D2A] px-4 py-2 text-sm font-medium text-[#FFFFFF] transition-transform duration-200 transform hover:scale-105 hover:bg-[#C79D2A]/90 focus:outline-none focus:ring-1 focus:ring-[#C79D2A] focus:ring-offset-1"
            prefetch={false}
          >
            Contrate-me
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden border-[#C79D2A] text-[#C79D2A]">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Alternar navegação</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs bg-[#001047] text-[#FFFFFF]">
            <div className="flex flex-col items-start space-y-4 p-4">
              <Link href="#inicio" className="group relative text-sm font-medium text-[#FFFFFF] hover:text-[#C79D2A] transition-transform duration-200 transform hover:scale-105" prefetch={false}>
                Início
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#C79D2A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link href="#sobre" className="group relative text-sm font-medium text-[#FFFFFF] hover:text-[#C79D2A] transition-transform duration-200 transform hover:scale-105" prefetch={false}>
                Sobre
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#C79D2A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link href="#projetos" className="group relative text-sm font-medium text-[#FFFFFF] hover:text-[#C79D2A] transition-transform duration-200 transform hover:scale-105" prefetch={false}>
                Projetos
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#C79D2A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link href="#contato" className="group relative text-sm font-medium text-[#FFFFFF] hover:text-[#C79D2A] transition-transform duration-200 transform hover:scale-105" prefetch={false}>
                Contato
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#C79D2A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center rounded-md bg-[#C79D2A] px-4 py-2 text-sm font-medium text-[#FFFFFF] transition-transform duration-200 transform hover:scale-105 hover:bg-[#C79D2A]/90 focus:outline-none focus:ring-1 focus:ring-[#C79D2A] focus:ring-offset-1"
                prefetch={false}
              >
                Contrate-me
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
