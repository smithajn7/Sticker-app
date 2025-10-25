
import React from 'react';
import { EXPRESSION_STYLES } from '../constants';
import { Section } from './Section';

interface ExpressionSelectorProps {
  selectedExpressions: Set<string>;
  onExpressionToggle: (id: string) => void;
  customExpression: string;
  onCustomExpressionChange: (value: string) => void;
}

export const ExpressionSelector: React.FC<ExpressionSelectorProps> = ({
  selectedExpressions,
  onExpressionToggle,
  customExpression,
  onCustomExpressionChange
}) => {
  return (
    <Section step={2} title="Select Expressions">
        <p className="text-gray-400 mb-4 text-sm">Choose one or more expressions for your sticker pack.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {EXPRESSION_STYLES.map(expression => (
            <button
              key={expression.id}
              onClick={() => onExpressionToggle(expression.id)}
              className={`p-3 rounded-lg text-center text-sm font-medium transition-all duration-200 border-2 ${
                selectedExpressions.has(expression.id)
                  ? 'bg-brand-secondary border-brand-primary text-white'
                  : 'bg-gray-700 border-transparent hover:border-brand-primary hover:bg-gray-600 text-gray-200'
              }`}
            >
              {expression.name}
            </button>
          ))}
        </div>
        <div className="mt-6">
            <label htmlFor="custom-expression" className="block text-sm font-medium text-gray-300 mb-2">Or add your own idea:</label>
            <input
                type="text"
                id="custom-expression"
                value={customExpression}
                onChange={(e) => onCustomExpressionChange(e.target.value)}
                placeholder="e.g., sipping coffee"
                className="w-full bg-gray-800 border border-dark-border rounded-lg p-3 text-white placeholder-gray-500 focus:ring-brand-primary focus:border-brand-primary"
            />
        </div>
    </Section>
  );
};
