
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-dark-card shadow-lg">
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-light">
          WhatsApp Sticker Genie
        </h1>
        <p className="mt-2 text-gray-300 text-lg">
          Turn your photos into expressive AI-powered stickers!
        </p>
      </div>
    </header>
  );
};
