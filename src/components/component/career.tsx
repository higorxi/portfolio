
export function Career() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Career Timeline</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Explore my professional journey through the years.
          </p>
        </div>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-muted-foreground/20">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-md bg-muted/20 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <div className="grid gap-1">
                  <div className="font-medium">Software Engineer</div>
                  <div className="text-sm text-muted-foreground">Acme Inc.</div>
                  <div className="text-sm text-muted-foreground">2020 - Present</div>
                </div>
              </div>
              <div className="px-4 pt-4">
                <div className="text-sm text-muted-foreground">
                  Responsible for developing and maintaining the company's web application, implementing new features,
                  and optimizing performance. Collaborated with cross-functional teams to deliver high-quality software
                  solutions.
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-md bg-muted/20 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <div className="grid gap-1">
                  <div className="font-medium">Frontend Developer</div>
                  <div className="text-sm text-muted-foreground">Widgets Inc.</div>
                  <div className="text-sm text-muted-foreground">2018 - 2020</div>
                </div>
              </div>
              <div className="px-4 pt-4">
                <div className="text-sm text-muted-foreground">
                  Developed and maintained the company's web-based application, focusing on the user interface and
                  implementing responsive design. Collaborated with designers and backend developers to deliver a
                  seamless user experience.
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-md bg-muted/20 hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                <div className="grid gap-1">
                  <div className="font-medium">Intern</div>
                  <div className="text-sm text-muted-foreground">Tech Solutions</div>
                  <div className="text-sm text-muted-foreground">2017 - 2018</div>
                </div>
              </div>
              <div className="px-4 pt-4">
                <div className="text-sm text-muted-foreground">
                  Participated in a summer internship program, where I gained hands-on experience in web development.
                  Worked on various projects, including building a company website and developing a mobile app
                  prototype.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
