import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative bg-gray-900 text-white flex items-center justify-center h-screen overflow-hidden">
      <img src="/hero-image.png" alt="Homepage Moderna" className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div className="relative z-10 text-center p-4">
        <h2 className="text-5xl font-extrabold leading-tight mb-4 animate-fade-in-up">Bem-vindo à Homepage Moderna</h2>
        <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">Desenvolvida com React para uma experiência de usuário impecável.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up animation-delay-400">
          Saiba Mais
        </button>
      </div>
    </section>
  );
};

export default Hero;

