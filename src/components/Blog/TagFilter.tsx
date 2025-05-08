'use client';

import { useState, useRef, useEffect } from 'react';

interface TagFilterProps {
  allTags: string[];
  onTagSelect: (selectedTags: string[]) => void;
}

const TagFilter = ({ allTags, onTagSelect }: TagFilterProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
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

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => {
      const newTags = prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag];
      onTagSelect(newTags);
      return newTags;
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 dark:text-gray-200 bg-white/30 dark:bg-gray-900/40 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-full hover:border-gray-200 dark:hover:border-gray-500 transition-all duration-200"
      >
        <span>Filtrar por tags</span>
        <span className="text-xs text-gray-400 dark:text-gray-300">
          {selectedTags.length > 0 ? `(${selectedTags.length})` : ''}
        </span>
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
        <div className="absolute z-10 mt-2 w-64 bg-white/95 dark:bg-gray-800/90 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 py-2">
          <div className="max-h-48 overflow-y-auto px-2">
            {allTags.map((tag) => (
              <label
                key={tag}
                className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-600 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                  className="rounded border-gray-300 dark:border-gray-600 text-blue-500 focus:ring-blue-500/20"
                />
                <span>{tag}</span>
              </label>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700 px-2">
              <button
                onClick={() => {
                  setSelectedTags([]);
                  onTagSelect([]);
                }}
                className="w-full text-sm text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 py-1"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TagFilter; 