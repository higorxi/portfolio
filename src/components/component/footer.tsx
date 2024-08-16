import Link from "next/link"
import { FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-muted py-8 md:py-12">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#inicio" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="w-6 h-6" />
            <span className="font-bold text-lg">Portfolio</span>
          </Link>
          <nav className="grid gap-2">
            <Link href="#inicio" className="text-muted-foreground hover:underline" prefetch={false}>
              Inicio
            </Link>
            <Link href="#sobre" className="text-muted-foreground hover:underline" prefetch={false}>
              Sobre
            </Link>
            <Link href="#projetos" className="text-muted-foreground hover:underline" prefetch={false}>
              Projetos
            </Link>
            <Link href="#contato" className="text-muted-foreground hover:underline" prefetch={false}>
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4">
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold">Redes Sociais</h3>
          <div className="flex gap-4">
            <Link href="https://twitter.com/_Giiiovane" target="_blank" className="text-muted-foreground hover:underline group" prefetch={false}>
              <TwitterIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-600 transition-colors" />
            </Link>
            <Link href="https://github.com/your-github-username" target="_blank" className="text-muted-foreground hover:underline group" prefetch={false}>
              <FaGithub className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors" size={18} />
            </Link>
            <Link href="https://www.linkedin.com/in/higor-giovane-mt/" target="_blank" className="text-muted-foreground hover:underline group" prefetch={false}>
              <LinkedinIcon className="w-5 h-5 text-blue-500 group-hover:text-blue-700 transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/higor_m.t/" target="_blank" className="text-muted-foreground hover:underline group" prefetch={false}>
              <InstagramIcon className="w-5 h-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-blue-600 transition-colors" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold">Contato</h3>
          <nav className="grid gap-2">
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              contatohigordev@gmail.com
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              +55 (62) 98519-4415
            </Link>
            <Link href="#contato" className="text-muted-foreground hover:underline" prefetch={false}>
              Formulário de Contato
            </Link>
          </nav>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto mt-8 text-xs text-muted-foreground text-center">
        <p>&copy; 2024 Higor Giovane. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

function GithubIcon(props: any) {
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
      <path d="M12 2a10 10 0 0 0-3.162 19.471c.5.092.682-.217.682-.484v-1.806c-2.773.605-3.356-1.338-3.356-1.338-.454-1.153-1.109-1.46-1.109-1.46-.907-.621.069-.61.069-.61 1.003.07 1.527 1.034 1.527 1.034.892 1.527 2.342 1.09 2.916.835.09-.646.349-1.09.635-1.338-2.222-.252-4.556-1.111-4.556-4.945 0-1.091.388-1.986 1.027-2.684-.103-.252-.446-1.273.097-2.654 0 0 .841-.27 2.75 1.027A9.501 9.501 0 0 1 12 4.8a9.499 9.499 0 0 1 2.53.343c1.91-1.297 2.75-1.027 2.75-1.027.543 1.381.2 2.402.097 2.654.64.698 1.027 1.593 1.027 2.684 0 3.839-2.334 4.693-4.563 4.941.358.308.676.918.676 1.844v2.732c0 .266.182.577.686.48A10 10 0 0 0 12 2z" />
    </svg>
  )
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
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
  )
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
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
      <path d="M22.46 6c-.77.35-1.6.59-2.48.7a4.3 4.3 0 0 0 1.88-2.38c-.83.5-1.75.86-2.73 1.06a4.295 4.295 0 0 0-7.32 3.93c-3.57-.18-6.75-1.89-8.88-4.48a4.306 4.306 0 0 0 1.33 5.73c-.72-.02-1.39-.21-1.98-.52v.05c0 2.63 1.88 4.83 4.37 5.32a4.25 4.25 0 0 1-1.12.15c-.27 0-.54-.03-.8-.07a4.316 4.316 0 0 0 4.02 2.99A8.65 8.65 0 0 1 2 17.77a12.21 12.21 0 0 0 6.62 1.94c7.93 0 12.28-6.56 12.28-12.28 0-.19-.01-.37-.02-.56a8.69 8.69 0 0 0 2.14-2.21z" />
    </svg>
  )
}
