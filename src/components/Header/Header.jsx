import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Minha Homepage</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#hero" className="hover:underline">Início</a></li>
            <li><a href="#features" className="hover:underline">Funcionalidades</a></li>
            <li><a href="#contact" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

