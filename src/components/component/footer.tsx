import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted py-8 md:py-12">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="w-6 h-6" />
            <span className="font-bold text-lg">Portfolio</span>
          </Link>
          <nav className="grid gap-2">
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold">Resources</h3>
          <nav className="grid gap-2">
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              FAQ
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold">Social</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <TwitterIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <GitlabIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <LinkedinIcon className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              <InstagramIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-semibold">Contact</h3>
          <nav className="grid gap-2">
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              info@portfolio.com
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              +1 (234) 567-890
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Contact Form
            </Link>
          </nav>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto mt-8 text-xs text-muted-foreground text-center">
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

function GitlabIcon(props) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}

function InstagramIcon(props) {
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

function LinkedinIcon(props) {
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

function MountainIcon(props) {
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

function TwitterIcon(props) {
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
  )
}
