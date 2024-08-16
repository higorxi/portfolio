export function Career() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 md:py-16 lg:py-28">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-[#FFD700]" 
          style={{
                textShadow: `
                  1px 1px 0 #000, 
                  2px 2px 0 #000, 
                  3px 3px 0 #000,
                  4px 4px 0 #000
                `
              }}>
            História da minha carreira
          </h2>
          <p className="text-xl text-white max-w-[700px] mx-auto">
            Visualize a jornada até chegar aqui.
          </p>
        </div>
        <div className="relative pl-12 after:absolute after:inset-y-0 after:left-6 after:w-1 after:bg-gray-300">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300" />
          <div className="space-y-6">
            <div className="relative">
              <div className="flex items-center justify-between gap-4 px-4 py-4 rounded-lg bg-gray-50 shadow-lg hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                <div className="grid gap-1">
                  <div className="font-semibold text-lg text-gray-800">Desenvolvedor FullStack Pleno</div>
                  <div className="text-sm text-gray-600">UCash LTDA.</div>
                  <div className="text-sm text-gray-600">07/2024 - Presente</div>
                </div>
              </div>
              <div className="absolute left-[-1.5rem] top-1/2 transform -translate-y-1/2 w-1 h-full bg-gray-300" />
              <div className="absolute left-6 top-1/2 w-12 h-0.5 bg-gray-300" />
              <div className="px-4 pt-2">
                <div className="text-sm text-gray-600 bg-gray-200 p-4 rounded-lg">
                  Responsável por desenvolver e manter a aplicação web da empresa, implementando novas funcionalidades,
                  e otimizando o desempenho. Colaborou com equipes multifuncionais para fornecer software de alta qualidade
                  soluções.
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between gap-4 px-4 py-4 rounded-lg bg-gray-50 shadow-lg hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                <div className="grid gap-1">
                  <div className="font-semibold text-lg text-gray-800">Desenvolvedor FullStack Junior</div>
                  <div className="text-sm text-gray-600">UCash LTDA.</div>
                  <div className="text-sm text-gray-600">01/2024 - 07/2024</div>
                </div>
              </div>
              <div className="absolute left-[-1.5rem] top-1/2 transform -translate-y-1/2 w-1 h-full bg-gray-300" />
              <div className="absolute left-6 top-1/2 w-12 h-0.5 bg-gray-300" />
              <div className="px-4 pt-2">
                <div className="text-sm text-gray-600 bg-gray-200 p-4 rounded-lg">
                  Responsável por desenvolver e manter a aplicação web da empresa, implementando novas funcionalidades,
                  e otimizando o desempenho. Colaborou com equipes multifuncionais para fornecer software de alta qualidade
                  soluções.
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between gap-4 px-4 py-4 rounded-lg bg-gray-50 shadow-lg hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                <div className="grid gap-1">
                  <div className="font-semibold text-lg text-gray-800">Desenvolvedor Front-end</div>
                  <div className="text-sm text-gray-600">FTT - Fabrica de Tecnologias Turing.</div>
                  <div className="text-sm text-gray-600">06/2023 - 01/2024</div>
                </div>
              </div>
              <div className="absolute left-[-1.5rem] top-1/2 transform -translate-y-1/2 w-1 h-full bg-gray-300" />
              <div className="absolute left-6 top-1/2 w-12 h-0.5 bg-gray-300" />
              <div className="px-4 pt-2">
                <div className="text-sm text-gray-600 bg-gray-200 p-4 rounded-lg">
                  Desenvolvi e mantive o aplicativo web da empresa, com foco na interface do usuário e
                  implementação de design responsivo. Colaborou com designers e desenvolvedores back-end para entregar um
                  experiência de usuário perfeita.
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between gap-4 px-4 py-4 rounded-lg bg-gray-50 shadow-lg hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                <div className="grid gap-1">
                  <div className="font-semibold text-lg text-gray-800">Freelancer</div>
                  <div className="text-sm text-gray-600">99 Freelas & Workana</div>
                  <div className="text-sm text-gray-600">02/2023 - 01/2024</div>
                </div>
              </div>
              <div className="absolute left-[-1.5rem] top-1/2 transform -translate-y-1/2 w-1 h-full bg-gray-300" />
              <div className="absolute left-6 top-1/2 w-12 h-0.5 bg-gray-300" />
              <div className="px-4 pt-2">
                <div className="text-sm text-gray-600 bg-gray-200 p-4 rounded-lg">
                  Participei de um programa de estágio de verão, onde ganhei experiência prática em desenvolvimento web.
                  Trabalhou em vários projetos, incluindo a construção de um site da empresa e o desenvolvimento de um aplicativo móvel
                  protótipo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
