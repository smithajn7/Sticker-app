
import React from 'react';
import { GeneratedSticker } from '../types';

interface StickerCardProps {
  sticker: GeneratedSticker;
}

export const StickerCard: React.FC<StickerCardProps> = ({ sticker }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = sticker.imageUrl;
    link.download = `sticker_${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="group relative bg-dark-card rounded-lg shadow-lg overflow-hidden border border-dark-border transition-transform transform hover:-translate-y-2">
      <img src={sticker.imageUrl} alt="Generated Sticker" className="w-full h-auto aspect-square object-contain bg-black"/>
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <button
          onClick={handleDownload}
          className="bg-brand-primary text-white font-bold py-2 px-5 rounded-full text-sm shadow-md transition-colors hover:bg-brand-secondary"
        >
          Download
        </button>
      </div>
    </div>
  );
};
