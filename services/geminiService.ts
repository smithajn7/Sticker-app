
import { GoogleGenAI, Modality } from "@google/genai";
import { GeneratedSticker } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

function fileToGenerativePart(base64: string, mimeType: string) {
  return {
    inlineData: {
      data: base64,
      mimeType,
    },
  };
}

export async function generateStickers(
  base64Image: string,
  mimeType: string,
  stylePrompt: string,
  expressionPrompts: string[]
): Promise<GeneratedSticker[]> {
  const imagePart = fileToGenerativePart(base64Image, mimeType);
  const generatedStickers: GeneratedSticker[] = [];

  for (const expressionPrompt of expressionPrompts) {
    const fullPrompt = `Create a WhatsApp sticker ${stylePrompt}. The sticker should show the person from the image ${expressionPrompt}. The sticker must have a solid black background. It should be high quality, vibrant, and expressive.`;
    
    try {
      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [imagePart, { text: fullPrompt }],
        },
        config: {
          responseModalities: [Modality.IMAGE],
        },
      });

      const response = result;
      for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64ImageBytes: string = part.inlineData.data;
            generatedStickers.push({
              id: `${stylePrompt}-${expressionPrompt}-${Math.random()}`,
              imageUrl: `data:${part.inlineData.mimeType};base64,${base64ImageBytes}`,
              prompt: fullPrompt,
            });
          }
      }
    } catch (error) {
      console.error(`Error generating sticker for prompt: ${fullPrompt}`, error);
      // Optionally re-throw or handle specific sticker failures
    }
  }

  if (generatedStickers.length === 0 && expressionPrompts.length > 0) {
      throw new Error("Failed to generate any stickers. Please try again.");
  }

  return generatedStickers;
}
