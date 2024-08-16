import Link from "next/link";
import { FaGithub, FaTwitter } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#inicio" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="w-6 h-6 text-yellow-400" />
            <span className="font-bold text-lg">Portfolio</span>
          </Link>
          <nav className="flex flex-col gap-2">
            <Link href="#inicio" className="text-gray-300 hover:text-white hover:underline transition-colors" prefetch={false}>
              Inicio
            </Link>
            <Link href="#sobre" className="text-gray-300 hover:text-white hover:underline transition-colors" prefetch={false}>
              Sobre
            </Link>
            <Link href="#projetos" className="text-gray-300 hover:text-white hover:underline transition-colors" prefetch={false}>
              Projetos
            </Link>
            <Link href="#contato" className="text-gray-300 hover:text-white hover:underline transition-colors" prefetch={false}>
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4">
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold text-lg border-b border-gray-700 pb-2">Redes Sociais</h3>
          <div className="flex gap-4">
            <Link href="https://twitter.com/_Giiiovane" target="_blank" className="text-gray-300 hover:text-blue-400 transition-colors" prefetch={false}>
              <FaTwitter className="w-5 h-5" size={18} />
            </Link>
            <Link href="https://github.com/your-github-username" target="_blank" className="text-gray-300 hover:text-gray-400 transition-colors" prefetch={false}>
              <FaGithub className="w-5 h-5" size={18} />
            </Link>
            <Link href="https://www.linkedin.com/in/higor-giovane-mt/" target="_blank" className="text-gray-300 hover:text-blue-600 transition-colors" prefetch={false}>
              <LinkedinIcon className="w-5 h-5" />
            </Link>
            <Link href="https://www.instagram.com/higor_m.t/" target="_blank" className="text-gray-300 hover:text-pink-500 transition-colors" prefetch={false}>
              <InstagramIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold text-lg border-b border-gray-700 pb-2">Contato</h3>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="text-gray-300 hover:text-white hover:underline transition-colors" prefetch={false}>
              contatohigordev@gmail.com
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white hover:underline transition-colors" prefetch={false}>
              +55 (62) 98519-4415
            </Link>
            <Link href="#contato" className="text-gray-300 hover:text-white hover:underline transition-colors" prefetch={false}>
              Formulário de Contato
            </Link>
          </nav>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto mt-8 text-xs text-gray-400 text-center">
        <p>&copy; 2024 Higor Giovane. Todos os direitos reservados.</p>
      </div>
    </footer>
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

