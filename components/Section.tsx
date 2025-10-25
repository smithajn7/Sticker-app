
import React from 'react';

interface SectionProps {
  step: number;
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ step, title, children }) => {
  return (
    <div className="bg-dark-card p-6 rounded-2xl shadow-md border border-dark-border">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 bg-brand-primary text-white rounded-full h-10 w-10 flex items-center justify-center text-xl font-bold">
          {step}
        </div>
        <h2 className="ml-4 text-2xl font-bold text-gray-100">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};
