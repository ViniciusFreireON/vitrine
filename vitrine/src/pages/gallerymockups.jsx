import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

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

// Componente GalleryMockups
const GalleryMockups = () => {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  // Dados apenas para a categoria Mockups
  const galleryItems = [
    {
      id: 4,
      title: "Mockup Site: Vem Ser Infinity.",
      description:
        "Mockup de site institucional feito para Hackathon da Infinity School, 2025.",
      category: "Mockup",
      image: "/src/assets/vemserif.png",
    },
    {
      id: 5,
      title: "Mockup Site: Portfólio Web.",
      description: "Mockup do site de meu portfólio web.",
      category: "Mockup",
      image: "/src/assets/mockupportfolio.png",
    },
    {
      id: 6,
      title: "Mockup Site: Conheça Portfólio.",
      description: "Mockup de apresentação do meu portfólio web.",
      category: "Mockup",
      image: "/src/assets/conhecaportfolio.png",
    },
    // Nova linha de cards (repetindo os mesmos para exemplo)
    {
      id: 13,
      title: "Mockup App: Infinity Mobile",
      description: "Mockup de aplicativo mobile para a Infinity School.",
      category: "Mockup",
      image: "/src/assets/mockup-mobile.png",
    },
    {
      id: 14,
      title: "Mockup Dashboard: Analytics",
      description: "Mockup de dashboard analítico para gestão de dados.",
      category: "Mockup",
      image: "/src/assets/mockup-dashboard.png",
    },
    {
      id: 15,
      title: "Mockup E-commerce: Loja Virtual",
      description: "Mockup de loja virtual com foco em experiência do usuário.",
      category: "Mockup",
      image: "/src/assets/mockup-ecommerce.png",
    },
  ];

  return (
    <section className="w-full pt-32 pb-20 px-4 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        {/* Botão de voltar */}
        <div className="mb-10">
          <Link 
            to="/"
            className="inline-flex items-center px-6 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors font-instrument"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para Galeria
          </Link>
        </div>

        {/* Cabeçalho com animação BlurText - CENTRALIZADO */}
        <div className="mb-20 text-center">
          <BlurText
            text="Mockups"
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
            text="Meus mockups"
            delay={300}
            animateBy="words"
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl md:text-3xl font-syne text-white mt-4"
          />
        </div>

        {/* Primeira linha de cards */}
        <div className="mb-20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
            {galleryItems.slice(0, 3).map((item) => (
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
                    <a 
                      href={`#projeto-${item.id}`}
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
                    <a
                      href={`#projeto-${item.id}`}
                      className="px-4 py-2 bg-purple-600 text-white font-instrument text-sm rounded-full hover:bg-purple-700 transition-colors duration-300 inline-block"
                    >
                      Ver detalhes
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segunda linha de cards (nova linha) */}
        <div className="mb-20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-14">
            {galleryItems.slice(3, 6).map((item) => (
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
                    <a 
                      href={`#projeto-${item.id}`}
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
                    <a
                      href={`#projeto-${item.id}`}
                      className="px-4 py-2 bg-purple-600 text-white font-instrument text-sm rounded-full hover:bg-purple-700 transition-colors duration-300 inline-block"
                    >
                      Ver detalhes
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GalleryMockups;