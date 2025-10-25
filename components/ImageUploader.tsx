
import React, { useCallback } from 'react';
import { Section } from './Section';

interface ImageUploaderProps {
  uploadedImage: { file: File; base64: string } | null;
  onImageUpload: (file: File) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ uploadedImage, onImageUpload }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onImageUpload(event.target.files[0]);
    }
  };

  return (
    <Section step={3} title="Upload Your Photo">
      <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-dark-border rounded-lg bg-gray-800">
        {uploadedImage ? (
          <div className="text-center">
            <img 
              src={`data:${uploadedImage.file.type};base64,${uploadedImage.base64}`} 
              alt="Preview" 
              className="max-h-48 rounded-lg shadow-lg mx-auto"
            />
            <p className="mt-4 text-gray-300 break-all">{uploadedImage.file.name}</p>
            <label htmlFor="image-upload" className="mt-4 inline-block cursor-pointer bg-brand-secondary text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-primary transition-colors">
              Choose a different photo
            </label>
          </div>
        ) : (
          <div className="text-center">
             <svg className="mx-auto h-12 w-12 text-gray-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
             </svg>
            <p className="mt-2 text-gray-400">Drag & drop or click to upload</p>
            <label htmlFor="image-upload" className="mt-4 inline-block cursor-pointer bg-brand-secondary text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-primary transition-colors">
              Select a photo
            </label>
          </div>
        )}
        <input 
          id="image-upload" 
          type="file" 
          accept="image/png, image/jpeg, image/webp"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </Section>
  );
};
