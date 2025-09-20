import React, { useState, useEffect, useCallback } from "react";

// Componente BlurText para a animação
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
            className={`inline-block transition-all duration-700 ease-out ${
              className.includes("text-[10em]") ? "mr-6" : "mr-2"
            } ${
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

  // Animação por caracteres (fallback)
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
};

// Componente Hero com animação BlurText
function Hero() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-white text-center px-4">
      <img
        src="/src/assets/bgvitrinecriativa.svg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Título com animação BlurText */}
      <BlurText
        text="Vitrine criativa"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-[10em] font-syne text-white mix-blend-difference"
      />

      {/* Linha separadora */}
      <div className="relative -top-[1.5em] w-20 h-0.5 ">
        <div className="absolute inset-0 bg-white mix-blend-difference"></div>
      </div>

      {/* Subtítulo com animação BlurText */}
      <BlurText
        text="Galeria de Sites & Design"
        delay={300}
        animateBy="words"
        direction="bottom"
        onAnimationComplete={handleAnimationComplete}
        className="text-[2em] font-syne text-white mix-blend-difference"
      />
    </section>
  );
}

export default Hero;
