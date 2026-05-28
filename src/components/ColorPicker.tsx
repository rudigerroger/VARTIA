import React from 'react';

interface ColorPickerProps {
  selectedColor: string;
  onChange: (color: string) => void;
}

export const COLORS = [
  { name: 'Bleu Royal', value: '#2563eb', bgClass: 'bg-custom-blue' },
  { name: 'Vert Émeraude', value: '#10b981', bgClass: 'bg-custom-green' },
  { name: 'Orange Festif', value: '#f97316', bgClass: 'bg-custom-orange' },
  { name: 'Jaune Or', value: '#eab308', bgClass: 'bg-custom-yellow' },
  { name: 'Violet Impérial', value: '#8b5cf6', bgClass: 'bg-custom-purple' },
  { name: 'Rose Doux', value: '#ec4899', bgClass: 'bg-custom-pink' },
  { name: 'Magenta Épicé', value: '#db2777', bgClass: 'bg-custom-magenta' },
];

export const ColorPicker: React.FC<ColorPickerProps> = ({ selectedColor, onChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mt-2">
      {COLORS.map((color) => {
        const isActive = selectedColor === color.value;
        return (
          <button
            key={color.value}
            type="button"
            onClick={() => onChange(color.value)}
            className={`w-8 h-8 rounded-full transition-all duration-300 relative focus:outline-none cursor-pointer ${color.bgClass} ${
              isActive 
                ? 'ring-2 ring-offset-2 ring-offset-slate-900 ring-brand-teal scale-110 shadow-lg' 
                : 'hover:scale-105 opacity-80 hover:opacity-100'
            }`}
            title={color.name}
          >
            {isActive && (
              <span className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
            )}
          </button>
        );
      })}
    </div>
  );
};
export default ColorPicker;
