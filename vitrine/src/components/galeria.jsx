import React, { useState, useEffect, useCallback } from "react";

// Componente BlurText (reutilizado do Hero)
const BlurText = ({
  text,
  delay = 0,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className = "",
}) => {
  const [animated, setAnimated] = useState(false);

  // Calcular direção da animação
  const getDirectionClass = useCallback(() => {
    switch (direction) {
      case "top":
        return "translate-y-[-10px]";
      case "bottom":
        return "translate-y-[10px]";
      case "left":
        return "translate-x-[-10px]";
      case "right":
        return "translate-x-[10px]";
      default:
        return "translate-y-[-10px]";
    }
  }, [direction]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, onAnimationComplete]);

  // Animação por palavras
  if (animateBy === "words") {
    const words = text.split(" ");

    return (
      <div className={`flex flex-wrap justify-center ${className}`}>
        {words.map((word, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-700 ease-out mr-2 ${
              animated
                ? "opacity-100 blur-none transform-none"
                : `opacity-0 blur-md transform ${getDirectionClass()}`
            }`}
            style={{ transitionDelay: animated ? "0ms" : `${index * 100}ms` }}
          >
            {word}
          </span>
        ))}
      </div>
    );
  }

  // Animação por caracteres
  if (animateBy === "chars") {
    return (
      <div className={className}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-700 ease-out ${
              animated
                ? "opacity-100 blur-none transform-none"
                : `opacity-0 blur-md transform ${getDirectionClass()}`
            }`}
            style={{ transitionDelay: animated ? "0ms" : `${index * 50}ms` }}
          >
            {char}
          </span>
        ))}
      </div>
    );
  }

  return null;
};

// Componente Galeria
const GallerySection = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  // Dados organizados por categoria
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
          image: "/src/assets/infinity.png", // Caminho para a imagem
        },
        {
          id: 2,
          title: "Portfólio Vinícius Freire",
          description: "Portfólio Web de Vinícius Freire",
          category: "Aplicação Web",
          image: "/src/assets/portfolio.png", // Caminho para a imagem
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
          image: "/src/assets/vemserif.png", // Caminho para a imagem
        },
        {
          id: 5,
          title: "Mockup Site: Portfólio Web.",
          description: "Mockup do site de meu portfólio web.",
          category: "Mockup",
          image: "src/assets/mockupportfolio.png", // Caminho para a imagem
        },
        {
          id: 6,
          title: "Mockup Site: Conheça Portfólio.",
          description: "Mockup de apresentação do meu portfólio web.",
          category: "Mockup",
          image: "/src/assets/conhecaportfolio.png", // Caminho para a imagem
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
          image: "/src/assets/comoposso.png", // Caminho para a imagem
        },
        {
          id: 8,
          title: "Post de apresentação: Avaliação de clientes.",
          description: "Conteúdo visual validação de trabalho.",
          category: "Post",
          image: "/src/assets/validacao.png", // Caminho para a imagem
        },
        {
          id: 9,
          title: "Post de apresentação: Serviços a oferecer",
          description: "Conteúdo visual oferecimento de serviços e validação.",
          category: "Post",
          image: "/src/assets/oferecimento.png", // Caminho para a imagem
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
          image: "/src/assets/business3.jpeg", // Caminho para a imagem
        },
        {
          id: 11,
          title: "Lugares & Pessoas",
          description: "Fotografia de ambientes urbanos e retratos espontâneos",
          category: "Fotografia",
          image: "/src/assets/cristo.jpeg", // Caminho para a imagem
        },
        {
          id: 12,
          title: "Storys",
          description: "Fotografia para conteúdo de redes sociais",
          category: "Fotografia",
          image: "/src/assets/aviao.jpeg", // Caminho para a imagem
        },
      ],
    },
  ];

  return (
    <section className="w-full pt-32 pb-20 px-4 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho com animação BlurText - CENTRALIZADO */}
        <div className="mb-20 text-center">
          <BlurText
            text="Universo Visual"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold text-white mb-4"
          />

          {/* Separador igual ao do Hero */}
          <div className="relative w-20 h-0.5 mx-auto my-6">
            <div className="absolute inset-0 bg-white mix-blend-difference"></div>
          </div>

          {/* Subtítulo com animação BlurText */}
          <BlurText
            text="Um espaço onde as ideias ganham forma"
            delay={300}
            animateBy="words"
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl md:text-3xl font-syne text-white mt-4"
          />
        </div>

        {/* Grid da galeria por categorias */}
        {galleryCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            {/* Título da categoria */}
            <h3 className="text-3xl md:text-4xl font-syne font-bold text-white text-center mb-12">
              {category.title}
            </h3>

            {/* Grid de itens da categoria - 2 COLUNAS para a primeira categoria */}
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
                    {/* Imagem real - substitua pelos seus caminhos de imagem */}
                    <img
                      src={item.image || "/placeholder-image.jpg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback para gradiente se a imagem não carregar
                        e.target.style.background =
                          "linear-gradient(to bottom right, #4C1D95, #7E22CE)";
                        e.target.style.display = "flex";
                        e.target.style.alignItems = "center";
                        e.target.style.justifyContent = "center";
                        e.target.innerHTML =
                          '<span class="text-white">Imagem</span>';
                      }}
                    />

                    {/* Overlay no hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-instrument">
                        Ver projeto
                      </span>
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
                  </div>
                </div>
              ))}
            </div>

            {/* Botão "Ver mais" para cada categoria */}
            <div className="text-center mb-16">
              <button className="px-8 py-3 bg-purple-600 text-white font-instrument rounded-full hover:bg-purple-700 transition-colors duration-300">
                Ver mais {category.title.toLowerCase()}
              </button>
            </div>
          </div>
        ))}

        {/* Botão de ver mais geral */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-800 text-white font-instrument rounded-full hover:bg-gray-700 transition-colors duration-300 border border-gray-600">
            Explorar todos os projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
