import React, { useState } from "react";

// Componente Modal Futurista
const FuturisticModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-[#121212] bg-opacity-72 backdrop-blur-md border border-white border-opacity-5 rounded-2xl shadow-2xl w-full max-w-[920px] max-h-[90vh] overflow-y-auto p-10">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-2xl hover:text-purple-400 transition-colors z-10 w-10 h-10 flex items-center justify-center bg-black bg-opacity-30 rounded-full"
        >
          &times;
        </button>

        {/* Seção Superior - Iframe interativo com tamanho aumentado */}
        <div className="relative rounded-2xl mb-8 overflow-hidden h-96">
          <iframe
            src="https://hackathonmaster.vercel.app"
            title="Hackathon Infinity Website"
            className="w-full h-full rounded-xl border-none"
            loading="lazy"
            allowFullScreen
          />

          {/* Botões circulares no canto inferior direito */}
          <div className="absolute right-4 bottom-4 flex gap-2">
            <button
              onClick={() =>
                window.open("https://hackathonmaster.vercel.app", "_blank")
              }
              className="w-11 h-11 rounded-full bg-black bg-opacity-50 border border-white border-opacity-10 flex items-center justify-center text-white hover:bg-opacity-70 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </button>
            <button
              onClick={() =>
                window.open("https://hackathonmaster.vercel.app", "_blank")
              }
              className="w-11 h-11 rounded-full bg-black bg-opacity-50 border border-white border-opacity-10 flex items-center justify-center text-white hover:bg-opacity-70 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>
        </div>

        {/* Linha de Pills com título à esquerda */}
        <div className="flex items-center gap-6 mb-10">
          <h3 className="text-white text-xl font-semibold whitespace-nowrap font-syne">
            Vem ser Infinity
          </h3>
          <div className="flex flex-wrap gap-3">
            {["HTML5", "CSS3", "JAVASCRIPT ES5", "React", "Tailwind"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-black bg-opacity-30 border border-white border-opacity-10 rounded-full text-white text-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Seção Inferior - Duas Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Coluna Esquerda - Tipografia */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4 font-syne">
              Tipografia
            </h3>
            <div className="bg-black bg-opacity-30 border border-white border-opacity-10 rounded-xl p-5">
              <h4 className="text-white text-lg font-bold mb-4 font-syne">
                Poppins
              </h4>

              <div className="space-y-3">
                {[
                  { weight: "Thin", text: "Lorem ipsum" },
                  { weight: "ExtraLight", text: "Lorem ipsum" },
                  { weight: "Light", text: "Lorem ipsum" },
                  { weight: "Regular", text: "Lorem ipsum" },
                  { weight: "Medium", text: "Lorem ipsum" },
                  { weight: "SemiBold", text: "Lorem ipsum" },
                  { weight: "Bold", text: "Lorem ipsum" },
                  { weight: "ExtraBold", text: "Lorem ipsum" },
                  { weight: "Black", text: "Lorem ipsum" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span
                      className={`text-white font-poppins ${
                        item.weight === "Thin"
                          ? "font-thin"
                          : item.weight === "ExtraLight"
                          ? "font-extralight"
                          : item.weight === "Light"
                          ? "font-light"
                          : item.weight === "Regular"
                          ? "font-normal"
                          : item.weight === "Medium"
                          ? "font-medium"
                          : item.weight === "SemiBold"
                          ? "font-semibold"
                          : item.weight === "Bold"
                          ? "font-bold"
                          : item.weight === "ExtraBold"
                          ? "font-extrabold"
                          : "font-black"
                      }`}
                    >
                      {item.text}
                    </span>
                    <span className="text-gray-400 text-xs">{item.weight}</span>
                  </div>
                ))}
              </div>

              {/* Botões de navegação */}
              <div className="flex justify-end gap-2 mt-5">
                <button className="w-8 h-8 rounded-full bg-black bg-opacity-50 border border-white border-opacity-10 flex items-center justify-center text-white hover:bg-opacity-70 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-black bg-opacity-50 border border-white border-opacity-10 flex items-center justify-center text-white hover:bg-opacity-70 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Paleta de Cores */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4 font-syne">
              Paleta
            </h3>
            <div className="bg-black bg-opacity-30 border border-white border-opacity-10 rounded-xl p-5">
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div
                  className="h-20 rounded-lg flex items-center justify-center relative"
                  style={{ backgroundColor: "#920101" }}
                >
                  <span className="text-white font-semibold text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    #920101
                  </span>
                </div>
                <div
                  className="h-20 rounded-lg flex items-center justify-center relative"
                  style={{ backgroundColor: "#2A2A2A" }}
                >
                  <span className="text-white font-semibold text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    #2A2A2A
                  </span>
                </div>
                {/* Caixa com gradiente laranja-rosa */}
                <div
                  className="col-span-2 h-20 rounded-lg flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(to right, #E94F20, #DD3CF6)",
                  }}
                >
                  <span className="text-white font-semibold text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    #E94F20 → #DD3CF6
                  </span>
                </div>
              </div>

              {/* Botões de navegação */}
              <div className="flex justify-end gap-2 mb-6">
                <button className="w-8 h-8 rounded-full bg-black bg-opacity-50 border border-white border-opacity-10 flex items-center justify-center text-white hover:bg-opacity-70 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-black bg-opacity-50 border border-white border-opacity-10 flex items-center justify-center text-white hover:bg-opacity-70 transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              {/* Botões sociais */}
              <div className="flex justify-center gap-4">
                {["Github", "Portfolio", "Instagram"].map((social, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 rounded-full bg-black bg-opacity-50 border border-white border-opacity-10 flex items-center justify-center text-white hover:bg-opacity-70 transition-all"
                  >
                    {social === "Github" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    )}
                    {social === "Portfolio" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    )}
                    {social === "Instagram" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Botão Download centralizado abaixo da caixa de tipografia */}
        <div className="flex justify-center mt-4">
          <button className="px-8 py-3 bg-black bg-opacity-30 border border-white border-opacity-10 rounded-xl text-white hover:bg-opacity-50 transition-all font-syne">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente Galeria (com modal integrado)
const GallerySection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Dados da galeria
  const galleryCategories = [
    {
      title: "Sites",
      items: [
        {
          id: 1,
          title: "Hackathon Infinity",
          description:
            "Site institucional criado para: Hackathon Infinity School, 2025",
          category: "Aplicação Web",
          image: "/src/assets/infinity.png",
          link: "https://hackathonmaster.vercel.app/",
        },
        {
          id: 2,
          title: "Portfólio Vinícius Freire",
          description: "Portfólio Web de Vinícius Freire",
          category: "Aplicação Web",
          image: "/src/assets/portfolio.png",
          link: "https://portifolio-five-blue-83.vercel.app",
        },
      ],
    },
    {
      title: "Mockups",
      items: [
        {
          id: 4,
          title: "Mockup Site: Vem Ser Infinity.",
          description:
            "Mockup de site institucional feito para Hackathon da Infinity School, 2025.",
          category: "Mockup",
          image: "/src/assets/vemserif.png",
          link: "https://www.instagram.com/_vinifreire.dev",
        },
        {
          id: 5,
          title: "Mockup Site: Portfólio Web.",
          description: "Mockup do site de meu portfólio web.",
          category: "Mockup",
          image: "/src/assets/mockupportfolio.png",
          link: "https://www.instagram.com/_vinifreire.dev",
        },
        {
          id: 6,
          title: "Mockup Site: Conheça Portfólio.",
          description: "Mockup de apresentação do meu portfólio web.",
          category: "Mockup",
          image: "/src/assets/conhecaportfolio.png",
          link: "https://www.instagram.com/_vinifreire.dev",
        },
      ],
    },
    {
      title: "Posts",
      items: [
        {
          id: 7,
          title: "Post de apresentação: Como posso te ajudar?",
          description: "Conteúdo visual para apresentação de perfil.",
          category: "Post",
          image: "/src/assets/comoposso.png",
          link: "https://www.instagram.com/p/CABCDEF12345/",
        },
        {
          id: 8,
          title: "Post de apresentação: Avaliação de clientes.",
          description: "Conteúdo visual validação de trabalho.",
          category: "Post",
          image: "/src/assets/validacao.png",
          link: "https://www.instagram.com/_vinifreire.dev",
        },
        {
          id: 9,
          title: "Post de apresentação: Serviços a oferecer",
          description: "Conteúdo visual oferecimento de serviços e validação.",
          category: "Post",
          image: "/src/assets/oferecimento.png",
          link: "https://www.instagram.com/_vinifreire.dev",
        },
      ],
    },
    {
      title: "Fotografias",
      items: [
        {
          id: 10,
          title: "Bussiness Portrait",
          description: "Sessão fotográfica para retratos corporativos",
          category: "Fotografia",
          image: "/src/assets/business3.jpeg",
          link: "https://www.instagram.com/_vinifreire.dev",
        },
        {
          id: 11,
          title: "Lugares & Pessoas",
          description: "Fotografia de ambientes urbanos e retratos espontâneos",
          category: "Fotografia",
          image: "/src/assets/cristo.jpeg",
          link: "https://www.instagram.com/p/CPLACESPEOPLE/",
        },
        {
          id: 12,
          title: "Storys",
          description: "Fotografia para conteúdo de redes sociais",
          category: "Fotografia",
          image: "/src/assets/aviao.jpeg",
          link: "https://www.instagram.com/p/CSTORIES123/",
        },
      ],
    },
  ];

  return (
    <section className="w-full pt-32 pb-20 px-4 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho com animação BlurText - CENTRALIZADO */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold text-white mb-4">
            Universo Visual
          </h1>

          {/* Separador igual ao do Hero */}
          <div className="relative w-20 h-0.5 mx-auto my-6">
            <div className="absolute inset-0 bg-white mix-blend-difference"></div>
          </div>

          {/* Subtítulo com animação BlurText */}
          <p className="text-2xl md:text-3xl font-syne text-white mt-4">
            Um espaço onde as ideias ganham forma
          </p>
        </div>

        {/* Grid da galeria por categorias */}
        {galleryCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            {/* Título da categoria */}
            <h3 className="text-3xl md:text-4xl font-syne font-bold text-white text-center mb-12">
              {category.title}
            </h3>

            {/* Grid de itens da categoria */}
            <div
              className={`grid ${
                categoryIndex === 0
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              } gap-10 mb-14`}
            >
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-[#1e1e1e] border border-[#333]"
                >
                  {/* Container da imagem */}
                  <div className="h-60 relative overflow-hidden">
                    {/* Imagem real */}
                    <img
                      src={item.image || "/placeholder-image.jpg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.background =
                          "linear-gradient(to bottom right, #4C1D95, #7E22CE)";
                        e.target.style.display = "flex";
                        e.target.style.alignItems = "center";
                        e.target.style.justifyContent = "center";
                        e.target.innerHTML =
                          '<span class="text-white">Imagem</span>';
                      }}
                    />

                    {/* Overlay no hover - BOTÃO COM LINK INDIVIDUAL */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-instrument bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full"
                      >
                        Ver projeto
                      </a>
                    </div>
                  </div>

                  {/* Informações do projeto */}
                  <div className="p-6">
                    <span className="text-sm font-instrument text-purple-400 font-medium">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-syne font-bold text-white mt-2 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 font-instrument">
                      {item.description}
                    </p>

                    {/* Botão para ver mais sobre o projeto específico */}
                    <div className="mt-4">
                      <button
                        onClick={() => openModal(item)}
                        className="px-4 py-2 bg-purple-600 text-white font-instrument text-sm rounded-full hover:bg-purple-700 transition-colors duration-300 inline-block"
                      >
                        Ver detalhes
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Link "Ver mais" para cada categoria */}
            <div className="text-center mb-16">
              {category.title === "Sites" ? (
                <a
                  href="#sites"
                  className="px-8 py-3 bg-purple-600 text-white font-instrument rounded-full hover:bg-purple-700 transition-colors duration-300 inline-block"
                >
                  Ver mais {category.title.toLowerCase()}
                </a>
              ) : category.title === "Mockups" ? (
                <a
                  href="#mockups"
                  className="px-8 py-3 bg-purple-600 text-white font-instrument rounded-full hover:bg-purple-700 transition-colors duration-300 inline-block"
                >
                  Ver mais {category.title.toLowerCase()}
                </a>
              ) : category.title === "Posts" ? (
                <a
                  href="#posts"
                  className="px-8 py-3 bg-purple-600 text-white font-instrument rounded-full hover:bg-purple-700 transition-colors duration-300 inline-block"
                >
                  Ver mais {category.title.toLowerCase()}
                </a>
              ) : category.title === "Fotografias" ? (
                <a
                  href="#fotografias"
                  className="px-8 py-3 bg-purple-600 text-white font-instrument rounded-full hover:bg-purple-700 transition-colors duration-300 inline-block"
                >
                  Ver mais {category.title.toLowerCase()}
                </a>
              ) : (
                <a
                  href={`#${category.title.toLowerCase()}`}
                  className="px-8 py-3 bg-purple-600 text-white font-instrument rounded-full hover:bg-purple-700 transition-colors duration-300 inline-block"
                >
                  Ver mais {category.title.toLowerCase()}
                </a>
              )}
            </div>
          </div>
        ))}

        {/* Link de ver mais geral */}
        <div className="text-center mt-12">
          <a
            href="#todos-projetos"
            className="px-8 py-3 bg-gray-800 text-white font-instrument rounded-full hover:bg-gray-700 transition-colors duration-300 border border-gray-600 inline-block"
          >
            Explorar todos os projetos
          </a>
        </div>
      </div>

      {/* Modal */}
      <FuturisticModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default GallerySection;
