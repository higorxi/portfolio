'use client';
import { useState } from 'react';
import Link from 'next/link';
import Modal from '../component/modal';
import { FaGithub } from 'react-icons/fa';
import { LinkedinIcon } from 'lucide-react';
import Image from 'next/image';
import ImageProfile from "../../../public/assets/profile/Foto-Higor.png"
import ImageProfileIA from "../../../public/assets/profile/Foto-IA.jpg"

export function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="w-full py-12 md:py-24 lg:py-44 text-[#FFFFFF]">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="flex items-center justify-center">
          <div className="relative profile-image-container ">
            <Image
              src={ImageProfileIA}
              alt="Profile Picture"
              className="profile-image"
              width={400}
              height={200}
            />
            <div className="overlay"></div>
            <div className="icons-container">
              <Link href="https://www.linkedin.com/in/higor-giovane-mt/" target='_blank' className="text-blue-600 hover:text-white" prefetch={false}>
                <LinkedinIcon className="h-6 w-6" size={22} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/higorxi" target='_blank' className="text-gray-800 hover:text-white" prefetch={false}>
                <FaGithub className="h-6 w-6" size={22} />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="space-y-2">
            <h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              style={{
                textShadow: `
                  1px 1px 0 #000, 
                  2px 2px 0 #000, 
                  3px 3px 0 #000,
                  4px 4px 0 #000
                `,
              }}
            >
              Opa, Higor Giovane aqui!
            </h1>
            <h2 className="text-2xl font-semibold text-[#C79D2A] sm:text-3xl transition-all duration-300 hover:text-[#FFD700]">
              Desenvolvedor FullStack
            </h2>
            <p className="text-[#FFFFFF] md:text-xl">
              Sou um desenvolvedor full stack apaixonado, focado em criar apps e sites que encantam e conectam pessoas.
              Apaixonado por criar soluções escaláveis e de grande impacto.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={openModal}
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#FFD700] px-6 text-sm font-medium text-[#001047] shadow transition-colors hover:bg-[#C79D2A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79D2A] disabled:pointer-events-none disabled:opacity-50"
            >
              Ver Currículo
            </button>
            <Link
              href="#contato"
              className="inline-flex h-10 items-center justify-center rounded-md border border-[#C79D2A] bg-[#FFFFFF] px-6 text-sm font-medium text-[#001047] shadow-sm transition-colors hover:bg-[#F1F5F9] hover:text-[#001047] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C79D2A] disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Entre em contato
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 text-[#FFFFFF]">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-[#C79D2A]" />
              <span>Anápolis, GO</span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="h-5 w-5 text-[#C79D2A]" />
              <span>2+ Anos de Experiência</span>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} pdfUrl="/pdf/Curriculo_Higor_Giovane_2024.pdf" />
    </section>
  );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="h-6 w-6"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 3h-8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />
    </svg>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
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
      className="h-6 w-6"
    >
      <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
