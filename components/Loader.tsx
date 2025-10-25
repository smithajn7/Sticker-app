
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-10">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-primary"></div>
      <p className="mt-4 text-lg text-gray-300 font-semibold">AI is creating magic...</p>
      <p className="text-sm text-gray-400">This might take a moment.</p>
    </div>
  );
};
