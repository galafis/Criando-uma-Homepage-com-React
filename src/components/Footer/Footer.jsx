import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 text-center">
      <div className="container mx-auto">
        <p className="text-lg mb-4">© {new Date().getFullYear()} Gabriel Demetrios Lafis. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/galafis" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            GitHub
          </a>
          <a href="https://linkedin.com/in/gabriel-lafis" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
            LinkedIn
          </a>
        </div>
        <p className="text-sm text-gray-400">Desenvolvido com React e Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;

