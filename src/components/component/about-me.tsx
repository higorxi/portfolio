"use client";
import { useState } from 'react';
import Link from "next/link";
import Modal from "../component/modal"

export function AboutMe() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="flex items-center justify-center">
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full">
            <img
              src="/placeholder.svg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              style={{ aspectRatio: "300/300", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Olá, Eu sou o Higor Giovane</h1>
            <h2 className="text-2xl font-semibold text-muted-foreground sm:text-3xl">Desenvolvedor FullStack</h2>
            <p className="text-muted-foreground md:text-xl">
              Sou um desenvolvedor full stack apaixonado, focado em criar apps e sites que encantam e conectam pessoas. Adoro transformar ideias em soluções impactantes, desde interfaces intuitivas até sistemas robustos e escaláveis.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={openModal}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Ver Currículo
            </button>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Entre em contato
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              <span>Anápolis, GO</span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="h-5 w-5" />
              <span>2+ Anos de Experiência</span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        pdfUrl="/pdf/Curriculo_Higor_Giovane_2024.pdf"
      />
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
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
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
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
