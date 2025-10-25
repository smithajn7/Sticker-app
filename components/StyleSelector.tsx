
import React from 'react';
import { STICKER_STYLES } from '../constants';
import { StyleOption } from '../types';
import { Section } from './Section';

interface StyleSelectorProps {
  selectedStyle: StyleOption | null;
  onSelectStyle: (style: StyleOption) => void;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, onSelectStyle }) => {
  return (
    <Section step={1} title="Choose a Style">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {STICKER_STYLES.map(style => (
          <button
            key={style.id}
            onClick={() => onSelectStyle(style)}
            className={`p-4 rounded-lg text-center font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-card focus:ring-brand-primary ${
              selectedStyle?.id === style.id
                ? 'bg-brand-primary text-white shadow-lg'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
            }`}
          >
            {style.name}
          </button>
        ))}
      </div>
    </Section>
  );
};
