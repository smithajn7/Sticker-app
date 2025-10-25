
import React from 'react';
import { GeneratedSticker } from '../types';
import { StickerCard } from './StickerCard';

interface StickerGridProps {
  stickers: GeneratedSticker[];
}

export const StickerGrid: React.FC<StickerGridProps> = ({ stickers }) => {
  return (
    <div className="mt-12">
      <h3 className="text-3xl font-bold text-center mb-6 text-gray-100">Your Sticker Pack!</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {stickers.map((sticker) => (
          <StickerCard key={sticker.id} sticker={sticker} />
        ))}
      </div>
    </div>
  );
};
