import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export function Skills() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Carousel className="rounded-lg overflow-hidden">
        <CarouselContent>
          <CarouselItem>
            <div className="grid grid-cols-2 gap-8 items-center bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] p-8">
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-3xl font-bold text-primary-foreground">React.js</h3>
                <p className="text-primary-foreground/80 text-lg">Crafting dynamic user interfaces with ease.</p>
                <div className="flex items-center gap-2">
                  <CodepenIcon className="w-8 h-8 text-primary-foreground" />
                  <span className="text-primary-foreground font-medium">React</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[200px] h-[200px] bg-primary-foreground/10 rounded-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-primary-foreground/20 rounded-full animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-primary-foreground/30 rounded-full animate-pulse" />
                  <CodepenIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-primary-foreground" />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-2 gap-8 items-center bg-gradient-to-r from-[#10B981] to-[#34D399] p-8">
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-3xl font-bold text-primary-foreground">Tailwind CSS</h3>
                <p className="text-primary-foreground/80 text-lg">Effortless styling with utility-first CSS.</p>
                <div className="flex items-center gap-2">
                  <WindIcon className="w-8 h-8 text-primary-foreground" />
                  <span className="text-primary-foreground font-medium">Tailwind CSS</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[200px] h-[200px] bg-primary-foreground/10 rounded-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-primary-foreground/20 rounded-full animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-primary-foreground/30 rounded-full animate-pulse" />
                  <WindIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-primary-foreground" />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-2 gap-8 items-center bg-gradient-to-r from-[#EC4899] to-[#D946EF] p-8">
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-3xl font-bold text-primary-foreground">TypeScript</h3>
                <p className="text-primary-foreground/80 text-lg">Bringing static typing to JavaScript.</p>
                <div className="flex items-center gap-2">
                  <TypeIcon className="w-8 h-8 text-primary-foreground" />
                  <span className="text-primary-foreground font-medium">TypeScript</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[200px] h-[200px] bg-primary-foreground/10 rounded-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-primary-foreground/20 rounded-full animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-primary-foreground/30 rounded-full animate-pulse" />
                  <TypeIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-primary-foreground" />
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-2 gap-8 items-center bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] p-8">
              <div className="flex flex-col items-start gap-4">
                <h3 className="text-3xl font-bold text-primary-foreground">Next.js</h3>
                <p className="text-primary-foreground/80 text-lg">Building server-rendered React apps with ease.</p>
                <div className="flex items-center gap-2">
                  <FastForwardIcon className="w-8 h-8 text-primary-foreground" />
                  <span className="text-primary-foreground font-medium">Next.js</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[200px] h-[200px] bg-primary-foreground/10 rounded-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-primary-foreground/20 rounded-full animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-primary-foreground/30 rounded-full animate-pulse" />
                  <FastForwardIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-primary-foreground" />
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
          <ChevronLeftIcon className="w-8 h-8 text-primary-foreground" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
          <ChevronRightIcon className="w-8 h-8 text-primary-foreground" />
        </CarouselNext>
      </Carousel>
    </div>
  )
}

function ChevronLeftIcon(props: any) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function CodepenIcon(props: any) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function FastForwardIcon(props: any) {
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
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  )
}


function TypeIcon(props: any) {
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
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function WindIcon(props: any) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}
