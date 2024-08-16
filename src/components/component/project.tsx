"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Project() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16">
      {/* Container com efeito de vidro */}
      <div className="relative p-8 rounded-lg shadow-lg">
        {/* Efeito de vidro */}
        <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-md rounded-lg" />
        <div className="relative">
          {/* Título e descrição */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Projetos</h2>
            <p className="text-white mt-2">Aqui estão alguns dos nossos projetos mais recentes e inovadores.</p>
          </div>
          
          {/* Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="flex flex-col md:flex-row items-center gap-6 bg-background rounded-lg shadow-lg overflow-hidden relative">
                    <img
                      src="/placeholder.svg"
                      alt="Project Image"
                      width={500}
                      height={300}
                      className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                      style={{ aspectRatio: "500/300", objectFit: "cover" }}
                    />
                    <div className="p-6 md:p-8 flex flex-col gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">Project Title</h3>
                        <p className="text-muted-foreground">A brief description of the project goes here.</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button variant="outline" onClick={() => console.log("teste")}>
                          View Technologies
                        </Button>
                        <Link
                          href="#"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground"
                          prefetch={false}
                        >
                          <GithubIcon className="w-5 h-5" />
                          View on GitHub
                        </Link>
                      </div>
                    </div>
                    <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex flex-col md:flex-row items-center gap-6 bg-background rounded-lg shadow-lg overflow-hidden relative">
                    <img
                      src="/placeholder.svg"
                      alt="Project Image"
                      width={500}
                      height={300}
                      className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                      style={{ aspectRatio: "500/300", objectFit: "cover" }}
                    />
                    <div className="p-6 md:p-8 flex flex-col gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">Another Project</h3>
                        <p className="text-muted-foreground">Another brief description of the project goes here.</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button variant="outline" onClick={() => console.log("teste 2")}>
                          View Technologies
                        </Button>
                        <Link
                          href="#"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground"
                          prefetch={false}
                        >
                          <GithubIcon className="w-5 h-5" />
                          View on GitHub
                        </Link>
                      </div>
                    </div>
                    <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex flex-col md:flex-row items-center gap-6 bg-background rounded-lg shadow-lg overflow-hidden relative">
                    <img
                      src="/placeholder.svg"
                      alt="Project Image"
                      width={500}
                      height={300}
                      className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                      style={{ aspectRatio: "500/300", objectFit: "cover" }}
                    />
                    <div className="p-6 md:p-8 flex flex-col gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">Third Project</h3>
                        <p className="text-muted-foreground">A third brief description of the project goes here.</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Button variant="outline" onClick={() => console.log("teste")}>
                          View Technologies
                        </Button>
                        <Link
                          href="#"
                          className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground"
                          prefetch={false}
                        >
                          <GithubIcon className="w-5 h-5" />
                          View on GitHub
                        </Link>
                      </div>
                    </div>
                    <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}
