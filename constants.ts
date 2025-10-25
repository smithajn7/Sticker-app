
import { StyleOption, ExpressionOption } from './types';

export const STICKER_STYLES: StyleOption[] = [
  { name: 'Anime', id: 'anime', prompt: 'in an anime art style' },
  { name: 'Watercolor', id: 'watercolor', prompt: 'in a watercolor painting style' },
  { name: 'Chibi', id: 'chibi', prompt: 'in a cute chibi style' },
  { name: 'Pixel Art', id: 'pixel', prompt: 'in a pixel art style' },
  { name: '3D Render', id: '3d', prompt: 'as a 3D render' },
  { name: 'Cartoon', id: 'cartoon', prompt: 'in a classic cartoon style' },
];

export const EXPRESSION_STYLES: ExpressionOption[] = [
  { name: 'Joyful', id: 'joyful', prompt: 'with a joyful expression' },
  { name: 'Winking', id: 'winking', prompt: 'winking at the camera' },
  { name: 'Saluting', id: 'saluting', prompt: 'giving a sharp salute' },
  { name: 'Angry', id: 'angry', prompt: 'with an angry face, steam coming out of ears' },
  { name: 'Hands on Hips', id: 'hip-hands', prompt: 'with hands on hips confidently' },
  { name: 'Rolling Eyes', id: 'eye-roll', prompt: 'rolling their eyes in annoyance' },
  { name: 'Laughing', id: 'laughing', prompt: 'laughing out loud' },
  { name: 'Crying', id: 'crying', prompt: 'with tears streaming down their face' },
  { name: 'Thinking', id: 'thinking', prompt: 'with a finger on their chin, thinking hard' },
  { name: 'Thumbs Up', id: 'thumbs-up', prompt: 'giving a big thumbs up' },
  { name: 'Facepalm', id: 'facepalm', prompt: 'doing a facepalm in exasperation' },
  { name: 'Shrugging', id: 'shrugging', prompt: 'shrugging with palms up' },
];
