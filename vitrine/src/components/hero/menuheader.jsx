import React from 'react';


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-instrument text-[0.8em]">
          <span className='font-bold'>VINÍCIUS</span><span className='font-regular'>FREIRE</span> DEV
        </div>
        
        {/* Campo de pesquisa */}
        <div className="relative flex-1 max-w-md mx-8">
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          </div>
        </div>
        
        {/* Espaço para outros elementos do header, se necessário */}
        <div className="w-10"></div>
      </div>
    </header>
  );
};

export default Header;