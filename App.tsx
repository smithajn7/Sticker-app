
import React, { useState, useMemo } from 'react';
import { STICKER_STYLES, EXPRESSION_STYLES } from './constants';
import { generateStickers } from './services/geminiService';
import { GeneratedSticker, StyleOption } from './types';
import { Header } from './components/Header';
import { StyleSelector } from './components/StyleSelector';
import { ExpressionSelector } from './components/ExpressionSelector';
import { ImageUploader } from './components/ImageUploader';
import { StickerGrid } from './components/StickerGrid';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';

function App() {
  const [selectedStyle, setSelectedStyle] = useState<StyleOption | null>(null);
  const [selectedExpressions, setSelectedExpressions] = useState<Set<string>>(new Set());
  const [customExpression, setCustomExpression] = useState('');
  const [uploadedImage, setUploadedImage] = useState<{ file: File; base64: string } | null>(null);
  const [generatedStickers, setGeneratedStickers] = useState<GeneratedSticker[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleExpressionToggle = (id: string) => {
    setSelectedExpressions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage({
        file,
        base64: (reader.result as string).split(',')[1],
      });
    };
    reader.readAsDataURL(file);
  };

  const isGenerationDisabled = useMemo(() => {
    return !selectedStyle || (selectedExpressions.size === 0 && !customExpression.trim()) || !uploadedImage || isLoading;
  }, [selectedStyle, selectedExpressions, customExpression, uploadedImage, isLoading]);

  const handleGenerateClick = async () => {
    if (isGenerationDisabled || !uploadedImage || !selectedStyle) return;

    setIsLoading(true);
    setError(null);
    setGeneratedStickers([]);

    const expressionPrompts = [
      ...Array.from(selectedExpressions).map(id => EXPRESSION_STYLES.find(e => e.id === id)?.prompt || ''),
      customExpression.trim() ? customExpression.trim() : null
    ].filter((p): p is string => p !== null && p !== '');


    try {
      const stickers = await generateStickers(
        uploadedImage.base64,
        uploadedImage.file.type,
        selectedStyle.prompt,
        expressionPrompts
      );
      setGeneratedStickers(stickers);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <StyleSelector
            selectedStyle={selectedStyle}
            onSelectStyle={setSelectedStyle}
          />

          <ExpressionSelector
            selectedExpressions={selectedExpressions}
            onExpressionToggle={handleExpressionToggle}
            customExpression={customExpression}
            onCustomExpressionChange={setCustomExpression}
          />
          
          <ImageUploader
            uploadedImage={uploadedImage}
            onImageUpload={handleImageUpload}
          />

          <div className="text-center">
            <button
              onClick={handleGenerateClick}
              disabled={isGenerationDisabled}
              className="bg-brand-primary text-white font-bold py-3 px-10 rounded-full text-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-brand-secondary hover:shadow-xl disabled:bg-gray-500 disabled:cursor-not-allowed disabled:shadow-none transform hover:scale-105 disabled:transform-none"
            >
              {isLoading ? 'Generating Stickers...' : '✨ Generate Stickers'}
            </button>
          </div>

          {isLoading && <Loader />}

          {error && (
            <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg text-center" role="alert">
              <strong className="font-bold">Oh no! </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {generatedStickers.length > 0 && !isLoading && (
            <StickerGrid stickers={generatedStickers} />
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
