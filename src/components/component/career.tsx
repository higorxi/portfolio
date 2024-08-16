
export function Career() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">História da minha carreira</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Visualize a jornada até chegar aqui.
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
                   Responsável por desenvolver e manter a aplicação web da empresa, implementando novas funcionalidades,
                  e otimizando o desempenho. Colaborou com equipes multifuncionais para fornecer software de alta qualidade
                  soluções.
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
                  Desenvolvi e mantive o aplicativo web da empresa, com foco na interface do usuário e
                  implementação de design responsivo. Colaborou com designers e desenvolvedores back-end para entregar um
                  experiência de usuário perfeita.
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
