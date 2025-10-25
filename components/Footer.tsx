
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card mt-12 py-6">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Sticker Genie. Powered by Google Gemini.</p>
      </div>
    </footer>
  );
};
