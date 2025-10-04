import React from 'react';
import { Rocket, Layout, Accessibility } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
    <div className="flex justify-center mb-4">
      <Icon size={48} className="text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const featuresData = [
    {
      icon: Rocket,
      title: 'Performance Otimizada',
      description: 'Carregamento rápido e experiência fluida do usuário com as últimas tecnologias web.',
    },
    {
      icon: Layout,
      title: 'Design Responsivo',
      description: 'Interface que se adapta perfeitamente a todos os dispositivos, do desktop ao mobile.',
    },
    {
      icon: Accessibility,
      title: 'Acessibilidade',
      description: 'Implementação seguindo padrões de acessibilidade web para inclusão de todos os usuários.',
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Funcionalidades Incríveis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

