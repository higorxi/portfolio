import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from 'react-icons/fa'; 

export function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em contato</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            Tem um projeto em mente ou apenas quer dizer olá? Preencha o formulário abaixo e retornarei o mais breve possível.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <form className="w-full max-w-md space-y-6">
            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Escreva seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Escreva seu email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Escreva sua mensagem" rows={5} />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Informação De Contato</h3>
              <div className="space-y-1 text-muted-foreground">
                <p>Anápolis, Goiás - BR</p>
                <p>Telefone: +55 (62) 98519-4415</p>
                <p>Email: contatohigordev@gmail.com</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Me acompanhe</h3>
              <div className="flex justify-left gap-4">
                <Link href="#" className="text-muted-foreground hover:text-blue-400" prefetch={false}>
                  <TwitterIcon className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-blue-700" prefetch={false}>
                  <LinkedinIcon className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  <FaGithub className="h-6 w-6" size={18} />
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Fale Comigo</h3>
              <a
                href="https://wa.me/5562985194415?text=Olá, gostaria de mais informações!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
