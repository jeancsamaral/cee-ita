'use client';

import { useState, useRef, useEffect } from 'react';

interface TipoFilterProps {
  onTipoSelect: (selectedTipo: string | null) => void;
}

const TipoFilter = ({ onTipoSelect }: TipoFilterProps) => {
  const [selectedTipo, setSelectedTipo] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const tipos = ["Trainee", "Regular", "Summer", "Challenge"];

  const handleTipoSelect = (tipo: string) => {
    const newTipo = selectedTipo === tipo ? null : tipo;
    setSelectedTipo(newTipo);
    onTipoSelect(newTipo);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-200 bg-white/30 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-full hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-200"
      >
        <span>Tipo</span>
        {selectedTipo && (
          <span className="text-xs text-gray-400 dark:text-gray-300">
            ({selectedTipo})
          </span>
        )}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white/95 dark:bg-gray-800/90 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 py-2">
          <div className="px-2">
            {tipos.map((tipo) => (
              <button
                key={tipo}
                onClick={() => handleTipoSelect(tipo)}
                className={`w-full text-left px-2 py-1.5 text-sm rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200
                  ${selectedTipo === tipo ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30' : 'text-gray-600 dark:text-gray-200'}`}
              >
                {tipo}
              </button>
            ))}
          </div>
          {selectedTipo && (
            <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700 px-2">
              <button
                onClick={() => {
                  setSelectedTipo(null);
                  onTipoSelect(null);
                }}
                className="w-full text-sm text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 py-1"
              >
                Limpar filtro
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TipoFilter; 